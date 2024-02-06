
interface ServiceCardProps {
	service_name: string;
	language: string;
	start: string;
	end: string;
	firstColor: string;
	secondColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service_name, language, start, end, firstColor, secondColor }) => {
	const gradientStyle = {
		background: `linear-gradient(to bottom right, ${firstColor}, ${secondColor})`,
	};
	return (
		<section
			className={`lg:w-81 w-full lg:h-[200px] h-[180px]  rounded-lg p-10 text-white lg:text-xl text-lg`}
			style={{ fontFamily: 'Inknut Antiqua', fontWeight: 800, ...gradientStyle }}
		>
			<h1 className="text-center font-bold lg:text-base md:text-[16px] text-[14px]">{service_name}</h1>
			<h1 className="text-center lg:text-sm md:text-[14px] text-[12px]">{language}</h1>
			<div className="flex flex-row items-center  justify-evenly  lg:mt-16 mt-6 lg:text-base text-[10px]">
				<p>Start: {start}</p>
				<p>End: {end}</p>
			</div>
		</section>
	)
}

export default ServiceCard