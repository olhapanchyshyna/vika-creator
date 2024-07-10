import MainTitle from '@/entities/main-title/ui/main-title'
import Image from 'next/image'

export default function Reviews() {
	return (
		<section className=' py-[80px] 2xl:py-[100px] px-[60px]  mt-[-1px]'>
			<div className='container'>
				<MainTitle text='Відгуки' className='text-center mb-[100px]' />
				<div>
					
					<div className='flex justify-between'>
						<Image
							src='/about-me.jpg'
							width={500}
							height={10}
							alt=''
							className='m-auto my-[50px]'
						/>
						<Image
							src='/about-me.jpg'
							width={500}
							height={10}
							alt=''
							className='m-auto  my-[50px]'
						/>
					</div>

					<div className='text-white text-[30px]'>
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
