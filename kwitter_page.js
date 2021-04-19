const firebaseConfig = {
      apiKey: "AIzaSyAf0xmTiWd-evA_78BF_4KYW-CV-Z5m160",
      authDomain: "let-s-chat---part5.firebaseapp.com",
      projectId: "let-s-chat---part5",
      storageBucket: "let-s-chat---part5.appspot.com",
      messagingSenderId: "137453558146",
      appId: "1:137453558146:web:b5e5ab2be85ece9140179b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,message:msg,like:0})
    document.getElementById("msg").value="";
}
