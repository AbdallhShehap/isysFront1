// // let div = document.createElement('div');
// // // div.innerHTML = '<p> First Div </p>';

// // div.id = 'content';
// // div.class = 'myclass';

// // let h2 = document.createElement('h2')
// // let text12 = document.createTextNode('Abdallh shehap')
// // h2.id= 'name';
// // div.appendChild(h2);
// // h2.appendChild(text12);
// // console.log(h2);

// // let text = document.createTextNode('Age 28')

// // div.appendChild(text);
// // console.log(text);

// // let br = document.createElement('br');
// // div.appendChild(br)



// // let text2 = document.createTextNode('Meachanical Engineer')
// // div.appendChild(text2);
// // console.log(text2);

// //  br = document.createElement('br');
// // div.appendChild(br)

// // document.body.appendChild(div);

// // console.log(div);

// // let button = document.createElement('button');
// // button.append(document.createTextNode('Clike ME'))
// // div.appendChild(button)

// // button.onclick= function fttt (){
// //     document.getElementById('content').style.color = 'red'
// // }


// // let div2 = document.createElement('div');

// // div2.id = 'content';

// // let h1 = document.createElement('h1')
// // div2.appendChild(h1)
// // let text133 = document.createTextNode('Logon')
// // h1.appendChild(text133)
// // h1.id = 'h1'


// // let text24 = document.createTextNode('UserName : ')
// // div2.appendChild(text24);


// // let user = document.createElement('input')
// // user.setAttribute("type","text")
// // user.id = 'usr'
// // div2.appendChild(user)

// // br = document.createElement('br');
// // div2.appendChild(br)

// // br = document.createElement('br');
// // div2.appendChild(br)

// // br = document.createElement('br');
// // div2.appendChild(br)



// // let text25 = document.createTextNode('Password : ')
// // div2.appendChild(text25);



// // password = document.createElement('input')
// // password.setAttribute("type","password")
// // password.id = 'pas'
// // div2.appendChild(password)


// // br = document.createElement('br');
// // div2.appendChild(br)

// // br = document.createElement('br');
// // div2.appendChild(br)


// // let button2 = document.createElement('button');
// // button2.append(document.createTextNode('Login'))
// // div2.appendChild(button)

// // button.onclick= function ftt (){
// //     if (document.getElementById('usr').value == 'myuserName'){

// //         alert('Wellcom myuserName')


// //     }else{

// //         alert('Invild User Name or Password')
// //     }
// // }

// // document.body.appendChild(div2);






// // ####################### task 

// let myDiv = document.createElement("div");
// let myForm = document.createElement
// ("form");


// let labelUser = document.createElement("label");
// let inputuser = document.createElement("input");

// // let req = document.getElementById(req1)



// myForm.appendChild(labelUser)
// myForm.appendChild(inputuser)
// // myForm.appendChild(req1)




// br = document.createElement('br');
// myForm.appendChild(br)

// let labelPass = document.createElement("label");
// let inputpass = document.createElement("input");
// // let req2 = document.getElementById(req2)


// myForm.appendChild(labelPass)
// myForm.appendChild(inputpass)
// // myForm.appendChild(req2)


// br = document.createElement('br');
// myForm.appendChild(br)

// let labelConf = document.createElement("label");
// let inputconf = document.createElement("input");
// // let req3 = document.getElementById(req3)



// myForm.appendChild(labelConf)
// myForm.appendChild(inputconf)
// // myForm.appendChild(req3)




// labelUser.textContent = "username"

// labelPass.textContent = "Password"
// labelConf.textContent = "Confirm Password"

// inputpass.setAttribute('type','password');

// inputconf.setAttribute('type','password');



// myDiv.appendChild(myForm);









// document.body.appendChild(myDiv)
// console.log(myDiv);

















// 1
// let myDiv = document.createElement("div");
// let myForm = document.createElement("form");
// let labelUsername = document.createElement("label");
// let inputUsername = document.createElement("input");
// let labelPassword = document.createElement("label");
// let inputPassword = document.createElement("input");
// let labelConfirmPass = document.createElement("label");
// let inputConfirmPass = document.createElement("input");

// myForm.className = "flex-form";
// myForm.appendChild(labelUsername);
// myForm.appendChild(inputUsername);
// myForm.appendChild(labelPassword);
// myForm.appendChild(inputPassword);
// myForm.appendChild(labelConfirmPass);
// myForm.appendChild(inputConfirmPass);
// myDiv.appendChild(myForm);

// inputPassword.setAttribute("type", "password");
// inputConfirmPass.setAttribute("type", "password");

// labelUsername.textContent = "username ";
// labelPassword.textContent = "password ";
// labelConfirmPass.textContent = "Confirm Password ";
// document.body.appendChild(myDiv);
// console.log(myDiv);

// 2
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const registerBtn = document.getElementById("register-btn");
let id1 = document.getElementById("p1");
let id2 = document.getElementById("p2");
let id3 = document.getElementById("p3");

let arr = [usernameInput, passwordInput, confirmPasswordInput];
let arrId = [id1, id2, id3];
for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("input", function () {
    if (arr[i].value != "") {
      arrId[i].style.display = "none";
    } else {
      arrId[i].style.display = "block";
    }
  });
}
//3
registerBtn.onclick = function () {
  if (passwordInput.value == confirmPasswordInput.value) {
    alert("successful");
  } else {
    alert("not successful");
  }
};

// 4
function validateInputs() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  return username !== "" && confirmPassword !== "" && password !== "";
}

function toggleRegisterBtn() {
  registerBtn.disabled = !validateInputs();
}

usernameInput.addEventListener("input", toggleRegisterBtn);
passwordInput.addEventListener("input", toggleRegisterBtn);
confirmPassword.addEventListener("input", toggleRegisterBtn);
