import type { TransactionState, Transaction } from "./types";
import { mockTransactions } from "../../../mock/transactions";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type ActionContext = {
  commit: (type: string, payload?: any) => void;
};

const actions = {
  async fetchTransactionsByCardId({ commit }: ActionContext, cardId: string) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);

    try {
      // Simulate API call
      await delay(800);
      const filteredTransactions = mockTransactions.filter(
        (t: Transaction) => t.cardId === cardId
      );
      commit("SET_TRANSACTIONS", filteredTransactions);
    } catch (error) {
      commit(
        "SET_ERROR",
        error instanceof Error ? error.message : "Failed to fetch transactions"
      );
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export default actions;
