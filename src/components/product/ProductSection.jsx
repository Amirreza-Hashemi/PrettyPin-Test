import Container from "../common/Container";
import ProductCard from "./ProductCard";

const ProductSection = ({ id, title, products }) => {
  return (
    <section
      id={id}
      className="scroll-mt-20 py-8 sm:scroll-mt-24 sm:py-10 md:scroll-mt-28"
    >
      <Container>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;