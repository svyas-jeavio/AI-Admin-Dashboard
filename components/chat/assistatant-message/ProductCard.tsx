// components/chat/ProductCard.tsx
"use client";

interface Product {
  name: string;
  price: string;
  image: string;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-card border rounded-xl p-4 flex gap-4 items-center shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 rounded-md object-cover"
      />
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <p className="text-primary font-medium mt-1">{product.price}</p>
      </div>
    </div>
  );
}
