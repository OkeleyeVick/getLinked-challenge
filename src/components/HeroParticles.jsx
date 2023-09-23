import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function HeroParticles() {
	async function loadParticles(main) {
		await loadSlim(main);
	}

	return (
		<Particles
			init={loadParticles}
			id="tsparticles"
			options={{
				fullScreen: {
					enable: false,
				},
				background: {
					color: {
						value: "rgba(255 255 255 / 0)",
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "repulse",
						},
						onHover: {
							enable: false,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 2,
						},
					},
				},
				particles: {
					color: {
						value: "#52EFF1",
					},
					links: {
						color: "#52EFF1",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 2,
						straight: false,
					},
					number: {
						value: 1100,
						density: {
							enable: true,
							area: 800,
						},
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
