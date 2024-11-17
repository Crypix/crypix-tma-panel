import { ReactElement, useEffect, useRef, useState } from 'react';
import './StarBackground.scss';
import { motion } from 'motion/react';
import { randomIntFromInterval } from '@utils/randomIntFromInterval';
import { StarAnimation } from './animation';

const StarElement = ({ bgSize }: { bgSize: { w: number; h: number } }): ReactElement => {
	const size = useRef<string>(`${randomIntFromInterval(3, 5)}px`);
	return (
		<motion.div
			variants={StarAnimation(bgSize.h)}
			initial="initial"
			animate="animate"
			className="star-background-item"
			style={{
				width: size.current,
				height: size.current,
				top: bgSize.h + randomIntFromInterval(100),
				left: randomIntFromInterval(bgSize.w),
			}}
		/>
	);
};
function StarBackground({ count = 25 }: { count: number }): ReactElement {
	const [bgSize, setBGSize] = useState<{ w: number; h: number }>(null!);
	const wrapperRef = useRef<HTMLDivElement>(null!);

	useEffect(() => {
		setBGSize({
			w: wrapperRef.current.offsetWidth,
			h: wrapperRef.current.offsetHeight,
		});
	}, []);

	return (
		<div className="star-background_wrapper" ref={wrapperRef}>
			{bgSize ? (
				<>
					{Array.from(Array(count).keys()).map((star) => {
						return <StarElement bgSize={bgSize} key={`star-item-${star}`} />;
					})}
				</>
			) : null}
		</div>
	);
}

export { StarBackground };
