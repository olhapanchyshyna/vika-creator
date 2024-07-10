import { Raleway } from 'next/font/google'
import Image from 'next/image'

const raleway = Raleway({ subsets: ['latin'] })

export default function ExpertsReviews() {
	return (
		<section className='bg-white py-[80px] 2xl:py-[100px] px-[60px]  mt-[-1px]'>
			<div className='container'>
				<h2
					className={`text-[36px] lg:text-[65px] text-black text-center font-bold uppercase mb-[100px] ${raleway.className}`}
				>
					Приклади експертів, які
					<span className='text-[#e1a421] text-[65px] ml-[10px]'>
						знайшли напрям{' '}
					</span>
					та
					<span className='text-[#e1a421] text-[65px] ml-[10px]'>
						монетизували{' '}
					</span>
					власний досвід та таланти
				</h2>

				<div>
					<div className='flex justify-between '>
						<div className='flex flex-col items-start w-[600px]'>
							<div className='text-[30px]'>
								<h2 className='text-[50px] text-[#e1a421] font-black'>
									Айті школа
								</h2>
								<div className='text-[30px]'>
									<span className='font-bold text-[30px]'>Що робили? </span>
									<br /> Розпаковку особистості та автентичності, частково
									переупакували курси, зробили прогрів побудовний на
									автентичності та історії експерта Масштабування з 350 000 грн
									на 663 572 грн
								</div>
							</div>
							<Image
								src='/about-me.jpg'
								width={500}
								height={10}
								alt=''
								className='m-auto  mb-0'
							/>
							<div></div>
						</div>
						<div className='flex flex-col items-end w-[610px]'>
							<div className='text-[30px]'>
								<h2 className='text-[50px] text-[#e1a421] font-black '>
									Дитяча нутріціологія
								</h2>
								<div className='text-[30px]'>
									<span className='font-bold '>Що робили? </span>
									<br />
									Розпаковку особистості та автентичності, на основі цього
									переупакувалиі запустили основний продукт Масштабування з 0 до
									$5000 з першого запуску Через пів року оберт виріс до мільйону
									гривень оберту другий рік
								</div>
							</div>
							<Image
								src='/about-me.jpg'
								width={500}
								height={10}
								alt=''
								className='m-auto mt-[20px] mb-0'
							/>
							<div></div>
						</div>
					</div>
					<div className=' text-[30px] mt-[50px] font-bold'>
						В ОБОХ ВИПАДКАХ МИ ОТРИМАЛИ КРУТІ РЕЗУЛЬТАТИ ЗАВДЯКИ ТОМУ ЩО
						ПОЄДНАЛИ СУПЕР СИЛУ, ІСТОРІЮ І ДОСВІД ЕКСПЕРТА В ЗАТРЕБУВАНИЙ
						ПРОДУКТ
					</div>
				</div>
			</div>
		</section>
	)
}
