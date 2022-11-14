import Footer from "./layouts/Footer";
import Header from "./layouts/Header";


export default function Home() {
  return (
    <div>
      <Header/>
      <div className='max-w-[1300px] mx-auto'>
        Hello
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
