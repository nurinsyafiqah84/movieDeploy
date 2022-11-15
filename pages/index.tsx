import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/Movies/MovieList";
import Container from "./layouts/Container";

export default function Home() {
  
  return (
    <div>
      <Header/>
      <Container>
        <Banner/>
        {/*another contoh example props
        <Section props="What's popular"/> */}
        <MovieList/>
        
      </Container>
      <Footer/>
    </div>
  )
}
