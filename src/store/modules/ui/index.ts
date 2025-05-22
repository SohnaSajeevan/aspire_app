import type { UIState } from "./types";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

// Initial state
const state: UIState = {
  showAddCardModal: false,
  currentCardId: null,
  currentCardIndex: 0,
};

const uiModule = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default uiModule;