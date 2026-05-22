"use client";

import React, { useState } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import CarForRental from "./components/carforentalsection";
import WeddingSection from "./components/weddingsection";
import AboutUs from "./components/aboutus";
import GallerySection from "./components/gallerysection";
import ContactUs from "./components/contactussection";

export default function LuxuryRentalPage() {
  return (
    <div className="antialiased selection:bg-black selection:text-white overflow-x-hidden bg-white text-zinc-900 min-h-screen">
      {/* ================= HEADER SECTION ================= */}
      <Navbar />
      {/* ================= HERO SECTION ================= */}
      <HeroSection />
      {/* ================= ABOUT SECTION ================= */}
      <AboutUs />
      {/* ================= FLEET SECTION ================= */}
      <CarForRental />
      {/* ================= WEDDING CARS SECTION ================= */}
      <WeddingSection />
      {/* ================= GALLERY SECTION ================= */}
      <GallerySection />
      {/* ================= CONTACT SECTION ================= */}
      <ContactUs />
    </div>
  );
}
