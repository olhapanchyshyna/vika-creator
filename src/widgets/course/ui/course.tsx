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
					className={`text-[36px] lg:text-[65px] text-black text-center font-bold uppercase mb-[70px] ${raleway.className}`}
				>
					<span className='text-[#e1a421] text-[75px] ml-[10px]'>3 </span>
					річного досвіду
				</h2>

				<MainTitle
					text='Він допоміг багатьом експертам'
					className='text-[#e1a421] text-center !text-[40px]'
				/>

				<div className='flex flex-col justify-center mt-[100px] items-center '>
					<div className='flex'>
						<Image
							src='/check-mark.png'
							width={40}
							height={40}
							alt='check-mark'
							className='h-[40px] mr-[10px] mt-[7px]'
						/>
						<div className='text-[30px] max-w-[680px] w-[100%] pb-[52px] pl-[10px]'>
							{' '}
							Виявити свої сильні сторони, особисті і професійні та знайти свій
							напрямок
						</div>
					</div>
					<div className='flex'>
						<Image
							src='/check-mark.png'
							width={40}
							height={40}
							alt='check-mark'
							className='h-[40px] mr-[10px] mt-[7px]'
						/>
						<div className='text-[30px] max-w-[680px] w-[100%] pb-[52px] pl-[10px]'>
							{' '}
							Почати цінувати себе та збільшити прайс на послуги і продукти
						</div>
					</div>
					<div className='flex'>
						<Image
							src='/check-mark.png'
							width={40}
							height={40}
							alt='check-mark'
							className='h-[40px] mr-[10px] mt-[7px]'
						/>
						<div className='text-[30px] max-w-[680px] w-[100%] pb-[52px] pl-[10px]'>
							{' '}
							Запусти курс або менторство і збільшити свій дохід в в 2-3 рази
							більше
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
