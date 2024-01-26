import { createContext } from "react";

export const UserContext = createContext({
  login: false,
  customer_id: 1,
  customer_id: -1,
});
export const SellerContext = createContext();
export const CartContext = createContext();
