import FooterCard from "@/components/layout/FooterCard"
import { currentYear } from "@/data/data"


const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-[#162352] to-[#222020] text-white mt-10 " >
      <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center px-4 bg-[#222020] py-7 pb-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 w-full md:text-start text-center">
          <span className="text-[#D67314] md:px-0 px-2">Subscribe</span>
          for our newsletter
        </h1>
        <div className="flex lg:flex-row flex-col lg:px-10">
          <input type="email" name="" placeholder="Enter your email address" className="text-gray-800 sm:w-72 w-auto sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 outline-none	" />
          <button type="submit" className="bg-[#D67314] hover:bg-[#e5bc5ddf] p-2 rounded-sm font-semibold md:w-auto w-full">SUBSCRIBE NOW</button>
        </div>
      </div>
      <FooterCard />
      <div className=" bg-[#162352] py-2">
        <p className="md:text-base text-sm  text-center items-center justify-center">GBCC &copy; All Rights Reserved {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer