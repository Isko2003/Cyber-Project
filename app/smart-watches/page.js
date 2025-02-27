import { smartPhonesData } from "@/mock/smartphonesData";
import ProductList from "../components/ProductList";
export default function SmartWatchesPage() {
  const smartWatches = smartPhonesData.filter(
    (item) => item.category === "Watches"
  );
  return <ProductList products={smartWatches} title={"Smart Watches"} />;
}
