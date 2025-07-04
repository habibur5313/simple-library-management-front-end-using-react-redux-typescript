import { ModeToggle } from "@/components/mode-toggle";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router";
import { DropDownMenu } from "./DropDownMenu";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link to={'/'}><h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:font-bold">LibraryHub</h1></Link>
      </div>
      <div className="sm:flex justify-center gap-5 hidden">
        <Tabs>
          <TabsList>
            <TabsTrigger className="text-xl " value="Books">
              <Link to={"books"}>Books</Link>
            </TabsTrigger>
            <TabsTrigger className="text-xl " value="Add Book">
              <Link to={"add-book"}>Add Book</Link>
            </TabsTrigger>
            <TabsTrigger className="text-xl " value="Borrow Summary">
              <Link to={"borrow-summary"}>Borrow Summary</Link>
            </TabsTrigger>
            
          </TabsList>
        </Tabs>
        <ModeToggle></ModeToggle>
      </div>
      <div className="sm:hidden flex gap-3">
        <DropDownMenu></DropDownMenu>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};
