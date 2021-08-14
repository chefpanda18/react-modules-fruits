import fruits from './foods.js';
import { Choice, Remove } from './helpers.js';

const App = () => {
	let fruit = Choice(fruits);

	console.log(`I'd like one ${fruit} please`);
	console.log(`Here you go: ${fruit}`);
	console.log(`Delicious! May I have another?`);

	let remaining = Remove(fruit, fruits);

	console.log(`I'm sorry we're all out. We have ${remaining.length} left.`);
};

export default App;
