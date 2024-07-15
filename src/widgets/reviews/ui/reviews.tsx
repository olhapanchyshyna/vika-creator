import MainTitle from '@/entities/main-title/ui/main-title'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/ui/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'

export default function Reviews() {
	return (
		<section className=' py-[80px] 2xl:py-[100px] px-[60px]  mt-[-1px]'>
			<div className='container'>
				<MainTitle
					text='Інші результати клієнтів'
					className='text-center mb-[100px]'
				/>
				<div>
					<div className='flex justify-between'>
						<div className='m-auto mt-[60px] flex '>
							<Carousel
								className='m-auto rounded-[40px] h-[700px]'
								opts={{
									align: 'start',
								}}
							>
								<CarouselContent className='w-[600px] '>
									<CarouselItem className='rounded-2xl  '>
										<Link
											href='https://www.instagram.com/iryna_farbota/'
											target='_blank'
										>
											{/* <Image
												src='/rev-5.jpeg'
												className='h-auto'
												alt='rev'
												width={800}
												height={600}
											/> */}
											<div className='text-white text-[25px] my-[10px]'>
												<div className=''>Ірина</div>
												<div>смм спеціалістка, модель</div>
												<div className='mt-[20px]'>
													Хотіла подякувати за експертний розбір особистості.
													Вже давно хотіла зрозуміти в яких напрямках рухатись,
													та що найкраще використовувати в позиціонуванні себе,
													як експерта. Я подивилась на свої цілі та загалом на
													себе новими очима, це мене надихнуло на нові звершення
													та трішки зміну фокусу в роботі. Окрім того
													консультація з тобою дала зрозуміти, що ж варто
													все-таки відставити, а що варто залишити. Дякую за
													допомогу з вибором напрямку та прощупування
													професійної особистості в мені. Наразі я набагато
													краще розумію в якому напрямку рухатимусь 🤍
												</div>
											</div>

											{/* https://www.instagram.com/gaya.arushanian.art/ */}
										</Link>
									</CarouselItem>
									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/gaya.arushanian.art/ '
											target='_blank'
										>
											{/* <Image
												src='/rev-1.jpeg'
												className='h-auto'
												alt='rev'
												width={800}
												height={600}
											/> */}
											<div className='text-white text-[25px] my-[10px]'>
												<div className=''>Гаяне</div>
												<div>
													Підприємиця, арт менторка, авторка освітніх курсів для
													митців
												</div>
												<div className='mt-[20px]'>
													Робили разом запуск. Вікторія дуже чітко розкрила мою
													експертність, підготувала план запуску. Підтримувала
													запуск та давала чіткі рекомендації щодо роботи.{' '}
												</div>
											</div>
										</Link>
									</CarouselItem>
									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/korovytskyi/'
											target='_blank'
										>
											{/* <Image
												src='/rev-2.jpeg'
												className='h-auto'
												alt='rev'
												width={800}
												height={600}
											/> */}
											<div className='text-white text-[25px] my-[10px]'>
												<div className=''>Сергій</div>
												<div>експерт зі схуднення, тренер</div>
												<div className='mt-[20px]'>
													Дякую за консультацію! Багато чого для себе взвяв
													корисного в напрямку розкриття експертності! Дуже
													продуктивно та результативно
												</div>
											</div>
										</Link>
									</CarouselItem>
									{/* <CarouselItem className=' '>
										<Image
											src='/rev-3.jpeg'
											className='h-auto'
											alt='rev'
											width={800}
											height={600}
										/>
									</CarouselItem> */}
									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/olyasitkovskaya/'
											target='_blank'
										>
											{/* <Image
												src='/rev-4.jpeg'
												className='h-auto'
												alt='rev'
												width={800}
												height={600}
											/> */}
											<div className='text-white text-[25px] my-[10px]'>
												<div className=''>Ольга</div>
												<div>експертка з голосу</div>
												<div className='mt-[20px]'>
													Нарешті я запустила передзапуск! Просто повідомляю
													тобі, щоб ти знала, що твої зусилля не пройшли
													даремно! Потік закрився менше ніж за годину (10 осіб)
												</div>
											</div>
										</Link>
									</CarouselItem>
									<CarouselItem className=' '>
										<Link href='' target='_blank'>
											{/* <Image
												src='/rev-4.jpeg'
												className='h-auto'
												alt='rev'
												width={800}
												height={600}
											/> */}
											<div className='text-white text-[25px] my-[10px]'>
												<div className=''>Світлана</div>
												<div>нумізмат, історик</div>
												<div className='mt-[20px]'>
													Завдяки розпаковці відчула як складне презентувати
													просто. Віка є вираженням того як жити сьогодні:
													будувати проект з найменшими витратами, пояснювати
													легко і що потрібно оточуючим.
												</div>
											</div>
										</Link>
									</CarouselItem>
									<CarouselItem className=' '>
										<iframe
											src='https://www.youtube.com/embed/mwwCLSFSZC0'
											className='w-[100%] h-[400px]'
											allowFullScreen
										></iframe>
									</CarouselItem>
									<CarouselItem className=' '>
										<iframe
											src='https://www.youtube.com/embed/cReZt0TERyc'
											className='w-[100%] h-[400px]'
											allowFullScreen
										></iframe>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						</div>

						{/* <div className='m-auto mt-[60px] flex '>
							<Carousel
								className='m-auto rounded-[40px] '
								opts={{
									align: 'start',
								}}
							>
								<CarouselContent className='w-[600px]'>
									
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	)
}
