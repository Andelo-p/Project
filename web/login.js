/*---User constructor--- */
function createUser(username,email,password){
    this.username=username,
    this.email=email,
    this.password=password
}
/*---Admin users and "database" */
let admin1 = new createUser("Andelo","adminandelo@gmail.com","12345678");
let admin2 = new createUser("Lucija","adminLucija@gmail.com","12345678");
let allUsers=[];
allUsers.push(admin1);
allUsers.push(admin2);
/*---LogIn ---*/
function logIn(){
    let logInEmail = document.getElementById("loginemail").value;
    let logInPassword = document.getElementById("loginpassword").value;
    for(let i =0;i<allUsers.length;i++){
        if(logInEmail== allUsers[i].email){
            if(logInPassword == allUsers[i].password){
                openHome();
                return;
            }else{
                alert("Wrong password");
                return;
                }
        }else{
            alert("User did not exist");
        }

    }
}

/*---SignUp--- */
function signUp(){
    let signUpUsername=document.getElementById("signupusername").value;
    let signUpEmail=document.getElementById("signupemail").value;
    let signUpPassword=document.getElementById("signuppassword").value;
    for(let j=0;j<allUsers.length;j++){
        if(signUpUsername == allUsers[j].username){
            alert("User name alredy used");
            return;
        }else{
            if(signUpEmail == allUsers[j].email){
                alert("You are alredy sign with this email");
                return;
            }else{
                let newUser = new createUser(signUpUsername,signUpEmail,signUpPassword);
                allUsers.push(newUser);
                alert("1");
            }
        }
    }
  
}
/*---Open Home ---*/









/*
                TO DO
                Fix signup/login form

*/