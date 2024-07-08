import Image from 'next/image'

export default function AboutMe() {
	return (
		<section className='container bg-white py-[60px] px-[60px] flex justify-between mt-[-1px]'>
			
			<div className='max-w-[700px]'>
				<div className='text-[46px] font-bold text-[#E1A421] uppercase'>Мене звати Віка Мірча,</div>
				<br/>
				<div className='text-[30px]'>Я продюсерка та менторка експертів. </div>
				<div className='mt-[40px] text-[32px] rounded-lg bg-[#50584B] text-white py-[30px] px-[20px]'>Моя місія - допомагати експертам реалізовувати свій потенціал 😎</div>
				<div className='mt-[40px] text-[30px]'>Я завжди бачила і підсвічувала сильні сторони оточуючим і робила розпаковки не свідомо. Коли прийшла в продюсування 3 роки назад то додала до цього маркетингові інструменти</div>
			</div>
			<Image src='/about-me.jpg' width={500} height={600} alt=""/>
		</section>
	)
}
