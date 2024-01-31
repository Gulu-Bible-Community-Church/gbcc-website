import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from '/logo.png'
import { Link } from "react-router-dom";

const MobileView = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const currentYear = new Date().getFullYear();


	return (
		<>
			<div onClick={() => setShowSidebar(!showSidebar)} className="lg:hidden flex">
				{showSidebar ?
					<AiOutlineClose
						size={35}
						className=" "
						color='white'
					/>
					:
					<HiMenuAlt3
						color="white"
						size={35}
						className=""
					/>
				}
			</div>
			{
				showSidebar && (
					<div
						className={`-top-4 left-0  right-16  rounded mt-2 bg-[#162352]    p-1 fixed h-full z-20  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
							}`}
					>
						<div className="">
							<div className="flex items-center gap-2 justify-center">
								<img src={logo} alt="" className="w-16 pt-4 pb-4" />
								<p className="text-white font-semibold text-lg">GULU BIBLE COMMUNITY CHURCH</p>
							</div>
							<hr />
							<div className="text-lg text-white mt-10 flex flex-col">
								<Link to='/' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									Home
								</Link>
								<Link to='/about-us' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									About Us
								</Link>
								<Link to='/our-leadership' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									Our Leadership
								</Link>
								<Link to='/church-services' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									Church Services
								</Link>
								<Link to='/church-ministries' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									Church Ministries
								</Link>
								<Link to='/upcoming-events' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									Upcoming Events
								</Link>
								<Link to='/insights' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									Insights
								</Link>
								<Link to='/watch-sermons' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									Watch Sermons
								</Link>
								<Link to='/contact-us' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									Contact Us
								</Link>
								<Link to='/give-to-gbcc' onClick={() => setShowSidebar(!showSidebar)}>
									<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
									Give 2 GBCC
								</Link>
							</div>

							<div className="absolute bottom-1 text-white text-sm">
								<p>All Rights Reserved. &copy;{currentYear} GBCC</p>
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}

export default MobileView