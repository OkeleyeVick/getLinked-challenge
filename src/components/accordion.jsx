import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import Icon from "./Icon";

import { useEffect } from "react";
import AOS from "aos";
import Star from "./svg_icons";
export default function AccordionComponent() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Accordion>
				<Star style="text-primary rotate left-1/2 top-1/2 blur-[1px] absolute w-8 z-[-1] h-8" />
				{accordionItems.map(({ title, body }, index) => (
					<div className="mont" data-aos="fade-right" data-aos-delay={`${(index - 0 + 1.5) * 200}`} key={index}>
						<AccordionItem>
							{({ open }) => (
								<>
									<AccordionHeader
										className={`w-full pt-4 pb-4 sm:py-6 border-b-[1.5px] shadow-[0_9px_8px_-6px] border-secondary ${
											open ? "shadow-secondary" : " shadow-transparent"
										}`}>
										<span className="flex items-end justify-between gap-x-3 w-full">
											<h1 className="text-white text-sm text-start">{title}</h1>
											<Icon
												iconName={`${open ? "ic:round-minus" : "ic:round-plus"}`}
												style={`${open ? "rotate-180" : "rotate-0"} text-secondary w-6 h-6`}
											/>
										</span>
									</AccordionHeader>
									<AccordionBody>
										<div className={`py-4 pr-8 ${open ? "scale-95" : "scale-100"}`}>
											<span className={`text-[.9rem] text-white/90`}>{body}</span>
										</div>
									</AccordionBody>
								</>
							)}
						</AccordionItem>
					</div>
				))}
			</Accordion>
		</>
	);
}

const accordionItems = [
	{
		title: "Can I work on a project I started before the hackathon?",
		body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, expedita iure quibusdam earum accusamus qui error maiorestemporibus unde vel, nam omnis suscipit distinctio sunt repellendus dolorum, deleniti sint exercitationem?",
	},
	{
		title: "What happens if I need help during the hackathon?",
		body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, expedita iure quibusdam earum accusamus qui error maiorestemporibus unde vel, nam omnis suscipit distinctio sunt repellendus dolorum, deleniti sint exercitationem?",
	},
	{
		title: "What happens if I don't have an idea for a project?",
		body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, expedita iure quibusdam earum accusamus qui error maiorestemporibus unde vel, nam omnis suscipit distinctio sunt repellendus dolorum, deleniti sint exercitationem?",
	},
	{
		title: "Can I join a team or do I have to come with one?",
		body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, expedita iure quibusdam earum accusamus qui error maiorestemporibus unde vel, nam omnis suscipit distinctio sunt repellendus dolorum, deleniti sint exercitationem?",
	},
	{
		title: "What happens after the hackathon ends",
		body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, expedita iure quibusdam earum accusamus qui error maiorestemporibus unde vel, nam omnis suscipit distinctio sunt repellendus dolorum, deleniti sint exercitationem?",
	},
	{
		title: "Can I work on a project I started before the hackathon?",
		body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, expedita iure quibusdam earum accusamus qui error maiorestemporibus unde vel, nam omnis suscipit distinctio sunt repellendus dolorum, deleniti sint exercitationem?",
	},
];
