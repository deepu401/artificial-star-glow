import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FixedStarLogo from "@/components/FixedStarLogo";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";



const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Artificial Star AI - Premium AI Solutions | Custom Chatbots</title>
        <meta name="description" content="Transform your business with custom AI solutions. Artificial Star builds intelligent chatbots, voice agents, and automation systems that drive real results." />
        <link rel="canonical" href="https://www.artificialstar.ai/" />
      </Helmet>

      <Navigation />
      <FixedStarLogo />
      <Hero />
      <Services />
      <Approach />
      <Blog />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
