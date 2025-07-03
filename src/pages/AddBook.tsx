import { AddBookForm } from "@/components/module/addTask/AddBookForm";

export const AddBook = () => {
  return (
    <div>
      <div className="mt-10 mb-10">
        <h1 className="text-3xl font-bold text-center">Add Book</h1>
      <p className="text-xl text-center max-w-lg mx-auto">
        The Add Book page allows users to enter and submit new book details,
        such as title, author, genre, and publication info. It's designed for
        quick and easy book registration into the system.
      </p>
      </div>
      <div>
        <AddBookForm></AddBookForm>
      </div>
    </div>
  );
};
