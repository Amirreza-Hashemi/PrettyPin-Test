import ProductSection from "./ProductSection";
import products from "../../data/products";

const NewestProducts = () => {
  const newest = [...products].reverse().slice(0, 4);
  return <ProductSection id="newest" title="جدیدترین‌ها" products={newest} />;
};

export default NewestProducts;