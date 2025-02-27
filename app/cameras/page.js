import { smartPhonesData } from "@/mock/smartphonesData";
import ProductList from "../components/ProductList";

export default function CamerasPage() {
  const cameras = smartPhonesData.filter(
    (product) => product.category === "Cameras"
  );

  return <ProductList products={cameras} title="Cameras" />;
}
