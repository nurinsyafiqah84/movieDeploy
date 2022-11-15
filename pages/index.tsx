import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./layouts/Container";
import Section from "./layouts/Section";

export default function Home() {
  const handleToggledValue = (selectedValue: any) =>{
    console.log(selectedValue)
  }
  return (
    <div>
      <Header/>
      <Container>
        <Banner/>
        {/*another contoh example props
        <Section props="What's popular"/> */}
        <Section title="What's popular" items={["Streaming", "On TV", "For Rent", "In Theatres"]} onToggle={handleToggledValue}>
        </Section>
      </Container>
      <Footer/>
    </div>
  )
}
