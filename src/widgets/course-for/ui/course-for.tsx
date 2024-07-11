import MainTitle from '@/entities/main-title/ui/main-title'

export default function CourseFor() {
	return (
		<section className='py-[80px] 2xl:py-[100px] px-[60px]  mt-[-1px]'>
			<div className='container'>
				<MainTitle text='ДАНИЙ КУРС ДЛЯ:' className='text-center mb-[100px]' />

				<div className='flex justify-between'>
					<div className='flex flex-col'>
						<div></div>
						<div></div>
					</div>
					<div className='flex flex-col'>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</section>
	)
}
