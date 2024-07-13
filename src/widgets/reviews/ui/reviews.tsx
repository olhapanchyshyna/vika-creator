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
								className='m-auto rounded-[40px] h-[400px]'
								opts={{
									align: 'start',
								}}
							>
								<CarouselContent className='w-[600px] '>
									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/iryna_farbota/'
											target='_blank'
										>
											<Image
												src='/rev-5.jpeg'
												className='h-auto'
												alt='rev'
												width={800}
												height={600}
											/>
										</Link>
									</CarouselItem>
									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/gaya.arushanian.art/ '
											target='_blank'
										>
											<Image
												src='/rev-1.jpeg'
												className='h-auto'
												alt='rev'
												width={800}
												height={600}
											/>
										</Link>
									</CarouselItem>
									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/korovytskyi/'
											target='_blank'
										>
											<Image
												src='/rev-2.jpeg'
												className='h-auto'
												alt='rev'
												width={800}
												height={600}
											/>
										</Link>
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
										<Link
											href='https://www.instagram.com/olyasitkovskaya/'
											target='_blank'
										>
											<Image
												src='/rev-4.jpeg'
												className='h-auto'
												alt='rev'
												width={800}
												height={600}
											/>
										</Link>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						</div>

						<div className='m-auto mt-[60px] flex '>
							<Carousel
								className='m-auto rounded-[40px] '
								opts={{
									align: 'start',
								}}
							>
								<CarouselContent className='w-[600px]'>
									<CarouselItem className=' '>
										<iframe
											src='https://www.youtube.com/embed/mwwCLSFSZC0'
											className='w-[100%] h-[400px]'
										></iframe>
									</CarouselItem>
									<CarouselItem className=' '>
										<iframe
											src='https://www.youtube.com/embed/cReZt0TERyc'
											className='w-[100%] h-[400px]'
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
