var firebaseConfig = {
    apiKey: "AIzaSyCsFE1EtoUIqIGaZ4iKWcQDu4wwBerwQoE",
    authDomain: "blogging-website-mk271102.firebaseapp.com",
    projectId: "blogging-website-mk271102",
    storageBucket: "blogging-website-mk271102.appspot.com",
    messagingSenderId: "390412641976",
    appId: "1:390412641976:web:258b4e58e0c81df401764d",
    measurementId: "G-4C7FW5M9HE"
  };
 
  firebase.initializeApp(firebaseConfig);


let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(title, content, time) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-14");

  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let small = document.createElement("small");

  h2.textContent = title;
  p.textContent = content;
  small.textContent = time;

  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(small);

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().postName,
          docs.data().postContent,
          docs.data().createdAt
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();