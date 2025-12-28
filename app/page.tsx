'use client'
import { useEffect, useState } from "react";
import { getRequest } from "../service/jobservice";

export default function Home() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    getAllJobs();
  }, []);

  async function getAllJobs() {
    const allJobs = await getRequest('/jobs');
    setJobList(allJobs);
  }

  return (
    <>

  {/* <!-- Header --> */}
  <header className="bg-green-700 text-white">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">GreenScape</h1>
      <nav className="space-x-6 hidden md:block">
        <a href="#services" className="hover:underline">Services</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </div>
  </header>

  {/* <!-- Hero Section --> */}
  <section className="bg-green-50">
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Beautiful Lawns. <br className="hidden md:block" />
          Professional Care.
        </h2>
        <p className="text-lg mb-8">
          Reliable landscaping services for residential and commercial properties.
          Lawn care, garden design, cleanup, and more.
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Get a Free Quote
        </a>
      </div>

      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62"
          alt="Landscaping work"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>

  {/* <!-- Services --> */}
  <section id="services" className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-xl p-6 text-center shadow-sm">
          <h4 className="text-xl font-semibold mb-3">Lawn Care</h4>
          <p>Mowing, edging, fertilizing, and seasonal maintenance.</p>
        </div>

        <div className="border rounded-xl p-6 text-center shadow-sm">
          <h4 className="text-xl font-semibold mb-3">Garden & Design</h4>
          <p>Custom garden layouts, planting, and landscape design.</p>
        </div>

        <div className="border rounded-xl p-6 text-center shadow-sm">
          <h4 className="text-xl font-semibold mb-3">Cleanup & Removal</h4>
          <p>Spring/fall cleanups, debris removal, and yard restoration.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Why Choose Us --> */}
  <section id="about" className="bg-green-700 text-white py-20">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-6">Why Choose GreenScape?</h3>
      <p className="max-w-3xl mx-auto text-lg">
        We pride ourselves on quality work, honest pricing, and dependable service.
        Our experienced team treats every property like it’s our own.
      </p>
    </div>
  </section>

  {/* <!-- CTA --> */}
  <section id="contact" className="py-20">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Yard?</h3>
      <p className="mb-8">
        Request a free, no-obligation quote today.
      </p>
      <a
        href="#"
        className="bg-green-700 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-800 transition"
      >
        Request a Quote
      </a>
    </div>
  </section>

  {/* <!-- Footer --> */}
  <footer className="bg-gray-900 text-gray-400 py-6">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p>&copy; 2025 GreenScape Landscaping. All rights reserved.</p>
    </div>
  </footer>

    </>
  );
}
