const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const totalsum = document.querySelectorAll(".price");

	let sum = 0;
	for(let item of totalsum){
		sum += Number(item.textContent);
	}
	return sum;
};

getSumBtn.addEventListener("click", getSum);

