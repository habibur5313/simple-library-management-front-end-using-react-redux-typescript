import { createBrowserRouter } from "react-router";
import { Books } from "../pages/Books";
import { BorrowSummary } from "../pages/BorrowSummary";
import { AddBook } from "../pages/AddBook";
import { App } from "../App";
import { Home } from "@/pages/Home";
import { BooksDetails } from "@/components/module/books/booksDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "books",
        Component: Books,
      },
      {
        path: "books/:id",
        Component: BooksDetails,
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
