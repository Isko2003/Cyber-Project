import { smartPhonesData } from "@/mock/smartphonesData";
import ProductList from "../components/ProductList";

export default function PhonesPage() {
  const phones = smartPhonesData.filter(
    (item) => item.category === "Smartphones"
  );
  return <ProductList products={phones} title={"Smartphones"} />;
}
