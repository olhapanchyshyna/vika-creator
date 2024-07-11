import Benefits from '@/entities/benefits/ui/benefits'
import AboutMe from '@/widgets/about-me/ui/about-me'
import CourseFor from '@/widgets/course-for/ui/course-for'
import Course from '@/widgets/course/ui/course'
import ExpertsReviews from '@/widgets/experts-reviews/ui/experts-reviews'
import Faq from '@/widgets/faq/ui/faq'
import FirstScreen from '@/widgets/first-screen/ui/first-screen'
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
      <Course/>
			<Program/>
			<ExpertsReviews/>
			<Reviews/>
			<Faq/>
			<CourseFor/>
		</main>
	)
}
