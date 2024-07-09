import MainTitle from '@/entities/main-title/ui/main-title'
import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'] })

export default function MyActivities() {
	return (
		<section className='py-[100px]'>
			<div className='container'>
				<MainTitle text='Моя діяльність в цифрах' className='text-center' />

				<div className='flex flex-col justify-between mt-[100px]'>
					<div className='flex justify-between items-center'>
						{/* 1 */}
						<div className='max-w-[400px] w-[100%]'>
							<div
								className={`text-center text-[100px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
							>
								8
							</div>
							<div className='text-center text-[34px] text-white leading-[normal]'>
								років в сфері маркетингу, мала власну СММ агенцію
							</div>
						</div>
						{/* 2 */}
						<div className='max-w-[460px] w-[100%]'>
							<div
								className={`text-center text-[100px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
							>
								100 0000
							</div>
							<div className='text-center text-[34px] text-white leading-[normal]'>
								оберту на місяць кращої воронки
							</div>
						</div>
						{/* 3 */}
						<div className='max-w-[320px] w-[100%]'>
							<div
								className={`text-center text-[100px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
							>
								7
							</div>
							<div className='text-center text-[34px] text-white leading-[normal]'>
								років <br/> навчаю і консультую
							</div>
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='max-w-[400px] w-[100%] mt-[70px]'>
							<div
								className={`text-center text-[100px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
							>
								663 572
							</div>
							<div className='text-center text-[34px] text-white leading-[normal]'>
								приніс останній запуск
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
