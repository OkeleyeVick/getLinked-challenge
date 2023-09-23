import AnchorLink, { AnchorNavLink } from "../AnchorLink";
import Logo from "../../assets/media/images/getlinked-logo.png";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import { createPortal } from "react-dom";

export const getPath = (image) => {
	return `${image.includes("getLinked".toLocaleLowerCase()) ? "" : "getLinked-"}${image
		.split("/" || "\\")
		.at(-1)
		.toLocaleLowerCase()}`;
};

export default function Header() {
	const location = useLocation();
	const [pathname, setPathName] = useState("");
	const [sideBarState, setSideBarState] = useState(false);
	useEffect(() => {
		window.scrollTo(0, 0);
		const path = location.pathname.split("/").at(-1);
		setPathName(path);
	}, [location?.pathname]);

	function handleSideBar() {
		setSideBarState((prev) => !prev);
	}

	return (
		<>
			<header className="w-full backdrop-blur-sm lg:relative px-3 py-5 fixed top-0 z-[9] ">
				<nav className="flex items-center w-full md:w-[90%] mx-auto justify-between p">
					<div id="stars-group-1" className="absolute opacity-80"></div>
					<div id="stars-group-2" className="absolute opacity-80"></div>
					<div id="stars-group-3" className="absolute opacity-80"></div>
					<div id="stars-group-4" className="absolute opacity-80"></div>
					<div id="stars-group-5" className="absolute opacity-80"></div>
					<div id="stars-group-6" className="absolute opacity-80"></div>
					<div className="v-section absolute opacity-40">
						<span className="v-star"></span>
					</div>
					<AnchorLink href="/">
						<img alt={getPath(Logo)} src={Logo} className="img-fluid w-32 md:w-40" />
					</AnchorLink>
					<div className="hidden lg:flex items-center v-lg-screen">
						<div className="flex items-center flex-grow md:mr-10 v-parent-links">
							{links.map(({ linkTitle, path }) => (
								<React.Fragment key={linkTitle}>
									<AnchorLink
										href={`${path !== "#" ? `/${path}` : "#"}`}
										style={`${
											pathname && pathname.toLocaleLowerCase() === path.toLocaleLowerCase() ? "active_link" : "text-white"
										} mont text-[.8rem] font-medium relative px-5 py-3 rounded-sm`}>
										{linkTitle}
									</AnchorLink>
								</React.Fragment>
							))}
						</div>
						<AnchorNavLink
							href="/register"
							style={`px-9 py-3 border-[1.5px] relative border_gradient border-solid overflow-hidden text-white ${
								pathname && pathname.toLocaleLowerCase() === "register"
									? ""
									: "register_link border-none rounded-[4px] bg-gradient-to-r from-[30%] from-secondary to-primary py-[14px] px-14 bg-[length:100%_100%] hover:from-[10%] hover:bg-[length:250%_100%] duration-500 transition-all ease-in-out"
							} mont text-[.8rem] font-medium`}>
							Register
						</AnchorNavLink>
					</div>

					<Button sideBarState={sideBarState} pathname={pathname} handleSideBar={handleSideBar} />
				</nav>
			</header>
			<Sidebar sideBarProps={sideBarState} func={setSideBarState} />
		</>
	);
}

export const links = [
	{
		linkTitle: "Timeline",
		path: "#",
	},
	{
		linkTitle: "Overview",
		path: "#",
	},
	{
		linkTitle: "FAQs",
		path: "#",
	},
	{
		linkTitle: "Contact",
		path: "contact",
	},
];

function Button({ sideBarState, handleSideBar, pathname }) {
	return createPortal(
		<div
			className={`${
				pathname === "register" || pathname === "contact" ? "hidden" : "flex"
			} v-sm-screen lg:hidden items-center fixed right-3 top-9 -translate-y-1/2 z-[90] overflow-hidden`}>
			<div className="text-white">
				<input type="checkbox" id="checkbox" checked={sideBarState} onChange={handleSideBar} />
				<label htmlFor="checkbox" className={`toggle group h-14  w-14 p-3 rounded-full ${sideBarState ? "transform-to-x" : ""}`}>
					<div className={`bars bg-white group-hover:bg-primary`} id="bar1"></div>
					<div className={`bars bg-white group-hover:bg-primary`} id="bar2"></div>
					<div className={`bars bg-white group-hover:bg-primary`} id="bar3"></div>
				</label>
			</div>
		</div>,
		document.body
	);
}
