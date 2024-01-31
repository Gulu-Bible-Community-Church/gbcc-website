import churchImg from '@/assets/svg/church.svg'
import { AboutDataApi } from '@/data/data'
import { Link } from 'react-router-dom'

const AboutUsCard = () => {
	return (
		<div className="mt-10">
			<div className="flex  items-center justify-center">
				<h1 className="text-[#162352] lg:text-4xl md:text-3xl text-xl font-bold ">
					<span className="bg-[#D67314] rounded-l-2xl p-2 px-4 text-white ">ABOUT</span>
					GBCC
				</h1>
			</div>
			{AboutDataApi && (
				<div className='flex lg:flex-row flex-col-reverse items-center gap-10 mx-4 mt-10'>
					<div>
						<img src={churchImg} alt="church" className='lg:w-[550px] md:w-[750px] w-[750px] ' />
					</div>
					<div className='flex flex-col space-y-4'>
						<div className='h-2 lg:w-64 w-full bg-gradient-to-br from-[#D67314]'></div>
						<h1 className='font-bold text-[#162352] lg:text-xl text-lg lg:text-start text-center'>{AboutDataApi.title}</h1>
						<div className='text-[#162352]'>
							<h1 className='font-bold text-lg'>{AboutDataApi.mission}</h1>
							<p>{AboutDataApi.missionDescription}</p>
						</div>
						<div className='text-[#162352]'>
							<h1 className='font-bold text-lg'>{AboutDataApi.vision}</h1>
							<p>{AboutDataApi.visionDescription}</p>
						</div>
						<Link to={AboutDataApi.link} className='bg-[#162352]  text-center lg:w-32 w-full p-2 text-white rounded-md'>
							Discover More
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}
export default AboutUsCard