import MainTitle from '@/entities/main-title/ui/main-title'
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/ui/card'
import { Raleway } from 'next/font/google'
import Image from 'next/image'

const raleway = Raleway({ subsets: ['latin'] })

const cardsItem = [
	{
		title: '1 ',
		descr:
			'Як виявити та розпакувати супер силу (те що подобається найбільше та вдається легше за все)',
		img: '/power.png',
		alt: 'power',
	},
	{
		title: '2 ',
		descr: 'Як виявити ваші професійні сильні сторони та таланти  ',
		img: '/task.png',
		alt: 'task',
	},
	{
		title: '3 ',
		descr:
			'Як знайти нішу в якій є високий попит і найбільш швидка монетизація вашого досвіду та супер сили',
		img: '/niche.png',
		alt: 'niche',
	},
	{
		title: '4 ',
		descr: 'Як упакувати/переупакувати ваш досвід в новий продукт або послугу',
		img: '/experience.png',
		alt: 'experience',
	},
	{
		title: '5 ',
		descr:
			'Як скласти покроковий план для монетизації вашого досвіду та реаліазацїї',
		img: '/ppc.png',
		alt: 'ppc',
	},
	{
		title: '',
		descr: 'Персональний розбір вашого кейсу на груповій Zoom ceccії ',
		img: '/win.png',
		alt: 'win',
	},
]

export default function Program() {
	return (
		<section className='py-[80px] 2xl:py-[100px] px-[60px] '>
			<div className='container'>
				<MainTitle text='Програма' className='text-center mb-[100px]' />
				<div className='flex justify-between flex-wrap '>
					{cardsItem.map((item, index) => {
						return (
							<Card
								key={item.title}
								className={`m-auto h-[450px] w-[450px] rounded-[40px]  bg-[#e1a421] px-[10px] py-[40px] text-center md:mx-[5px] md:my-[10px] justify-between`}
							>
								<CardHeader className='p-0 flex flex-row m-auto justify-center items-end mb-[20px]'>
									<CardTitle
										className={`mb-[25px] text-center text-[120px] font-bold leading-[50px] text-[#ffff] ${raleway.className}`}
									>
										{item.title}
									</CardTitle>
									<Image
										src={item.img}
										alt={item.alt}
										width={100}
										height={200}
										className=' mb-[10px]'
									/>
								</CardHeader>
								<div className='text-[#ffff] text-[40px] font-bold'>
									{' '}
									{index === 5 ? 'Masremind' : 'Урок'}{' '}
								</div>
								<CardDescription className='p-0 text-center text-[29px] font-medium leading-[38px] text-[#ffff] mt-[20px]'>
									{item.descr}
								</CardDescription>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}
