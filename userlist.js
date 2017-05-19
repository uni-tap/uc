(function () {
  init();
  
  //==============================================================================
  // VARIABLES
  //==============================================================================
  var appRoom;
  
  //==============================================================================
  // INITIALIZATION
  //==============================================================================
  function init () {
    orbiter.addEventListener(net.user1.orbiter.OrbiterEvent.READY, readyListener, this);
    
    // If Orbiter has already connected, start this component
    if (orbiter.isReady()) {
      start();
    }
  }

  // Triggered when the connection to Union Server is ready  
  function readyListener (e) {
    start();
  }
  
  // Start this component
  function start () {
    // Create the chat room on the server
    appRoom = orbiter.getRoomManager().getRoom(appRoomID);
      console.log(appRoom);
    if (orbiter.self().isInRoom(appRoomID)) {
      populateList();
    }
    appRoom.addEventListener(net.user1.orbiter.RoomEvent.ADD_OCCUPANT, addOccupantListener);
    appRoom.addEventListener(net.user1.orbiter.RoomEvent.REMOVE_OCCUPANT, removeOccupantListener);  
  }

  //==============================================================================
  // ROOM EVENT LISTENERS
  //==============================================================================
  // Triggered when a client joins the room   
  function addOccupantListener (e) {
    addListOption(e.getClientID(), e.getClientID());
      console.log(e.getClientID);
  }
    
  // Triggered when a client leaves the room
  function removeOccupantListener (e) {
    removeListOption(e.getClientID());
  }
  
  //==============================================================================
  // LIST MANAGEMENT
  //==============================================================================
  function addListOption (name, value) {
    var li = document.createElement("li");
    li.className = "userlistItem";
    li.id = value;
    li.appendChild(document.createTextNode(name));
  
    // Append the new message to the chat
    var userlist = document.getElementById("userList");
    userlist.appendChild(li);
  }
  
  function removeListOption (value) {
    var list = document.getElementById("userList");
    var listItems = list.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
      if (listItems[i].id == value) {
        list.removeChild(listItems[i]);
        return;
      }
    }
  }
  
  function populateList () {
    clearList();
    var occupants = appRoom.getOccupants();
    for (var i = 0; i < occupants.length; i++) {
      addListOption ("User" + occupants.getClientID());
    }
  }
  
  function clearList () {
    var node = document.getElementById("userList");
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  }
})();
