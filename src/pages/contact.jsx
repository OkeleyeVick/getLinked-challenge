import { useEffect, useState } from "react";
import AnchorLink from "../components/AnchorLink";
import Blur from "../components/Blur";
import Icon from "../components/Icon";
import InputField from "../components/InputField";
import Header from "../components/layout/header";
import AnimatedWrapper from "../components/wrapper";
import useGoBack from "../hooks/useGoBack.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle";
import TypewriterComponent from "typewriter-effect";
import axios from "axios";
import Modal from "../components/Modal";
import { Loader } from "../components/layout/sidebar";
import Star, { DoubleStars } from "../components/svg_icons";

const baseUrl = "https://backend.getlinked.ai"; // Replace with your actual base URL
const apiUrl = `${baseUrl}/hackathon/contact-form`;

export default function ContactComponent() {
	useDocumentTitle("Contact | getLinked");
	const goBack = useGoBack();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [success, setIsSuccess] = useState(false);

	const [userDetails, setUserDetails] = useState({
		first_name: "",
		email: "",
		message: "",
		phone_number: "",
	});

	function handleInput(e) {
		setUserDetails((prevValue) => {
			return {
				...prevValue,
				[e.target.name]: e.target.value,
			};
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		axios
			.post(apiUrl, userDetails, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				setIsLoading(false);
				setError(false);
				setUserDetails({
					first_name: "",
					email: "",
					message: "",
					phone_number: "",
				});

				if (response.status === 201 || response?.status === "ok" || response.status === 200) {
					setIsSuccess(true);
					setError(false);
				}
			})
			.catch((error) => {
				setIsLoading(false);
				setError(true);
			});
	};

	function handleGoBack() {
		goBack();
	}

	return (
		<AnimatedWrapper style="bg-dark min-h-screen isolate overflow-x-hidden place-content-center relative">
			<div className="isolate relative overflow-hidden">
				<div className="hidden lg:block">
					<Header />
				</div>
				<Blur position="md:top-20 md:-left-18 top-12 -left-28" />
				<Blur position="-right-20 -bottom-20 opacity-0 md:opacity-100" />

				<div className="relative p-3 sm:p-4 lg:w-[98%] mx-auto mt-14 md:mt-20 my-32">
					<div className="v-section opacity-40">
						<span className="v-star"></span>
						<span className="v-star"></span>
						<span className="v-star"></span>
					</div>
					<div className="flex items-stretch justify-center flex-col lg:flex-row relative">
						<section className="lg:w-[45%] mx-auto overflow-hidden hidden lg:block">
							<aside className="w-2/3 mx-auto flex flex-col items-start mt-16">
								<div className="v-title">
									<h1 className="[word-spacing:2px] text-secondary tracking-tight font-semibold cd text-start text-3xl">
										<TypewriterComponent
											options={{
												strings: ["Get in touch"],
												autoStart: true,
												loop: true,
											}}
										/>
									</h1>
									<Star style="w-8 h-8 absolute left-8 top-1/4 rotate text-white" />
								</div>
								<div className="w-3/4 mont mt-8">
									<div className="flex flex-col gap-y-5 font-medium text-white">
										<span className="w-1/2 text-sm tracking-wide animate__fadeIn animate__delay-2s animate__animated">Contact information</span>
										<span className="flex flex-col items-start gap-0 animate__fadeInLeftBig animate__animated">
											<span className="text-sm tracking-wide">27, Alara Street</span>
											<span className="text-sm tracking-wide">Yaba 100012</span>
											<span className="text-sm tracking-wide">Yaba, Lagos</span>
										</span>
										<span className="text-sm tracking-wide animate__fadeIn animate__delay-2s animate__animated">Call Us : 07067981819</span>
										<span className="flex flex-col animate__fadeInLeftBig  animate__animated">
											<span className="text-sm tracking-wide">we are open from Monday-Friday</span>
											<span className="text-sm tracking-wide">08:00am - 05:00pm</span>
										</span>
									</div>
									<span className="mt-6 flex flex-col gap-y-2.5">
										<span className="text-primary text-sm mont font-semibold">Share on</span>
										<ul className="flex items-center gap-x-2">
											{socialLinks.map(({ icon, link }, index) => (
												<AnchorLink href={link} key={index}>
													<Icon iconName={icon} style="w-5 h-5 text-white hover:text-primary transition-[color] duration-100 ease-linear" />
												</AnchorLink>
											))}
										</ul>
									</span>
								</div>
							</aside>
						</section>
						<section className="w-[100%] mx-auto lg:w-[53%] relative">
							<div className="animate__backInRight animate__animated px-8 lg:bg-white/[0.03] lg:shadow-lg lg:py-24 lg:px-20 lg:backdrop-blur-[1.5px] h-full rounded-[4px] relative border border-solid border-[rgba(255_225_255/0.02)]">
								<div className="mb-14 mt-8 md:hidden">
									<Star style="w-5 h-5 absolute left-1/2 floating-stars-with-color text-white" />
									<button type="button" onClick={handleGoBack} className="text-white transform-to-x cursor-pointer border rounded-full p-2">
										<Icon iconName="tabler:chevron-left" style="w-5 h-5" />
									</button>
								</div>
								<div className="v-title">
									<h1 className="text-secondary tracking-tight font-semibold cd text-start text-2xl [word-spacing:4px]">
										Questions or need assistance? <br />
										Let us know about it!
									</h1>
								</div>
								<span className="text-[.8rem] block tracking-wide text-white mont font-medium w-5/6 my-4">
									Email us below to any question related to our event
								</span>
								<form action="" onSubmit={handleSubmit} className="w-full mt-5">
									<Star style="w-5 h-5 absolute left-1/2 floating-stars-with-color" />
									<DoubleStars style="w-8 h-8 absolute right-8 top-8 text-white" />
									<div className="mont text-white flex flex-col gap-x-6 gap-y-7">
										<InputField
											name="first_name"
											onChangeFunc={handleInput}
											type="text"
											value={userDetails.first_name}
											placeholder="First Name"
											variantPlaceholder={true}
										/>
										<InputField
											name="email"
											value={userDetails.email}
											type="email"
											onChangeFunc={handleInput}
											placeholder="Mail"
											variantPlaceholder={true}
										/>
										<textarea
											placeholder="Message"
											name="message"
											value={userDetails.message}
											onChange={handleInput}
											className="w-full rounded-md text-[.8rem] transition ease-in-out duration-300 font-normal placeholder:[word-spacing:2px]  placeholder:text-[.78rem] px-5 bg-white/[0.035] placeholder:text-white/90 focus:border-secondary placeholder:tracking-wide placeholder:font-medium outline-none focus:outline-none caret-secondary border-[1.5px] border-white/70 min-h-[7.5rem] py-4 resize-none"></textarea>
										<button
											type="submit"
											className="w-max rounded-[4px] text-[.8rem] font-medium tracking-wide mx-auto text-white register_link  py-[14px] px-14">
											Submit
										</button>
									</div>
								</form>
								<span className="mt-6 flex flex-col md:hidden items-center my-10 gap-y-2.5">
									<span className="text-primary text-sm mont font-semibold">Share on</span>
									<ul className="flex items-center gap-x-2">
										{socialLinks.map(({ icon, link }, index) => (
											<AnchorLink href={link} key={index}>
												<Icon iconName={icon} style="w-5 h-5 text-white hover:text-primary transition-[color] duration-100 ease-linear" />
											</AnchorLink>
										))}
									</ul>
								</span>
							</div>
							<DoubleStars style="w-8 h-8 absolute right-8 -bottom-8 text-white floatAndBlurChangeColor" />
						</section>
					</div>
				</div>
			</div>
			{success && <Modal />}
			{isLoading && <Loader />}
			{error && <Error />}
		</AnimatedWrapper>
	);
}

const socialLinks = [
	{ url: "#", icon: "jam:instagram" },
	{ url: "#", icon: "simple-icons:x" },
	{ url: "#", icon: "ri:facebook-fill" },
	{ url: "#", icon: "basil:linkedin-solid" },
];
