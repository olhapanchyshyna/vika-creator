import MainTitle from '@/entities/main-title/ui/main-title'
import Image from 'next/image'

export default function FirstScreen() {
	return (
		<section className='container h-[calc(100vh-84px)] bg-cover bg-no-repeat bg-center flex text-white items-center pr-[60px]'>
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
				<div className='text-[35px] mb-[40px] font-bold '>Старт 20 липня</div>
				<MainTitle text='Експрес курс:' className='text-[#E1A421]' />
				<br />

				<h2 className='2xl:leading-[52px] leading-[50px] text-[40px] 2xl:text-[46px] uppercase font-bold'>
					Як багатопрофільному експерту знайти свій напрямок та почати на цьому
					заробляти?
				</h2>
				<div className='rounded-lg bg-[#E1A421] mt-[60px] w-[240px] py-[20px] px-[30px] text-center text-[40px]'>
					280 грн
				</div>
				<div className=' text-[30px] w-[500px]  mt-[40px]'>
					6 уроків, які допоможуть знайти сильні сторони та почати заробляти на
					них
				</div>
			</div>
		</section>
	)
}
