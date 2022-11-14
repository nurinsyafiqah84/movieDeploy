import Header from "./components/Header";
import Container from "./layouts/container";
import Footer from "./layouts/Footer";



export default function Home() {
  return (
    <div>
      <Header/>
      <Container>
        Hello
      </Container>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
