import BlogCard from "@/components/home/BlogCard"
import { insightData } from "@/data/data"


const EventSection = () => {
	return (
		<>

			<div className="grid items-center lg:grid-cols-4 mt-10 mx-4">
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

		</>
	)
}

export default EventSection