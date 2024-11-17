function randomIntFromInterval(min: number, max?: undefined): number;
function randomIntFromInterval(min: number, max: number): number;
function randomIntFromInterval(min: number, max?: number | undefined): number {
	if (max === undefined) {
		max = min;
		min = 0;
	}
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export { randomIntFromInterval };
