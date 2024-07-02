import Card from '@/components/Card';
import Sidebar from '@/components/Sidebar';
import { fetchProducts } from '@/utils/Utility';

export default async function Products() {
  const products = await fetchProducts();

  return (
    <div className='flex justify-around mt-[140px]'> 
      <Sidebar />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-3/4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}

