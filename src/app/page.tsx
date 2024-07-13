import Benefits from '@/entities/benefits/ui/benefits'
import AboutMe from '@/widgets/about-me/ui/about-me'
import BuyCourse from '@/widgets/buy-course/ui/buy-course'
import CourseFor from '@/widgets/course-for/ui/course-for'
import Course from '@/widgets/course/ui/course'
import ExpertsReviews from '@/widgets/experts-reviews/ui/experts-reviews'
import Faq from '@/widgets/faq/ui/faq'
import FirstScreen from '@/widgets/first-screen/ui/first-screen'
import Footer from '@/widgets/footer/ui/footer'
import MyActivities from '@/widgets/my-activities/ui/my-activities'
import Program from '@/widgets/program/ui/program'
import Reviews from '@/widgets/reviews/ui/reviews'

export default function Home() {
	return (
		<main className=''>
			<FirstScreen />
			<Benefits />
			<AboutMe />
			<MyActivities />
			<Course />
			<Program />
			<ExpertsReviews />
			<Reviews />
			<div className=' bg-[#e1a421] px-[50px] py-[50px] text-white text-[30px] font-bold'>
				<div className='container'>
					Єдине, що вас відрізняє від інших експертів це ваші природні таланти
					(супер сила) та ваш унікальний досвід. Але коли у вас багато дипломів,
					навичок, експретизи в різниз напрямках важко визначитися з одним
					напрямкою та темою, бо вам може здатися, що це обмежує вас. Але
					насправді напрямок допомагає вам швидше монетизувати накопичений
					досвід та таланти.
				</div>{' '}
			</div>
			<Faq />
			<CourseFor />
			<BuyCourse/>
			<Footer/>
		</main>
	)
}
