import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useTheme } from "@/components/theme/theme-provider"
import { useState } from "react"
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"


const Layout = () => {
	const [themeToggle, setThemeToggle] = useState(true)
	const { setTheme } = useTheme()
	return (
		<>
			<div className="relative h-screen z-10">
				<Navbar />
				<Outlet />
				<Footer />
				<div
					className="bg-orange-500 absolute bottom-10 w-14 h-14 flex justify-center items-center right-10 rounded-full "
					onClick={() => setThemeToggle(!themeToggle)}
				>
					{
						themeToggle ? (
							<button type="submit" className="text-center" onClick={() => setTheme("dark")}>
								<MdDarkMode 
								size={30}
								/>
							</button>
						) : (
							<button type="submit" onClick={() => setTheme("light")}>
								<MdOutlineLightMode size={30} />
							</button>
						)
					}
				</div>
			</div>

		</>
	)
}

export default Layout