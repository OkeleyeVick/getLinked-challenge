import React from "react";
import AnchorLink from "../AnchorLink";
import Logo from "../../assets/media/images/getlinked-logo.png";
import { getPath } from "./header";
import Icon from "../Icon";
import Star from "../svg_icons";

export default function Footer() {
	return (
		<div className="overflow-hidden">
			<footer className="text-white mont bg-[#100B20] w-full pt-20 isolate overflow-hidden">
				<div className="absolute opacity-80 stars-group-8"></div>
				<div className="absolute opacity-80 stars-group-7"></div>
				<div className="absolute opacity-80 stars-group-8"></div>
				<div className="absolute opacity-80 stars-group-7"></div>
				<div className="v-main-footer lg:grid lg:grid-cols-12 mb-12 overflow-hidden">
					<div className="md:col-start-2 md:col-end-12 flex flex-col md:flex-row justify-center items-stretch gap-x-6 gap-y-10 px-6 lg:px-3">
						<div data-aos="fade-down" className="md:w-[43%] flex flex-col gap-y-8 justify-between items-start">
							<div className="flex flex-col gap-y-8">
								<div className="v-logo">
									<AnchorLink to="/">
										<img src={Logo} alt={getPath(Logo)} className="img-fluid w-32 md:w-44" />
									</AnchorLink>
								</div>
								<span className="text-[.79rem] leading-5">
									Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young
									and talented individuals in the field of technology
								</span>
							</div>
							<span className="flex items-center space-x-2">
								<span className="text-[.78rem] [word-spacing:2px]">Terms of Use</span>
								<span className="inline h-5 w-[1.3px] bg-secondary"></span>
								<span className="text-[.78rem] [word-spacing:2px]">Privacy Policy</span>
							</span>
						</div>
						<div data-aos="fade-down" data-aos-delay="200" className="md:w-[25%] relative">
							<h6 className="v-title text-secondary font-semibold text-lg">Useful Links</h6>
							<ul className="flex flex-col mt-5">
								{ul1.map(({ linkName, path }) => (
									<AnchorLink
										key={linkName}
										href={path}
										style="hover:text-secondary font-medium w-max tracking-wide text-[.85rem] py-3 md:hover:ps-3">
										{linkName}
									</AnchorLink>
								))}
							</ul>
							<span className="flex items-center gap-x-4 mt-2 relative">
								<Star style="absolute w-6 h-6 rotateWithColor right-0 top-12" />
								<span className="text-primary text-sm mont font-semibold">Share on</span>
								<ul className="flex items-center gap-x-2">
									{socialLinks.map(({ icon, link }) => (
										<AnchorLink href={link} key={icon} style="hover:text-secondary !duration-75 text-white duration-200">
											<Icon iconName={icon} style="w-5 h-5 !duration-75" />
										</AnchorLink>
									))}
								</ul>
							</span>
						</div>
						<div data-aos="fade-down" data-aos-delay="400" className="md:w-[28%]">
							<h6 className="v-title text-secondary font-semibold text-lg">Contact Us</h6>
							<ul className="flex flex-col mt-5 gap-y-4">
								{contactLinks.map(({ linkTitle, url, icon, size, style }) => (
									<AnchorLink key={icon ?? linkTitle} href={url} style="flex items-start gap-x-4 hover:text-secondary !duration-75">
										<Icon iconName={icon} style={`${size}`} />
										<span className={`text-[.79rem] block tracking-wide ${style ? style : "w-2/5 xs:1/2 md:w-1/3"}`}>{linkTitle}</span>
									</AnchorLink>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="post-footer text-center py-5">
					<span className="text-[.79rem]">All rights reserved. &copy; getlinked Ltd.</span>
				</div>
			</footer>
		</div>
	);
}

const ul1 = [
	{ linkName: "Overview", path: "#" },
	{ linkName: "Timeline", path: "#" },
	{ linkName: "FAQs", path: "#" },
	{ linkName: "Register", path: "/register" },
];

const socialLinks = [
	{ url: "#", icon: "jam:instagram" },
	{ url: "#", icon: "simple-icons:x" },
	{ url: "#", icon: "ri:facebook-fill" },
	{ url: "#", icon: "basil:linkedin-solid" },
];

const contactLinks = [
	{ url: "#", icon: "fa6-solid:phone-volume", size: "w-4 h-4", linkTitle: "+234 6707653444", style: "text-nowrap" },
	{
		url: "#",
		icon: "fluent:location-48-filled",
		size: "w-5 h-5",
		linkTitle: `27,Alara Street Yaba 100012 Lagos State`,
	},
];
