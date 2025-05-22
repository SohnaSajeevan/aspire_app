import type { Transaction } from "../store/modules/transactions/types";

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    cardId: "1",
    merchant: "Hamleys",
    date: "20 May 2020",
    amount: 150,
    type: "refund",
    category: "shopping",
    description: "Refund on debit card",
  },
  {
    id: "2",
    cardId: "1",
    merchant: "Hamleys",
    date: "20 May 2020",
    amount: -150,
    type: "charge",
    category: "travel",
    description: "Charged to debit card",
  },
  {
    id: "3",
    cardId: "1",
    merchant: "Hamleys",
    date: "20 May 2020",
    amount: -150,
    type: "charge",
    category: "marketing",
    description: "Charged to debit card",
  },
  {
    id: "4",
    cardId: "1",
    merchant: "Hamleys",
    date: "20 May 2020",
    amount: -150,
    type: "charge",
    category: "shopping",
    description: "Charged to debit card",
  },
];
