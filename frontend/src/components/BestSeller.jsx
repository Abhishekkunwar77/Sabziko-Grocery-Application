import React from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <div
      id="best-seller"
      className="mt-12 px-4 sm:px-6 md:px-10 lg:px-16 max-w-screen-xl mx-auto"
    >
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center">
        Best Sellers
      </p>

      {/* Flex wrapper to center the grid */}
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 w-fit">
          {products
            .filter((product) => product.inStock)
            .slice(0, 10)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
