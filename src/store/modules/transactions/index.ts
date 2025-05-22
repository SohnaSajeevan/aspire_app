import type { TransactionState } from "./types";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

// Initial state
const state: TransactionState = {
  transactions: [],
  loading: false,
  error: null,
};

const transactionsModule = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default transactionsModule;
