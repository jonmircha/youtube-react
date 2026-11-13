import { products } from "./data";

export async function GET() {
  return Response.json(products);
}

export async function POST(request: Request) {
  const product = await request.json();
  const newProduct = {
    id: products.length + 1,
    name: product.name,
  };

  products.push(newProduct);

  return new Response(JSON.stringify(newProduct), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
