import Card from '@/components/Card';
import { fetchProducts } from '@/utils/Utility';

export default async function CategoryPage({ params }) {
  const { category } = params;
  const products = await fetchProducts(category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-[120px]">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

