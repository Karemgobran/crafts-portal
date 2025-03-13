import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Categories from "../../components/Categories/Categories";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
import "./CraftsPortal.css";

function CraftsPortal() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Categories />
      <Reviews />
      <Footer />
    </>
  );
}

export default CraftsPortal;
