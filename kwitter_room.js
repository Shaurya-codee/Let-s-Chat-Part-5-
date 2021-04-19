
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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+ " !";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding Room Name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name- " +Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";   
         document.getElementById("output").innerHTML+=row;
      });
});

}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

