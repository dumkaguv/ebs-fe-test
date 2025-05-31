import { Product } from "@/@types/product";
import { Section } from "@/components/ui";
import { apiClient } from "@/services/api-client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ProductCard from "@/components/shared/product-card";
import {
  ButtonAddToCart,
  ButtonBack,
  ButtonRemoveFromCart,
} from "@/components/shared";

export default function ProductPage(): JSX.Element {
  const { id } = useParams();

  const [product, setProduct] = useState<Product>({} as Product);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const product = await apiClient.products.getProductById(Number(id));
        setProduct(product);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <Section className="mt-5">
      <ButtonBack />
      {isLoading && (
        <div className="flex items-center justify-center py-10">
          <div className="border-primary h-10 w-10 animate-spin rounded-full border-4 border-t-transparent" />
        </div>
      )}

      <div className="flex gap-15">
        <ProductCard.Image
          src={product?.image}
          className="h-auto max-w-[450px] object-fill"
          alt={product?.title}
        />

        <div className="flex max-w-[850px] flex-col items-start gap-2">
          <ProductCard.Title className="text-3xl">
            {product?.title}
          </ProductCard.Title>
          <ProductCard.Category className="text-xl">
            {product?.category}
          </ProductCard.Category>
          <ProductCard.Description>
            {product?.description}
          </ProductCard.Description>
          <ProductCard.Rating
            rating={product?.rating}
            className="text-lg"
          />
          <ProductCard.Price className="text-lg font-bold">
            {product?.price}$
          </ProductCard.Price>

          {!isLoading && (
            <div className="mt-5 flex items-center gap-5">
              <ButtonAddToCart item={product} />
              <ButtonRemoveFromCart itemId={product.id} />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
