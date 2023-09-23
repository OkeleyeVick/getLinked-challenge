import Blur from "../Blur";
import Icon from "../Icon";
import Star from "../svg_icons";
import { getPath } from "./header";

export default function Section({ children, style, hasFlexOpp }) {
	return (
		<section
			className={`${
				style ? style : "py-20"
			} scale-[0.98] w-[85%] sm:w-[90%] xl:w-[86%] mx-auto relative gap-x-8 flex  md:flex-row items-center justify-between gap-y-16 ${
				hasFlexOpp ? "flex-col-reverse" : "flex-col"
			}`}>
			{children}
		</section>
	);
}

export function VImage({ scribble, data, image, width, hasBlur, position, hasIcon, hasText, hasStar }) {
	return (
		<div className="v-image md:w-[50%] relative">
			{hasIcon && (
				<>
					<div className="flex items-center gap-x-3">
						<div data-aos="fade-left">
							<Icon iconName="guidance:question-mark" style="h-16 w-16 md:h-24 md:w-24 v-animate-svg" />
						</div>
						<div data-aos="fade-left" data-aos-delay="200">
							<Icon iconName="guidance:question-mark" style="h-24 w-24 md:h-32 md:w-32 v-animate-svg" />
						</div>
						<div data-aos="fade-left" data-aos-delay="350">
							<Icon iconName="guidance:question-mark" style="h-16 w-16 md:h-24 md:w-24 v-animate-svg" />
						</div>
					</div>
				</>
			)}
			{hasBlur && <Blur position={position} />}
			<div className={`v-image-container ${width ? width : "w-4/6"} mx-auto relative`}>
				<Star style="absolute w-6 h-6 z-[-1] -top-4 rotate" />
				<Star style="absolute w-7 h-7 z-[-1] right-0 bottom-0 floatAndBlurChangeColor" />
				<img data-aos={data} src={image} alt={image && getPath(image)} className="img-fluid mx-auto relative" />
				{hasText && (
					<div className="mont absolute flex items-center justify-center text-center mt-6 w-full h-full inset-0 font-bold text-xl sm:text-2xl text-white">
						The Big <br /> Idea
					</div>
				)}
				{scribble && (
					<div className="absolute bottom-0 translate-y-14 right-0">
						<img src={scribble} alt={scribble} className="img-fluid" />
					</div>
				)}
			</div>
		</div>
	);
}

export function VContent({ children, width }) {
	return (
		<div className="md:w-[50%] relative">
			<div className={`flex flex-col gap-y-5 mx-auto ${width ? width : "w-full"}`}>{children}</div>
		</div>
	);
}

export function VTitle({ title, subtitle, dataForTitle, dataForSubTitle }) {
	return (
		<div className={` ${subtitle && "flex flex-col items-center text-center md:text-start md:items-start gap-y-1"} cd`}>
			<h1 className="font-bold text-3xl [word-spacing:2px] tracking-wide text-white" {...dataForTitle}>
				{title}
			</h1>
			{subtitle && (
				<h2 {...dataForSubTitle} className="text-secondary text-3xl font-bold">
					{subtitle}
				</h2>
			)}
		</div>
	);
}
