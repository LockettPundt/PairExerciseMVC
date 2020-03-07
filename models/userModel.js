'use strict'

const db = require('./conn');
const bcrypt = require('bcryptjs');


class UserModel {
    constructor(id, name, email, password) {
        this.id =  id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async addUser() {
        try {
            const response = await db.one(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id`, [this.name, this.email, this.password]);
            console.log('adding user', this.name); //can also just type 'this'
            return response;
        } catch (error) {
            return error;
        }
    }
    
    async logInUser() {
        try {
            const response = await db.one(`SELECT id, name, password FROM users WHERE email = $1`, [this.email]);
            console.log('logging in user', response.name, this.email);
            const isValid = this.checkPassword(response.password);
            const {id, name} = response;
            return !!isValid ? {isValid, id, name} : isValid;
        } catch (error) {
            return error;
        }
    }
}

module.exports = UserModel;