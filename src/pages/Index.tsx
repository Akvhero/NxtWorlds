import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Collections />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
