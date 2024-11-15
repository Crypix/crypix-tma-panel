import { Variants } from 'motion/react';
import { getRandomFromArray } from '@utils/getRandomFromArray';

const init_delay = [1, 3, 5, 7, 9, 11];
const delay = [1, 3, 5, 7];
const duration = [15, 18, 20];

const StarAnimation = (VH: number): Variants => {
	return {
		initial: { y: 0, opacity: 0 },
		animate: {
			opacity: [1, 0.75, 0],
			restart: 1,
			y: (VH + VH * 0.2) * -1,
			transition: {
				duration: getRandomFromArray(duration),
				repeat: Infinity,
				repeatDelay: getRandomFromArray(delay),
				delay: getRandomFromArray(init_delay),
			},
		},
	};
};

export { StarAnimation };
