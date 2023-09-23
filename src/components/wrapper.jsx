import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedWrapper({ children, style }) {
	return (
		<AnimatePresence>
			<motion.div className={style} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
