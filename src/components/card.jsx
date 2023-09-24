import AnchorLink from "./AnchorLink";
import Icon from "./Icon";
import { DoubleStars } from "./svg_icons";
import Atropos from "atropos/react";

export default function Card() {
	return (
		<div data-aos="fade-left">
			<div className="md:hidden border border-solid border-secondary mt-8 bg-white/[0.03] shadow-lg py-20 px-10 lg:px-16 h-full rounded-[4px] relative mont">
				<DoubleStars style="top-1/2 left-1/2 absolute w-8 h-8 floatAndBlurChangeColor z-[-1]" />
				<span className="leading-7 flex items-center lg:items-start text-[.8rem] text-white">
					At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy
					outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our
					event, you consent to the practices described in this policy.
				</span>
				<div className="flex flex-col gap-y-5 mt-6">
					<div className="title space-y-2">
						<h2 className="text-secondary font-semibold text-lg">Licensing Policy</h2>
						<h6 className="text-white font-medium text-base tracking-wide">Here are terms of our Standard License:</h6>
					</div>
					<div className="flex flex-col gap-y-5 mt-4">
						{data.map(({ text }, index) => (
							<span key={index} data-aos="fade-left" data-aos-delay={`${(index - 0 + 1.5) * 300}`} className="flex items-start gap-x-3">
								<Icon
									iconName="icon-park-solid:check-one"
									style="text-[#2de100] outline-[#2de100] border-[#2de100] p-0 bg-white rounded-full w-6 h-max scale-[1.15] translate-y-[5px]"
								/>
								<span className="text-[.8rem] leading-6 text-white">{text}</span>
							</span>
						))}
					</div>
					<div className="text-center mt-6" data-aos-delay="400">
						<AnchorLink href="#" style="register_link font-semibold text-white text-sm rounded-[4px] py-4 px-12">
							Read More
						</AnchorLink>
					</div>
				</div>
			</div>
			<div className="hidden md:block">
				<Atropos activeOffset={0} shadow={false}>
					<div className="border border-solid border-secondary mt-8 bg-white/[0.03] shadow-lg py-20 px-10 lg:px-16 h-full rounded-[4px] relative mont">
						<DoubleStars style="top-1/2 left-1/2 absolute w-8 h-8 floatAndBlurChangeColor z-[-1]" />
						<span className="leading-7 flex items-center lg:items-start text-[.8rem] text-white">
							At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy
							outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in
							our event, you consent to the practices described in this policy.
						</span>
						<div className="flex flex-col gap-y-5 mt-6">
							<div className="title space-y-2">
								<h2 className="text-secondary font-semibold text-lg">Licensing Policy</h2>
								<h6 className="text-white font-medium text-base tracking-wide">Here are terms of our Standard License:</h6>
							</div>
							<div className="flex flex-col gap-y-5 mt-4">
								{data.map(({ text }, index) => (
									<span key={index} data-aos="fade-left" data-aos-delay={`${(index - 0 + 1.5) * 300}`} className="flex items-start gap-x-3">
										<Icon
											iconName="icon-park-solid:check-one"
											style="text-[#2de100] outline-[#2de100] border-[#2de100] p-0 bg-white rounded-full w-6 h-max scale-[1.15] translate-y-[5px]"
										/>
										<span className="text-[.8rem] leading-6 text-white">{text}</span>
									</span>
								))}
							</div>
							<div className="text-center mt-6" data-aos-delay="400">
								<AnchorLink href="#" style="register_link font-semibold text-white text-sm rounded-[4px] py-4 px-12">
									Read More
								</AnchorLink>
							</div>
						</div>
					</div>
				</Atropos>
			</div>
		</div>
	);
}

const data = [
	{
		text: "The Standard License grants you a non-exclusive right to navigate and register for our event",
	},
	{
		text: "You are licensed to use the item available at any free source sites, for your project developement",
	},
];
