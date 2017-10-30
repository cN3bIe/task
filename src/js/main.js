;(function(){
	const log = console.log;
	/*Start Task 1*/
	/**/
	/*/
	Array.prototype.sum = function(){
		let th = this;
		return th.reduce(function(sum,val){
			return sum+val;
		},0);
	};
	let a = [1,2,3];
	log(a.sum());
	/**/
	/******************/
	/*/
	/**/
	let sum = (()=>{
		let
			_sum = 0,
			last_sum = 0;
		return function sum( val ){
			if( val ){
				_sum += val;
				return sum;
			}else{
				last_sum = _sum;
				_sum = 0;
				return last_sum;
			}
		};
	})();
	log( sum(1)(2)(3)() );
	/**/
	/*end Task 1*/
	/*Start Task 2*/
	/**/
	/*/
	let input = 'aaabbbcdd';
	let expected = 'a3b3cd2';
	function compress(str) {
		let ft = str.match(/(\w)\1+|\w\1/g);
		return ft.reduce(function(sum,val){
			return sum + val.charAt(0) + (val.length>1?val.length:'');
		},'');
	}
	log( compress(input) === expected);
	/**/
	/*end Task 2*/
	/*Start Task 3*/
	/**/
	/*/
	let userService = {
		users: [{
			name: 'Tyrion'
		}],
		currentUser: {
			name: 'Tyrion'
		},
		getCurrentUser: function () {
			return this.users.find(function (user) {
				return user.name === this.currentUser.name;
			});
		},
		dec_1_getCurrentUser: function () {
			let th = this;
			return this.users.find(function (user) {
				return user.name === th.currentUser.name;
			});
		},
		dec_2_getCurrentUser: function () {
			let th = this;
			return this.users.find((function (user) {
				return user.name === th.currentUser.name;
			}).bind(this));
		},
	};
	log( userService.dec_1_getCurrentUser() );
	log( userService.dec_2_getCurrentUser() );
	/**/
	/*end Task 3*/
	/*Start Task 4*/
	// doSomething().then(doSomethingElse)
	// .then(finalAction);
	// 1.doSomething
	// 2.doSomethingElse
	// 3.finalAction

	// doSomething().then(function () {
	// 	doSomethingElse();
	// }).then(finalAction);
	// 1.doSomething
	// 2.doSomethingElse
	// 3.finalAction

	// doSomething().then(function () {
	// 	return doSomethingElse();
	// }).then(finalAction);
	// 1.doSomething
	// 2.doSomethingElse
	// 3.finalAction

	// doSomething().then(doSomethingElse())
	// .then(finalAction);
	// 1.doSomething
	// 2.doSomethingElse
	// 3.finalAction
	// Везде одно и тоже
	/*end Task 4*/
	/*Start Task 5*/
	/**/
	/*/
	class Person{
		constructor(firstName,lastName,email) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
		}
		info(){
			return `First Name: ${this.firstName}\n\
Last Name: ${this.lastName}\n\
Email: ${this.email}\n`;
		}
		whoami(){
			log(this.info());
		}
	}
	class Employee extends Person{
		constructor(pers,salary) {
			super(pers.firstName,pers.lastName,pers.email);
			this.dateHired = Date.now();
			this.dateFired = 'not fired';
			this.salary = salary;
		}
		info(pers){
			return super.info()+`Date Hired: ${this.dateHired}\n\
Date Fired: ${this.dateFired}\n\
Salary: ${this.salary}`;
		}
		sendNotification(){
			return `Message has been sent yout email: ${this.email}`;
		}
	}

	class Actions {
		constructor() {}
		hire(person, salary){
			return new Employee(person, salary);
		}
		fire(employee){
			return employee.dateFired = Date.now();
		}
	}


	const person = new Person('Vasya', 'Pupkin', 'vpup@mail.ru');
	const actions = new Actions();
	person.whoami();
	const employee = actions.hire(person, '$500');
	employee.whoami();
	setTimeout(() => {
		actions.fire(employee);
		employee.whoami();
	}, 60000);
	/*/

	var Person = function(firstName,lastName,email){
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	};
	Person.prototype.info = function(){
		return `First Name: ${this.firstName}\n\
Last Name: ${this.lastName}\n\
Email: ${this.email}\n`;
	};
	Person.prototype.whoami = function(){
		log(this.info());
	};

	var Employee = function(pers,salary) {
		Person.call(this, pers.firstName, pers.lastName, pers.email);
		this.dateHired = Date.now();
		this.dateFired = 'not fired';
		this.salary = salary;
	}
	Employee.prototype = Object.create(Person.prototype);
	Employee.prototype.constructor = Employee;

	Employee.prototype.info = function(pers){
		return Person.prototype.info.apply(this)+`Date Hired: ${this.dateHired}\n\
Date Fired: ${this.dateFired}\n\
Salary: ${this.salary}`;
	};
	Employee.prototype.sendNotification = function(){
		return `Message has been sent yout email: ${this.email}`;
	};

	var Actions = function(){};
	Actions.prototype.hire = function(person, salary){
		return new Employee(person, salary);
	};
	Actions.prototype.fire = function(employee){
		return employee.dateFired = Date.now();
	};

	const person = new Person('Vasya', 'Pupkin', 'vpup@mail.ru');
	const actions = new Actions();
	person.whoami();
	const employee = actions.hire(person, '$500');
	employee.whoami();
	setTimeout(() => {
		actions.fire(employee);
		employee.whoami();
	}, 60000);
	/**/
	/*end Task 5*/
}());