import Blog from "@/components/blog";
import Categories from "@/components/categories";
import CTA from "@/components/cta";
import FeaturedModules from "@/components/featuredModules";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Reviews from "@/components/reviews";
import WhyCodelivly from "@/components/whyUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <FeaturedModules />
      <Features />
      <WhyCodelivly />
      <Blog />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
