import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <div className="mt-16 px-4 sm:px-6 md:px-10 lg:px-16 max-w-screen-xl mx-auto">
      {searchCategory && (
        <div className="flex flex-col items-center text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full mt-1" />
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 w-fit">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-xl sm:text-2xl font-medium text-primary text-center">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
