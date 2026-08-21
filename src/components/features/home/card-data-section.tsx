import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export function CardDataSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAllProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.error(error);
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="bg-gray-50/50 py-12">
      <div className="mb-8 text-center">
        <Button onClick={getAllProducts} disabled={loading}>
          {loading ? "Loading..." : "Get All Products"}
        </Button>

        {error && (
          <p className="mt-4 text-red-500">
            {error}
          </p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 w-full object-cover"
            />

            <CardHeader>
              <CardTitle>{product.title}</CardTitle>

              <CardDescription>
                <span className="mb-2 block font-medium text-blue-600">
                  ₱{product.price}
                </span>

                {product.description}
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <Button className="group/btn w-full justify-between">
                Click Me

                <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">
                  →
                </span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}