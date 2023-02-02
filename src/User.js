export default function (name, age) {
	const capitalizedName = () => name.toUpperCase();
	const printString = () => `---${capitalizedName()}---`;

	const proto = { printString };
	// console.log(proto);
	// console.log(Object);
	// console.log(Object.prototype);
	// console.log(Object.prototype.__prototype__);

	return Object.create(proto, {
		name:{value: name},
		age:{value: age},
	});
}

