import Banner from "./layouts/Banner";
import Container from "./layouts/container";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";


export default function Home() {
  return (
    <div>
      <Header/>
      <Container>
        <Banner/>
      </Container>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
