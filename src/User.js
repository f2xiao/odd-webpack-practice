export default function (name, age) {

	const proto = {
		printName: function () {
			return `my name is ${this.name}`
		},
		printAge: function () {
			console.log(this.age);
		}
	};

	const obj = Object.create(proto);
	
	obj.name = name;
	obj.age = age;

	return obj
}



