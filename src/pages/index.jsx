import Footer from "../components/layout/footer";
import Header, { getPath } from "../components/layout/header";
import Section, { VContent, VImage, VTitle } from "../components/layout/section";
import AnimatedWrapper from "../components/wrapper";
import BulbImage from "../assets/media/images/idea-bulb.png";
import D3Image from "../assets/media/images/3d-lady-sitting.png";
import Blur from "../components/Blur";
import People3d from "../assets/media/images/3d-people.png";
import Thinking from "../assets/media/images/3d-man-thinking.png";
import AccordionComponent from "../components/accordion";
import Shield from "../assets/media/images/lock-gradient.png";
import BoyOnLock from "../assets/media/images/boy-on-lock.png";
import Card from "../components/card";
import Logo2 from "../assets/media/images/wisper-logo-white-new.png";
import Paybox from "../assets/media/images/Paybox-logo.png";
import LibertyLogo from "../assets/media/images/Liberty-companylogo.png";
import Winwise from "../assets/media/images/Winwise-logo.png";
import LibertyLogo1 from "../assets/media/images/Liberty-company-logo-1.png";
import VizulLogo from "../assets/media/images/Vizual-Plus-Logo.png";
import { useEffect } from "react";
import AnchorLink from "../components/AnchorLink";
import Star, { DoubleStars } from "../components/svg_icons";
import Trophy from "../assets/media/images/getlinked-trophy.png";
import MedalCard from "../components/medalCard";
import Bronze from "../assets/media/images/bronze_medal 1.png";
import Silver from "../assets/media/images/silver_medal 1.png";
import Gold from "../assets/media/images/gold_medal 1.png";
import Curl from "../assets/media/images/curved-stroke.png";
import Guy from "../assets/media/images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import Globe from "../assets/media/images/globe-sparkle.png";
import Chain from "../assets/media/images/chain.png";
import Fire from "../assets/media/images/fire.png";
import CountdownTimer from "../components/Time";
import TypewriterComponent from "typewriter-effect";
import HeroParticles from "../components/HeroParticles";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TreeLg from "../components/Tree";
import ideaBulb from "../assets/media/images/bulb-idea.png";
import Scribble from "../assets/media/images/arrow.png";
import AOS from "aos";

export default function LandingPageComponent() {
	useDocumentTitle("Home | getLinked");

	useEffect(() => {
		AOS.init();
	}, []);

	const fromTop = {
		"data-aos": "fade-down",
	};
	const fromTopDelay1 = {
		"data-aos": "fade-down",
		"data-aos-delay": 200,
	};
	const fromBottom = {
		"data-aos": "fade-up",
	};
	const fromLeft = {
		"data-aos": "fade-right",
	};
	const fromLeft1 = {
		"data-aos": "fade-right",
		"data-aos-delay": 200,
	};
	const fromRight = {
		"data-aos": "fade-left",
	};

	return (
		<AnimatedWrapper style="min-h-screen bg-dark flex flex-col items-center">
			<div className="relative isolate overflow-hidden">
				<Blur scale="scale-[1.3]" position="left-1/4 top-12 -translate-x-44" />
				<Header />
				<main className="flex-grow text-white/40 pt-24 lg:pt-10 border-t border-solid border-slate-50/30 lg:border-slate-50/10">
					<Star style="w-5 h-5 absolute left-8 top-1/4 rotate text-white" />
					<div className="v-section opacity-50">
						<span className="v-star"></span>
						<span className="v-star"></span>
						<span className="v-star"></span>
						<span className="v-star"></span>
						<span className="v-star"></span>
						<span className="v-star"></span>
					</div>
					<div className="relative text-center sm:text-end px-4">
						<Star style="w-5 h-5 absolute left-1/2 floating-stars-with-color" />
						<div className="text-container lg:w-[85%] mont relative s499:pr-8 lg:pr-0">
							<h1 className="animate__slower animate__delay-2s animate__fadeIn animate__animated text-white font-bold italic text-lg sm:text-3xl relative">
								Igniting a Revolution in&nbsp; <br className="aonsofao" />
								<span className="special-text relative inline-block">
									<TypewriterComponent
										options={{
											strings: ["HR Innovation"],
											autoStart: true,
											loop: true,
										}}
									/>
									<div className="absolute bottom-0 right-0 translate-y-6 sm:translate-y-9 h-full w-full z-[1]">
										<img src={Curl} alt={getPath(Curl)} className="img-fluid" />
									</div>
								</span>
							</h1>
						</div>
					</div>

					<section className="pt-10 s499:pt-20 relative w-[85%] sm:w-[90%] xl:w-[86%] mx-auto">
						<div className="shooting-star"></div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 items-center">
							<div className="v-content relative lg:w-3/4 mx-auto">
								<div className="v-title-container">
									<h1 className="text-white animate__animated animate__slow animate__bounceInLeft text-center md:!text-start text-3xl s499:text-[2.8rem] lg:text-[3rem] leading-10 cd font-extrabold relative">
										<Star style="w-8 h-8 absolute left-8 -top-1/4 rotate text-white" />
										<span className="relative">
											getlinked Tech
											<div className="v-image absolute right-0 bottom-full w-full flex items-center justify-end translate-x-20 scale-50 lg:translate-x-0 translate-y-8 sm:translate-y-4 lg:translate-y-0 lg:scale-90">
												<img src={ideaBulb} alt={getPath(ideaBulb)} className="img-fluid" />
											</div>
										</span>
										<br />
										<span className="flex animate__animated animate__slow  animate__bounceInLeft items-center justify-center gap-x-2 sm:gap-x-4 mt-3 lg:mt-4">
											<span className="flex gap-3 ">
												Hackathon <span className="inline text-secondary">1.0</span>
											</span>
											<span>
												<div className="flex items-center gap-x-1 sm:gap-x-2">
													<img src={Fire} alt={Fire} className="img-fluid w-6 sm:w-13 lg:w-16" />
													<img src={Chain} alt={Chain} className="img-fluid w-6 sm:w-13 lg:w-16" />
												</div>
											</span>
										</span>
									</h1>
									<div className="mont animate__animated animate__slow  animate__bounceInLeft flex flex-col items-center text-center md:!text-start md:!items-start mt-4">
										<span className="text-[.9rem] text-white">
											Participate in getlinked tech Hackathon 2023 <br />
											stand a chance to win a Big prize
										</span>
									</div>
								</div>
								<div className="mt-8 flex flex-col gap-y-8 items-center text-center md:!text-start md:!items-start">
									<AnchorLink
										style="animate__animated animate__slow  animate__bounceInLeft register_link mont w-max font-medium text-white text-[.8rem] py-4 rounded-[3px] px-12"
										href="/register">
										Register
									</AnchorLink>
									<div className="count_down unica">
										<CountdownTimer />
									</div>
								</div>
							</div>
							<div className="v-image-container select-none animate__bounceInRight animate__animated animate__slow">
								<div className="user-image relative">
									<Blur position="right-0 top-1/2 -translate-y-1/2" />
									<img src={Guy} alt={getPath(Guy)} className="img-fluid" />
									<div className="absolute flex items-center h-44 w-44 sm:h-72 sm:w-72 z-[1] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 scale-150">
										<HeroParticles />
									</div>
									<div className="absolute top-0 left-0 float -translate-x-1/2 floating-stars-with-no-color -translate-y-1/2">
										<img src={Globe} alt={getPath(Globe)} className="img-fluid scale-[.55] md:scale-[0.7]" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="border-t border-slate-50/10">
						<Section>
							<div className="absolute opacity-80 stars-group-8"></div>
							<div className="v-section absolute w-full h-full inset-0 opacity-30">
								<span className="v-star"></span>
								<span className="v-star"></span>
								<span className="v-star"></span>
							</div>

							<VImage data="zoom-in" image={BulbImage} scribble={Scribble} width="md:w-11/12 relative v-floating-image" hasText={true} />
							<VContent>
								<Star style="absolute right-0 w-8 h-8 top-1/4 -mt-10 rotate text-primary" />
								<VTitle dataForTitle={fromTop} dataForSubTitle={fromTopDelay1} title="Introduction to getlinked" subtitle="tech Hackathon 1.0" />
								<span data-aos="fade-down" data-aos-delay="300" className="text-white mont text-[.9rem] leading-7 text-center md:text-start">
									Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding
									genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world
									problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
								</span>
							</VContent>
						</Section>
					</div>
					<div className="border-t border-slate-50/10">
						<Section hasFlexOpp={true} style="py-10">
							<div className="absolute opacity-80 stars-group-7"></div>
							<VContent width="w-full sm:w-11/12">
								<Blur position="top-1/4 -translate-y-1/2" />
								<VTitle dataForTitle={fromTop} dataForSubTitle={fromTopDelay1} title="Rules and" subtitle="Guidelines" />
								<span data-aos="fade-down" className="text-white mont text-[.9rem] leading-7 text-center md:text-start">
									Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding
									genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world
									problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
								</span>
							</VContent>
							<VImage data="zoom-in" image={D3Image} width="lg:w-11/12" hasBlur={true} position="top-1/2 left-1/2 translate-x-1/2" />
						</Section>
					</div>
					<div className="border-t border-slate-50/10">
						<Section>
							<div className="v-section absolute w-full h-full inset-0 opacity-30">
								<span className="v-star"></span>
								<span className="v-star"></span>
								<span className="v-star"></span>
							</div>
							<VImage
								image={People3d}
								hasBlur={true}
								position="left-0 bottom-0"
								width="md:w-full md:scale-110 md:-translate-x-8 flex items-center mt-8"
							/>
							<VContent>
								<VTitle dataForTitle={fromTop} dataForSubTitle={fromTopDelay1} title="Judging Criteria" subtitle=" Key attributes" />
								<div className="flex flex-col items-center justify-center text-center md:text-start mont gap-y-4">
									<Blur position="-right-1/3 -bottom-1/2" />
									<Star style="absolute right-0 top-1/3 w-8 h-8 rotateWithColor" />
									{criterion.map(({ title, text }, index) => (
										<span key={index} data-aos="fade-right" data-aos-delay={`${index - 1 * 100}`}>
											<span className="text-[#FF26B9] tracking-wide text-[.95rem] font-bold">{title}: &nbsp;</span>
											<span className="text-medium text-white/95 [word-spacing:1px] text-[.78rem]">{text}</span>
										</span>
									))}
								</div>
								<AnchorLink
									data={fromBottom}
									style="mont mx-auto md:mx-0 mt-8 text-[.8rem] font-medium register_link py-4 text-white rounded-[3px] w-max px-10">
									Read More
								</AnchorLink>
							</VContent>
						</Section>
					</div>
					<Blur position="bottom-0 left-0" />
					<div className="border-t border-slate-50/10">
						<Section>
							<VContent>
								<div className="scale-95 flex flex-col gap-y-7">
									<VTitle dataForTitle={fromLeft} dataForSubTitle={fromLeft1} title="Frequently Asked" subtitle="Questions" />
									<span data-aos="fade-right" data-aos-delay="400" className="text-white mont text-[.9rem] leading-9 text-center md:text-start">
										We got answers to the questions that you might <br /> want to ask about <b>getlinked Hackathon 1.0</b>
									</span>
									<AccordionComponent />
								</div>
								<Star style="absolute w-6 h-6 z-[-1] -top-4 rotate" />
							</VContent>
							<VImage data="zoom-out" image={Thinking} width="md:w-11/12 v-floating-image" hasStar={true} hasIcon={true} />
						</Section>
					</div>
					<section className="flex py-20 xs:mb-16 sm:mb-24 items-end flex-col justify-center scale-[0.98] w-[85%] sm:w-[90%] xl:w-[86%] mx-auto relative gap-x-8 gap-y-16">
						<div className="flex flex-col gap-4 items-center justify-center text-center mx-auto v-title-container w-full sm:w-7/12 md:w-6/12 lg:w-4/12 ">
							<h1 data-aos="fade-up" className="cd text-white font-bold text-3xl tracking-wide">
								Timeline
							</h1>
							<span data-aos="fade-up" data-aos-delay="200" className="text-white mont text-[.88rem] leading-7 [word-spacing:3px] textWrap">
								Here is the breakdown of the time we anticipate using for the upcoming event.
							</span>
						</div>
						<div className="relative mx-auto mont flex flex-col gap-y-8 mt-8 lg:w-[80%] ">
							<div className="v-vertical-stroke bg-secondary absolute left-0 lg:left-1/2 lg:-translate-x-1/2 z-[-1] -mt-8"></div>
							<TreeLg delay={100} index={1} opp={true} contentTitle="Hackathon Announcement" date="November 18, 2023">
								The getlinked tech hackathon 1.0 is formally announced <br />
								to the general public and teams begin to get ready to register
							</TreeLg>
							<Star style="absolute top-0 left-9 w-8 h-8 z-[-1] text-white " />
							<TreeLg delay={150} index={2} contentTitle="Teams Registration begins" date="November 18, 2023">
								Interested teams can now show their interest in the getlinked <br />
								tech hackathon 1.0 2023 by proceeding to register
							</TreeLg>
							<TreeLg delay={200} index={3} opp={true} date="November 18, 2023" contentTitle="Teams Registration ends">
								Interested Participants are no longer Allowed to <br />
								register
								<DoubleStars style="absolute top-0 right-9 w-8 h-8 z-[-1] text-white " />
							</TreeLg>
							<TreeLg delay={250} index={4} date="November 18, 2023" contentTitle="Announcement of the accepted teams and ideas">
								All teams whom idea has been accepted into getlinked tech <br /> hackathon 1.0 2023 are formally announced
							</TreeLg>
							<TreeLg delay={300} index={5} opp={true} date="November 18, 2023" contentTitle="Getlinked Hackathon 1.0 Offically Begins">
								Accepted teams can now proceed to build their ground breaking <br /> skill driven solutions
							</TreeLg>
							<TreeLg delay={350} index={6} date="November 18, 2023" contentTitle="Demo Day">
								Teams get the opportunity to pitch their projects to judges. <br />
								The winner of the hackathon will also be announced on this day
							</TreeLg>
						</div>
					</section>
					<section className="flex py-20 xs:mb-16 sm:mb-24 items-end flex-col xl:flex-row justify-center scale-[0.98] w-[85%] sm:w-[90%] xl:w-[86%] mx-auto relative gap-x-8 gap-y-16 lg:flex-row">
						<div className="v-image w-full xl:w-[43%] relative v-floating-image">
							<Blur />
							<div className={`v-image-container relative z-[1] mx-auto`} data-aos="zoom-in">
								<img src={Trophy} alt={getPath(Trophy)} className="img-fluid mx-auto xl:mx-0" />
							</div>
						</div>
						<div className="xl:w-[55%] w-full">
							<div className="flex flex-col gap-y-5">
								<div className="v-section opacity-50">
									<span className="v-star"></span>
									<span className="v-star"></span>
									<span className="v-star"></span>
								</div>
								<Blur position="bottom-0 translate-y-24 -translate-x-1/2 -right-1/2" />
								<div className="lg:w-3/4 mx-auto">
									<VTitle dataForTitle={fromLeft} dataForSubTitle={fromLeft1} title="Prizes and" subtitle="Rewards" />
									<DoubleStars style="absolute top-0 right-9 w-8 h-8 z-[-1] text-white " />
									<span
										data-aos="fade-right"
										data-aos-delay="400"
										className="text-white mont text-[.9rem] leading-7 block mt-6 text-center md:text-start">
										Highlight of the prizes or rewards for winners and for participants
									</span>
								</div>
								<div
									data-aos="fade-left"
									className="grid grid-cols-3 place-content-center -translate-x-15 xs:!-translate-x-12 sm:!-translate-x-0 md:!translate-x-5 gap-x-6 sm:gap-x-10 medals-container s499:translate-y-10 s499:-ml-3 sm:translate-y-24 s499:mt-28 md:ml-0 -ml-14">
									<DoubleStars style="absolute bottom-0 w-8 h-8 z-[-1] text-white" />
									{medals.map((eachMedal, index) => (
										<MedalCard
											key={index}
											index={index}
											bgcolor={eachMedal.bgcolor}
											price={eachMedal.price}
											height={eachMedal.height}
											position={eachMedal.position}
											medalImage={eachMedal.medalImage}
											medalImageSize={eachMedal.medalImageSize && eachMedal.medalImageSize}
										/>
									))}
								</div>
							</div>
							<Star style="absolute w-6 h-6 z-[-1] -top-4 rotate" />
						</div>
					</section>
					<div className="bg-white/[0.01] border-t border-slate-50/10 relative overflow-hidden isolate">
						<div className="v-section absolute w-full h-full inset-0 opacity-30">
							<span className="v-star"></span>
							<span className="v-star"></span>
							<span className="v-star"></span>
							<span className="v-star"></span>
							<span className="v-star"></span>
						</div>
						<section className="w-[85%] lg:w-full mx-auto py-24">
							<div className="flex flex-col gap-4 items-center justify-center text-center mx-auto v-title-container">
								<DoubleStars style="absolute w-6 h-6 left-1/3 -translate-x-1/2 rotate" />
								<DoubleStars style="absolute w-9 h-9 float left-8 bottom-1/2 -translate-y-1/2 text-white" />
								<Blur position="left-0 top-1/4 -translate-y-1/3" />
								<h1 data-aos="fade-up" className="cd text-white font-bold text-[1.6rem] tracking-wide">
									Partners and Sponsors
								</h1>
								<span data-aos="fade-up" data-aos-delay="200" className="text-white mont text-[.88rem] leading-7">
									Getlinked Hackathon 1.0 is honored to have the following major <br />
									companies as its partners and sponsors
								</span>
							</div>
							<div
								data-aos="flip-up"
								className="w-full lg:w-[75%] flex items-center justify-center mx-auto border-[1.5px] mt-12 h-[250px] backdrop-blur-[5px] bg-white/[0.009] border-solid border-secondary rounded-lg xs:min-h-[420px] px-6 relative">
								<Blur position="right-0 translate-x-1/2 bottom-0 translate-y-1/2" scale="scale-[1.4]" />
								<DoubleStars style="absolute bottom-0 w-8 h-8 z-[-1] rotateWithColor" />
								<DoubleStars style="absolute right-0 w-8 h-8 -top-36 right-1/4 floating-stars-with-no-color text-primary" />
								<div className="grid grid-cols-3 lg:w-[70%] gap-4 md:gap-x-12 md:gap-y-10 relative scale-70 md:scale-100 grid-logo-container">
									<div className="bar square one bg-dark"></div>
									<div className="bar square two bg-dark"></div>
									<div className="bar bg-secondary h-bar"></div>
									<div className="bar v-bar one bg-secondary"></div>
									<div className="bar v-bar two bg-secondary"></div>
									{logos.map(({ image }, index) => (
										<div key={index} className="flex items-center justify-center p-3">
											<img src={image} alt={getPath(image)} className="img-fluid max-w-[7rem] w-full" />
										</div>
									))}
								</div>
							</div>
						</section>
					</div>
					<div className="border-t border-slate-50/10">
						<Section>
							<div className="v-section absolute w-full h-full inset-0 opacity-30">
								<span className="v-star"></span>
								<span className="v-star"></span>
								<span className="v-star"></span>
								<span className="v-star"></span>
								<span className="v-star"></span>
							</div>
							<VContent>
								<div className="scale-[0.98] flex flex-col items-center md:items-start">
									<VTitle dataForTitle={fromLeft} dataForSubTitle={fromLeft1} title="Privacy Policy and" subtitle="Terms" />
									<div className="flex flex-col items-center md:items-start text-center md:text-start gap-y-6 mt-6 md:w-11/12">
										<span className="text-white/60 font-medium mont text-[.9rem] leading-7" style={{ textWrap: "balance" }}>
											Last updated on September 12, 2023
										</span>
										<span className="text-white mont text-[.9rem] leading-7">
											Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
										</span>
									</div>
									<Card />
								</div>
							</VContent>
							<div className="md:w-1/2">
								<div className="v-image-container relative lg:scale-90">
									<DoubleStars style="top-0 right-0 text-white absolute w-8 h-8 rotate" />
									<Star style="absolute right-0 bottom-0 w-7 h-8 floatAndChangeColor" />
									<Star style="absolute left-0 bottom-0 w-10 h-10 floatAndBlurChangeColor" />
									<div data-aos-delay="200" data-aos="fade-down" className="v-layer-image absolute scale-[.8] z-[-1] top-0 -translate-y-1/4">
										<img src={Shield} alt={getPath(Shield)} className="img-fluid" />
									</div>
									<div className="v-main-image" data-aos-delay="200" data-aos="fade-up">
										<img src={BoyOnLock} alt={getPath(BoyOnLock)} className="img-fluid" />
									</div>
								</div>
							</div>
						</Section>
					</div>
				</main>
			</div>
			<Footer />
		</AnimatedWrapper>
	);
}

const logos = [{ image: LibertyLogo1 }, { image: LibertyLogo }, { image: Winwise }, { image: Paybox }, { image: Logo2 }, { image: VizulLogo }];

const criterion = [
	{
		title: "Innovation and Creativity",
		text: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
	},
	{
		title: "Functionality",
		text: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
	},
	{
		title: "Impact and Relevance",
		text: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
	},
	{
		title: "Technical Complexity",
		text: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
	},
	{
		title: "Adherence to Hackathon Rules",
		text: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
	},
];

const medals = [
	{
		bgcolor: "bg-primary/20 border-primary",
		position: "2nd",
		price: "text-primary",
		height: "h-[270px] s499:h-[320px] sm:h-[270px]",
		medalImage: Silver,
	},
	{
		bgcolor: "bg-secondary/20 border-secondary",
		price: "text-primary",
		height: "h-[300px] s499:h-[340px] sm:h-[300px]",
		position: "1st",
		medalImage: Gold,
		medalImageSize: "w-56 scale-[1.03] s499:scale-[1.25] sm:scale-[1] s499:translate-y-2",
	},
	{
		position: "3rd",
		bgcolor: "bg-primary/20 border-primary",
		price: "text-primary",
		height: "h-[270px] s499:h-[320px] sm:h-[270px]",
		medalImage: Bronze,
	},
];
