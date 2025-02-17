import Header from './shared/components/layout/Header';
import Footer from './shared/components/layout/Footer';
import Hero from './features/Hero';

import SEO from "./shared/components/common/SEO";
import HreflangTags from "./shared/components/common/HreflangTags";

import './shared/styles/App.css';

function App() {
  return (
    <>
      <SEO />
      <HreflangTags />
      <Header/>
      <Hero />
      <Footer/>
    </>
  );
}

export default App;
