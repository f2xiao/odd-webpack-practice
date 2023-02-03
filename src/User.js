const ancestor = {
	init: function (values) {
		Object.keys(values).forEach(key => this[key] = values[key]);
		return this;
	},
	capitalizedName: function () {
		return this.name.toUpperCase();
	}
}
const proto = Object.create(ancestor);

proto.printString = function() {
	return `---${this.capitalizedName()}---
	I'm a ${this.isAdmin ? 'admin' : 'user'}.
	`
} 

proto.log = `long live the users.`

export function User(name, age) {
	return Object.create(proto).init({name, age});
}

export function Admin(name, age, isAdmin=true) {
	return Object.create(proto).init({name, age, isAdmin});
}
