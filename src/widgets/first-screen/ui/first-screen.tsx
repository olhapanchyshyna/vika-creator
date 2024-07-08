import Image from 'next/image'

export default function FirstScreen() {
	return (
		<section className='main-green-bg h-[100vh] bg-cover bg-no-repeat bg-center flex text-white items-center pr-[60px]'>
			{/* <Image
				src='/test.png'
				className='!relative h-full !w-[650px]'
				alt='main'
				fill
				style={{ objectFit: 'cover', objectPosition: 'center' }}
			/> */}
			<div className='h-full relative w-[600px]'>
				<Image
					src='/test.png'
					className='!absolute bottom-0'
					alt='main'
					width={600}
					height={600}
				/>
			</div>

			<div className='w-[700px] justify-end text-white ml-[40px]'>
				<div className='text-[25px] mb-[20px] font-bold'>Старт 17 липня</div>
				<h1 className='text-[36px] text-[#E1A421] font-bold'>
					Експрес курс:
					<br />
					<span className=' text-white font-bold'>
						Як багатопрофільному експерту знайти свій напрямок та почати на
						цьому заробляти?
					</span>
				</h1>
				<div className='mt-[60px] text-[18px] w-[400px] '>
					3 уроки, які допоможуть знайти сильні сторони та почати заробляти на
					них
				</div>
				<div className='rounded-lg bg-[#E1A421] mt-[40px] w-[200px] py-[20px] px-[30px] text-center text-[30px]'>
					280 грн
				</div>
				<div className='mt-[100px] text-[18px] w-[400px] '>
					<span className='text-[#E1A421] font-bold'>Бонус!</span> робочий зошит{' '}
					{'Як розпакувати свою супер силу та автентичність'}
				</div>
			</div>
		</section>
	)
}
