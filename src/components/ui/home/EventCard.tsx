import { Link } from 'react-router-dom'
import SingleEventCard from './SingleEventCard'
import { TbTimelineEventFilled } from 'react-icons/tb'

const EventCard = () => {
	return (
		<div className="relative z-0 flex flex-col md:flex-row items-center justify-between w-full mt-10 bg-white -mx-0 flex-1 rounded-md">
			<div className="md:w-1/2 w-full h-[400px] lg:m-10 m-2 flex-1">
				<div className='relative space-y-6 z-10'>
					<div>
						<p className=' md:w-32 w-full  h-1 bg-gradient-to-b from-[#D6A533] to-[#ab8e4b]'></p>
						<h1 className='md:text-base text-[20px] md:text-start text-center'>Our Latest Events</h1>
						<p className='font-bold md:text-5xl text-2xl md:text-start text-center'>Upcoming Events</p>
					</div>
					<div>
						<p className='md:text-xl text-lg p-1'>Join us for a captivating series of church events! Explore the wonders of community and faith as we come together for fellowship, worship, and inspiration</p>
					</div>
					<div className='flex flex-row items-center'>
						{/* <img src="" alt="ahnd" className='rounded-full p-1' /> */}
						<TbTimelineEventFilled size={150} color="D6A533" />
						<p className='lg:text-2xl md:text-xl'>Experience uplifting moments that inspire and guide towards a better lifestyle at our upcoming church events.</p>
					</div>
					<div className='relative hidden md:flex flex-1 -mb-10 cursor-pointer z-10'>
						<Link to='/upcoming-events' className='bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] p-2 mx-2 rounded-lg text-white text-xl  items-center text-center md:w-1/2 w-full  '>View All Events</Link>
					</div>
				</div>
			</div>
			<div className="relative z-10 md:w-1/2 w-full lg:h-[500px] h-[65rem] bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] flex items-center justify-center m-10 rounded-lg">
				<div className='absolute z-10 md:top-4 top-3 md:-left-10 left-1 '>
					<SingleEventCard />
				</div>
				<div className='md:hidden flex flex-1 -mb-10 absolute z-10 bottom-12 w-full'>
					<Link to='/upcoming-events' className='bg-gradient-to-b lg:from-[#D6A533] from-[#2A385E] lg:to-[#ab8e4b] to-[#2a385ee6]  p-2 mx-2 rounded-lg text-white text-xl  items-center text-center md:w-1/2 w-full  '>View All Events</Link>
				</div>
			</div>

		</div>
	)
}

export default EventCard