// load express library
let express = require("express");
// create the app
let app = express();
// define the port where client files will be provided
let port = process.env.PORT || 3000
// start to listen to that port
let server = app.listen(port);
// provide static access to the files
// in the "public" folder
app.use(express.static("public"));
// load socket library
let socket = require("socket.io");
// create a socket connection
let io = socket(server);

//firebase
let firebase = require("firebase");
var firebaseConfig = {
  // ...
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 let connectedUsers = [];
let destination = '/busy.html';
// define which function should be called
// when a new connection is opened from client
io.on("connection", newConnection);
// callback function: the paramenter (in this case socket)
// will contain all the information on the new connection
function newConnection(socket) {
  //when a new connection is created, print its id

    console.log("socket:", socket.id);
    //console.log("new connection: ", socket.client.id);

  //define what to do on different kind of messages
  // socket.on("name", newUser);

 //  function newUser(data){
 //   socket.broadcast.emit("welcomeNewUser", data);
 // }

 function newUserC(socket){
  socket.broadcast.emit("message", socket.id);
}


// socket.on('connect', () => {
    // This is the user associated with a new socket connection.
    // User that you will need to remove when connection is closed.
    const user = { id: socket.id };
    connectedUsers.push(user);

    // Then you can subscribe to socket disconnect event
    socket.on('disconnect', () => {
      var i = connectedUsers.indexOf(socket);
   connectedUsers.splice(i, 1); // removing disconnected user
    console.log(connectedUsers);    // And then here you can notify your front-end with an updated users array
    });
// });

// socket.on("mouse", mouseMessage)
//   // create the mouseMessage function
//   function mouseMessage(data) {
//     // send the data to all the other clients
//     socket.broadcast.emit("mouseBroadcast", data);
//     // log the sent data
//     console.log(socket.id, data);
//   }
// function updateUsersList(){
//   socket.emit('usersList', connectedUsers)
// }

if (connectedUsers[1]) {
 socket.emit('redirect', destination);
}

console.log(connectedUsers);
}

console.log("node server is running");
