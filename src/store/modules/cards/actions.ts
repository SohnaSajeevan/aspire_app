import type { Card } from "./types";
import { mockCards } from "../../../mock/cards";
import {
  generateCardNumber,
  generateExpiryDate,
} from "../../../utils/cardUtils";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type ActionContext = {
  commit: (type: string, payload?: any) => void;
  state: any;
};

const actions = {
  async fetchCards({ commit }: ActionContext) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);

    try {
      // Simulate API call
      await delay(800);

      commit("SET_CARDS", mockCards);
    } catch (error) {
      commit(
        "SET_ERROR",
        error instanceof Error ? error.message : "Failed to fetch cards"
      );
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async addCard(
    { commit, state }: ActionContext,
    { cardHolder }: { cardHolder: string }
  ) {
    commit("SET_LOADING", true);

    try {
      // Simulate API call
      await delay(800);

      const cardNumber = generateCardNumber();
      const maskedCardNumber = cardNumber.slice(-4);
      const expiryDate = generateExpiryDate();

      const newCard: Card = {
        id: `card_${Date.now()}`,
        cardHolder,
        cardNumber,
        maskedCardNumber,
        expiryDate,
        cvv: Math.floor(100 + Math.random() * 900).toString(),
        isActive: state.cards.length === 0,
        isFrozen: false,
        spendLimit: null,
        availableBalance: 0,
        currency: "S$",
        cardName: "Visa",
      };

      commit("ADD_CARD", newCard);
    } catch (error) {
      commit(
        "SET_ERROR",
        error instanceof Error ? error.message : "Failed to add card"
      );
      throw error;
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async freezeCard({ commit, state }: ActionContext, id: string) {
    commit("SET_LOADING", true);

    try {
      // Simulate API call
      await delay(500);
      const card = state.cards.find((c: Card) => c.id === id);

      if (!card) {
        throw new Error(`Card with ID ${id} not found`);
      }

      commit("UPDATE_CARD", { ...card, isFrozen: true });
    } catch (error) {
      commit(
        "SET_ERROR",
        error instanceof Error ? error.message : "Failed to freeze card"
      );
      throw error;
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async unfreezeCard({ commit, state }: ActionContext, id: string) {
    commit("SET_LOADING", true);

    try {
      // Simulate API call
      await delay(500);
      const card = state.cards.find((c: Card) => c.id === id);

      if (!card) {
        throw new Error(`Card with ID ${id} not found`);
      }

      commit("UPDATE_CARD", { ...card, isFrozen: false });
    } catch (error) {
      commit(
        "SET_ERROR",
        error instanceof Error ? error.message : "Failed to unfreeze card"
      );
      throw error;
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export default actions;
