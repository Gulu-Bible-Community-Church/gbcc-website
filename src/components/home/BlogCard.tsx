import { ReactElement } from "react";
import { Skeleton } from "../ui/skeleton";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
interface Props {
	name?: string
	image?: string
	message?: string
	loading?: boolean

}

const BlogCard = ({ name, image, message, loading }: Props): ReactElement => {
	return (
		<div
			className="relative   shadow-2xl bg-white max-w-sm cursor-pointer overflow-hidden rounded-t-lg "
		>
			{loading ? (
				<Skeleton />
			)
				: (
					<div className="w-full rounded-lg ">
						<img src="/child4.png" alt="school-image" className="rounded-t-lg object-cover  hover:scale-110 transition-all duration-300" />
					</div>
				)}
			<div className=" flex flex-col px-2 rounded-b-lg  ">
				<a href='#' target="_blank" className="text-gray-900 lg:text-2xl capitalize md:text-xl text-lg font-extrabold  ">Men & Women Conference</a>
				<span className="text-gray-500 lg:text-base text-[14px] font-semibold">Date: 24/April/2024</span>
				<div>
					<p className="pt-2 pb-4 lg:text-base text-[14px]">
						<TextTruncate
							line={5}
							element="span"
							truncateText="…"
							text="In a rapidly changing world, where values and priorities often shift, the concept of a family that honors God stands as a beacon of hope and unwavering faith. The powerful message of our recent conference reminds us that within the bonds of family, we have the opportunity to create a sanctuary of love, faith, and grace that radiates God's light.\n\nThe family unit is where God's design for love, unity, and purpose begins. As we embrace our roles as fathers, mothers, sons, daughters, brothers, and sisters, we have the sacred privilege to shape our homes into places where God's presence is palpable, His Word is the foundation, and His love is the cornerstone.\n\nThe conference reiterated that, regardless of our backgrounds or circumstances, we can be families that honor God. Our homes can be havens of forgiveness, understanding, and transformation. Through prayer, worship, and the study of God's Word, we build a spiritual foundation that empowers us to withstand the storms of life.\n\nLet us carry this message with us and share it with the world. The family that honors God is not only a source of personal strength but also a living testimony to the enduring power of faith, love, and unity in an ever-changing world. As we endeavor to make our families a shining example, we extend God's love to all those around us, offering hope to a world in need.\n\nTogether, let us continue to be lights in the darkness, showing the world the power of a family that honors God"
						/>
					</p>
				</div>

				<Link to='#' className=' bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] p-2 rounded-lg text-white text-center lg:text-base text-sm w-full  cursor-pointer mb-3'>
					Read more
				</Link>
			</div>
		</div>
	)
}

export default BlogCard