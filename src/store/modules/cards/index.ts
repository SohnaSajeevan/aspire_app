import type { CardState } from "./types";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

// Initial state
const state: CardState = {
  cards: [],
  loading: false,
  error: null,
};

const cardsModule = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default cardsModule;
