import React from 'react'
import CommentSection from '@/components/commentSection'
import AuthorCard from '@/components/AuthorCard'

const posts = [
  {
    id: "1",
    title: "JavaScript: Top Language of Programming",
    description: "JavaScript continues to dominate the programming world with its dynamic capabilities and versatility. From client-side scripting to server-side development, discover how JavaScript has become an essential tool for web developers. This post delves into its widespread use, powerful features, and why it's a preferred choice for many developers globally. Join us as we explore the journey of JavaScript and its impact on modern web development.",
    ImageUrl: "/images/image1.jpg",
  },
  {
    id: "2",
    title: "Python for Data Science",
    description: "Python has emerged as a powerhouse for data science, offering a rich set of libraries and tools for data analysis, visualization, and machine learning. In this blog, we explore the versatility of Python and how it's transforming the field of data science. Learn about key libraries like Pandas, NumPy, and TensorFlow, and how they are used to derive meaningful insights from data. Whether you're a beginner or a seasoned data scientist, this post provides valuable insights into using Python for data science.",
    ImageUrl: "/images/image2.jpg",
  },
  {
    id: "3",
    title: "Web Development with React",
    description: "React has revolutionized the way we build web applications with its component-based architecture and efficient rendering capabilities. This blog post covers the core concepts of React and demonstrates how to create modern, responsive user interfaces. From understanding JSX to managing state and props, we dive deep into the React ecosystem. Join us as we build dynamic web applications that are maintainable and scalable.",
    ImageUrl: "/images/image3.jpg",
  },
  {
    id: "4",
    title: "Mobile Development Trends",
    description: "The mobile app development landscape is constantly evolving with new trends and innovations. This blog highlights the latest trends in mobile development, including cross-platform solutions, Progressive Web Apps (PWAs), and the rise of artificial intelligence in mobile apps. Discover how these trends are shaping the future of mobile technology and what developers need to know to stay ahead in this fast-paced industry.",
    ImageUrl: "/images/image4.jpg",
  },
  {
    id: "5",
    title: "Cloud Computing Basics",
    description: "Cloud computing has transformed the way businesses operate, offering scalable and cost-effective solutions for data storage and processing. In this blog, we provide a comprehensive introduction to cloud computing, explaining key concepts like IaaS, PaaS, and SaaS. Learn about the benefits of cloud services and how they enable organizations to innovate faster, scale efficiently, and reduce IT costs. Whether you're new to cloud computing or looking to deepen your understanding, this post has something for everyone.",
    ImageUrl: "/images/image5.jpg",
  },
  {
    id: "6",
    title: "Database Management",
    description: "Efficient database management is crucial for ensuring data integrity, accessibility, and security. This blog explores modern database management systems and best practices for handling data. From relational databases to NoSQL solutions, we cover the pros and cons of different database technologies. Learn how to design and maintain databases that support your applications' needs, and stay ahead with the latest trends in database management.",
    ImageUrl: "/images/image6.jpg",
  },
  {
    id: "7",
    title: "Cybersecurity Essentials",
    description: "In today's digital age, protecting your data and systems from cyber threats is more important than ever. This blog provides essential tips and best practices for cybersecurity. Learn about common threats such as phishing, malware, and ransomware, and how to defend against them. We also cover the importance of regular updates, strong passwords, and employee training in maintaining a secure digital environment. Whether you're an individual or a business owner, this post offers valuable insights to keep your digital assets safe.",
    ImageUrl: "/images/image7.jpg",
  },
  {
    id: "8",
    title: "AI and Machine Learning",
    description: "Artificial intelligence and machine learning are revolutionizing industries by enabling intelligent systems that can learn and adapt. This blog explores the fundamentals of AI and ML, and their applications in various sectors. From predictive analytics to natural language processing, discover how these technologies are being used to solve complex problems and improve decision-making. Join us as we delve into the future of intelligent systems and their transformative potential.",
    ImageUrl: "/images/image8.jpg",
  },
  {
    id: "9",
    title: "DevOps Practices",
    description: "DevOps practices aim to streamline software development and deployment processes, enhancing productivity and collaboration. In this blog, we discuss the core principles of DevOps and how they can benefit your organization. Learn about continuous integration, continuous delivery, and automation tools that make DevOps successful. Whether you're new to DevOps or looking to optimize your existing processes, this post provides actionable insights and best practices.",
    ImageUrl: "/images/image9.jpg",
  },
  {
    id: "10",
    title: "Blockchain Technology",
    description: "Blockchain technology is transforming various industries by offering decentralized and secure solutions. This blog provides an in-depth look at the fundamentals of blockchain, its potential applications, and the benefits it offers. Learn about the key features of blockchain, including transparency, immutability, and consensus mechanisms. Discover how blockchain is being used in finance, supply chain, healthcare, and beyond, and why it is considered a revolutionary technology.",
    ImageUrl: "/images/image10.jpg",
  }
];


function Post({params}: {params:{id:string}}) {
  const { id } = params;
  const post = posts.find((p) => p.id === id)
  
  if(!post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-500">Post not Found!</h2>
      </div>
    )
  }

  const renderingParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="text-gray-700 leading-relaxed mb-4">{para.trim()}</p>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>
      
      {post.ImageUrl && (
        <img
          src={post.ImageUrl}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
        />
      )}

      <div className="prose max-w-none mb-12">
        {renderingParagraphs(post.description)}
      </div>

      <div className="space-y-8">
        <CommentSection postId={post.id}/>
        <AuthorCard/>
      </div>
    </div>
  )
}

export default Post