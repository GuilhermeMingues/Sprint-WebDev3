import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import PhoneArea from "./components/PhoneArea/phone";
import Solution from "./components/Solution/solution";
import Audience from "./components/Audience/audience";
import Gallery from "./components/Gallery/gallery";
import Team from "./components/Team/team";
import Footer from "./components/Footer/footer";
import Contato from "./components/Contato/contato";

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
      <Footer />
      <Contato />
    </main>
  );
}
