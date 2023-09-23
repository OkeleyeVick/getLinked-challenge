import { InlineIcon } from "@iconify/react";

export default function Icon({ iconName, style }) {
	return <InlineIcon icon={iconName} className={style} />;
}
