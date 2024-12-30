import React from "react";

const Feature = () => {
  const categories = [
    "Programming and Development",
    "Data Science and AI", 
    "Web and Mobile Development",
    "Cloud Computing and DevOps",
    "Cybersecurity",
    "Emerging Technologies"
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <header>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Muhammad Uzair: Empowering Innovation Through Technology
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Join Muhammad Uzair as he explores the dynamic world of web development
          and emerging technologies. With expertise in HTML, CSS, JavaScript, and
          frameworks like React and Next.js, his blog delves into topics such as
          data science, AI, and cloud computing. Packed with tutorials, insights,
          and tips, this space is dedicated to helping aspiring developers master
          their craft and build exceptional projects. Dive in, learn, and take
          your tech journey to the next level!
        </p>
      </header>

      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Exploring our categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-md p-6 
                     hover:shadow-xl hover:scale-105 hover:bg-gray-50
                     transform transition-all duration-300 ease-in-out
                     cursor-pointer"
          >
            <h3 className="text-xl font-medium text-gray-800 
                         hover:text-blue-600 transition-colors duration-300">
              {category}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Feature;