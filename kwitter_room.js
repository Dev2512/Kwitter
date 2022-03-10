
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAt-ZZ_rdMDwL8Ib6zmHNRdXFWxU3HMRN8",
      authDomain: "classtest-51b66.firebaseapp.com",
      projectId: "classtest-51b66",
      storageBucket: "classtest-51b66.appspot.com",
      messagingSenderId: "473632059405",
      appId: "1:473632059405:web:b1c227e6e031bb44c36544"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child("room_name").update({purpose: "adding room name"});
          localStorage.setItem("room_name", room_name);
          window.location="kwiter_page.html";
          
    }
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-" + Room_names);
      row = "<div class='room_name' id="+ Room_names+" onlclick='redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

      
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
