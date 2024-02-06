import { insightData } from "@/data/data"
import BlogCard from "./BlogCard"
import { Link } from "react-router-dom"


const BlogSection = () => {



	return (
		<div className="mt-10 mx-4">
			<div className="flex flex-col items-center justify-center">
				<p className=' lg:w-44 w-full  h-2 bg-gradient-to-b from-[#D6A533] to-[#ab8e4b]'></p>
				<h1 className='md:text-base text-[12px] md:text-start text-center font-semibold'>Get to know us more</h1>
				<p className='font-bold md:text-5xl text-2xl md:text-start text-center'>Popular Blogs</p>
			</div>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center mb-4 gap-10 mt-10">
				{
					insightData?.slice(0, 8).map((insight) => (
						<Link to={`/${insight._id}`} key={insight._id} className="cursor-pointer">
							<BlogCard
								name={insight.name}
								image={insight.image}
								message={insight.message}
								category={insight.category}

							/>
						</Link>
					))
				}
			</div>
		</div>
	)
}

export default BlogSection