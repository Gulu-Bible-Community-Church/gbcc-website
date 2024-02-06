import child01 from '@/assets/images/child2.png'

const SingleEventCard = () => {
	return (
		<div className='space-y-3'>
			<div className=" bg-white md:w-[500px] w-[320px] h-[150px]  rounded-lg  flex items-center cursor-pointer">
				<div className='md:w-[200px] w-[430px] md:h-[200px] h-[430px] flex items-center '>
					<img src={child01} alt="" className='object-contain  rounded-l-lg' />
				</div>
				<div className='px-2'>
					<p className='font-bold bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] text-center text-white'>Education</p>
					<p className='font-bold md:text-lg text-sm'>Save Children Life For Future.</p>
					<p className='md:text-base text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,</p>
				</div>
			</div>
			<div className=" bg-white md:w-[500px] w-[320px] h-[150px]  rounded-lg  flex items-center cursor-pointer">
				<div className='md:w-[200px] w-[430px] md:h-[200px] h-[430px] flex items-center '>
					<img src={child01} alt="" className='object-contain  rounded-l-lg' />
				</div>
				<div className='px-2'>
					<p className='font-bold bg-gradient-to-b from-[#D6A533] to-[#ab8e4b] text-center text-white'>Education</p>
					<p className='font-bold md:text-lg text-sm'>Save Children Life For Future.</p>
					<p className='md:text-base text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,</p>
				</div>
			</div>

		</div>
	)
}

export default SingleEventCard