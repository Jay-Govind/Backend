import { useState } from "react";

export default function LikeButton() {
    let [ isLike, setIsLike] = useState(false);
	let toggleLike = () => {
		setIsLike(!isLike);
	};
	return (
		<div>
			<h3 onClick={toggleLike}>
				{isLike ? (
					<i className="fa-solid fa-heart" style={{color:"red"}}></i>
				) : (
					<i className="fa-regular fa-heart"></i>
				)}
			</h3>
		</div>
	);
}
