import { Link } from "react-router-dom"
import { FaXTwitter, } from 'react-icons/fa6'
import { FaFacebookSquare, FaInstagramSquare, FaTiktok, FaYoutubeSquare, } from 'react-icons/fa'
import { navbarApi } from "@/data/data"

const FooterCard = () => {
	return (
		<div className="grid lg:grid-cols-3  grid-cols-1 mt-4 space-y-3 mb-4 ">
			<div className="mx-4">
				<h1 className="text-xl font-bold mb-1 ">Gulu Bible Community Church</h1>
				<p>Our mandate is to encourage and empower each person to discover, develop and deploy their uniqueness to the glory of God and benefit of mankind</p>
			</div>
			<div className="mx-4 flex flex-col space-y-2">
				<h1 className="text-xl font-semibold mb-1 ">Useful Links</h1>
				<div className=" text-white mt-10 flex flex-col">
					{navbarApi.map((item) => (
						<Link
							key={item.name}
							to={item.link}
						>
							<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
							{item.name}
						</Link>
					))}


				</div>

			</div>
			<div className="mx-4 flex flex-col space-y-2 pb-10">
				<h1 className="text-xl font-semibold mb-1 ">Contact Us</h1>
				<p className="text-lg">
					Email:
					<span className="px-2">
						<a href="mailto:administrator@gbcc.org">administrator@gbcc.org</a>
					</span>
				</p>
				<p className="text-lg cursor-pointer">
					Tel:
					<span className="flex lg:flex-row flex-col lg:gap-2 lg:text-base text-sm">
						<a href="tel:+256772449291">+256 772 449 291</a>
						<a href="tel:+256778444772">+256 778 444 772</a>
						<a href="tel:+256784653714">+256 784 653 714</a>
					</span>
				</p>
				<div className="">
					<a href="https://facebook.com" target="_blank" className="flex items-center gap-2"><FaFacebookSquare size={20} color="white" />Facebook</a>
					<a href="https://www.youtube.com/" target="_blank" className="flex items-center gap-2"><FaYoutubeSquare size={20} color="red" />Youtube</a>
					<a href="https://www.x.com/" target="_blank" className="flex items-center gap-2"><FaXTwitter size={20} color="white" />Twitter</a>
					<a href="https://www.instragram.com/" target="_blank" className="flex items-center gap-2"><FaInstagramSquare size={20} color="" />Instagram</a>
					<a href="https://www.tiktok.com/" target="_blank" className="flex items-center gap-2"><FaTiktok size={20} color="white" />Tiktok</a>
				</div>

			</div>
		</div>
	)
}

export default FooterCard