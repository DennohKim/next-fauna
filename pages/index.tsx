import Image from 'next/image';
import { Inter } from 'next/font/google';
import { gql, useQuery } from '@apollo/client';
import ProductList from '@/components/ProductList';

const inter = Inter({ subsets: ['latin'] });

const GET_PRODUCTS = gql`
  query {
    getAllProducts {
      data {
        _id
        name
        description
        price
		imageUrl
        shop {
          _id
        }
      }
    }
  }
`

export default function Home() {
  const { data } = useQuery(GET_PRODUCTS);
  console.log(data.getAllProducts.data);
  return (
    <main className='flex min-h-screen flex-col items-center justify-center py-2'>
      <ProductList products={data.getAllProducts.data} />
    </main>
  );
}
