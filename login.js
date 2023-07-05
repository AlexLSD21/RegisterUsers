const updateUsername = document.querySelector("#username");
const updatePassword = document.querySelector("#password");
const displayNewUser = document.querySelector("#addUser");
const showTotal = document.querySelector("#total");
displayNewUser.innerHTML = "";

let contador = 0;

const users = [];

const submit = document.querySelector("#listo");

function dameClick(){
    contador += 1;

    const user = {
        username: updateUsername.value,
        password: updatePassword.value
    };

    if (users.some(u => u.username === user.username)){
        return alert("YA EXISTE UN USUARIO CON ESTE NICKNAME");
    };
    

    users.push(user);

    displayNewUser.innerHTML = "";

    users.forEach((user, index) => {
        const tr = document.createElement("tr");
        const tdNumber = document.createElement("td");
        const tdUser = document.createElement("td");
        const tdPass = document.createElement("td");
        const total = document.createElement("td");
    
        tdNumber.textContent = index + 1;
        tdUser.textContent = user.username;
        tdPass.textContent = user.password;
        total.textContent = users.length;
    
        tr.appendChild(tdNumber);
        tr.appendChild(tdUser);
        tr.appendChild(tdPass);
        
    
        displayNewUser.appendChild(tr);
    });

    showTotal.textContent = "TOTAL: " + contador;

    console.log(users)

    updateUsername.value = "";
    updatePassword.value = "";
}

 
