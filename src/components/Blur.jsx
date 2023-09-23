export default function Blur({ position, scale, rawStyle }) {
	return (
		<div
			style={rawStyle}
			className={`${position}  transition ease-linear duration-300 ${
				position && position.includes("z-[" || "-z-[") ? position : "z-[-1]"
			} blur-[4px] absolute bg-radial_primary w-96 h-96 ${scale ? scale : "md:scale-[1.6] scale-125"}`}></div>
	);
}
