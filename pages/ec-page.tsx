import { GetStaticProps } from 'next';
import Image from 'next/image';
import Client, { Product } from 'shopify-buy';
import Layout from '../components/Layout';

type IndexProps = {
  products: Product[];
};

const client = Client.buildClient({
  domain: 'nexjs-example.myshopify.com', //自分のストアのURLを入力する
  storefrontAccessToken: '[ACCESS_TOKEN]', //自分のStorefront APIのアクセストークンを入力する
});

const EC: React.FC<IndexProps> = ({ products }) => {
  return (
    <Layout>
      <h1>Hello Next.js 👋</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <Image src={product.images[0].src} height={80} alt="image" />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default EC;

export const getStaticProps: GetStaticProps = async () => {
  const products: any = await client.product.fetchAll();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};
