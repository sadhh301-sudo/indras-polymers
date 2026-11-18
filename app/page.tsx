"use client";

import { useState } from "react";


const products = [
  {
    number: "01",
    name: "Masterbatches",
    description: "High-quality colour and additive masterbatch solutions for diverse plastic applications.",
    tag: "COLOUR & ADDITIVES",
  },
  {
    number: "02",
    name: "Polymer Resins",
    description: "Reliable polymer raw materials including PP, HDPE, LDPE and LLDPE.",
    tag: "RAW MATERIALS",
  },
  {
    number: "03",
    name: "Polymer Compounds",
    description: "Customized polymer solutions designed for industrial manufacturing requirements.",
    tag: "CUSTOM SOLUTIONS",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Top Contact Bar */}
        <div className="bg-[#082747] px-6 py-3 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
        <div className="flex flex-wrap gap-6">
          <span>✉ info@indraspolymers.com</span>
          <span>📍 Perundurai, Tamil Nadu, India</span>
        </div>
          <span>Quality • Innovation • Reliability</span>
        </div>
        </div>

      
{/* Navbar */}
<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6 md:py-5">

    {/* Logo */}
    <a href="#" className="text-2xl font-black tracking-tight text-blue-950">
      INDRAS<span className="text-orange-500">.</span>
      <span className="block text-[10px] font-semibold tracking-[0.3em] text-slate-500">
        POLYMERS
      </span>
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
      <a href="#" className="text-orange-500">Home</a>
      <a href="#about" className="hover:text-orange-500">About Us</a>
      <a href="#products" className="hover:text-orange-500">Products</a>
      <a href="#infrastructure" className="hover:text-orange-500">Infrastructure</a>
      <a href="#contact" className="hover:text-orange-500">Contact</a>
    </nav>

    {/* Desktop Quote Button */}
    <a href="#contact"
      className="hidden rounded bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600 md:block">
      Get a Quote ↗
    </a>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-3xl font-bold text-blue-950 md:hidden"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
    >
      {menuOpen ? "×" : "☰"}
    </button>
  </div>

  {/* Mobile Navigation */}
  {menuOpen && (
    <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
      <nav className="flex flex-col gap-5 text-sm font-semibold">
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#infrastructure" onClick={() => setMenuOpen(false)}>Infrastructure</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <a href="#contact"
          onClick={() => setMenuOpen(false)}
          className="rounded bg-orange-500 px-5 py-3 text-center font-bold text-white">
          Get a Quote ↗
        </a>
      </nav>
    </div>
  )}
</header>


      
{/* Hero */}
<section className="relative overflow-hidden bg-[#102b46] text-white">
  <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full border-[50px] border-white/5" />
  <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-12 md:py-36">

    {/* Hero Content */}
    <div>
      <p className="mb-5 text-xs font-bold tracking-[0.2em] text-orange-400 sm:mb-6 sm:text-sm sm:tracking-[0.3em]">
        QUALITY • INNOVATION • RELIABILITY
      </p>

      <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
        Building Better
        <span className="block text-orange-400">Polymer</span>
        Solutions.
      </h1>

      <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
        Your trusted partner for quality plastic raw materials,
        masterbatches and customized polymer solutions.
      </p>

      {/* Hero Buttons */}
      <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
        <a
          href="#products"
          className="w-full rounded bg-orange-500 px-7 py-4 text-center font-bold text-white transition hover:bg-orange-600 sm:w-auto"
        >
          Explore Products ↗
        </a>

        <a
          href="#about"
          className="w-full rounded border border-white/40 px-7 py-4 text-center font-bold transition hover:bg-white hover:text-blue-950 sm:w-auto"
        >
          Discover More
        </a>
      </div>
    </div>

    {/* Hero Image */}
    <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[350px] md:min-h-[450px]">
      <img
        src="https://cdn.shopify.com/s/files/1/0564/9321/1807/files/Definition_of_PP_plastic_1024x1024.jpg?v=1711291656"
        alt="Colourful polymer granules"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#102b46]/20 to-transparent" />

      <div className="absolute bottom-4 left-4 rounded-xl border border-white/30 bg-[#102b46]/85 px-4 py-3 text-white backdrop-blur sm:bottom-6 sm:left-6 sm:px-6 sm:py-4">
        <p className="text-xs font-semibold text-orange-400 sm:text-sm">
          QUALITY MATERIALS
        </p>
        <h3 className="mt-1 text-lg font-bold sm:text-xl">
          Polymer Excellence
        </h3>
      </div>
    </div>

  </div>
</section>


      
{/* About */}
<section id="about" className="bg-white px-6 py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

    {/* Factory Image */}
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000"
        alt="Industrial manufacturing facility"
        className="h-[420px] w-full rounded-2xl object-cover shadow-xl"
      />
      <div className="absolute -bottom-6 -right-5 rounded-xl bg-orange-500 p-6 text-white shadow-xl">
        <p className="text-3xl font-black">INDRAS</p>
        <p className="text-xs font-semibold tracking-widest">POLYMERS</p>
      </div>
    </div>

    {/* About Content */}
    <div className="pt-5">
      <p className="font-bold tracking-[0.25em] text-orange-500">
        ABOUT INDRAS POLYMERS
      </p>

      <h2 className="mt-5 text-4xl font-black leading-tight text-[#102b46]">
        Delivering Quality Through Polymer Innovation.
      </h2>

      <p className="mt-6 leading-8 text-slate-600">
        Indras Polymers is a manufacturer of plastic raw materials,
        masterbatches and polymer compounds based in Perundurai,
        Tamil Nadu. We focus on delivering dependable material
        solutions for industrial requirements.
      </p>

      {/* Highlights */}
      <div className="mt-9 grid grid-cols-3 gap-4 border-t border-slate-200 pt-7">

        <div>
          <div className="text-3xl text-orange-500">✦</div>
          <h3 className="mt-3 font-bold text-[#102b46]">Superior</h3>
          <p className="text-sm text-slate-500">Quality</p>
        </div>

        <div>
          <div className="text-3xl text-orange-500">◇</div>
          <h3 className="mt-3 font-bold text-[#102b46]">Trusted</h3>
          <p className="text-sm text-slate-500">Partner</p>
        </div>

        <div>
          <div className="text-3xl text-orange-500">◎</div>
          <h3 className="mt-3 font-bold text-[#102b46]">Innovative</h3>
          <p className="text-sm text-slate-500">Solutions</p>
        </div>

      </div>

      <a
        href="#contact"
        className="mt-9 inline-block rounded-lg bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
      >
        Learn More →
      </a>
    </div>
  </div>
</section>



{/* Products */}
<section id="products" className="bg-[#f5f7fa] px-6 py-24">
  <div className="mx-auto max-w-7xl">

    <div className="text-center">
      <p className="font-bold tracking-[0.25em] text-orange-500">
        WHAT WE OFFER
      </p>
      <h2 className="mt-4 text-4xl font-black text-[#102b46]">
        Our Products
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-slate-500">
        Discover our range of quality polymer materials and innovative solutions.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-3">

      {/* Masterbatches */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="h-56 overflow-hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0564/9321/1807/files/Definition_of_PP_plastic_1024x1024.jpg?v=1711291656"
            alt="Colourful masterbatch granules"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-7">
          <p className="text-xs font-bold tracking-widest text-orange-500">01 / COLOUR & ADDITIVES</p>
          <h3 className="mt-3 text-2xl font-bold text-[#102b46]">Masterbatches</h3>
          <p className="mt-4 leading-7 text-slate-500">
            High-quality colour and additive masterbatch solutions for diverse plastic applications.
          </p>
          <a href="#contact" className="mt-6 inline-block font-bold text-orange-500 hover:text-blue-950">
            Enquire Now →
          </a>
        </div>
      </div>

      {/* Polymer Resins */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="h-56 overflow-hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0564/9321/1807/files/Definition_of_PP_plastic_1024x1024.jpg?v=1711291656"
            alt="Polymer resin materials"
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
            style={{ filter: "grayscale(1) brightness(1.3)" }}
          />
        </div>
        <div className="p-7">
          <p className="text-xs font-bold tracking-widest text-orange-500">02 / RAW MATERIALS</p>
          <h3 className="mt-3 text-2xl font-bold text-[#102b46]">Polymer Resins</h3>
          <p className="mt-4 leading-7 text-slate-500">
            Reliable polymer raw materials including PP, HDPE, LDPE and LLDPE.
          </p>
          <a href="#contact" className="mt-6 inline-block font-bold text-orange-500 hover:text-blue-950">
            Enquire Now →
          </a>
        </div>
      </div>

      {/* Polymer Compounds */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="h-56 overflow-hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0564/9321/1807/files/Definition_of_PP_plastic_1024x1024.jpg?v=1711291656"
            alt="Polymer compound granules"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            style={{ filter: "hue-rotate(65deg)" }}
          />
        </div>
        <div className="p-7">
          <p className="text-xs font-bold tracking-widest text-orange-500">03 / CUSTOM SOLUTIONS</p>
          <h3 className="mt-3 text-2xl font-bold text-[#102b46]">Polymer Compounds</h3>
          <p className="mt-4 leading-7 text-slate-500">
            Customized polymer solutions designed for industrial manufacturing requirements.
          </p>
          <a href="#contact" className="mt-6 inline-block font-bold text-orange-500 hover:text-blue-950">
            Enquire Now →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      
{/* Infrastructure */}
<section
  id="infrastructure"
  className="bg-[#102b46] px-6 py-24 text-white"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid items-center gap-14 md:grid-cols-2">

      {/* Left Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200"
          alt="Industrial manufacturing facility"
          className="h-[430px] w-full rounded-2xl object-cover shadow-2xl"
        />

        <div className="absolute -bottom-6 -right-5 rounded-xl bg-orange-500 p-6 shadow-xl">
          <p className="text-3xl font-black">QUALITY</p>
          <p className="text-sm font-semibold tracking-widest">
            INDUSTRIAL EXCELLENCE
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="pt-5">

        <p className="font-bold tracking-[0.25em] text-orange-400">
          OUR FACILITIES
        </p>

        <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
          Infrastructure Built for
          <span className="text-orange-500"> Quality.</span>
        </h2>

        <p className="mt-6 leading-8 text-slate-300">
          Our infrastructure supports material handling,
          storage and operational requirements to serve
          industrial customers with dependable polymer solutions.
        </p>

        {/* Features */}
        <div className="mt-9 space-y-6">

          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-orange-500 p-3 text-xl">✦</div>
            <div>
              <h3 className="text-lg font-bold">Material Handling</h3>
              <p className="mt-1 text-sm text-slate-300">
                Organized handling of polymer raw materials.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-orange-500 p-3 text-xl">◇</div>
            <div>
              <h3 className="text-lg font-bold">Storage Facilities</h3>
              <p className="mt-1 text-sm text-slate-300">
                Supporting efficient material storage and management.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-orange-500 p-3 text-xl">◎</div>
            <div>
              <h3 className="text-lg font-bold">Operational Excellence</h3>
              <p className="mt-1 text-sm text-slate-300">
                Focused on reliable industrial customer support.
              </p>
            </div>
          </div>

        </div>

        <a
          href="#contact"
          className="mt-10 inline-block rounded-lg bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
        >
          Connect With Us →
        </a>

      </div>
    </div>
  </div>
</section>


      
{/* Contact */}
<section id="contact" className="bg-[#f5f7fa] px-6 py-24">
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-14 text-center">
      <p className="font-bold tracking-[0.25em] text-orange-500">
        GET IN TOUCH
      </p>
      <h2 className="mt-4 text-4xl font-black text-[#102b46]">
        Let's Build Something Better
      </h2>
      <p className="mt-4 text-slate-500">
        Contact us for quality polymer materials and customized solutions.
      </p>
    </div>

    <div className="grid gap-10 md:grid-cols-2">

      {/* Contact Information */}
      <div className="rounded-2xl bg-[#102b46] p-10 text-white">

        <h3 className="text-3xl font-bold">
          Contact Information
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          Have a requirement or enquiry? Get in touch with our team.
          We would be happy to assist you.
        </p>

        <div className="mt-10 space-y-8">

          <div className="flex gap-4">
            <div className="text-2xl text-orange-500">✉</div>
            <div>
              <h4 className="font-bold">Email Address</h4>
              <a href="mailto:info@indraspolymers.com"
                className="mt-2 text-slate-300 hover:text-orange-400">
                info@indraspolymers.com
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl text-orange-500">📍</div>
            <div>
              <h4 className="font-bold">Our Location</h4>
              <p className="mt-2 text-slate-300">
                Perundurai, Tamil Nadu, India
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl text-orange-500">✦</div>
            <div>
              <h4 className="font-bold">Our Commitment</h4>
              <p className="mt-2 text-slate-300">
                Quality • Innovation • Reliability
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Enquiry Form */}
      <div className="rounded-2xl bg-white p-10 shadow-lg">

        <h3 className="text-2xl font-bold text-[#102b46]">
          Send Us An Enquiry
        </h3>

        <form
          action="mailto:info@indraspolymers.com"
          method="post"
          encType="text/plain"
          className="mt-8 space-y-5"
        >

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              name="Phone"
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Your Message
            </label>
            <textarea
              name="Message"
              rows={4}
              placeholder="Tell us about your requirement..."
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Send Enquiry →
          </button>

        </form>
      </div>

    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-[#091d32] px-6 py-12 text-white">

  <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

    {/* Brand */}
    <div>
      <h2 className="text-3xl font-black">
        INDRAS<span className="text-orange-500">.</span>
      </h2>
      <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-slate-400">
        POLYMERS
      </p>
      <p className="mt-5 max-w-sm leading-7 text-slate-400">
        Your trusted partner for quality plastic raw materials,
        masterbatches and customized polymer solutions.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-bold">Quick Links</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-400">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#about" className="hover:text-orange-500">About Us</a>
        <a href="#products" className="hover:text-orange-500">Products</a>
        <a href="#infrastructure" className="hover:text-orange-500">Infrastructure</a>
        <a href="#contact" className="hover:text-orange-500">Contact</a>
      </div>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-bold">Get In Touch</h3>
      <div className="mt-5 space-y-4 text-slate-400">
        <p>📍 Perundurai, Tamil Nadu, India</p>
        <a href="mailto:info@indraspolymers.com"
          className="block hover:text-orange-500">
          ✉ info@indraspolymers.com
        </a>
      </div>
    </div>

  </div>

  <div className="mx-auto mt-12 max-w-7xl border-t border-slate-700 pt-7 text-center text-sm text-slate-400">
    © 2026 Indras Polymers. All Rights Reserved.
  </div>

</footer>


    </main>
  );
}
