const BNAnimation = {
	initial: { y: 20, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.25,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

export { BNAnimation };
