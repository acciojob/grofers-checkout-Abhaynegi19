const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const totalsum = document.querySelectorAll(".price");

	let sum ;
	for(let item of totalsum){
		sum += item;
	}
	return sum;
};

getSumBtn.addEventListener("click", getSum);

