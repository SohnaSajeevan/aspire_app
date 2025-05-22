import type { TransactionState, Transaction } from "./types";

const getters = {
  allTransactions: (state: TransactionState) => state.transactions,
  transactionsByCardId: (state: TransactionState) => (cardId: string) => {
    return state.transactions.filter(
      (transaction: Transaction) => transaction.cardId === cardId
    );
  },

  isLoading: (state: TransactionState) => state.loading,

  error: (state: TransactionState) => state.error,
};

export default getters;
