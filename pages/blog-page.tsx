import Layout from '../components/Layout';
import { loadPosts } from '../lib/load-post';
import { PostType } from '../types/PostType';

const Blog = ({ posts }: { posts: PostType[] }) => {
  return (
    <Layout>
      <ul>
        <li>id : title</li>
        {posts.map((post: PostType) => (
          <li key={post.id}>
            {post.id} : <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await loadPosts();
  return res;
}

export default Blog;
