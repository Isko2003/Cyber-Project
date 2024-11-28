import Footer from "@/components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/redux/store";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Provider store={store}>
          <main>{children}</main>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
