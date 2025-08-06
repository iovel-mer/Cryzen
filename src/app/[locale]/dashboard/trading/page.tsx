'use client';

import { getTickets } from '@/app/api/balance/getTickets';
import { getTradingAccounts } from '@/app/api/balance/getTradingAccounts';
import { getWallets } from '@/app/api/balance/getWallets';
import { postCreateTicket } from '@/app/api/balance/postCreateTicket';
import {
  createTradingAccount,
  CreateTradingAccountRequest,
} from '@/app/api/trading/createTradingAccount';
import type {
  TicketDto,
  TicketStatus,
  TicketType,
  TradingAccountDto,
  WalletDto,
} from '@/app/api/types/trading';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {
  Bitcoin,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Timer,
  Coins,
  ScrollText,
  Loader2,
  Plus,
  ArrowDownCircle,
  ArrowUpCircle,
  UserCheck,
  Banknote,
  CheckCircle2,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import type React from 'react';
import { useEffect, useState } from 'react';

interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export default function TradingPage() {
  const [activeTab, setActiveTab] = useState('accounts');
  const [tradingAccounts, setTradingAccounts] = useState<TradingAccountDto[]>(
    []
  );
  const [wallets, setWallets] = useState<WalletDto[]>([]);
  const [tickets, setTickets] = useState<TicketDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [ticketsLoading, setTicketsLoading] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [ticketAmount, setTicketAmount] = useState('');
  const [ticketType, setTicketType] = useState<TicketType>(0);
  const [creatingTicket, setCreatingTicket] = useState(false);

  const [newAccountName, setNewAccountName] = useState('');
  const [creatingAccount, setCreatingAccount] = useState(false);
  const t = useTranslations();

  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 0,
  });

  const { toast } = useToast();

  useEffect(() => {
    loadTradingAccounts();
  }, []);

  useEffect(() => {
    if (selectedAccount) {
      loadWallets(selectedAccount);
    }
  }, [selectedAccount]);

  useEffect(() => {
    if (activeTab === 'history' && selectedAccount) {
      loadTickets(pagination.currentPage, pagination.pageSize);
    }
  }, [activeTab, selectedAccount, pagination.currentPage, pagination.pageSize]);

  const loadTradingAccounts = async () => {
    setLoading(true);
    const response = await getTradingAccounts();
    if (response.success && response.data) {
      setTradingAccounts(response.data);
      if (response.data.length > 0) {
        setSelectedAccount(response.data[0].id);
      }
    } else {
      toast({
        title: 'Error',
        description: response.message || t('trading.errorTitle'),
        variant: 'destructive',
      });
    }
    setLoading(false);
  };

  const loadWallets = async (accountId: string) => {
    const response = await getWallets(accountId);
    if (response.success && response.data) {
      setWallets(response.data);
      if (response.data.length > 0) {
        setSelectedWallet(response.data[0].id);
      }
    } else {
      toast({
        title: 'Error',
        description: response.message || t('trading.errorTitle'),
        variant: 'destructive',
      });
    }
  };

  const loadTickets = async (page = 1, pageSize = 10) => {
    if (!selectedAccount) return;
    setTicketsLoading(true);
    const response = await getTickets({
      tradingAccountId: selectedAccount,
      pageIndex: page - 1,
      pageSize: pageSize,
    });
    if (response.success && response.data) {
      setTickets(response.data);
      const estimatedTotal =
        response.data.length === pageSize
          ? page * pageSize + 1
          : (page - 1) * pageSize + response.data.length;
      setPagination(prev => ({
        ...prev,
        currentPage: page,
        totalItems: estimatedTotal,
        totalPages: Math.ceil(estimatedTotal / pageSize),
      }));
    } else {
      toast({
        title: 'Error',
        description: response.message || 'Failed to load tickets',
        variant: 'destructive',
      });
    }
    setTicketsLoading(false);
  };

  const handleCreateAccount = async () => {
    if (!newAccountName.trim()) {
      toast({
        title: 'Validation Error',
        description: t('trading.createAccount.validationError'),
        variant: 'destructive',
      });
      return;
    }

    setCreatingAccount(true);

    const request: CreateTradingAccountRequest = {
      displayName: newAccountName.trim(),
    };

    const result = await createTradingAccount(request);

    if (result.success) {
      toast({
        title: 'Success',
        description: t('trading.createAccount.successMessage'),
      });

      setNewAccountName('');

      await loadTradingAccounts();

      setActiveTab('accounts');
    } else {
      toast({
        title: 'Error',
        description: t('trading.createAccount.errorMessage'),
        variant: 'destructive',
      });
    }

    setCreatingAccount(false);
  };

  const createTicket = async () => {
    if (
      !selectedWallet ||
      !ticketAmount ||
      Number.parseFloat(ticketAmount) <= 0
    ) {
      toast({
        title: 'Validation Error',
        description: t('trading.createTicket.validationError'),
        variant: 'destructive',
      });
      return;
    }

    setCreatingTicket(true);
    const response = await postCreateTicket({
      walletId: selectedWallet,
      type: ticketType,
      amount: Number.parseFloat(ticketAmount),
    });
    if (response.success && response.data) {
      toast({
        title: 'Success',
        description: `${t('trading.createTicket.successMessage')} ${
          response.data
        }`,
      });
      setTicketAmount('');
      if (activeTab === 'history') {
        loadTickets(1, pagination.pageSize);
      }
    } else {
      toast({
        title: 'Error',
        description: response.message || t('trading.createTicket.errorMessage'),
        variant: 'destructive',
      });
    }
    setCreatingTicket(false);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, currentPage: newPage }));
    }
  };

  const handlePageSizeChange = (newPageSize: string) => {
    const pageSize = Number.parseInt(newPageSize);
    setPagination(prev => ({
      ...prev,
      pageSize,
      currentPage: 1,
    }));
  };

  const getStatusIcon = (status: TicketStatus) => {
    switch (status) {
      case 2: // Completed
        return <CheckCircle2 className='h-4 w-4 text-emerald-400' />;
      case 0: // Pending
        return <Timer className='h-4 w-4 text-amber-400' />;
      case 1: // Processing
        return <ShieldCheck className='h-4 w-4 text-cyan-400' />;
      case 3: // Cancelled
      case 4: // Failed
      case 5: // Rejected
        return <CheckCircle2 className='h-4 w-4 text-red-400' />;
      default:
        return <Timer className='h-4 w-4 text-slate-400' />;
    }
  };

  const getStatusText = (status: TicketStatus) => {
    const statusMap = {
      0: t('trading.ticketStatus.pending'),
      1: t('trading.ticketStatus.processing'),
      2: t('trading.ticketStatus.completed'),
      3: t('trading.ticketStatus.cancelled'),
      4: t('trading.ticketStatus.failed'),
      5: t('trading.ticketStatus.rejected'),
    };
    return statusMap[status] || 'Unknown';
  };

  const getStatusColor = (status: TicketStatus) => {
    switch (status) {
      case 2: // Completed
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 0: // Pending
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 1: // Processing
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 3: // Cancelled
      case 4: // Failed
      case 5: // Rejected
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getTicketTypeText = (type: TicketType) => {
    return type === 0
      ? t('trading.createTicket.deposit')
      : t('trading.createTicket.withdrawal');
  };

  const getTicketTypeIcon = (type: TicketType) => {
    return type === 0 ? (
      <ArrowUpCircle className='h-4 w-4 text-emerald-400' />
    ) : (
      <ArrowDownCircle className='h-4 w-4 text-red-400' />
    );
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'>
          <div className='text-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto'></div>
            <p className='mt-4 text-slate-300 text-lg'>
              {t('trading.loading')}{' '}
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <div className='space-y-8 p-6'>
          <div className='text-center space-y-4'>
            <h1 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              CryptoPro Exchange
            </h1>
            <p className='text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed'>
              Revolutionize your digital asset portfolio with our advanced trading platform. 
              Experience lightning-fast transactions, military-grade security, and institutional-level tools 
              designed for the next generation of crypto traders.
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='space-y-8'
          >
            <TabsList className='grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm'>
              <TabsTrigger 
                value='accounts' 
                className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-500 data-[state=active]:text-white'
              >
                <Banknote className='h-4 w-4' />
                Portfolio Vaults
              </TabsTrigger>
              <TabsTrigger
                value='create-account'
                className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-500 data-[state=active]:text-white'
              >
                <UserCheck className='h-4 w-4' />
                Genesis Account
              </TabsTrigger>
              <TabsTrigger 
                value='create' 
                className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-500 data-[state=active]:text-white'
              >
                <Plus className='h-4 w-4' />
                Instant Transfer
              </TabsTrigger>
              <TabsTrigger 
                value='history' 
                className='flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-500 data-[state=active]:text-white'
              >
                <ScrollText className='h-4 w-4' />
                Transaction Ledger
              </TabsTrigger>
            </TabsList>

            <TabsContent value='accounts' className='space-y-6'>
              <Card className='bg-slate-800/50 border-slate-700/50 backdrop-blur-sm'>
                <CardHeader className='border-b border-slate-700/50'>
                  <CardTitle className='text-2xl text-slate-100 flex items-center gap-2'>
                    <Bitcoin className='h-6 w-6 text-amber-400' />
                    Digital Asset Portfolios
                  </CardTitle>
                  <CardDescription className='text-slate-400'>
                    Monitor your cryptocurrency holdings across multiple secure vaults with real-time 
                    market valuations and advanced portfolio analytics.
                  </CardDescription>
                </CardHeader>
                <CardContent className='pt-6'>
                  <div className='space-y-6'>
                    <div className='ms-auto mt-3'>
                      <Label htmlFor='account-select' className='justify-end text-slate-300'>
                        Select Trading Vault
                      </Label>
                      <Select
                        value={selectedAccount}
                        onValueChange={setSelectedAccount}
                      >
                        <SelectTrigger className='ms-auto mt-3 bg-slate-700/50 border-slate-600/50 text-slate-200'>
                          <SelectValue placeholder='Choose your active portfolio vault' />
                        </SelectTrigger>
                        <SelectContent className='bg-slate-800 border-slate-700'>
                          {tradingAccounts.map(account => (
                            <SelectItem key={account.id} value={account.id} className='text-slate-200 focus:bg-slate-700'>
                              {account.displayName} ({account.accountNumber})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {selectedAccount && (
                      <div className='space-y-4'>
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                          {wallets.map(wallet => (
                            <Card key={wallet.id} className='p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300'>
                              <div className='flex items-center justify-between'>
                                <div className='flex items-center space-x-3'>
                                  <Coins className='h-6 w-6 text-amber-400' />
                                  <div>
                                    <p className='font-semibold text-slate-100 text-lg'>
                                      {wallet.currency}
                                    </p>
                                    <p className='text-sm text-slate-400'>
                                      Available: {wallet.availableBalance.toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                                <div className='text-right'>
                                  <p className='font-bold text-xl text-emerald-400'>
                                    ${wallet.usdEquivalent.toFixed(2)}
                                  </p>
                                  <p className='text-sm text-slate-400'>
                                    Total: {wallet.totalBalance.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                              {wallet.lockedBalance > 0 && (
                                <div className='mt-3 text-sm text-amber-400 bg-amber-500/10 p-2 rounded border border-amber-500/20'>
                                  Locked: {wallet.lockedBalance.toFixed(2)}
                                </div>
                              )}
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='create-account' className='space-y-6'>
              <Card className='bg-slate-800/50 border-slate-700/50 backdrop-blur-sm'>
                <CardHeader className='border-b border-slate-700/50'>
                  <CardTitle className='text-2xl text-slate-100 flex items-center gap-2'>
                    <UserCheck className='h-6 w-6 text-emerald-400' />
                    Genesis Account Creation
                  </CardTitle>
                  <CardDescription className='text-slate-400'>
                    Initialize a new secure trading vault with institutional-grade encryption 
                    and multi-signature authentication for ultimate asset protection.
                  </CardDescription>
                </CardHeader>
                <CardContent className='pt-6'>
                  <div className='space-y-6'>
                    <div>
                      <Label htmlFor='account-name' className='mb-3 text-slate-300 font-medium'>
                        Vault Identity Name
                      </Label>
                      <Input
                        id='account-name'
                        placeholder='Enter your secure vault identifier'
                        value={newAccountName}
                        onChange={e => setNewAccountName(e.target.value)}
                        disabled={creatingAccount}
                        className='bg-slate-700/50 border-slate-600/50 text-slate-200 placeholder:text-slate-500'
                        onKeyDown={e => {
                          if (e.key === 'Enter' && newAccountName.trim()) {
                            handleCreateAccount();
                          }
                        }}
                      />
                      <p className='text-sm text-slate-400 mt-2'>
                        Choose a unique name for easy identification across your crypto operations
                      </p>
                    </div>

                    <Button
                      onClick={handleCreateAccount}
                      disabled={creatingAccount || !newAccountName.trim()}
                      className='bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3'
                    >
                      {creatingAccount && (
                        <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                      )}
                      {creatingAccount
                        ? 'Initializing Genesis Vault...'
                        : 'Create Genesis Account'}
                    </Button>

                    {tradingAccounts.length > 0 && (
                      <div className='mt-8'>
                        <h4 className='text-lg font-semibold mb-4 text-slate-200'>
                          Active Trading Vaults
                        </h4>
                        <div className='space-y-3'>
                          {tradingAccounts.map(account => (
                            <div
                              key={account.id}
                              className='flex items-center justify-between p-4 bg-slate-700/30 border border-slate-700/50 rounded-lg hover:border-purple-500/30 transition-all'
                            >
                              <div>
                                <p className='font-semibold text-slate-100'>
                                  {account.displayName}
                                </p>
                                <p className='text-sm text-slate-400'>
                                  Vault ID: {account.accountNumber}
                                </p>
                              </div>
                              <Badge
                                variant={
                                  account.status === 'Active'
                                    ? 'default'
                                    : 'secondary'
                                }
                                className={account.status === 'Active' 
                                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                                  : 'bg-slate-500/20 text-slate-400 border-slate-500/30'
                                }
                              >
                                {account.status === 'Active'
                                  ? 'ACTIVE'
                                  : 'SUSPENDED'}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='create' className='space-y-6'>
              <Card className='bg-slate-800/50 border-slate-700/50 backdrop-blur-sm'>
                <CardHeader className='border-b border-slate-700/50'>
                  <CardTitle className='text-2xl text-slate-100 flex items-center gap-2'>
                    <Plus className='h-6 w-6 text-purple-400' />
                    Lightning Transfer Hub
                  </CardTitle>
                  <CardDescription className='text-slate-400'>
                    Execute instant deposits and withdrawals with zero-confirmation technology. 
                    Experience seamless crypto transfers with industry-leading speed and security.
                  </CardDescription>
                </CardHeader>
                <CardContent className='pt-6'>
                  <div className='space-y-6'>
                    <div>
                      <Label htmlFor='account-select' className='mb-3 text-slate-300 font-medium'>
                        Source Trading Vault
                      </Label>
                      <Select
                        value={selectedAccount}
                        onValueChange={setSelectedAccount}
                      >
                        <SelectTrigger className='w-full bg-slate-700/50 border-slate-600/50 text-slate-200'>
                          <SelectValue placeholder='Select your active vault' />
                        </SelectTrigger>
                        <SelectContent className='w-full bg-slate-800 border-slate-700'>
                          {tradingAccounts.map(account => (
                            <SelectItem key={account.id} value={account.id} className='text-slate-200 focus:bg-slate-700'>
                              {account.displayName} ({account.accountNumber})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor='wallet-select' className='mb-3 text-slate-300 font-medium'>
                        Asset Wallet
                      </Label>
                      <Select
                        value={selectedWallet}
                        onValueChange={setSelectedWallet}
                      >
                        <SelectTrigger className='w-full bg-slate-700/50 border-slate-600/50 text-slate-200'>
                          <SelectValue placeholder='Choose asset wallet' />
                        </SelectTrigger>
                        <SelectContent className='bg-slate-800 border-slate-700'>
                          {wallets.map(wallet => (
                            <SelectItem key={wallet.id} value={wallet.id} className='text-slate-200 focus:bg-slate-700'>
                              {wallet.currency} - ${wallet.usdEquivalent.toFixed(2)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor='ticket-type' className='mb-3 text-slate-300 font-medium'>
                        Transfer Direction
                      </Label>
                      <Select
                        value={ticketType.toString()}
                        onValueChange={(value: string) =>
                          setTicketType(Number.parseInt(value) as TicketType)
                        }
                      >
                        <SelectTrigger className='w-full bg-slate-700/50 border-slate-600/50 text-slate-200'>
                          <SelectValue placeholder='Select transfer type' />
                        </SelectTrigger>
                        <SelectContent className='bg-slate-800 border-slate-700'>
                          <SelectItem value='0' className='text-slate-200 focus:bg-slate-700'>
                            <div className='flex items-center gap-2'>
                              <ArrowUpCircle className='h-4 w-4 text-emerald-400' />
                              Instant Deposit
                            </div>
                          </SelectItem>
                          <SelectItem value='1' className='text-slate-200 focus:bg-slate-700'>
                            <div className='flex items-center gap-2'>
                              <ArrowDownCircle className='h-4 w-4 text-red-400' />
                              Secure Withdrawal
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor='amount' className='mb-3 text-slate-300 font-medium'>
                        Transfer Amount
                      </Label>
                      <Input
                        id='amount'
                        type='number'
                        placeholder='Enter amount for instant transfer'
                        value={ticketAmount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setTicketAmount(e.target.value)
                        }
                        min='0'
                        step='0.01'
                        className='bg-slate-700/50 border-slate-600/50 text-slate-200 placeholder:text-slate-500'
                      />
                    </div>
                    <Button
                      onClick={createTicket}
                      disabled={
                        creatingTicket || !selectedWallet || !ticketAmount
                      }
                      className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3'
                    >
                      {creatingTicket
                        ? 'Processing Lightning Transfer...'
                        : 'Execute Instant Transfer'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='history' className='space-y-6'>
              <Card className='bg-slate-800/50 border-slate-700/50 backdrop-blur-sm'>
                <CardHeader className='border-b border-slate-700/50'>
                  <CardTitle className='text-2xl text-slate-100 flex items-center gap-2'>
                    <ScrollText className='h-6 w-6 text-cyan-400' />
                    Blockchain Transaction Ledger
                  </CardTitle>
                  <CardDescription className='text-slate-400'>
                    Comprehensive audit trail of all your digital asset movements with 
                    immutable timestamp records and real-time status tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent className='pt-6'>
                  <div className='space-y-6'>
                    {/* Page Size Selector */}
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center space-x-3'>
                        <Label htmlFor='page-size' className='text-slate-300'>
                          Display Records
                        </Label>
                        <Select
                          value={pagination.pageSize.toString()}
                          onValueChange={handlePageSizeChange}
                        >
                          <SelectTrigger className='w-20 bg-slate-700/50 border-slate-600/50 text-slate-200'>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className='bg-slate-800 border-slate-700'>
                            <SelectItem value='5' className='text-slate-200'>5</SelectItem>
                            <SelectItem value='10' className='text-slate-200'>10</SelectItem>
                            <SelectItem value='20' className='text-slate-200'>20</SelectItem>
                            <SelectItem value='50' className='text-slate-200'>50</SelectItem>
                          </SelectContent>
                        </Select>
                        <span className='text-sm text-slate-400'>
                          transactions per page
                        </span>
                      </div>
                      {ticketsLoading && (
                        <div className='flex items-center space-x-2'>
                          <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400'></div>
                          <span className='text-sm text-slate-300'>
                            Syncing blockchain data...
                          </span>
                        </div>
                      )}
                    </div>
                    {tickets.length === 0 ? (
                      <div className='text-center py-12'>
                        <ScrollText className='h-16 w-16 text-slate-600 mx-auto mb-6' />
                        <h3 className='text-xl font-semibold text-slate-300 mb-2'>No Transaction History</h3>
                        <p className='text-slate-400 max-w-md mx-auto'>
                          Your blockchain ledger is empty. Start trading to see your transaction history appear here with real-time updates.
                        </p>
                      </div>
                    ) : (
                      <div className='space-y-3'>
                        {tickets.map(ticket => (
                          <div
                            key={ticket.id}
                            className='flex items-center justify-between p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/30 border border-slate-700/50 rounded-lg hover:border-cyan-500/30 transition-all duration-300'
                          >
                            <div className='flex items-center space-x-4'>
                              {getTicketTypeIcon(ticket.ticketType)}
                              <div>
                                <p className='font-semibold text-slate-100 text-lg'>
                                  {getTicketTypeText(ticket.ticketType)} - {ticket.amount.toFixed(2)}
                                </p>
                                <p className='text-sm text-slate-400'>
                                  Transaction Hash: {ticket.id}
                                </p>
                              </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                              <Badge
                                className={`${getStatusColor(ticket.ticketStatus)} border`}
                              >
                                {getStatusIcon(ticket.ticketStatus)}
                                <span className='ml-2 font-medium'>
                                  {getStatusText(ticket.ticketStatus)}
                                </span>
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {tickets.length > 0 && (
                      <div className='flex items-center justify-between pt-6 border-t border-slate-700/50'>
                        <div className='text-sm text-slate-400'>
                          Showing{' '}
                          {(pagination.currentPage - 1) * pagination.pageSize + 1}{' '}
                          to{' '}
                          {Math.min(
                            pagination.currentPage * pagination.pageSize,
                            pagination.totalItems
                          )}{' '}
                          of {pagination.totalItems}{' '}
                          blockchain records
                        </div>
                        <div className='flex items-center space-x-2'>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() => handlePageChange(1)}
                            disabled={
                              pagination.currentPage === 1 || ticketsLoading
                            }
                            className='bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600/50'
                          >
                            <ChevronsLeft className='h-4 w-4' />
                          </Button>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() =>
                              handlePageChange(pagination.currentPage - 1)
                            }
                            disabled={
                              pagination.currentPage === 1 || ticketsLoading
                            }
                            className='bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600/50'
                          >
                            <ChevronLeft className='h-4 w-4' />
                          </Button>
                          <div className='flex items-center space-x-1'>
                            {Array.from(
                              { length: Math.min(5, pagination.totalPages) },
                              (_, i) => {
                                const pageNumber = i + 1;
                                return (
                                  <Button
                                    key={pageNumber}
                                    variant={
                                      pagination.currentPage === pageNumber
                                        ? 'default'
                                        : 'outline'
                                    }
                                    size='sm'
                                    onClick={() => handlePageChange(pageNumber)}
                                    disabled={ticketsLoading}
                                    className={`w-10 h-10 ${
                                      pagination.currentPage === pageNumber
                                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-none'
                                        : 'bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600/50'
                                    }`}
                                  >
                                    {pageNumber}
                                  </Button>
                                );
                              }
                            )}
                          </div>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() =>
                              handlePageChange(pagination.currentPage + 1)
                            }
                            disabled={
                              pagination.currentPage === pagination.totalPages ||
                              ticketsLoading
                            }
                            className='bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600/50'
                          >
                            <ChevronRight className='h-4 w-4' />
                          </Button>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() =>
                              handlePageChange(pagination.totalPages)
                            }
                            disabled={
                              pagination.currentPage === pagination.totalPages ||
                              ticketsLoading
                            }
                            className='bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600/50'
                          >
                            <ChevronsRight className='h-4 w-4' />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
}