import{Hero,CustomerReviews,Footer,PopularProducts
  , Services, SpecialOffer,Subscribe,SuperQuality} from './Sections'
import Nav from './Components/Nav'
export default function App(){

  return(

  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-bottom ">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
    <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black text-white">
      <Footer/>
    </section>

  </main>
  )
}
