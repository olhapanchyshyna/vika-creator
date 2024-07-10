import Benefits from '@/entities/benefits/ui/benefits'
import AboutMe from '@/widgets/about-me/ui/about-me'
import Course from '@/widgets/course/ui/course'
import ExpertsReviews from '@/widgets/experts-reviews/ui/experts-reviews'
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
		</main>
	)
}
