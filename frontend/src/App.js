import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee, About } from "./components/About";
import { Menu } from "./components/Menu";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Events } from "./components/Events";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { Reservation } from "./components/Reservation";
import { Contact } from "./components/Contact";
import { Location } from "./components/Location";
import { FinalCTA, Footer } from "./components/FinalCTA";
import { WhatsAppFab } from "./components/WhatsApp";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#FFF6E9] text-[#2B2B2B]" data-testid="home-page">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <WhyChooseUs />
      <Events />
      <Reviews />
      <Gallery />
      <Reservation />
      <Contact />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#FFFFFF",
            color: "#2B2B2B",
            border: "1px solid #EADECF",
            fontFamily: "Poppins, sans-serif",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
