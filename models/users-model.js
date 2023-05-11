const shortid = require ('shortid');
const bcrypt = require('bcrypt');

class Users {
    constructor(){
        this.users = [];
 }

 findUser(key, value){
    const user = this.users.find(item => item[key] === value)
    return user;
}
 
 async add(name, email, password){
    const id = shortid.generate();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {id:id, name:name, email:email, password:hashedPassword};
    this.users.push(user);
    console.log(this.users);
    }
}


module.exports = new Users();