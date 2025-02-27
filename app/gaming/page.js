import { smartPhonesData } from "@/mock/smartphonesData";
import ProductList from "../components/ProductList";

export default function HeadphonesPage() {
  const gaming = smartPhonesData.filter((item) => item.category === "Gaming");
  return <ProductList products={gaming} title={"Gaming"} />;
}
