import MainTitle from '@/entities/main-title/ui/main-title'
import Image from 'next/image'

export default function AboutMe() {
	return (
		<section className='bg-white py-[100px] px-[60px]  mt-[-1px]'>
			<div className='container'>
				<MainTitle
					text='Мене звати Віка Мірча,'
					className='text-[#E1A421] mb-[30px]'
				/>
				<div className='text-[48px] font-bold uppercase'>
					Я продюсерка та менторка експертів.{' '}
				</div>
				<div className=' flex justify-between items-center'>
					<div className='max-w-[600px]'>
						<div className='mt-[40px] text-[30px]'>
							І тільки після того, як я зробила собі розпаковку, побачила свої
							таланти, сильні сторони і накопичений потенціал я усвідомила, що
							сиділа на золотій жилі весь час. Я вирішила діяти і більше не
							витрачати час не те що не моє.
						</div>
						<Image src='/comment.png' alt='comment' width={400} height={500} className='w-[100%] h-auto mt-[10px]'/>
						<div className='mt-[20px] text-[30px] italic'>
							І вирішила робити те що я вмію краще - допомагати експертам
							визначати свій напрям - знаходити що вони люблять і вміють краще і
							заробляти на цьому. І цей міні курс тільки початок, я планую
							робити виступи по всьому світу з темою розкриття і монетизації
							талатів.
						</div>
					</div>
					<Image
						src='/about-me.jpg'
						width={500}
						height={600}
						alt='me'
						className='w-[700px] h-auto ml-[30px]'
					/>
				</div>
			</div>
		</section>
	)
}
