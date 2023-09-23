import { Link, NavLink } from "react-router-dom";

export default function AnchorLink({ children, href, style, data }) {
	return (
		<Link to={href} className={style} {...data}>
			{children}
		</Link>
	);
}
export const AnchorNavLink = ({ children, href, style }) => {
	return (
		<NavLink to={href} className={style}>
			{children}
		</NavLink>
	);
};
