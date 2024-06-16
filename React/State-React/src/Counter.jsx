import { useState } from "react";
function Counter() {
	let [count, setCount] = useState(0);

	function incCount() {
		setCount(count + 1);
		console.log(count);
	}

	return (
		<div>
			<button onClick={incCount}>Count : {count}</button>
		</div>
	);
}

export default Counter;
