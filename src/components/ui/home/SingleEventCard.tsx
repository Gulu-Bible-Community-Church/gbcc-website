import { insightData } from '@/data/data'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'

const SingleEventCard = () => {
	return (
		<>
			<div className='lg:space-y-3 space-y-4'>
				{insightData.slice(0, 2)?.map(item => (
					<Link
						to="#"
						className="flex lg:flex-row flex-col items-center bg-[#2A385E] md:w-[800px] w-[400px] lg:h-[230px] h-[450px]  rounded-lg  cursor-pointer"
						key={item._id}
					>
						<div className='md:w-[950px] w-[380px] md:h-[370px] h-[430px] flex items-center lg:mt-0 -mt-20'>
							<img src={item.image[0]} alt="" className='object-contain   rounded-l-lg' />
						</div>
						<div className='px-2 text-white lg:mt-0 -mt-20'>
							<p className='font-bold bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] text-center text-white'>{item.category}</p>
							<p className='font-bold md:text-xl text-lg'>{item.name}</p>
							<p className='hidden lg:flex md:text-base text-[12px]'>
								<TextTruncate
									line={3}
									element="span"
									truncateText="…"
									text={item.message}
								/>
							</p>
							<p className='lg:hidden md:text-base text-[12px]'>
								<TextTruncate
									line={5}
									element="span"
									truncateText="…"
									text={item.message}
								/>
							</p>
						</div>

					</Link>
				))}


			</div>
		</>
	)
}

export default SingleEventCard