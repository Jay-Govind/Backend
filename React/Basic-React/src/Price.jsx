function Price({ oldPrice, newPrice }) {
	return (
		<div
			style={{
				backgroundColor: "#e0c367",
				color: "black",
                height: "30px",
                width: "100%",
				borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px"
			}}
		>
			<span style={{ textDecorationLine: "line-through" }}>{oldPrice}</span>
			&nbsp;&nbsp;
			<span style={{ fontWeight: "bold" }}>{newPrice}</span>
		</div>
	);
}

export default Price;
