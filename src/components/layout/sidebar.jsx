import { createPortal } from "react-dom";
import { getPath, links } from "./header";
import AnchorLink from "../AnchorLink";
import { motion } from "framer-motion";
import Logo from "../../assets/media/images/getlinked-logo.png";
import { useEffect, useRef } from "react";
import AnimatedWrapper from "../wrapper";

export default function Sidebar(props) {
	const sideBarRef = useRef(null);

	useEffect(() => {
		function handleOutsideClick(e) {
			if (sideBarRef.current && e.target.contains(sideBarRef.current)) {
				props.func(false);
			}
		}
		document.addEventListener("click", handleOutsideClick, true);

		return () => document.removeEventListener("click", handleOutsideClick, true);
	}, []);

	return createPortal(
		<motion.div
			ref={sideBarRef}
			className={`${props.sideBarProps ? "left-0" : "-left-full"} mont fixed z-10 top-0 bottom-0 h-full w-full backdrop-blur-[2px]`}>
			<div className={`max-w-xs w-full bg-dark h-full ${props.sideBarProps ? " shadow-sm shadow-primary" : ""}`}>
				<div className="px-6 py-4">
					<AnchorLink href="/">
						<img alt={getPath(Logo)} src={Logo} className="img-fluid w-32" />
					</AnchorLink>
				</div>
				<div className="p-2 text-white flex flex-col gap-y-8">
					<ul className="flex flex-col v-parent-links gap-y-0">
						{links.map((link) => (
							<AnchorLink
								href={`/${link.path}`}
								style="text-[.8rem] py-3 px-3 lg:backdrop-blur-[1.5px] h-full rounded-[4px] relative border border-solid border-transparent hover:border-[rgba(255_225_255/0.1)] bg-transparent hover:bg-[rgba(255_225_255/0.09)]"
								key={link.linkTitle}>
								{link.linkTitle}
							</AnchorLink>
						))}
					</ul>
					<div className="ps-3">
						<AnchorLink
							href="/register"
							style={`mont text-[.8rem] tracking-wide register_link py-4 sm:py-3 px-9 sm:px-12 w-max transition duration-300 rounded-[2px]`}>
							Register
						</AnchorLink>
					</div>
				</div>
			</div>
		</motion.div>,
		document.body
	);
}

export function Loader() {
	return createPortal(
		<AnimatedWrapper style="fixed inset-0 flex backdrop-blur-sm items-center justify-center ">
			<div className="v-loader scale-100 md:scale-150">
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
			</div>
		</AnimatedWrapper>,
		document.body
	);
}
