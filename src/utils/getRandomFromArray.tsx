function getRandomFromArray(array: any[]) {
	return array[Math.floor(Math.random() * array.length)];
}

export { getRandomFromArray };
