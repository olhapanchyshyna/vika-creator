import MainTitle from '@/entities/main-title/ui/main-title'
import Image from 'next/image'
import Link from 'next/link'

export default function FirstScreen() {
	type Url = string

	const PAYMENTLINK: Url = process.env.PAYMENTLINK as Url

	return (
		<section className='container h-[1200px] bg-cover bg-no-repeat bg-center flex text-white items-center pr-[60px]'>
			<div className='h-full relative w-[600px]'>
				<Image
					src='/first-screen.png'
					className='!absolute bottom-0 '
					alt='main'
					width={400}
					height={400}
				/>
			</div>
			<div className='w-[800px] justify-end text-white ml-[40px]'>
				<div className='text-[35px] mb-[40px] font-bold '>Старт 25 липня</div>
				<MainTitle text='Експрес курс:' className='text-[#E1A421]' />
				<br />
				<h2 className='2xl:leading-[52px] leading-[50px] text-[40px] 2xl:text-[46px] uppercase font-bold'>
					ЯК БАГАТОПРОФІЛЬНОМУ ЕКСПЕРТУ ЗНАЙТИ СВІЙ НАПРЯМОК ТА ПОЧАТИ НА ЦЬОМУ
					ЗАРОБЛЯТИ?
				</h2>
				<div className='text-[30px] my-[20px]'>
					Знайди свої сильні сторони та почни заробляти на них
				</div>
				<button className='rounded-lg bg-[#E1A421] mt-[60px] w-[240px] py-[20px] px-[30px] text-center text-[40px]'>
					<Link href={PAYMENTLINK} target='_blank'>
						280 грн
					</Link>
				</button>
				<div className=' text-[30px] w-[500px]  mt-[40px]'>
					ПОДАРУНОК 
					<br/>
					Знайди свої сильні сторони та почни заробляти на них
					{/* <span className='italic text-[25px]'> Бонус - робочий зошит</span> */}
				</div>
			</div>
		</section>
	)
}
