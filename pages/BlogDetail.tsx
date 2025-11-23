import React from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
              <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-full">
                <Tag className="w-4 h-4" /> {post.category}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">{post.title}</h1>

            {/* Top of article ad */}
            <AdPlaceholder format="horizontal" label="In-Article Top Ad" />

            {/* Content - using dangerouslySetInnerHTML to render HTML string from data */}
            <div 
              className="prose prose-lg prose-blue max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Bottom of article ad */}
            <div className="mt-12">
              <AdPlaceholder format="square" label="In-Article Bottom Ad" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;