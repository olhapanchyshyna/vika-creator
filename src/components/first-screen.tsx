import MainTitle from '@/components/main-title'
import Image from 'next/image'
import Link from 'next/link'

export default function FirstScreen() {
	type Url = string

	const PAYMENTLINK: Url = process.env.PAYMENTLINK as Url

	return (
		<section className='lg:relative container pt-[50px] lg:py-[60px] px-[20px] xl:py-[80px] bg-cover bg-no-repeat bg-center flex-col lg:flex-row flex text-white items-center '>
			<div className='lg:w-[600px] order-2 lg:order-none'>
				<Image
					src='/first-screen.png'
					className='lg:!absolute lg:bottom-0 max-w-[300px] xl:max-w-[400px]'
					alt='main'
					width={400}
					height={400}
				/>
			</div>
			<div className='lg:w-[650px] xl:w-[800px] justify-end text-white order-1 lg:order-none '>
				<div className='text-[22px] sm:text-[28px] xl:text-[35px] mb-[40px] font-bold '>
					Старт 25 липня
				</div>
				<MainTitle text='Експрес курс:' className='text-[#E1A421] mb-[10px]' />
				<h2 className='2xl:leading-[52px] leading-[35px] xl:leading-[50px] text-[23px] sm:text-[32px] xl:text-[40px] 2xl:text-[46px] uppercase font-bold'>
					ЯК БАГАТОПРОФІЛЬНОМУ ЕКСПЕРТУ ЗНАЙТИ СВІЙ НАПРЯМОК ТА ПОЧАТИ НА ЦЬОМУ
					ЗАРОБЛЯТИ?
				</h2>
				<div className='sm:text-[23px] text-[18px] xl:text-[30px] my-[20px] max-w-[500px] xl:max-w-[600px]'>
					Знайди свої сильні сторони та почни заробляти на них
				</div>
				<button className='rounded-lg bg-[#E1A421] mt-[30px] xl:mt-[60px] xl:w-[240px] w-[180px] py-[15px] xl:py-[20px] px-[10px] xl:px-[30px] text-center text-[30px] lg:text-[34px] xl:text-[40px]'>
					<Link href={PAYMENTLINK} target='_blank'>
						280 грн
					</Link>
				</button>
				<div className='lg:text-[20px] text-[18px] xl:text-[25px] lg:w-[500px] mt-[40px] mb-[40px] lg:mb-0'>
					ПОДАРУНОК
					<br />
					Знайди свої сильні сторони та почни заробляти на них
					{/* <span className='italic text-[25px]'> Бонус - робочий зошит</span> */}
				</div>
			</div>
		</section>
	)
}
