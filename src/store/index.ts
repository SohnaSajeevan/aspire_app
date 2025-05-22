import { createStore } from "vuex";
import cards from "./modules/cards";
import transactions from "./modules/transactions";
import ui from "./modules/ui";

export default createStore({
  modules: {
    cards,
    transactions,
    ui,
  },
});
