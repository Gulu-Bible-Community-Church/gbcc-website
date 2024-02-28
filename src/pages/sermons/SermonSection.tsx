import BlogCard from "@/components/home/BlogCard"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect } from "react"
import { getAllSermons } from "@/features/sermons/sermonSlice"
import { SkeletonCard } from "@/utils/SkeletonCard"




const SermonSection = () => {
	const dispatch = useAppDispatch()
	// const contacts = useAppSelector(state => state.contacts.data)

	const sermons = useAppSelector(state => state.sermons.data)
	const loading = useAppSelector(state => state.sermons.loading)


	useEffect(() => {
		dispatch(getAllSermons())
	}, [])

	// console.log('sermons,,,,', loading)
	return (
		<>
			{loading ? (
				<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 lg:gap-10 md:gap-4 gap-3">
					{sermons?.map((event) => (
						<SkeletonCard key={event.id} />
					))}

				</div>
			) : (
				<div className="grid items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 mx-4 gap-6">
					{sermons?.map((event) => (
						<BlogCard
							key={event.id}
							name={event.name}
							pastor={event.pastor}
							link={event.link}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default SermonSection