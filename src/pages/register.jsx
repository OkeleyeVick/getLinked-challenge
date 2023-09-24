import { Icon } from "@iconify/react";
import Image3d from "../assets/media/images/graphic-designer-showing-thumbs-up.png";
import InputField from "../components/InputField";
import Blur from "../components/Blur";
import Header from "../components/layout/header";
import AnimatedWrapper from "../components/wrapper";
import Select, { GroupSize } from "../components/dropdown";
import { useEffect, useRef, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Modal, { ErrorModal } from "../components/Modal";
import axios from "axios";
import { Loader } from "../components/layout/sidebar";
import Star, { DoubleStars } from "../components/svg_icons";

const baseUrl = "https://backend.getlinked.ai"; // Replace with your actual base URL
const mainURL = `${baseUrl}/hackathon/registration`;

export default function RegisterComponent() {
	useDocumentTitle("Register | getLinked");

	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [success, setIsSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState("");
	const [userDetails, setUserDetails] = useState({
		team_name: "",
		phone_number: "",
		email: "",
		project_topic: "",
		category: "",
		group_size: "",
	});

	const nameRef = useRef("");
	const phoneRef = useRef("");
	const emailRef = useRef("");
	const projectRef = useRef("");
	const categoryRef = useRef("");
	const sizeRef = useRef("");

	const fallbackData = ["MOBILE", "WEB", "BACKEND"];
	function handleInput(e) {
		setUserDetails((prevValue) => {
			return {
				...prevValue,
				[e.target.name]: e.target.value,
			};
		});
	}

	useEffect(() => {
		const handleGetData = async () => {
			const res = await fetch(`${baseUrl}/hackathon/categories-list`);
			const result = await res.json();
			const dropdownData = result.map((data) => data.name);
			if (dropdownData) {
				setData(dropdownData);
			} else {
				setData(fallbackData);
			}
		};

		handleGetData();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		axios
			.post(mainURL, userDetails, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				setIsLoading(false);
				setError(false);
				setErrorText("");
				setUserDetails({
					team_name: "",
					phone_number: "",
					email: "",
					project_topic: "",
					category: "",
					group_size: "",
					privacy_policy_accepted: false,
				});

				if (response.status === 201 || response?.status === "ok" || response.status === 200) {
					setIsSuccess(true);
					setError(false);
				}
			})
			.catch((error) => {
				setIsLoading(false);
				setErrorText(error);
				setError(false);
			});
	};

	return (
		<AnimatedWrapper style="bg-dark min-h-screen isolate overflow-x-hidden place-content-center relative">
			<div className="isolate overflow-hidden">
				<div className="hidden lg:block">
					<Header />
				</div>
				<div className="relative p-3 sm:p-4 lg:w-[98%] mx-auto my-16 s499:my-32 lg:mt-12">
					<div className="v-section opacity-40">
						<span className="v-star"></span>
						<span className="v-star"></span>
						<span className="v-star"></span>
						<span className="v-star"></span>
						<span className="v-star"></span>
						<span className="v-star"></span>
					</div>
					<div className="flex items-center justify-center flex-col lg:flex-row relative">
						<Blur position="top-4 -left-12" />
						<section className="lg:w-[45%] overflow-hidden relative">
							<div className="md:scale-[1.15] animate__backInLeft animate__animated">
								<div className="v-title mb-8 lg:hidden w-[85%] mx-auto">
									<Star style="w-8 h-8 absolute left-8 top-1/4 rotate text-white" />
									<h1 className="text-secondary tracking-tight font-semibold cd text-start text-3xl">Register</h1>
								</div>
								<Star style="w-5 h-5 absolute left-1/2 top-8 floating-stars-with-color" />
								<img className="img-fluid v-floating-image" src={Image3d} />
								<DoubleStars style="w-8 h-8 absolute left-1/2 bottom-8 text-white rotate" />
							</div>
						</section>
						<Blur position="-right-20 -bottom-20 opacity-0 md:opacity-100" />
						<section className="w-[100%] mx-auto lg:w-[56%]">
							<div className="animate__backInRight animate__animated p-8 lg:bg-white/[0.03] lg:shadow-lg lg:py-20 lg:px-20 lg:backdrop-blur-[1.5px] h-full rounded-[4px] relative sm:border border-solid border-[rgba(255_225_255/0.02)]">
								<div className="v-title hidden lg:block">
									<h1 className="text-secondary tracking-tight font-semibold cd text-start text-3xl">Register</h1>
								</div>
								<div className="w-full mt:0 sm:mt-16 text-white flex items-end justify-center md:justify-start gap-x-2 mont">
									<span className="text-[.8rem] tracking-wide text-white">Be a part of this movement!</span>
									<div className="text-secondary tracking-widest relative text-sm border-b-[1.5px] w-24 border-dashed border-secondary -translate-y-1">
										<span className="v-walking-emojis flex items-end absolute bottom-0 left-1/2 -translate-x-1/2">
											<Icon icon="twemoji:woman-walking" hFlip={true} className="w-6 h-6" />
											<Icon icon="twemoji:person-walking-light-skin-tone" className="w-7 h-7" hFlip={true} />
										</span>
									</div>
								</div>
								<form action="" onSubmit={handleSubmit} className="w-full mt-5 mont">
									<div className="v-form-title mb-5 text-center md:text-start">
										<h1 className="uppercase font-semibold text-white text-2xl ">create your account</h1>
									</div>
									<div className="grid grid-cols-1 sm:grid-cols-2 mont text-white gap-x-6 gap-y-6">
										<InputField
											name="team_name"
											onChangeFunc={handleInput}
											label="Team's name"
											value={userDetails.team_name}
											inputRef={nameRef}
											type="text"
											placeholder="Enter the name of your group"
										/>
										<Star style="w-4 h-4 md:w-8 md:h-8 absolute left-8 top-1/4 rotate text-white" />
										<InputField
											name="phone_number"
											onChangeFunc={handleInput}
											value={userDetails.phone_number}
											label="Phone"
											inputRef={phoneRef}
											inputmode="numeric"
											type="tel"
											placeholder="Enter your phone number"
										/>
										<InputField
											name="email"
											onChangeFunc={handleInput}
											label="Email"
											value={userDetails.email}
											inputRef={emailRef}
											inputmode="text"
											type="email"
											placeholder="Enter your email"
										/>
										<InputField
											name="project_topic"
											onChangeFunc={handleInput}
											inputRef={projectRef}
											label="Project topic"
											value={userDetails.project_topic}
											inputmode="text"
											type="text"
											placeholder="What is your project topic"
										/>
										<Select
											func={setUserDetails}
											label="Category"
											name="category"
											inputRef={categoryRef}
											value={userDetails.category}
											onChangeFunc={handleInput}
											placeholder="Select your category"
											variantPlaceholder={true}
											icon={"lucide:chevron-down"}
											dropdownData={data && data}
											dropdown={true}
										/>
										<GroupSize
											label="Group Size"
											placeholder="Select"
											dropdownData={groupSize}
											name="group_size"
											inputRef={sizeRef}
											func={setUserDetails}
											onChangeFunc={handleInput}
											value={userDetails.group_size}
											variantPlaceholder={true}
											icon={"lucide:chevron-down"}
											dropdown={true}
										/>
									</div>
									<Star style="w-5 h-5 absolute left-1/2 floating-stars-with-color text-white" />
									<div className="flex flex-col gap-y-4 mt-10 relative">
										<span className="text-secondary text-[.8rem] italic font-medium">Please review your registration details before submitting</span>
										<div className="flex items-start gap-x-3">
											<input
												type="checkbox"
												name=""
												required
												id=""
												className="w-6 h-4 s499:w-4 s499:h-4 mt-[2px] bg-transparent cursor-pointer checked:bg-primary checked:border-primary appearance-none border-[1.5px] border-solid border-white/70 rounded-sm v-custom-checkbox"
											/>
											<span className="text-[.8rem] text-white">I agreed with the event terms and conditions and privacy policy</span>
										</div>
										<button type="submit" className="relative register_link w-full text-sm font-semibold text-white py-4 rounded-[4px]">
											<span className="hidden md:block">Register Now</span>
											<span className="md:hidden">Submit</span>
										</button>
									</div>
								</form>
							</div>
						</section>
					</div>
					<DoubleStars style="w-8 h-8 absolute right-8 -bottom-8 text-white floatAndBlurChangeColor" />
				</div>
			</div>

			{success && <Modal />}
			{isLoading && <Loader />}
			{(error || errorText) && <ErrorModal error={errorText} />}
		</AnimatedWrapper>
	);
}

const groupSize = [10, 20, 30];
