import MainTitle from '@/entities/main-title/ui/main-title'
import Image from 'next/image'

export default function AboutMe() {
	return (
		<section className='bg-white py-[80px] 2xl:py-[100px] px-[60px]  mt-[-1px]'>
			<div className='container'>
				<MainTitle
					text='Мене звати Віка Мірча,'
					className='text-[#E1A421] mb-[30px]'
				/>
				<div className='2xl:text-[48px] text-[32px] font-bold uppercase'>
					Я продюсерка та менторка експертів{' '}
				</div>
				<div className='flex justify-between items-center'>
					<div className='max-w-[600px] flex flex-col items-center'>
						<div className='mt-[40px] text-[23px] 2xl:text-[30px]'>
							<span className='text-[#E1A421]'>
								Я завжди бачила і підсвічувала сильні сторони оточуючим
							</span>{' '}
							- розповідала, як їм релізовувати свої талантати і заробляти на
							цьому.
						</div>
						<Image
							src='/comment.png'
							alt='comment'
							width={400}
							height={500}
							className='2xl:w-[600px] w-[450px] h-auto mt-[10px]'
						/>
						<div className='mt-[20px] text-[23px] 2xl:text-[30px] italic'>
							Врешті решт, я вирішила робити те що я вмію краще - допомагати
							експертам визначати свій напрям - знаходити що вони люблять і
							вміють краще і заробляти на цьому. І цей міні курс тільки початок,
							я планую робити виступи по всьому світу з темою розкриття і
							монетизації талатів.
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
