import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import PhoneArea from "./components/PhoneArea/phone";
import Solution from "./components/Solution/solution";
import Audience from "./components/Audience/audience";
import Gallery from "./components/Gallery/gallery";
import Team from "./components/Team/team";
import Contact from "./components/Contact/contact";
import Simulator from "./components/Simulator/simulator";
import Footer from "./components/Footer/footer";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PhoneArea />
      <Solution />
      <Audience />
      <Gallery />
      <Team />
      <Contact />
      <Simulator />
      <Footer />
    </main>
  );
}
