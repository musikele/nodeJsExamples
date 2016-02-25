'use strict';
class UserService {  //Watch This! ES6 HERE !!! 

	constructor() {
		this.users = [];
		this.nextUserId = 0;
	}

	fetchAllUsers(callback) {
		callback(null, this.users);
	};

	fetchUserById(id, callback) {
		let foundUsers = this.users.filter(user => {
			return user.id == id;
		});
		if (foundUsers.length == 0) {
			callback('User not found', null);
		} else {
			callback(null, foundUsers[0]);
		}
	};

	insertUser(user, callback) {
		user.id = this.nextUserId++;
		this.users.push(user);
		callback(null, user);
	};

	updateUser(user, callback) {
		this.fetchUserById(user.id, (error, foundUser) => {
			if (error) {
				callback(error, null);
			} else {
				foundUser.name = user.name;
				callback(null, user);
			}
		});
	};

	deleteUser(id, callback) {

		this.users = this.users.filter((user) => {
			return user.id != id;
		});
		callback(null, {id: id});
	};

};


module.exports = UserService;



