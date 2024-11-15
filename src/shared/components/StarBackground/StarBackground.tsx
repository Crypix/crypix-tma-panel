import { ReactElement, useEffect, useRef, useState } from 'react';
import './StarBackground.scss';
import { motion } from 'motion/react';
import { randomIntFromInterval } from '@utils/randomIntFromInterval';
import { StarAnimation } from './animation';

function StarBackground({ count = 25 }: { count: number }): ReactElement {
	const [bgSize, setBGSize] = useState<{ w: number; h: number }>(null!);
	const wrapperRef = useRef<HTMLDivElement>(null!);

	useEffect(() => {
		setBGSize({
			w: wrapperRef.current.offsetWidth,
			h: wrapperRef.current.offsetHeight,
		});
	}, []);

	console.log(count);
	return (
		<div className="star-background_wrapper" ref={wrapperRef}>
			{bgSize ? (
				<>
					{Array.from(Array(count).keys()).map((star) => {
						const size = `${randomIntFromInterval(3, 5)}px`;
						return (
							<motion.div
								variants={StarAnimation(bgSize.h)}
								initial="initial"
								animate="animate"
								className="star-background-item"
								key={`star-item-${star}`}
								style={{
									width: size,
									height: size,
									top: bgSize.h + randomIntFromInterval(0, 100),
									left: randomIntFromInterval(0, bgSize.w),
								}}
							/>
						);
					})}
				</>
			) : null}
		</div>
	);
}

export { StarBackground };
