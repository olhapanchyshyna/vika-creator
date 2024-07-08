
import AboutMe from '@/widgets/about-me/ui/about-me'
import FirstScreen from '@/widgets/first-screen/ui/first-screen'
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <FirstScreen/>
      <AboutMe/>
    </main>
  );
}
