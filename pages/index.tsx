import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Banner from "./layouts/Banner";


export default function Home() {
  return (
    <div>
      <Header/>
      <div className='max-w-[1300px] mx-auto'>
        <Banner/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
