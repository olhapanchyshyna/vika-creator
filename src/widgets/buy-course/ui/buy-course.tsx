import MainTitle from '@/entities/main-title/ui/main-title'
import Timer from '@/features/timer/ui/timer'
import Image from 'next/image'
import Link from 'next/link'

type Url = string;

const PAYMENTLINK: Url = process.env.PAYMENTLINK as Url;

export default function BuyCourse() {
	return (
		<section className='py-[80px] 2xl:py-[100px] px-[60px] '>
			<div className='container flex justify-between'>
				<div className='max-w-[600px] mr-[20px]'>
					<MainTitle
						text='Доєднатись до експрес курсу за'
						className='mb-[100px] !leading-normal'
					/>
					<div className='text-[100px] text-[#e1a421] font-bold'>280 грн</div>
					<button className='text-[30px] bg-white rounded-xl py-[20px] px-[30px] mt-[50px] cursor-pointer hover:bg-[#e1a421]'>
						<Link href={PAYMENTLINK} target='_blank'>
							Записатись на курс
						</Link>
					</button>
				</div>
				<div className='flex flex-col items-center max-w-[600px]'>
					<div className='text-center mb-[10px] text-[45px] text-white'>
						ДО ЗАКІНЧЕННЯ АКЦІЇ ЗАЛИШИЛОСЬ:
					</div>

					<Timer />
					<Image
						src='/by-course.jpg'
						width={300}
						height={400}
						alt='me'
						className='2xl:w-[400px] w-[300px] h-auto mt-[30px]'
					/>
				</div>
			</div>
		</section>
	)
}
