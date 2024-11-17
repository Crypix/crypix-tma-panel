import { Variants } from 'motion/react';

const TonIconAnimation: Variants = {
	initial: {
		filter: 'drop-shadow(0 0 0 var(--box-shadow-primary))',
		scale: 0.6,
	},
	animate: {
		scale: 1,
		filter: 'drop-shadow(0 0 16px var(--box-shadow-primary))',
		transition: {
			duration: 0.25,
			ease: 'easeInOut',
		},
	},
};

const HeaderAnimation: Variants = {
	initial: {
		opacity: 0.25,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.25,
			ease: 'easeInOut',
		},
	},
};

const CardAnimation: Variants = {
	initial: {
		opacity: 0.25,
		scale: 0.75,
		boxShadow: '0 0 0 var(--tg-theme-section-separator-color)',
	},
	animate: {
		opacity: 1,
		scale: 1,
		boxShadow: '0 0 8px var(--tg-theme-section-separator-color)',
		transition: {
			duration: 0.25,
			ease: 'easeInOut',
		},
	},
};

const CardContentAnimation: Variants = {
	initial: {
		opacity: 0.25,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.9,
			ease: 'easeInOut',
		},
	},
};

export { TonIconAnimation, HeaderAnimation, CardAnimation, CardContentAnimation };
