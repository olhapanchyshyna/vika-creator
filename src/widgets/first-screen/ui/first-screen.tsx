import MainTitle from '@/entities/main-title/ui/main-title'
import { Raleway } from 'next/font/google'
import Image from 'next/image'

const raleway = Raleway({ subsets: ['latin'] })

export default function FirstScreen() {
	return (
		<section className='container main-green-bg h-[100vh] bg-cover bg-no-repeat bg-center flex text-white items-center pr-[60px]'>
			<div className='h-full relative w-[600px]'>
				<Image
					src='/first-screen.png'
					className='!absolute bottom-0'
					alt='main'
					width={600}
					height={600}
				/>
			</div>

			<div className='w-[800px] justify-end text-white ml-[40px]'>
				<div className='text-[30px] mb-[20px] font-bold'>Старт 17 липня</div>
				<MainTitle text='Експрес курс:' className='text-[#E1A421]'/>
				<br />
				<MainTitle
					text='Як багатопрофільному експерту знайти свій напрямок та почати на
						цьому заробляти?'
					className='leading-[62px] !text-[60px]'
				/>

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
