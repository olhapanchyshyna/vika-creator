import MainTitle from '@/components/main-title'
import Image from 'next/image'

export default function AboutMe() {
	return (
		<section className='bg-white py-[80px] 2xl:py-[100px] px-[60px]  mt-[-1px]'>
			<div className='container'>
				<div className='flex justify-between '>
					<div className='max-w-[700px] flex flex-col'>
						<MainTitle
							text='Мене звати Віка Мірча,'
							className='text-[#E1A421] mb-[30px]'
						/>
						<div className='2xl:text-[48px] text-[32px] font-bold uppercase'>
							Я продюсерка та менторка експертів{' '}
						</div>
						<div className='mt-[40px] text-[23px] 2xl:text-[30px]'>
							<span className='text-[#E1A421]'>
								Я завжди підкреслювала сильні сторони оточуючих
							</span>{' '}
							і показувала, як реалізувати їх таланти та заробляти на цьому.
						</div>
						{/* <Image
							src='/comment.png'
							alt='comment'
							width={400}
							height={500}
							className='2xl:w-[600px] w-[450px] h-auto mt-[10px]'
						/> */}
						<div className='mt-[60px] text-[23px] 2xl:text-[30px] italic'>
							Я вирішила допомагати експертам знаходити свій напрямок,
							реалізовувати таланти та заробляти на цьому.
							<span className='text-[#E1A421] ml-[6px]'>
								До кінця року планую допомогти 1000+ експертам, тому ти можеш
								розраховувати на свій результат.
							</span>
						</div>
					</div>
					<Image
						src='/about-me.jpg'
						width={500}
						height={600}
						alt='me'
						className='2xl:w-[600px] w-[500px] h-auto ml-[30px]'
					/>
				</div>
			</div>
		</section>
	)
}
