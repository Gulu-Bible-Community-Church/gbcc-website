import churchImg from '@/assets/svg/church.svg'
import { AboutDataApi } from '@/data/data'
import { Link } from 'react-router-dom'

const LivesteamCard = () => {
	return (
		<div className="lg:mt-10 mt-6 mx-0">
			{AboutDataApi && (
				<div className='flex  flex-row-reverse justify-around gap-6 lg:mt-10 mt-6'>
					<div>
						<img src={churchImg} alt="church" className='xl:w-[650px] lg:w-[550px] md:w-[750px] w-[750px] ' />
						<Link to={AboutDataApi.link} className='lg:hidden flex justify-center my-6 bg-[#162352]  text-center lg:w-32 w-full p-2 text-white rounded-md'>
							<p className='text-center'>Discover More</p>
						</Link>
					</div>
					<div className='flex flex-col xl:space-y-10 space-y-6'>
						<div className='h-2 lg:w-64 w-full bg-gradient-to-br from-[#D67314]'></div>
						<h1 className='font-bold text-[#162352] xl:text-3xl lg:text-xl text-lg lg:text-start text-center'>{AboutDataApi.title}</h1>
						<div className='text-[#162352]'>
							<h1 className='font-bold xl:text-2xl text-lg'>{AboutDataApi.mission}</h1>
							<p>{AboutDataApi.missionDescription}</p>
						</div>
						<div className='text-[#162352]'>
							<h1 className='font-bold xl:text-2xl text-lg'>{AboutDataApi.vision}</h1>
							<p>{AboutDataApi.visionDescription}</p>
						</div>
						<Link to={AboutDataApi.link} className='hidden lg:flex  bg-[#162352]  text-center lg:w-32 w-full p-2 text-white rounded-md'>
							Discover More
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}

export default LivesteamCard