import React from "react";

export default function TreeLg({ contentTitle, delay, children, index, date, opp, transition }) {
	return (
		<div className={`v-each-container grid lg:grid-cols-2 gap-x-44 items-center relative ${transition && transition}`}>
			{!opp ? (
				<>
					<div className={`absolute bg-dark hidden lg:block lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 p-2`}>
						<div
							data-aos="zoom-out"
							data-aos-delay={delay}
							className="w-12 text-lg font-bold aspect-square rounded-full flex items-center justify-center text-white bg-gradient-to-r from-[30%] from-secondary to-primary">
							{index}
						</div>
					</div>
					<div
						data-aos="fade-right"
						data-aos-delay={delay}
						className={`flex items-center gap-x-5 ${!opp ? "lg:justify-end order-2 lg:order-1" : "order-1 lg:order-2"}`}>
						<div className="p-2 -ml-[30px] lg:hidden bg-dark">
							<div className="w-12 text-lg font-bold aspect-square rounded-full flex items-center justify-center text-white bg-gradient-to-r from-[30%] from-secondary to-primary">
								{index}
							</div>
						</div>
						<h1 className={`text-secondary text-lg font-bold`}>{date}</h1>
					</div>
					<div
						data-aos="fade-left"
						data-aos-delay={delay}
						className={`v-odd v-content ${
							!opp ? "lg:text-start text-start flex-col order-1" : "lg:text-end flex-col-reverse order-2"
						} flex  gap-y-5 pl-14 lg:pl-0`}>
						<h2 className="text-secondary text-lg font-bold">{contentTitle}</h2>
						<span className="text-white text-[.85rem] [word-spacing:2px] leading-6">{children}</span>
					</div>
				</>
			) : (
				<>
					<div
						className={`v-odd v-content text-start lg:text-end flex flex-col items-start lg:items-end gap-y-5 pl-14 lg:pl-0 ${
							opp ? "order-1" : "order-2"
						}`}>
						<h2 className="text-secondary text-lg font-bold">{contentTitle}</h2>
						<span className="text-white text-[.85rem] [word-spacing:2px] leading-6">{children}</span>
					</div>
					<div className="absolute bg-dark hidden lg:block lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 p-2">
						<div
							data-aos="zoom-out"
							data-aos-delay={delay}
							className="w-12 text-lg font-bold aspect-square rounded-full flex items-center justify-center text-white bg-gradient-to-r from-[30%] from-secondary to-primary">
							{index}
						</div>
					</div>
					<div className={`${!opp ? "order-2" : "order-1"} flex items-center gap-x-5`}>
						<div className="p-2 -ml-[30px] lg:hidden bg-dark">
							<div className="w-12 text-lg font-bold aspect-square rounded-full flex items-center justify-center text-white bg-gradient-to-r from-[30%] from-secondary to-primary">
								{index}
							</div>
						</div>
						<h1 className="text-secondary text-lg font-bold">{date}</h1>
					</div>
				</>
			)}
		</div>
	);
}
