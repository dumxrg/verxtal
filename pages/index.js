import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

export default function Home({ allPostsData }) {
  return (
    <Layout
      title="Home"
      description="Welcome to Verxtal - A modern blog platform for sharing insights and stories that matter."
    >
      {/* Hero Section */}
      

      {/* Featured Posts Section */}
      <section>
        <h2 style={{ 
          fontSize: '2.5rem', 
          textAlign: 'center', 
          marginBottom: '3rem',
          color: '#2c3e50',
          fontWeight: '700'
        }}>
          Latest Articles
        </h2>
        
        {allPostsData.length > 0 ? (
          <div className="posts-grid">
            {allPostsData.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 0',
            color: '#7f8c8d' 
          }}>
            <h3>No posts yet</h3>
            <p>Check back soon for our latest articles and insights.</p>
          </div>
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}