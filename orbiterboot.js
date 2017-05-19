//==============================================================================
// INITIALIZATION
//==============================================================================
// Expose system-wide global variables for use by other application components
var orbiter;
var appRoomID;

(function () {
  init();

  function init () {
    // Use the URL hash as the room id, if supplied
    if (window.location.hash == "") {
      appRoomID = "html5collaborator.default";
    } else {
      appRoomID = "html5collaborator." + window.location.hash.substr(1);
    } 
    console.log(appRoomID);
    // Create the Orbiter instance, used to connect to and communicate with Union,
    // then enable automatic reconnection (one attempt every 15 seconds)
    orbiter = new net.user1.orbiter.Orbiter();
    orbiter.getConnectionMonitor().setAutoReconnectFrequency(1500);
    orbiter.getLog().setLevel(net.user1.logger.Logger.DEBUG);

    // If required JavaScript capabilities are missing, abort
    if (!orbiter.getSystem().isJavaScriptCompatible()) {
      alert("Your browser is not supported.");
      return;
    }

    // Register for Orbiter's connection events
    orbiter.addEventListener(net.user1.orbiter.OrbiterEvent.READY, readyListener, this);
    orbiter.addEventListener(net.user1.orbiter.OrbiterEvent.CLOSE, closeListener, this);

    status("Connecting to Uni-tap...");
    
    // Connect to Union Server
    orbiter.connect("tryunion.com", 80);
  }


  //==============================================================================
  // ORBITER EVENT LISTENERS
  //==============================================================================
  // Triggered when the connection is ready
  function readyListener (e) {
    console.log("Connected with the union uni-tap servers");
    // Create the chat room on the server
    appRoomID = "divyanshg";
    var appRoom = orbiter.getRoomManager().createRoom(appRoomID);
    appRoom.join();
    console.log(appRoom);  
  }

  // Triggered when the connection is closed
  function closeListener (e) {
   // alert("We have lost our connection with the uni-tap severs.");
  }
})();
