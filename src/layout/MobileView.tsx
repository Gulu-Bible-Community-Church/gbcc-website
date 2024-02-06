import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from '/logo.png'
import { Link } from "react-router-dom";
import { currentYear, navbarApi } from "@/data/data";

const MobileView = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	


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
								<p className="text-white font-semibold text-sm">GULU BIBLE COMMUNITY CHURCH</p>
							</div>
							<hr />
							<div className="text-sm text-white mt-10 flex flex-col">
								{navbarApi.map((item) => (
									<Link
										key={item.name}
										to={item.link}
										onClick={() => setShowSidebar(!showSidebar)}
									>
										<span className="w-10 h-10 border-l-4  border-[#D67314] px-1"></span>
										{item.name}
									</Link>
								))}


							</div>

							<div className="absolute bottom-1 left-4 text-white text-[10px]">
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