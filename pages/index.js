import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Books from '../components/Books';
import Information from '../components/Information';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Hero />
      <Books/>
      <Information />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
