import Chips from "./components/Chips";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      {window.innerWidth > 760 && <Model />}
      <Features />
      <Chips />
      <Footer />
    </main>
  );
}

export default Sentry.withProfiler(App);
