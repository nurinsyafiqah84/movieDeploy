import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./layouts/Container";

export default function Home() {
  return (
    <div>
      <Header/>
      <Footer/>
      <Container>
        <Banner/>
      </Container>
    </div>
  )
}
