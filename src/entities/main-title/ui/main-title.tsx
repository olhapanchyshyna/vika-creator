import { cn } from '@/shared/lib/utils'
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

type MainTitleProps = {
	text: string
	className?: string
}

export default function MainTitle({ text, className }: MainTitleProps) {
	return (
		<h2
			className={cn(
				`text-[36px] lg:text-[65px] text-white font-bold leading-[35px] uppercase ${raleway.className}`,
				className
			)}
		>
			{text}
		</h2>
	)
}
