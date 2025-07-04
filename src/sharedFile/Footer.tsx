import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-muted mt-12 text-muted-foreground">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">LibraryHub</h2>
          <p className="text-sm">
            Your one-stop solution for efficient library management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to={'/'} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/books'} className="hover:underline">
                Books
              </Link>
            </li>
            <li>
              <Link to={'/borrow-summary'} className="hover:underline">
                Borrow Summary
              </Link>
            </li>
            <li>
              <Link to={'/add-book'} className="hover:underline">
                ADD Book
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Mail size={16} /> libraryhub@example.com
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} /> +880 1234-567890
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} /> Sreemongal, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="text-center text-xs pb-6 px-4">
        © {new Date().getFullYear()} LibraryHub. All rights reserved.
      </div>
    </footer>
  );
}
