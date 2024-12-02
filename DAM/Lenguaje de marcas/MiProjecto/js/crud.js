let postUsersArray = [
  {
    user: "makima32",
    options: "IA",
    image: "/Lenguaje de marcas/MiProjecto/img/imagenes-usuarios-subidas/sukuna-AI.png"
  },
  {
    user: "Satoru Gojo 69",
    options: "IA",
    image: "/Lenguaje de marcas/MiProjecto/img/imagenes-usuarios-subidas/vivy-ruined-AI.png"
  },
  {
    user: "Turboabuela777",
    options: "IA",
    image: "/Lenguaje de marcas/MiProjecto/img/imagenes-usuarios-subidas/makima-AI.png"
  }, {
    user: "Viktor",
    options: "IA",
    image: "/Lenguaje de marcas/MiProjecto/img/imagenes-usuarios-subidas/vivy-AI.png"
  }
];

function showPostUsers() {
  const postUserDiv = document.getElementById("user-art-div");

  let allUploadUsers = "";
  for (let i = 0; i < postUsersArray.length; i++) {
    allUploadUsers += `
      <div>
        <h2>${postUsersArray[i].user}</h2>
        <p>${postUsersArray[i].options}</p>
        <img class="treatment-image" src="${postUsersArray[i].image}" alt="Uploaded Image" />
      </div>
    `;
  }

  postUserDiv.innerHTML = allUploadUsers;
}

function listenForLinkSubmit() {
  const uploadForm = document.getElementById("upload-form");
  uploadForm.addEventListener("submit", insertPostInArrayAndShow);
}

function insertPostInArray(e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const options = document.getElementById("options").value;
  const imageUpload = document.getElementById("image-upload").files[0]; 

  const reader = new FileReader();

  reader.onload = function (event) {
    const imageUrl = event.target.result;

    postUsersArray.push({
      user: user,
      options: options,
      image: imageUrl
    });

    showPostUsers(); 
  };

  reader.readAsDataURL(imageUpload); 
}

function insertPostInArrayAndShow(e) {
  insertPostInArray(e);
}

function listenForDeleteButton() {
  const deleteButton = document.getElementById("delete-all-img-button");
  deleteButton.addEventListener("click", deleteAllImages);
}
function deleteAllImages() {
  postUsersArray = [];
  
  showPostUsers();
}





// Start functions
showPostUsers();
listenForLinkSubmit();
listenForDeleteButton();
