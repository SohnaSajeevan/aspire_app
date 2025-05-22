import type { TransactionState, Transaction } from "./types";

const mutations = {
  SET_TRANSACTIONS(state: TransactionState, transactions: Transaction[]) {
    state.transactions = transactions;
  },

  SET_LOADING(state: TransactionState, loading: boolean) {
    state.loading = loading;
  },

  SET_ERROR(state: TransactionState, error: string | null) {
    state.error = error;
  },

  ADD_TRANSACTION(state: TransactionState, transaction: Transaction) {
    state.transactions.push(transaction);
  },
};

export default mutations;