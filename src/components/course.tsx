import MainTitle from '@/components/main-title'
import { Raleway } from 'next/font/google'
import Image from 'next/image'

const raleway = Raleway({ subsets: ['latin'] })

export default function Course() {
	return (
		<section className='bg-white py-[100px]'>
			<div className='container'>
				<MainTitle
					text='Цей курс – допоміг багатьом експертам'
					className='text-black text-center mb-[30px]'
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
							Виявити свої сильні особисті і професійні сторони та знайти свій
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
							Запустити курс або менторство і збільшити свій дохід в 2-3 рази
							більше
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}