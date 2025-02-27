import { smartPhonesData } from "@/mock/smartphonesData";
import ProductList from "../components/ProductList";

export default function HeadphonesPage() {
  const computers = smartPhonesData.filter(
    (item) => item.category === "Computers"
  );
  return <ProductList products={computers} title={"Computers"} />;
}
