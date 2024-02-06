import churchImg from '@/assets/svg/church.svg'
import { SermonData } from '@/data/data'
import { Link } from 'react-router-dom'

const LivesteamCard = () => {
	return (
		<div className="lg:mt-10 mt-6  lg:mx-10 mx-4">
			{SermonData && (
				<div className='flex lg:flex-row-reverse flex-col-reverse  justify-between gap-2 lg:mt-10 mt-2 space-y-10'>
					<div className=''>
						<img src={churchImg} alt="church" className='xl:w-[650px] lg:w-[550px] md:w-[750px] w-[750px] ' />
						<Link to={SermonData.link} className='lg:hidden flex justify-center my-6 bg-[#162352]  text-center lg:w-32 w-full p-2 text-white rounded-md'>
							Watch Now
						</Link>
					</div>
					<div className='flex flex-col space-y-4'>
						<h1 className='font-bold text-[#162352] xl:text-3xl lg:text-3xl text-2xl lg:text-start text-center'>{SermonData.title}</h1>
						<div className='h-2 lg:w-64 w-full bg-[#D67314]'></div>
						<div className='text-[#162352] lg:w-[850px] '>
							<h1 className=' font-bold xl:text-4xl lg:text-3xl md:text-xl text-2xl lg:text-start text-center uppercase'>{SermonData.theme}</h1>
							<p className='pt-4 pb-4 lg:px-0 px-4'>{SermonData.message}</p>
						</div>
						<Link to={SermonData.link} className='hidden lg:flex  bg-[#162352]  text-center lg:w-32 w-full p-2 text-white rounded-md'>
							Watch Now
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}

export default LivesteamCard