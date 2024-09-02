
import landingPageData from "../Constant/webData";
import Button from "../Compontents/button";
import Header from "../Compontents/Header";
import Hero from "../Compontents/Hero";
import Feature from "../Compontents/Features";
import Testimonials from "../Compontents/Testinomial";
import Footer from "../Compontents/Footer";

function App() {
  console.log("landingPageData => ", landingPageData);
  const { header, hero, features, testimonials } = landingPageData;
  const user = {
    isLogin: true,
  };
  return (
    <div>
      <Header header={header} user={user} />
      <Hero hero={hero} />
      <Feature features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer header={header} />
    </div>
  );
}

export default App;
