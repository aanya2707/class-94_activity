var firebaseConfig = {
    apiKey: "AIzaSyAp9L3fRwTFUtxzTEac_E7PYVb8rmMO4L4",
    authDomain: "activity-35511.firebaseapp.com",
    databaseURL: "https://activity-35511-default-rtdb.firebaseio.com",
    projectId: "activity-35511",
    storageBucket: "activity-35511.appspot.com",
    messagingSenderId: "5605442125",
    appId: "1:5605442125:web:5092c9320d12528a8a9204"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    username = document.getElementById("add_user").value;
    firebase.database().ref("/").child(username).update({
        purpose:"add user"
    });
}