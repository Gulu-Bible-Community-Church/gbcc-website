import TextTruncate from "react-text-truncate";

interface insightsProps {
	name: string;
	image: string[];
	message: string;
	category: string;
}

const BlogCard: React.FC<insightsProps> = ({ name, image, message, category }) => {
	return (
		<div
			className="relative   shadow-2xl bg-white max-w-sm cursor-pointer rounded-lg -z-10 pb-1"
		>
			<img
				className="relative rounded-lg object-cover hover:scale-110 transition-all duration-300 "
				src={image[0]}
				alt=""
			/>
			<div className="bg-[#0e172c] rounded-lg px-2 p-2 w-auto mx-4 text-white uppercase absolute  top-4 z-10">
				{category}
			</div>
			<div className="mt-4">
				<h5 className="text-gray-900 md:text-2xl capitalize text-xl font-extrabold  px-2">{name}</h5>
				{/* <div className="mx-2 flex items-center justify-between text-gray-500 text-[10px] font-bold">
					<p >Comments: <span>{comments.length}</span></p>
					<p>Date: <span className="">12/August/2023</span></p>
				</div> */}
				<p className="text-gray-700 lg:text-base text-sm md:mb-4 mb-2 md:px-4 px-2">
					<TextTruncate
						line={5}
						element="span"
						truncateText="…"
						text={message}
					/>
				</p>
				<div className='bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] p-2 rounded-lg text-white lg:text-base text-sm  items-center text-center mx-4 mb-4 cursor-pointer'>
					<p>Read more</p>
				</div>
			</div>
		</div>
	)
}

export default BlogCard