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
						<div className='m-auto mb-[60px] flex '>
							<Carousel
								className='m-auto rounded-[40px] h-[650px] w-[800px] py-[20px] px-[30px] bg-[#e1a421]'
								opts={{
									align: 'start',
								}}
							>
								<CarouselContent className='w-[750px] '>
									<CarouselItem className='rounded-2xl '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href='https://www.instagram.com/iryna_farbota/'
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/woman.png'
													className='mr-[20px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className='text-[30px] font-medium'>Ірина</div>
													<div>смм спеціалістка, модель</div>
												</div>
											</Link>

											<div className='mt-[20px]'>
												Хотіла подякувати за експертний розбір особистості. Вже
												давно хотіла зрозуміти в яких напрямках рухатись, та що
												найкраще використовувати в позиціонуванні себе, як
												експерта. Я подивилась на свої цілі та загалом на себе
												новими очима, це мене надихнуло на нові звершення та
												трішки зміну фокусу в роботі. Окрім того консультація з
												тобою дала зрозуміти, що ж варто все-таки відставити, а
												що варто залишити. Дякую за допомогу з вибором напрямку
												та прощупування професійної особистості в мені. Наразі я
												набагато краще розумію в якому напрямку рухатимусь 🤍
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href='https://www.instagram.com/gaya.arushanian.art/ '
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/woman.png'
													className='mr-[20px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className='text-[30px] font-medium'>Гаяне</div>
													<div>
														Підприємиця, арт менторка, авторка освітніх курсів
														для митців
													</div>
												</div>
											</Link>
											<div className='text-white text-[25px] my-[10px]'>
												<div className='mt-[20px]'>
													Робили разом запуск. Вікторія дуже чітко розкрила мою
													експертність, підготувала план запуску. Підтримувала
													запуск та давала чіткі рекомендації щодо роботи.{' '}
												</div>
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href='https://www.instagram.com/korovytskyi/ '
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/man.png'
													className='mr-[20px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className='text-[30px] font-medium'>Сергій</div>
													<div>експерт зі схуднення, тренер</div>
												</div>
											</Link>
											<div className='text-white text-[25px] my-[10px]'>
												<div className='mt-[20px]'>
													Дякую за консультацію! Багато чого для себе взвяв
													корисного в напрямку розкриття експертності! Дуже
													продуктивно та результативно
												</div>
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href='https://www.instagram.com/olyasitkovskaya/ '
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/woman.png'
													className='mr-[20px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className='text-[30px] font-medium'>Ольга</div>
													<div>експертка з голосу</div>
												</div>
											</Link>
											<div className='text-white text-[25px] my-[10px]'>
												<div className='mt-[20px]'>
													Нарешті я запустила передзапуск! Просто повідомляю
													тобі, щоб ти знала, що твої зусилля не пройшли
													даремно! Потік закрився менше ніж за годину (10 осіб)
												</div>
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href=''
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/woman.png'
													className='mr-[20px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className='text-[30px] font-medium'>
														Світлана
													</div>
													<div>нумізмат, історик</div>
												</div>
											</Link>
											<div className='text-white text-[25px] my-[10px]'>
												<div className='mt-[20px]'>
													Завдяки розпаковці відчула як складне презентувати
													просто. Віка є вираженням того як жити сьогодні:
													будувати проект з найменшими витратами, пояснювати
													легко і що потрібно оточуючим.
												</div>
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/margaritasichkar/'
											target='_blank'
											className='flex items-center mb-[10px]'
										>
											<Image
												src='/woman.png'
												className='mr-[20px]'
												alt='profile'
												width={100}
												height={100}
											/>
											<div className='text-white text-[25px] my-[10px]'>
												<div className='text-[30px] font-medium'>Маргарита Січкарь</div>
												<div>блогерка, книжкова продюсерка, авторка освітніх курсів для авторів
												</div>
											</div>
										</Link>
										<iframe
											src='https://www.youtube.com/embed/mwwCLSFSZC0'
											className='w-[100%] h-[400px]'
											allowFullScreen
										></iframe>
									</CarouselItem>
								
									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/natalia_finelife/'
											target='_blank'
											className='flex items-center mb-[10px]'
										>
											<Image
												src='/woman.png'
												className='mr-[20px]'
												alt='profile'
												width={100}
												height={100}
											/>
											<div className='text-white text-[25px] my-[10px]'>
												<div className='text-[30px] font-medium'> Наталія 
												</div>
												<div>духовний наставник, авторка освітніх продуктів
												</div>
											</div>
										</Link>
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
					</div>
				</div>
			</div>
		</section>
	)
}
