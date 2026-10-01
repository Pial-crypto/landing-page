import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Courses from "../components/Courses";
import Categories from "../components/Categories";
import Growth from "../components/Growth";
import Creator from "../components/Creator";
import CtaBanner from "../components/CtaBanner";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <header className="hero-wrap grid-bg">
        <Navbar />
        <Hero />
      </header>
      <main>
        <Logos />
        <Courses />
        <Categories />
        <Growth />
        <Creator />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
