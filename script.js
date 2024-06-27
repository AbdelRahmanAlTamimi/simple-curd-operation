async function readData() {
  let userId = document.getElementById("searchUserId").value;
    try {
    let myReq = await fetch(`http://localhost:3000/users`);
    let myRes = await myReq.json();

        let content = "";

    myRes.forEach((element) => {
      


        if (element.id == userId)

          content += `

        <p>name: ${element.name}</p>
        <p>email: ${element.email}</p>
        <p>password:******** </p>
                        
                    `;
    });
    document.querySelector(".response").innerHTML = content;
  } catch (koko) {
    console.error(`Error: ${koko}`);
  }
}

async function createData() {
    let Name = document.getElementById("addUserName").value;
    let email = document.getElementById("addUserEmail").value;
    let password = document.getElementById("addUserPassword").value;
    data = {
        name: Name,
      email: email,
      password: password,
    };
    
    
    try {
        let response = await fetch("http://localhost:3000/users");
        let users = await response.json();
        data.id = String(users.length);
      const myReq = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      document.getElementById("add-user-form").reset();
      
    //   console.log(users.length);
      return myReq.json();
    }
    
   
    catch (koko) {
    console.error(`Error: ${koko}`);
  }
}
async function updateData() {
    let id = document.getElementById("updateUserId").value;
    let Name = document.getElementById("updateUserName").value;
  let email = document.getElementById("updateUserEmail").value;
  let password = document.getElementById("updateUserPassword").value;
    
    const data = {
        "id": id,
        "name": Name,
        "email": email,
        "password": password
  };
  try {
    const myReq = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
      console.log(data)
      let response = await myReq.json();
    //   alert("The update succeeded")
      document.getElementById("update-user-form").reset();
      return response;
  } catch (koko) {
    console.error(`Error: ${koko}`);
  }
}
async function deleteData() {
    let id = document.getElementById("deleteUserId").value;
    String(id)
    try {
    const myReq = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
        document.getElementById("delete-user-form").reset();
        // alert("The delete succeeded");
    return myReq.json();
  } catch (koko) {
    console.error(`Error: ${koko}`);
  }
}


  

