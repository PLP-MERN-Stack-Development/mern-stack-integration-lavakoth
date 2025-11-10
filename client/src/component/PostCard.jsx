import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Featured Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={post.featuredImage?.startsWith('http') 
            ? post.featuredImage 
            : `http://localhost:5000/uploads/${post.featuredImage}`
          }
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
            {post.category?.name || 'Uncategorized'}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          <Link to={`/post/${post.slug}`} className="hover:text-blue-600 transition">
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...'}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <span className="font-medium">{post.author?.name || 'Anonymous'}</span>
            <span>•</span>
            <span>{format(new Date(post.createdAt), 'MMM d, yyyy')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Views: {post.viewCount || 0}</span>
            <span>•</span>
            <span>Comments: {post.comments?.length || 0}</span>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className='`inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded'
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}