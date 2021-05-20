// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBbYOB9ZtHi-TzZo-dJ5rUXSPwX9nZJ1Io",
  authDomain: "blog-ca8a0.firebaseapp.com",
  projectId: "blog-ca8a0",
  storageBucket: "blog-ca8a0.appspot.com",
  messagingSenderId: "941822141974",
  appId: "1:941822141974:web:e140c98991bcb7dff17737",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// reference post detail collections
const blogPostDatabase = firebase.database().ref("details");

// Listen for a submit
document.querySelector(".submit-btn").addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  //   get input values
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;
  const category = document.querySelector(".category").value;
  const img = document.querySelector(".img").value;
  const message = document.querySelector(".message").value;

  savePost(title, author, category, img, message);

  document.querySelector("form").reset();
}

// save blog post to firebase

function savePost(title, author, category, img, message) {
  const newBlogPostDatabase = blogPostDatabase.push();

  newBlogPostDatabase.set({
    title: title,
    author: author,
    category: category,
    img: img,
    message: message,
  });

  retrieveInfo();
}

// retrieve info from firebase

function retrieveInfo() {
  const ref = firebase.database().ref("details");
  ref.on("value", gotData);
}

function gotData(data) {
  let info = data.val();
  let keys = Object.keys(info);

  for (let i = 0; i < keys.lenght; i++) {
    let k = keys[i];

    let title = info[k].title;
    let author = info[k].author;
    let category = info[k].category;
    let img = info[k].img;
    let message = info[k].message;
    console.table(title, author, category, img, message);

    let inforesult = document.querySelector(".inforesult");

    inforesult.innerHTML += `<div>
    <p>${title}</p>
    <p>${autor}</p>
    <p>${category}</p>
    <p>${img}</p>
    <p>${message}</p></div>`;
  }
}
