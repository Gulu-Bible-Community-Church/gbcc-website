import { insightData } from "@/data/data"
import BlogCard from "../home/BlogCard"


const InsightSection = () => {
	return (
		<div className="grid items-center lg:grid-cols-4 mt-10 mx-4 gap-6">
			{insightData?.map((event) => (
				<BlogCard
					key={event._id}
					name={event.name}
					image={event.image}
					message={event.message}
					category={event.category}
				/>
			))}
		</div>
	)
}

export default InsightSection