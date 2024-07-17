import MainTitle from '@/components/main-title'
import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'] })

export default function MyActivities() {
	return (
		<section className='2xl:py-[100px] py-[80px]'>
			<div className='container'>
				<MainTitle text='Моя діяльність в цифрах' className='text-center' />

				<div className='flex flex-col justify-between mt-[100px]'>
					<div className='flex justify-between items-center'>
						{/* 1 */}
						<div className='max-w-[400px] w-[100%]'>
							<div
								className={`text-center 2xl:text-[100px] text-[70px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
							>
								8
							</div>
							<div className='text-center text-[28px] text-white leading-[normal]'>
								років в сфері маркетингу
							</div>
						</div>
						{/* 2 */}
						<div className='2xl:max-w-[460px] max-w-[360px] w-[100%]'>
							<div
								className={`text-center 2xl:text-[100px] text-[70px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
							>
								700 000
							</div>
							<div className='text-center text-[28px] text-white leading-[normal]'>
								грн оберту на місяць кращої воронки
							</div>
						</div>
						{/* 3 */}
						<div className='max-w-[320px] w-[100%]'>
							<div
								className={`text-center 2xl:text-[100px] text-[70px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
							>
								7
							</div>
							<div className='text-center text-[28px] text-white leading-[normal]'>
								років <br /> навчаю і консультую
							</div>
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='max-w-[400px] w-[100%] mt-[70px]'>
							<div
								className={`text-center 2xl:text-[100px] text-[70px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
							>
								665 000
							</div>
							<div className='text-center text-[28px] text-white leading-[normal]'>
								грн приніс останній запуск
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
