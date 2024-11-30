"use client"
import Footer from "@/components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { CartProvider } from "react-use-cart";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider id="products">
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
