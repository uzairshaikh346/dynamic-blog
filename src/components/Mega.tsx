import React from 'react';
import BlogCard from '@/components/blogCard';

const Mega: React.FC = () => {
  const posts = [
    {
      id: "1",
      title: "JavaScript: The Leading Language of Programming",
      description: "Explore the versatility and impact of JavaScript in modern web development. Discover how it shapes the digital world with its logical and dynamic capabilities.",
      date: "2024-12-28",
      ImageUrl: "/images/image1.jpg",
    },
    {
      id: "2", 
      title: "Python for Data Science",
      description: "Delve into the world of data science with Python. Understand its powerful libraries and tools for data analysis, visualization, and machine learning.",
      date: "2024-12-29",
      ImageUrl: "/images/image2.jpg",
    },
    {
      id: "3",
      title: "Web Development with React",
      description: "Learn how to build modern, efficient user interfaces with React. Explore its component-based architecture and robust ecosystem.",
      date: "2024-12-30",
      ImageUrl: "/images/image3.jpg",
    },
    {
      id: "4",
      title: "Mobile Development Trends",
      description: "Stay ahead with the latest trends in mobile app development. Discover innovations that are shaping the future of mobile technology.",
      date: "2024-12-31",
      ImageUrl: "/images/image4.jpg",
    },
    {
      id: "5",
      title: "Cloud Computing Basics",
      description: "Gain a foundational understanding of cloud computing services. Learn about different cloud models and how they transform business operations.",
      date: "2025-01-01",
      ImageUrl: "/images/image5.jpg",
    },
    {
      id: "6",
      title: "Database Management",
      description: "Explore efficient data storage solutions with modern database management systems. Understand the principles and practices for optimal data handling.",
      date: "2025-01-02",
      ImageUrl: "/images/image6.jpg",
    },
    {
      id: "7",
      title: "Cybersecurity Essentials",
      description: "Protect your digital assets with essential cybersecurity practices. Learn about the threats and how to defend against them to keep data secure.",
      date: "2025-01-03",
      ImageUrl: "/images/image7.jpg",
    },
    {
      id: "8",
      title: "AI and Machine Learning",
      description: "Discover the future of intelligent systems with AI and machine learning. Understand their applications and impact across various industries.",
      date: "2025-01-04",
      ImageUrl: "/images/image8.jpg",
    },
    {
      id: "9",
      title: "DevOps Practices",
      description: "Streamline your development operations with best DevOps practices. Learn about the tools and methodologies that enhance productivity and collaboration.",
      date: "2025-01-05",
      ImageUrl: "/images/image9.jpg",
    },
    {
      id: "10",
      title: "Blockchain Technology",
      description: "Dive into the fundamentals of decentralized systems with blockchain technology. Explore its potential and applications in various sectors.",
      date: "2025-01-06",
      ImageUrl: "/images/image10.jpg",
    }
  ];
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Exploring the world of programming
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto">
        {posts.map((post, index) => (
          <div className="transition duration-300 ease-in-out transform hover:-translate-y-1" key={post.id}>
            <div className="shadow-lg rounded-lg overflow-hidden" key={index}>
              <BlogCard post={post} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mega;
