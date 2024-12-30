import React from 'react';
import { Card, CardContent, CardTitle } from '../components/ui/card';
import Image from 'next/image';

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; ImageUrl: string };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <Image
          src={post.ImageUrl}
          alt={post.title}
          layout="responsive"
          width={500}
          height={300}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <CardTitle className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
          {post.title}
        </CardTitle>
        
        <CardContent className="mb-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            {post.description}
          </p>
        </CardContent>

        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            Published on: {new Date(post.date).toLocaleDateString()}
          </p>
          
          <a 
            href={`/post/${post.id}`}
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium 
                     bg-blue-600 text-white hover:bg-blue-700 
                     transition-colors duration-200"
          >
            Read more
          </a>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;