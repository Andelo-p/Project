
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
let admin1Username=Adndelo;
let admin1Email=admin1;
let admin1Password=12341234;



function signUp(){
    let signInUserName=document.getElementById("signupusername").value;
    let signInEmail=document.getElementById("signupemail").value;
    let signInUPassword=document.getElementById("signuppassword").value;
    let admin1=new User(signInUserName,signInEmail,signInUPassword);
    alert("Username is :"+admin1.username);
    alert("Email is :"+admin1.email);
    alert("Password is :"+admin1.password);
}