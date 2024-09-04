import Product from "@/db/models/products";



type secondParams = {
  params: {
    slug: string;
  };
};

export async function GET(request: Request, { params }: secondParams) {
  const products = await Product.findBySlug(params.slug);
  return Response.json(products);
}
