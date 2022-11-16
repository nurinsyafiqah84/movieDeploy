import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/Movies/MovieList";
import Container from "./layouts/Container";
import Section from "./layouts/Section";

export default function Home() { 
  const handleToggledValue = (selectedValue: any) =>{ 
    console.log(selectedValue)
  }
  return (
    <div>
      <head>
        <title>The Movie Database (TMDB)</title>
        <meta name="description"></meta>
        <link rel="icon" href="https://www.themoviedb.org/assets/2/favicon-32x32-543a21832c8931d3494a68881f6afcafc58e96c5d324345377f3197a37b367b5.png"/>
      </head>
      <Header/>
      <Container>
        <Banner/>
        {/*another contoh example props
        <Section props="What's popular"/> */}
        <Section title="Free To Watch" items={["Movies", "TV Shows"]} onToggle={handleToggledValue}>
          <MovieList/>

        </Section>
        
      </Container>
      <Footer/>
    </div>
  )
}
