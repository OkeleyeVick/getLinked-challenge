import Atropos from "atropos/react";
import { getPath } from "./layout/header";

export default function MedalCard({ data, index, position, medalImage, bgcolor, price, height, medalImageSize }) {
	return (
		<div
			data-aos-delay={`${index * 200}`}
			className={`${height} medal-card rounded-[12px] relative border border-solid py-8 w-44 scale-[.54] sm:scale-[0.8] md:w-full lg:w-44 px-8 text-center flex items-end mont justify-center ${bgcolor}`}>
			<div className={`h-44 absolute -top-1/2 translate-y-1/4 sm:-translate-y-18 ${medalImageSize ? medalImageSize : "w-44"}`}>
				<img src={medalImage} alt={getPath(medalImage)} className="img-fluid " />
			</div>
			<Atropos shadow={false}>
				<div className="price-container flex flex-col gap-y-4">
					<span className="text-white">
						<h2 className="text-2xl md:text-3xl font-bold">{position}</h2>
						<span className="font-bold text-xl">Runner</span>
					</span>
					<h2 className={`${price} text-3xl font-bold price`}>N300,000</h2>
				</div>
			</Atropos>
		</div>
	);
}
