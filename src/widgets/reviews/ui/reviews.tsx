import MainTitle from '@/entities/main-title/ui/main-title'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/ui/ui/carousel'
import Image from 'next/image'

export default function Reviews() {
	return (
		<section className=' py-[80px] 2xl:py-[100px] px-[60px]  mt-[-1px]'>
			<div className='container'>
				<MainTitle text='Відгуки' className='text-center mb-[100px]' />
				<div>
					<div className='m-auto mt-[60px] flex '>
						<Carousel
							className='m-auto rounded-[40px] '
							opts={{
								align: 'start',
							}}
						>
							<CarouselContent className='w-[800px]'>
								<CarouselItem className=' '>
									<Image
										src='/rev-1.jpeg'
										className='h-auto'
										alt='rev'
										width={800}
										height={600}
									/>
								</CarouselItem>
								<CarouselItem className=' '>
									<Image
										src='/rev-2.jpeg'
										className='h-auto'
										alt='rev'
										width={800}
										height={600}
									/>
								</CarouselItem>
								<CarouselItem className=' '>
									<Image
										src='/rev-3.jpeg'
										className='h-auto'
										alt='rev'
										width={800}
										height={600}
									/>
								</CarouselItem>
								<CarouselItem className=' '>
									<Image
										src='/rev-4.jpeg'
										className='h-auto'
										alt='rev'
										width={800}
										height={600}
									/>
								</CarouselItem>
								<CarouselItem className=' '>
									<Image
										src='/rev-6.jpeg'
										className='h-auto'
										alt='rev'
										width={800}
										height={600}
									/>
								</CarouselItem>
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>

					<div className='text-white text-[30px] font-bold mt-[100px]'>
						Єдине, що вас відрізняє від інших експертів це ваші природні таланти
						(супер сила) та ваш унікальний досвід. Але коли у вас багато
						дипломів, навичок, експретизи в різниз напрямках важко визначитися з
						одним напрямкою та темою, бо вам може здатися, що це обмежує вас.
						Але насправді напрямок допомагає вам швидше монетизувати накопичений
						досвід та таланти.
					</div>
				</div>
			</div>
		</section>
	)
}
