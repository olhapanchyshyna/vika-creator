import { MediaLinks } from '@/features/media-links/ui/media-links'
import Link from 'next/link'

export default function Footer() {
	return (
		<section className='bg-white py-[60px] 2xl:py-[80px] px-[60px]'>
			<div className='container flex justify-between items-center'>
				<div>
					<MediaLinks />
					<div className='mt-[40px]'>© 2024. Усі права захищені </div>
				</div>

				<div className='flex flex-col'>
					<Link className='text-[20px]' href='/privacy-policy' target='_blank'>
						Політика конфіденційності
					</Link>
					<Link className='text-[20px]' href='/public-offer' target='_blank'>
						Публічна оферта
					</Link>
				</div>
			</div>
		</section>
	)
}
