import MainTitle from '@/entities/main-title/ui/main-title'
import { Raleway } from 'next/font/google'
import Image from 'next/image'

const raleway = Raleway({ subsets: ['latin'] })

export default function Course() {
	return (
		<section className='bg-white py-[100px]'>
			<div className='container'>
				<MainTitle
					text='Цей курс – підсумок мого '
					className='text-black text-center mb-[30px]'
				/>
				<h2
					className={`text-[36px] lg:text-[65px] text-black text-center font-bold leading-[35px] uppercase mb-[70px] ${raleway.className}`}
				>
					<span className='text-[#e1a421] text-[75px] ml-[10px]'>3 </span>
					річного досвіду
				</h2>

				<MainTitle
					text='Він допоміг багатьом експертам'
					className='text-[#e1a421] text-center !text-[40px]'
				/>

				<div className='flex flex-col justify-center mt-[100px] items-center text-center'>
					<Image
						src='/marker.png'
						width={500}
						height={10}
						alt=''
						className='h-[10px]'
					/>
					<div className='text-[30px] max-w-[700px] w-[100%] py-[30px]'>
						{' '}
						Виявити свої сильні сторони, особисті і професійні та знайти свій
						напрямок
					</div>
					<Image
						src='/marker.png'
						width={500}
						height={10}
						alt=''
						className='h-[10px]'
					/>
					<div className='text-[30px] max-w-[700px] w-[100%] py-[30px]'>
						{' '}
						Почати цінувати себе та збільшити прайс на послуги і продукти
					</div>
					<Image
						src='/marker.png'
						width={500}
						height={10}
						alt=''
						className='h-[10px]'
					/>
					<div className='text-[30px] max-w-[700px] w-[100%] py-[30px]'>
						{' '}
						Запусти курс або менторство і збільшити свій дохід в в 2-3 рази
						більше
					</div>
					<Image
						src='/marker.png'
						width={500}
						height={10}
						alt=''
						className='h-[10px]'
					/>
				</div>
			</div>
		</section>
	)
}
