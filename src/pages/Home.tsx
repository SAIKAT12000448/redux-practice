import { Button } from '@/components/ui/button';
import book from '@/assets/images/book2.png';
import Footer from '@/layouts/Footer';
import Products from './Products';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <img style={{borderRadius:'50px'}} className='' width='400px' src={book} alt="" />
          
        </div>
        <div className="relative -right-14">
        <h1 className="text-6xl font-black text-primary mb-2">
            QUIRKY <br /> BOOK STORE
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Buy or take for few days
          </p>
          <div className="text-primary mt-20">
            <p>Every category of book</p>
            
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
      </div>
     
  <Products/>

      <Footer />
    </>
  );
}
