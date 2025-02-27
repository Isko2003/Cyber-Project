import { smartPhonesData } from "@/mock/smartphonesData";
import ProductList from "../components/ProductList";

export default function HeadphonesPage() {
  const headphones = smartPhonesData.filter(
    (item) => item.category === "Headphones"
  );
  return <ProductList products={headphones} title={"Headphones"} />;
}
