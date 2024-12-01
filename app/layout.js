"use client";
import Footer from "@/components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { CartProvider } from "react-use-cart";
import "../i18n";
import i18n from "../i18n";
export default function RootLayout({ children }) {
  return (
    <html lang={i18n.language}>
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
