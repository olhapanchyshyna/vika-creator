import Image from 'next/image'
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function FirstScreen() {
	return (
		<section className='main-green-bg h-[100vh] bg-cover bg-no-repeat bg-center flex text-white items-center pr-[60px]'>
			{/* <Image
				src='/test.png'
				className='!relative h-full !w-[650px]'
				alt='main'
				fill
				style={{ objectFit: 'cover', objectPosition: 'center' }}
			/> */}
			<div className='h-full relative w-[600px]'>
				<Image
					src='/test.png'
					className='!absolute bottom-0'
					alt='main'
					width={600}
					height={600}
				/>
			</div>

			<div className='w-[700px] justify-end text-white ml-[40px]'>
				<div className='text-[30px] mb-[20px] font-bold'>Старт 17 липня</div>
				<h1 className={`text-[46px] text-[#E1A421] font-bold uppercase  ${raleway.className}`}>
					Експрес курс:
					<br />
					<span className=' text-white font-bold lowercase'>
						Як багатопрофільному експерту знайти свій напрямок та почати на
						цьому заробляти?
					</span>
				</h1>
				<div className='mt-[60px] text-[30px] w-[500px] '>
					3 уроки, які допоможуть знайти сильні сторони та почати заробляти на
					них
				</div>
				<div className='rounded-lg bg-[#E1A421] mt-[40px] w-[200px] py-[20px] px-[30px] text-center text-[40px]'>
					280 грн
				</div>
			</div>
		</section>
	)
}
