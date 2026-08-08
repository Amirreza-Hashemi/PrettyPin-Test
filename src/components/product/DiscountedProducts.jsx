import ProductSection from "./ProductSection";
import products from "../../data/products";

const DiscountedProducts = () => {
  const discounted = products.filter((p) => p.discountPercent > 0);
  return <ProductSection id="discounted" title="تخفیف‌دارها" products={discounted} />;
};

export default DiscountedProducts;