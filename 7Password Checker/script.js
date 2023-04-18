class User{
    constructor(username, password){
        this.username = username;
        this._password = password;
    }
    // Replacing all the character of the password by astrick symbol
    get getPassword (){
        let asterick = "";
        for (let i = 0; i < this._password.length; i++) {
            asterick += '*'
        }
       let userPass = this._password.toString().replace(/\w+/
       , asterick )

    return userPass;
    }

    // Password validation check here
    set setPassword(val){
        let validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        if(val.match(validate)){
        }else{
            console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase latter");
        }
    }
}

let user = new User("avinash", "avinash@")
// user.setPassword = "yhA8gu76r"
console.log(user.getPassword);