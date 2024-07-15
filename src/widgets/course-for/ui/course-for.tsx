import MainTitle from '@/entities/main-title/ui/main-title'

export default function CourseFor() {
	return (
		<section className='py-[80px] 2xl:py-[100px] px-[60px] bg-white  mt-[-1px]'>
			<div className='container'>
				<MainTitle text='ДАНИЙ КУРС ДЛЯ:' className='text-center mb-[100px] text-black' />

				<div className='flex justify-between m-auto'>
					<div className='flex flex-col mr-[15px]'>
						<div className='w-[550px] bg-[#e1a421]  px-[20px] py-[10px] rounded-2xl text-[30px] mb-[30px] h-[300px]'>
							- експертів-початківців, які хочуть знайти своє місце в інфобізі:
							знайти свій напрямок, мати прості і дієві інструменти для
							заробітку на своїй експертності
						</div>
						<div className='w-[550px] bg-[#e1a421]  px-[20px] py-[10px] rounded-2xl text-[30px] h-[300px]'>
							- експертів які мають багато дипломів, різнопланового досвіду і
							навичок, але не знають що з чим робити і як заробляти на своїй
							експретизі
						</div>
					</div>
					<div className='flex flex-col ml-[15px]'>
						<div className='w-[550px] bg-[#e1a421]  px-[20px] py-[10px] rounded-2xl text-[30px] mb-[30px] h-[300px]'>
							- для багатопрофільних експертів, які мають гарні результати в
							різних нішах, але хочуть заробляти на своїх талантах - те що
							найбільше подобається
						</div>
						<div className='w-[550px] bg-[#e1a421]  px-[20px] py-[10px] rounded-2xl text-[30px] h-[300px]'>
							- для власників консалтингових компаній, які хочуть перейти в
							онлайн і не знать з чого почати
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
