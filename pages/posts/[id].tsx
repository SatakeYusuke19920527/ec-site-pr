import Link from 'next/link';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/load-post';
import { PostType } from '../../types/PostType';

export default function Post({ post }: { post: PostType }) {
  return (
    <Layout>
      <main className="flex flex-row">
        <span>{post.id}</span>
        {' : '}
        <span className="border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </main>
      <Link href={`/blog-page`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          page back
        </span>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
