import AuthorCard from "@/components/AuthorCard";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
   <div>
    
      <div className="mt-56 md:mt-20">
    <Feature/>
    <Mega/>

    <AuthorCard/>
      </div>

  

    
    
   </div>
  );
}
