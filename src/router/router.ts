import { createBrowserRouter } from "react-router";
import { Books } from "../pages/Books";
import { BorrowSummary } from "../pages/BorrowSummary";
import { AddBook } from "../pages/AddBook";
import { App } from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Books,
      },
      {
        path: "books",
        Component: Books,
      },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
      {
        path: "add-book",
        Component: AddBook
      }
    ],
  },
]);
