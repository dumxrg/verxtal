import { getAllPostSlugs, getPostData } from '../../lib/posts';
import Layout from '../../components/Layout';
import { format } from 'date-fns';
import Image from 'next/image';
import Head from 'next/head';


export default function Post({ postData }) {
  const formattedDate = format(new Date(postData.date), 'MMMM d, yyyy');

  return (
    <Layout
      title={postData.title}
      description={postData.excerpt}
      image={postData.image}
      url={`/posts/${postData.slug}`}
    >
      <Head>
        {/* Article-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": postData.title,
              "description": postData.excerpt,
              "image": postData.image,
              "author": {
                "@type": "Person",
                "name": postData.author || "Verxtal Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Verxtal",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/images/logo.png"
                }
              },
              "datePublished": postData.date,
              "dateModified": postData.date,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${process.env.SITE_URL}/posts/${postData.slug}`
              }
            })
          }}
        />
      </Head>

      <article>
        {/* Post Header */}
        <header className="post-header">
          <h1>{postData.title}</h1>
          <div className="post-meta">
            <span>By {postData.author || 'Verxtal Team'} • {formattedDate}</span>
            {postData.readTime && <span> • {postData.readTime} min read</span>}
          </div>
          
          {postData.tags && (
            <div className="post-tags" style={{ justifyContent: 'center', marginTop: '1rem' }}>
              {postData.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        {postData.image && (
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '3rem',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}>
            <Image
              src={postData.image}
              alt={postData.title}
              width={800}
              height={400}
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                borderRadius: '20px'
              }}
              priority
            />
          </div>
        )}

        {/* Post Content */}
        <div 
          className="post-body"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        {/* Post Footer */}
        <footer className='enjoyed' style={{
        
          padding: '3rem',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'black',
            padding: '2rem',
            borderRadius: '15px',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>
              Enjoyed this article?
            </h3>
            <p style={{ color: '#555', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Share it with your friends and explore more stories on Verxtal.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(postData.title)}&url=${encodeURIComponent(`${process.env.SITE_URL}/posts/${postData.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#1da1f2',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '500',
                  transition: 'transform 0.3s ease'
                }}
              >
                Share on Twitter
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.SITE_URL}/posts/${postData.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#0077b5',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '500',
                  transition: 'transform 0.3s ease'
                }}
              >
                Share on LinkedIn
              </a>
              <a 
                href="/"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '500',
                  transition: 'transform 0.3s ease'
                }}
              >
                Read More Posts
              </a>
            </div>
          </div>

          <div style={{ 
            borderTop: '2px solid #e9ecef',
            paddingTop: '2rem',
            color: '#7f8c8d'
          }}>
            <p>
              Published on {formattedDate} by {postData.author || 'Verxtal Team'}
            </p>
            {postData.excerpt && (
              <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                {postData.excerpt}
              </p>
            )}
          </div>
        </footer>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}