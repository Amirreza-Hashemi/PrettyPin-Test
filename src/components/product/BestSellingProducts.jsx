import ProductSection from "./ProductSection";
import products from "../../data/products";

const BestSellingProducts = () => {
  const bestSelling = products.slice(2, 6);
  return <ProductSection id="bestselling" title="پرفروش‌ترین‌ها" products={bestSelling} />;
};

export default BestSellingProducts;