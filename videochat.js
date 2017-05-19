(function () {
  init();
  
  //==============================================================================
  // INITIALIZATION
  //==============================================================================
  function init () {
    document.getElementById("videoElement").onkeydown = function () {
      if (event.keyCode == 13) sendMessage();
    };
    document.getElementById("chatSend").onclick = function () {
      sendMessage();
    };
    
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
    displayChatMessage("Joining chat...");
  
    appRoom = orbiter.getRoomManager().getRoom(appRoomID);
    if (orbiter.self().isInRoom(appRoomID)) {
      displayReady();
    }
    appRoom.addEventListener(net.user1.orbiter.RoomEvent.JOIN, joinRoomListener);
    appRoom.addEventListener(net.user1.orbiter.RoomEvent.ADD_OCCUPANT, addOccupantListener);
    appRoom.addEventListener(net.user1.orbiter.RoomEvent.REMOVE_OCCUPANT, removeOccupantListener);  
    
    // Listen for chat messages
    appRoom.addMessageListener("CHAT_MESSAGE", chatMessageListener);
    
    // Join the chat room
    appRoom.join();
  }
  
  function displayReady () {
    displayChatMessage("Chat ready.");
  }
  
  //==============================================================================
  // CHAT ROOM EVENT LISTENERS
  //==============================================================================
  // Triggered when the room is joined
  function joinRoomListener (e) {
    displayReady();
  }
  
  // Triggered when another client joins the chat room
  function addOccupantListener (e) {
    if (appRoom.getSyncState() != net.user1.orbiter.SynchronizationState.SYNCHRONIZING) { 
      displayChatMessage("Guest" + e.getClientID() + " joined.");
    }
  }
    
  // Triggered when another client leaves the chat room
  function removeOccupantListener (e) {
    displayChatMessage("Guest" + e.getClientID() + " left.");
  }
    
  //==============================================================================
  // CHAT SENDING AND RECEIVING
  //==============================================================================
  // Sends a chat message to everyone in the chat room
  function sendMessage () {
    var outgoing = document.getElementById("chatOut");
    if (outgoing.value.length > 0) {
      appRoom.sendMessage("CHAT_MESSAGE", "true", null, outgoing.value);
      outgoing.value = "";
      // Focus text field again after submission (required for IE8 only)
      setTimeout(function () {outgoing.focus();}, 10);
    }
  }
  
  // Triggered when a chat message is received
  function chatMessageListener (fromClient, message) {
    displayChatMessage(message);
  }
  
  // Displays a single chat message
  function displayChatMessage (message) {
    // Make the new chat message element
    var msg = document.createElement("div");
    msg.className = "chatMessage";
    msg.appendChild(document.createTextNode(message));
  
    // Append the new message to the chat
    var chatPane = document.getElementById("chatPane");
    chatPane.appendChild(msg);
    
    // Trim the chat to 500 messages
    if (chatPane.childNodes.length > 500) {
      chatPane.removeChild(chatPane.firstChild);
    }
    chatPane.scrollTop = chatPane.scrollHeight;
  }
})();
