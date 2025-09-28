import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

export default function PostCard({ post }) {
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  return (
    <article className="post-card">
      {post.image && (
        <Link href={`/posts/${post.slug}`}>
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={200}
            className="post-image"
          />
        </Link>
      )}
      <div className="post-content">
        <h2 className="post-title">
          <Link href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        <div className="post-meta">
          <span>By {post.author || 'Verxtal Team'} • {formattedDate}</span>
        </div>

        {post.excerpt && (
          <p className="post-excerpt">{post.excerpt}</p>
        )}

        {post.tags && (
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link href={`/posts/${post.slug}`} className="read-more">
          Read More
        </Link>
      </div>
    </article>
  );
}
