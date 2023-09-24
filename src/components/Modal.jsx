import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Congratulations from "../assets/media/images/congratulation.png";
import { getPath } from "./layout/header";
import Star, { DoubleStars } from "./svg_icons";
import wink from "../assets/media/images/wink.png";

export default function Modal() {
	let [isOpen, setIsOpen] = useState(true);

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 mont">
			{/* The backdrop, rendered as a fixed sibling to the panel container */}
			<div className="fixed inset-0 bg-black/80" aria-hidden="true" />
			<div id="stars-group-1" className="absolute opacity-80 top-0"></div>
			<div id="stars-group-2" className=" opacity-80"></div>
			<div id="stars-group-3" className=" opacity-80"></div>

			{/* Full-screen container to center the panel */}
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<Star style="text-primary w-6 h-6 rotate absolute top-1/4 right-1/2 block -mr-24 -mt-10" />
				{/* The actual dialog panel  */}

				<Star style="left-0 rotateWithColor w-5 h-5 text-white absolute bottom-0 mb-4 left-2/4" />
				<DoubleStars style="left-0 floatAndBlurChangeColor w-8 h-8 text-white absolute bottom-1/3 left-1/4" />
				<DoubleStars style="right-0 floating-stars-with-no-color w-6 h-6 text-white absolute top-1/3 right-1/4" />
				<div id="stars-group-4" className=" opacity-80"></div>
				<div className=" opacity-80  stars-group-6"></div>
				<div className=" opacity-80  stars-group-8"></div>
				<Dialog.Panel className="mx-auto max-w-md rounded-lg bg-dark/50 border-[1.5px] border-secondary py-10 px-4 sm:px-10 relative text-white">
					<div className="flex flex-col items-center gap-y-4">
						<div className="v-image">
							<img src={Congratulations} alt={getPath(Congratulations)} className="img-fluid" />
						</div>
						<div className="text-center flex flex-col items-center gap-y-10">
							<h1 className="text-xl font-semibold">Congratulations you have successfully Registered!</h1>
							<span className="s499:text-sm text-[.8rem]">
								Yes, it was easy and you did it! <br />
								<div className=" opacity-80  stars-group-6"></div>
								<div className=" opacity-80  stars-group-7"></div>
								<div className=" opacity-80  stars-group-8"></div>
								<span className="flex items-center">
									check your mail box for next step <img src={wink} alt={getPath(wink)} className="img-fluid" />
								</span>
							</span>
						</div>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="outline-none register_link w-full py-4 border-0 rounded-[4px] text-sm font-medium mt-4">
							Back
						</button>
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}

export function ErrorModal({ error }) {
	let [isOpen, setIsOpen] = useState(true);

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 mont">
			{/* The backdrop, rendered as a fixed sibling to the panel container */}
			<div className="fixed inset-0 bg-black/80" aria-hidden="true" />
			<div id="stars-group-1" className="absolute opacity-80 top-0"></div>
			<div id="stars-group-2" className=" opacity-80"></div>
			<div id="stars-group-3" className=" opacity-80"></div>

			{/* Full-screen container to center the panel */}
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<Star style="text-primary w-6 h-6 rotate absolute top-1/4 right-1/2 block -mr-24 -mt-10" />
				{/* The actual dialog panel  */}

				<Star style="left-0 rotateWithColor w-5 h-5 text-white absolute bottom-0 mb-4 left-2/4" />
				<DoubleStars style="left-0 floatAndBlurChangeColor w-8 h-8 text-white absolute bottom-1/3 left-1/4" />
				<DoubleStars style="right-0 floating-stars-with-no-color w-6 h-6 text-white absolute top-1/3 right-1/4" />
				<div id="stars-group-4" className=" opacity-80"></div>
				<div className=" opacity-80  stars-group-6"></div>
				<div className=" opacity-80  stars-group-8"></div>
				<Dialog.Panel className="mx-auto max-w-md rounded-lg bg-dark/50 border-[1.5px] border-secondary py-10 px-4 sm:px-10 relative text-white">
					<div className="flex flex-col items-center gap-y-4">
						<div className="v-image w-44 mx-auto">
							<img src="https://cdn3.iconfinder.com/data/icons/quality-control-10/512/QualityControlOne03.png" alt="" className="img-fluid" />
						</div>
						<div className="text-center flex flex-col items-center gap-y-0">
							<h1 className="text-xl font-semibold">{error ?? "Error uploading details, try again!"}</h1>

							<div className=" opacity-80  stars-group-6"></div>
							<div className=" opacity-80  stars-group-7"></div>
							<div className=" opacity-80  stars-group-8"></div>
						</div>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="outline-none register_link w-full py-4 border-0 rounded-[4px] text-sm font-medium mt-4">
							Close
						</button>
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}
