import { useEffect, useState } from 'react';
import API from '../services/api';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await API.get(`/posts?page=${page}`);
      setPosts(res.data.posts);
      setLoading(false);
    };
    fetchPosts();
  }, [page]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => <PostCard key={post._id} post={post} />)}
      </div>
      <div className="flex justify-center mt-8 gap-2">
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1} className="px-4 py-2 bg-gray-300 rounded">Previous</button>
        <button onClick={() => setPage(p => p + 1)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
      </div>
    </div>
  );
}