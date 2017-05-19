var mlocalTool = "circ";
var mlocalLineColor = "#000000" ;
var mlocalToolStatus = "false";
var  mBoardBackGroundColor ="#FFFFFF"  ;
var mpageNo = 1 ;
var mCurrentPageNo =1;
var mPageNotextBox = document.getElementById('textbox');
     mPageNotextBox.value = mCurrentPageNo +"\/" + mpageNo ;
var mcanvasId ;
var mcanvasName = "canvas1" ;
var mcontext ;
var mcontainer;
 var ncanvasId ;
var ncanvasName = "MyTempcanvas";
 var ncontext ;
var ncontainer ;
var sectionID = "Mytab";

function myButtonClicked(name) {

  switch (name) {


		case "Pencil":
                 mlocalTool= "pen";
				 mlocalToolStatus = "true";
				// window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor,mButtons) , false);

        break;
		case "NewPage":
                mlocalTool= "newpage";
				mlocalToolStatus = "true";
                 //drawPage3(mpageNo, mcanvasName,ncanvasName,mcontainer,ncontainer,mcontext,ncontext);
				window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor) , false);

        break;
        case "LeftBt":

				mlocalTool= "leftbt";
				mlocalToolStatus = "true";
               // myPageNumberIncreaseDecrease(mpageNo,'Left');
				window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor) , false);

        break;
        case "TextBoxValue":

				mlocalTool= "textboxvalue";
				mlocalToolStatus = "true";
               // TextboxvalueChanged(mpageNo,mCurrentPageNo);
				window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor) , false);

        break;
        case "RightBt":

				mlocalTool= "rightbt";
				mlocalToolStatus = "true";
                 //myPageNumberIncreaseDecrease(mpageNo,'Right');
				window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor) , false);

        break;
		case "Line":
		        mlocalTool= "line";
				mlocalToolStatus = "true";
        break;
		case "Rectangle":
               mlocalTool= "rect";
               mlocalToolStatus = "true";

        break;
		case "Circle":
				 mlocalTool= "circ";
				 mlocalToolStatus = "true";
        break;
		case "Ellipse":
                  mlocalTool= "ellipse";
				  mlocalToolStatus = "true";
        break;
		case "Triangle":
                  mlocalTool= "triangle";
				  mlocalToolStatus = "true";
        break;
		case "RightTriangle":
                  mlocalTool= "righttriangle";
				  mlocalToolStatus = "true";
        break;
		case "FilledRectangle":
		         mlocalTool= "frect";
				 mlocalToolStatus = "true";
        break;
		case "FilledCircle":
		          mlocalTool= "fcirc";
				  mlocalToolStatus = "true";
        break;
		case "FilledEllipse":
		          mlocalTool= "fellipse";
				  mlocalToolStatus = "true";
        break;
		case "FilledTriangle":
		          mlocalTool= "ftriangle";
				   mlocalToolStatus = "true";
        break;
		case "FilledRightTriangle":
		          mlocalTool= "frighttriangle";
				   mlocalToolStatus = "true";
        break;

		case "Graphs":
		          mlocalTool= "graphgrid";
				   mlocalToolStatus = "true";
        break;
		case "Eraser":
		          mlocalTool= "eraser";
				   mlocalToolStatus = "true";
        break;
   }

 }

 function TextboxvalueChanged(MyPageNo,MyCurrentPageNo) {
    // var mPageNotextBox = document.getElementById('textbox');
  mPageNotextBox.value = mCurrentPageNo +"\/" + mpageNo ;
 }

function img_update1(TempmContext,TempnContext,TempcanvasName) {
       //isPenDown = false ;
	  // mcontext.drawImage(ncanvasName, 0, 0);
     TempmContext.drawImage(TempcanvasName, 0, 0);
		TempnContext.clearRect(0, 0, TempcanvasName.width, TempcanvasName.height);
		isPenDown = false ;
		isImageUpdate = true;

  }
 function drawPage3(MyPageNo,MymcanvasName,MyncanvasName,Mymcontainer,Myncontainer,Mymcontext,Myncontext) {
         mpageNo = mpageNo +1;
         mCurrentPageNo = mpageNo ;//mCurrentPageNo+1;
     var MyPageNo = mpageNo ;

    var dcanvas = document.createElement('canvas');
	    dcanvas.id ="canvas"+(MyPageNo); // "canvas" + (MyPageNo);
       // alert(dcanvas.id);
		dcanvas.className = "Mycanvas";
        dcanvas.width  = 2000;
        dcanvas.height = 2000;
        //dcanvas.style.backgroundColor = mBoardBackGroundColor ; //"green";
         //dcanvas.style.display = "none";
      // alert(dcanvas.Id);
       		//dcanvas.style.background = mBoardBackGroundColor ; //"green";
	var dcontainer = dcanvas.parentNode;
	var dcontext = dcanvas.getContext('2d');
        //dcontext.save;
	    mcanvasId = dcanvas.id
	    mcanvasName = dcanvas;
        mcontainer= dcontainer;
        mcontext = dcontext;

      // var ecanvas = document.createElement('canvas');
    var ecanvas = document.getElementById("MyTempcanvas");
	    //ecanvas.id = "MyTempcanvas"+(MyPageNo); //"canvas" + (MyPageNo +1);

		ecanvas.className = "MyTempcanvas";
         ecanvas.width  = 2000;
         ecanvas.height = 2000;
		//dcanvas.style.background = mBoardBackGroundColor ; //"green";
	var econtext = ecanvas.getContext('2d');
       ncanvasId = ecanvas.id;
       ncanvasName = ecanvas;
       ncontext = econtext ;

    // dcanvas.insertBefore(bcanvas);

    var acanvas = document.getElementById("MyBoard");
    var BoardCanvasName = "canvas"+(MyPageNo-1);
    //var BoardTempCanvasName = "MyTempcanvas"+(MyPageNo-1);
    var bcanvas =  document.getElementById(BoardCanvasName);
   // var gcanvas =  document.getElementById(BoardTempCanvasName);
    var ccanvas = document.getElementById("CanvasContainer");
        ccanvas.style.display = "none";
        img_update1(mcontext,ncontext,ncanvasName);
        ccanvas.appendChild(bcanvas);
       // ccanvas.appendChild(gcanvas);
        //dcanvas.appendChild(ecanvas);
        acanvas.appendChild(dcanvas);
        acanvas.appendChild(ecanvas);


    //mpageNo = mpageNo +1;
    mPageNotextBox.value = mCurrentPageNo +"\/" + mpageNo ;


 }




 function myPageNumberIncreaseDecrease(MyPageNo,MyCurrentPageNo,MyButtonName) {
        var PreviousPageNo =(MyCurrentPageNo -1) ;
        var CurrentPageNo = MyCurrentPageNo;
        var NextPageNo = (MyCurrentPageNo +1);
        var PreviousCanvasName = "canvas"+(MyCurrentPageNo -1);
        var CurrentCanvasName = "canvas"+(MyCurrentPageNo);
        var NextCanvasName = "canvas"+(MyCurrentPageNo +1);
        var PreviousCanvas = document.getElementById(PreviousCanvasName);
        var CurrentCanvas = document.getElementById(CurrentCanvasName);
        var NextCanvas= document.getElementById(NextCanvasName) ;
        var TempCanvas = document.getElementById("MyTempcanvas") ;
        var MyCanvasContainer = document.getElementById("CanvasContainer") ;
        var MyBoardContainer = document.getElementById("MyBoard") ;
        //alert(PreviousCanvasName + CurrentCanvasName + NextCanvasName);
        switch (MyButtonName) {

           case "Left":
                  if (PreviousPageNo>=1) {
                     mCurrentPageNo = PreviousPageNo ;
                     mPageNotextBox.value = mCurrentPageNo +"\/" + mpageNo ;

               var PreviousCanvascontainer = PreviousCanvas.parentNode;
	           var PreviousCanvascontext = PreviousCanvas.getContext('2d');
                   mcanvasId = PreviousCanvas.id
	               mcanvasName = PreviousCanvas;
                   mcontainer= PreviousCanvascontainer;
                   mcontext = PreviousCanvascontext;

               var TempCanvasContext = TempCanvas.getContext('2d');
                   ncanvasId = TempCanvas.id;
                   ncanvasName = TempCanvas;
                   ncontext = TempCanvasContext;
                   MyCanvasContainer.appendChild(CurrentCanvas);

                   //PreviousCanvas.appendChild(TempCanvas);
                   //img_update1(mcontext,ncontext,ncanvasName);
                   // PreviousCanvas.appendChild(TempCanvas);
                   MyBoardContainer.appendChild(PreviousCanvas);
                   MyBoardContainer.appendChild(TempCanvas);
                  // PreviousCanvas.appendChild(TempCanvas);
                  // MyCanvasContainer.appendChild(CurrentCanvas);
                  }
           break;
           case "Right":
                 if (NextPageNo <= mpageNo) {
                    mCurrentPageNo = NextPageNo ;
                    mPageNotextBox.value = mCurrentPageNo +"\/" + mpageNo ;

               var NextCanvascontainer = NextCanvas.parentNode;
	           var NextCanvascontext = NextCanvas.getContext('2d');
                   mcanvasId = NextCanvas.id
	               mcanvasName = NextCanvas;
                   mcontainer= NextCanvascontainer;
                   mcontext = NextCanvascontext;

               var TempCanvasContext = TempCanvas.getContext('2d');
                   ncanvasId = TempCanvas.id;
                   ncanvasName = TempCanvas;
                   ncontext = TempCanvasContext;
                   MyCanvasContainer.appendChild(CurrentCanvas);

                   //PreviousCanvas.appendChild(TempCanvas);
                   //img_update1(mcontext,ncontext,ncanvasName);
                  // NextCanvas.appendChild(TempCanvas);
                   MyBoardContainer.appendChild(NextCanvas);
                   MyBoardContainer.appendChild(TempCanvas);
                  // NextCanvas.appendChild(TempCanvas);
                  // MyCanvasContainer.appendChild(CurrentCanvas);

                  }

           break;

    }
 }
//(function () {
    if(window.addEventListener) {
window.addEventListener('load',  MyDig (mlocalTool,mlocalToolStatus,mlocalLineColor) , false);
//window.addEventListener('load',  MyDig () , false);
}
function MyDig(MyTool,MyToolStatus,MyColor) {
  //==============================================================================
  // ORBITER VARIABLES
  //==============================================================================
  var appRoom;

  // The MessageManager object, for sending and receiving messages
  var msgManager = orbiter.getMessageManager();
  // A convenience reference to net.user1.orbiter.UPC, which provides a
  // list of valid client/server UPC messages. See: http://unionplatform.com/specs/upc/
  var UPC = net.user1.orbiter.UPC;
  // A hash of client attribute names used in this application. Each client sets a
  // "thickness" attribute and a "color" attribute, specify the thickness and
  // color of the current line being drawn.
  var Attributes = {THICKNESS:"thickness",
                    COLOR:"color",
                    TOOL:"tool",
                    TOOL1:"tool1",
                    MYMOUSEUP:"mymouseup",
                    PAGE:"page" ,
                    LEFTPAGE:"leftpage" ,
                   RIGHTPAGE:"rightpage"  };

  // A hash of room message names used in this application. MOVE means move the
  // drawing pen to the specified position. PATH supplies a list of points to be
  // drawn.
  var Messages = {MOVE:"MOVE",
                  PATH:"PATH" };


  //==============================================================================
  // LOCAL USER VARIABLES
  //==============================================================================
  // A flag to track whether the user is drawing or not
  var isPenDown = false;
 var isImageUpdate = false;
  // Line defaults
  var defaultLineColor =  MyColor ;
  var defaultLineThickness = 1;
  var maxLineThickness = 30;
   var defaultTool =  MyTool;
  // Tracks the current location of the user's drawing pen
  var localPen = {};

  // The user's line styles
  var localLineColor = defaultLineColor;
  var localLineThickness = defaultLineThickness;
   var localTool = defaultTool;
  // A list of points in a path to send to other connected users
  var bufferedPath = [];
   // A timestamp indicating the last time a point was added to the bufferedPath
  var lastBufferTime = new Date().getTime();

  //==============================================================================
  // REMOTE USER VARIABLES
  //==============================================================================
  // A hash of pen positions for remote users, in the following
  // format ("2345" is an example client ID):
  //  {"2345": {x:10, y:10}}
  var userCurrentPositions = {};
  // A hash of pending drawing commands sent by remote users, the following format:
  //  {"2345": [{commandName:moveTo, arg:{x:10, y:10}}, {commandName:lineTo, arg:{x:55, y:35}}]};
  var userCommands = {};
  // A hash of line colors for remote users, in the following format:
  //  {"2345": "#CCCCCC"};
  var userColors = {};
  // A hash of line thicknesses for remote users, in the following format:
  //  {"2345": 5};
  var userThicknesses = {};
   var userTool = {};
   var userPage = {};
   var userLeftPage = {};
   var userRightPage = {};
  //==============================================================================
  // DRAWING VARIABLES
  //==============================================================================
  // The HTML5 drawing canvas
  var canvas;
  // The drawing canvas's context, through which drawing commands are performed
  var context;
  // A hash of drawing commands executed by UnionDraw's rendering process
  var DrawingCommands = {//NEWPAGE_TO:   "newpageTO",
                         //LEFTPAGE_TO:   "leftpageTO",
                         //TEXTBOXVALUE_TO: "textboxvalueTO",
                        // RIGHTPAGE_TO:  "rightpageTO",
                         PEN_TO:       "penTo",
                         LINE_TO:       "lineTo",
                         MOVE_TO:       "moveTo",
                         CIRCLE_TO:     "circleTo",
						 RECTANGLE_TO:  "rectangleTo",
						 TRIANGLE_TO:   "triangleTo",
						 RIGHTTRIANGLE_TO: "righttriangleTo",
						 ELLIPSE_TO:    "ellipseTo",
						 FCIRCLE_TO:    "fcircleTo",
						 FRECTANGLE_TO: "frectangleTo",
						 FTRIANGLE_TO:   "ftriangleTo",
						 FRIGHTTRIANGLE_TO: "frighttriangleTo",
						 FELLIPSE_TO:   "fellipseTo",
						 GRAPHGRID_TO: "graphgridTo",
						 ERASER_TO: "eraserTo" ,
						 SET_THICKNESS: "setThickness",
                         SET_COLOR:     "setColor",
						 SET_TOOL:       "setTool" ,
                         SET_TOOL1:       "setTool1" ,
                         SET_MYMOUSEUP:  "setMymouseup",
                         SET_PAGE:       "setPage" ,
                         SET_LEFTPAGE:    "leftsetPage" ,
                         SET_RIGHTPAGE:   "rightsetPage" ,
                         SET_BUTTONS:     "setButtons" };
  //==============================================================================
  // TIMER VARIABLES
  //==============================================================================
  // The ID for a timer that sends the user's drawing path on a regular interval
  var broadcastPathIntervalID;
  // The ID for a timer that executes drawing commands sent by remote users
  var processDrawingCommandsIntervalID;

  //==============================================================================
  // TOUCH-DEVICE VARIABLES
  //==============================================================================
  var hasTouch = false;

  //==============================================================================
  // INITIALIZATION
  //==============================================================================
  init();
  function init () {
    initCanvas();
    registerInputListeners();
    iPhoneToTop();

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

  // Triggered when the connection to Union Server is closed
  function closeListener (e) {
    // Stop drawing content sent by other users
    clearInterval(processDrawingCommandsIntervalID);
  }

  // Start this component
  function start () {
    // Periodically execute drawing commands sent by other users
    processDrawingCommandsIntervalID = setInterval(processDrawingCommands, 20);

    // Register for UPC messages from Union Server
    msgManager.addMessageListener(UPC.ROOM_OCCUPANTCOUNT_UPDATE,
                                  roomOccupantCountUpdateListener, this);
    msgManager.addMessageListener(UPC.ROOM_SNAPSHOT, roomSnapshotListener, this);
    msgManager.addMessageListener(UPC.CLIENT_ATTR_UPDATE, clientAttributeUpdateListener, this);
    msgManager.addMessageListener(UPC.CLIENT_REMOVED_FROM_ROOM, clientRemovedFromRoomListener, this);

    // Register for custom messages from other users
    msgManager.addMessageListener(Messages.MOVE, moveMessageListener, this, [appRoomID]);
    msgManager.addMessageListener(Messages.PATH, pathMessageListener, this, [appRoomID]);

  }

    // Set up the drawing canvas
  function initCanvas () {
    // Retrieve canvas reference
   // canvas = document.getElementById("canvas1");

    // If IE8, do IE-specific canvas initialization (required by excanvas.js)
    if (typeof G_vmlCanvasManager != "undefined") {
      this.canvas = G_vmlCanvasManager.initElement(this.canvas);
    }

    // Size canvas
   /* canvas.width  = 2000;
    canvas.height = 2000;

    // Retrieve context reference, used to execute canvas drawing commands
    context = canvas.getContext('2d');
    context.lineCap = "round";*/
    var dcanvas = document.getElementById(mcanvasName);
	  // dcanvas.id ="Mycanvas"; // "canvas" + (MyPageNo);
         //alert(mcanvasName);
      dcanvas.className = "Mycanvas";
      dcanvas.width  = 2000;
      dcanvas.height = 2000;

      //alert(dcanvas.Id);
       		//dcanvas.style.background = mBoardBackGroundColor ; //"green";
	var dcontainer = dcanvas.parentNode;
	var dcontext = dcanvas.getContext('2d');
        dcontext.lineCap = "round";
	    mcanvasId = dcanvas.id
	    mcanvasName = dcanvas;
        mcontainer= dcontainer;
        mcontext = dcontext;
	//var ecanvas = document.createElement('canvas');
    var ecanvas = document.getElementById(ncanvasName);
	   // ecanvas.id = "MyTempcanvas"; //"canvas" + (MyPageNo +1);

		ecanvas.className = "MyTempcanvas";
        ecanvas.width  = 2000;
        ecanvas.height = 2000;
		//dcanvas.style.background = mBoardBackGroundColor ; //"green";
	var econtext = ecanvas.getContext('2d');
    ncanvasId = ecanvas.id;
    ncanvasName = ecanvas;
    ncontext = econtext ;

    dcontainer.appendChild(ecanvas);
    // Set control panel defaults
    document.getElementById("thickness").selectedIndex = 0;
    document.getElementById("color").selectedIndex = 1;
    document.getElementById("tool").selectedIndex = 0;
  }

  // Register callback functions to handle user input
  function registerInputListeners () {
    document.onmousedown = pointerDownListener;
    document.onmousemove = pointerMoveListener;
    document.onmouseup = myMouseSelectListener ;//newPageSelectListener;//pointerUpListener;
    document.ontouchstart = touchDownListener;
    document.ontouchmove = touchMoveListener;
    document.ontouchend = touchUpListener;
     mcanvasName.onmousedown = pointerDownListener;
	mcanvasName.onmousemove = pointerMoveListener;
	mcanvasName.onmouseup = myMouseSelectListener ;//pointerUpListener;
	ncanvasName.onmousedown = pointerDownListener;
	ncanvasName.onmousemove = pointerMoveListener;
	ncanvasName.onmouseup = myMouseSelectListener ;//pointerUpListener;
    document.getElementById("thickness").onchange = thicknessSelectListener;
    document.getElementById("color").onchange = colorSelectListener;
	document.getElementById("myPenColor").onchange = PencolorSelectListener;
    document.getElementById("myBoardColor").onchange = BoardcolorSelectListener;
    document.getElementById("tool").onchange = toolSelectListener;
    document.getElementById("NewPage").onclick = newPageSelectListener;
    document.getElementById("Leftbt").onclick = leftPageSelectListener;
    document.getElementById("Rightbt").onclick = rightPageSelectListener;
   document.getElementById("Rectangle").onclick = toolSelectListener1;
  }
   function img_update(TempmContext,TempnContext,TempcanvasName) {

     TempmContext.drawImage(TempcanvasName, 0, 0);
		TempnContext.clearRect(0, 0, TempcanvasName.width, TempcanvasName.height);
		isPenDown = false ;


  }
  //==============================================================================
  // ORBITER EVENT LISTENERS
  //==============================================================================

  // Triggered when this client is informed that number of users in the
  // server-side drawing room has changed
  function roomOccupantCountUpdateListener (appRoomID, numOccupants) {
    numOccupants = parseInt(numOccupants);
  }

  //==============================================================================
  // HANDLE INCOMING CLIENT ATTRIBUTES
  //==============================================================================
  // Triggered when Union Server sends a "snapshot" describing the drawing room,
  // including a list of users supplied as unnamed arguments after the
  // roomAttributes parameter. For a description of roomSnapshotListener()'s
  // parameters, see "u54" in the UPC specification,
  // at: http://unionplatform.com/specs/upc/. This client receives the room
  // snapshot automatically when it the joins the drawing room.
  function roomSnapshotListener (requestID,
                                 appRoomID,
                                 occupantCount,
                                 observerCount,
                                 roomAttributes) {
    // The unnamed arguments following 'roomAttributes' is a list of
    // clients in the room. Assign that list to clientList.
    var clientList = Array.prototype.slice.call(arguments).slice(5);
    var clientID;
    var roomAttrString;
    var roomAttrs;
    var attrName;
    var attrVal;

    // Loop through the list of clients in the room to get each client's
    // "thickness" and "color" attributes.
    for (var i = 0; i < clientList.length; i+=5) {
      clientID = clientList[i];
      // Each client's room-scoped client attributes are passed as a
      // pipe-delimited string. Split that string to get the attributes.
      clientAttrString = clientList[i+4];
      clientAttrs = clientAttrString == "" ? [] : clientAttrString.split("|");

      // Pass each client attribute to processClientAttributeUpdate(), which will
      // check for the "thickness" and "color" attributes.
      for (var j = 0; j < clientAttrs.length; j++) {
        attrName = clientAttrs[j];
        attrVal  = clientAttrs[j+1];
        processClientAttributeUpdate(clientID, attrName, attrVal);
      }
    }
  }

  // Triggered when one of the clients in the drawing room changes an attribute
  // value. When an attribute value changes, check to see whether it was either
  // the "thickness" attribute or the "color" attribute.
  function clientAttributeUpdateListener (attrScope,
                                          clientID,
                                          userID,
                                          attrName,
                                          attrVal,
                                          attrOptions) {
    if (attrScope == appRoomID) {
      processClientAttributeUpdate(clientID, attrName, attrVal);
    }
  }

  // Triggered when a clients leaves the drawing room.
  function clientRemovedFromRoomListener (appRoomID, clientID) {
    // The client is gone now, so remove all information pertaining to that client
    delete userThicknesses[clientID];
    delete userColors[clientID];
    delete userTool[clientID];
    delete userPage[clientID];
    delete userLeftPage[clientID];
    delete userRightPage[clientID];
    delete userCommands[clientID];
    delete userCurrentPositions[clientID];
  }

  // Checks for changes to the the "thickness" and "color" attributes.
  function processClientAttributeUpdate (clientID, attrName, attrVal) {
    if (attrName == Attributes.THICKNESS) {
      // The "thickness" attribute changed, so push a "set thickness" command
      // onto the drawing command stack for the specified client. But first,
      // bring the thickness into legal range if necessary (prevents thickness hacking).
      addDrawingCommand(clientID, DrawingCommands.SET_THICKNESS, getValidThickness(attrVal));
    } else if (attrName == Attributes.COLOR) {
      // The "color" attribute changed, so push a "set color" command
      // onto the drawing command stack for the specified client
      addDrawingCommand(clientID, DrawingCommands.SET_COLOR, attrVal);
    } else if (attrName == Attributes.TOOL) {
      // The "tool" attribute changed, so push a "set tool" command
      // onto the drawing command stack for the specified client
      addDrawingCommand(clientID, DrawingCommands.SET_TOOL, attrVal);
    } else if (attrName == Attributes.TOOL1) {
      // The "tool" attribute changed, so push a "set tool" command
      // onto the drawing command stack for the specified client
      addDrawingCommand(clientID, DrawingCommands.SET_TOOL1, attrVal);

    } else if (attrName == Attributes.PAGE) {
      // The "tool" attribute changed, so push a "set tool" command
      // onto the drawing command stack for the specified client
      addDrawingCommand(clientID, DrawingCommands.SET_PAGE, attrVal);

    } else if (attrName == Attributes.MYMOUSEUP) {
      // The "tool" attribute changed, so push a "set tool" command
      // onto the drawing command stack for the specified client
      addDrawingCommand(clientID, DrawingCommands.SET_MYMOUSEUP, attrVal);

    } else if (attrName == Attributes.LEFTPAGE) {
      // The "tool" attribute changed, so push a "set tool" command
      // onto the drawing command stack for the specified client
      addDrawingCommand(clientID, DrawingCommands.SET_LEFTPAGE, attrVal);

    } else if (attrName == Attributes.RIGHTPAGE) {
      // The "tool" attribute changed, so push a "set tool" command
      // onto the drawing command stack for the specified client
      addDrawingCommand(clientID, DrawingCommands.SET_RIGHTPAGE, attrVal);

    }
  }

  //==============================================================================
  // HANDLE INCOMING CLIENT MESSAGES
  //==============================================================================
  // Triggered when a remote client sends a "MOVE" message to this client
  function moveMessageListener (fromClient, coordsString) {
    // Parse the specified (x, y) coordinate
    var coords = coordsString.split(",");
    var position = {x:parseInt(coords[0]), y:parseInt(coords[1])};
    // Push a "moveTo" command onto the drawing-command stack for the sender
    addDrawingCommand(fromClient.getClientID(), DrawingCommands.MOVE_TO, position);
  }

  function upMessageListener (fromClient, coordsString) {
    // Parse the specified (x, y) coordinate
    var coords = coordsString.split(",");
    var position = {x:parseInt(coords[0]), y:parseInt(coords[1])};
    // Push a "moveTo" command onto the drawing-command stack for the sender
    addDrawingCommand(fromClient.getClientID(), DrawingCommands.UP_TO, position);
  }

  function downMessageListener (fromClient, coordsString) {
    // Parse the specified (x, y) coordinate
    var coords = coordsString.split(",");
    var position = {x:parseInt(coords[0]), y:parseInt(coords[1])};
    // Push a "moveTo" command onto the drawing-command stack for the sender
    addDrawingCommand(fromClient.getClientID(), DrawingCommands.DOWN_TO, position);
  }
  // Triggered when a remote client sends a "PATH" message to this client
  function pathMessageListener (fromClient, pathString) {
    // Parse the specified list of points
    var path = pathString.split(",");

    // For each point, push a "lineTo" command onto the drawing-command stack
    // for the sender
    var position;
    switch (mlocalTool) {

       /*  case "newpage":
         // for (var i = 0; i < path.length; i+=2) {
	    //position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
       // addDrawingCommand(fromClient.getClientID(), DrawingCommands.NEWPAGE_TO, position);

		//}
          break;
          case "leftbt":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.LEFTPAGE_TO, position);
		}
          break;
          case "textboxvalue":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.TEXTBOXVALUE_TO, position);
		}
          break;
          case "rightbt":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.RIGHTPAGE_TO, position);
		}
          break; */
		case "pen":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.PEN_TO, position);
		}
          break;
		 case "line":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.LINE_TO, position);
		}
          break;
	  case "rect":

          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.RECTANGLE_TO, position);
		}
          break;
		case "circ":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.CIRCLE_TO, position);
		}
          break;
		  case "triangle":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.TRIANGLE_TO, position);
		}
          break;
		  case "righttriangle":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.RIGHTTRIANGLE_TO, position);
		}
          break;
		  case "ellipse":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.ELLIPSE_TO, position);
		}
          break;

		  case "frect":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.FRECTANGLE_TO, position);
		}
          break;
		case "fcirc":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.FCIRCLE_TO, position);
		}
          break;
		  case "ftriangle":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.FTRIANGLE_TO, position);
		}
          break;
		  case "frighttriangle":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.FRIGHTTRIANGLE_TO, position);
		}
          break;
		  case "fellipse":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.FELLIPSE_TO, position);
		}
          break;
		 case "graphgrid":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.GRAPHGRID_TO, position);
		}
          break;
		   case "eraser":
          for (var i = 0; i < path.length; i+=2) {
	    position = {x:parseInt(path[i]), y:parseInt(path[i+1])};
        addDrawingCommand(fromClient.getClientID(), DrawingCommands.ERASER_TO, position);
		}
          break;
	   }
    }
 // }


  //==============================================================================
  // BROADCAST DRAWING DATA TO OTHER USERS
  //==============================================================================
  // Sends the local user's drawing-path information to other users in the
  // drawing room.
  function broadcastPath () {
    // If there aren't any points buffered (e.g., if the pen is down but not
    // moving), then don't send the PATH message.
    if (bufferedPath.length == 0) {
      return;
    }
    // Use SEND_MESSAGE_TO_ROOMS to deliver the message to all users in the room
    // Parameters are: messageName, appRoomID, includeSelf, filters, ...args. For
    // details, see http://unionplatform.com/specs/upc/.
    msgManager.sendUPC(UPC.SEND_MESSAGE_TO_ROOMS,
                       Messages.PATH,
                       appRoomID,
                       "false",
                       "",
                       bufferedPath.join(","));
    // Clear the local user's outgoing path data
    bufferedPath = [];
    // If the user is no longer drawing, stop broadcasting drawing information
    if   (!isPenDown) { //(isImageUpdate = true)//(isImageUpdate = "True") {
      clearInterval(broadcastPathIntervalID);
    }
  }


  // Sends all users in the drawing room an instruction to reposition the local
  // user's pen.
  function broadcastMove (x, y) {
    msgManager.sendUPC(UPC.SEND_MESSAGE_TO_ROOMS,
                       Messages.MOVE,
                       appRoomID,
                       "false",
                       "",
                       x + "," + y);
  }

   function broadcastUp (x, y) {
    msgManager.sendUPC(UPC.SEND_MESSAGE_TO_ROOMS,
                       Messages.UP,
                       appRoomID,
                       "false",
                       "",
                       penUp(),
                       x + "," + y);
  }

   function broadcastDown (x, y) {
    msgManager.sendUPC(UPC.SEND_MESSAGE_TO_ROOMS,
                       Messages.DOWN,
                       appRoomID,
                       "false",
                       "",
                       x + "," + y);
  }

  //==============================================================================
  // PROCESS DRAWING COMMANDS FROM OTHER USERS
  //==============================================================================
  // Pushes a drawing command onto the command stack for the specified client.
  // At a regular interval, commands are pulled off the stack and executed,
  // causing remote user's drawings to appear on-screen.
  function addDrawingCommand (clientID, commandName, arg) {
    // If this client does not yet have a command stack, make one.
    if (userCommands[clientID] == undefined) {
      userCommands[clientID] = [];
    }
    // Push the command onto the stack.
    var command = {};
    command["commandName"] = commandName;
    command["arg"] = arg;
    userCommands[clientID].push(command);
  }

  // Executes the oldest command on all user's command stacks
  function processDrawingCommands () {
    var command;
    // Loop over all command stacks
    for (var clientID in userCommands) {
      // Skip empty stacks
      if (userCommands[clientID].length == 0) {
        continue;
      }

      // Execute the user's oldest command
      command = userCommands[clientID].shift();
      /*switch (command.commandName) {
        case DrawingCommands.MOVE_TO:
          userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          break;

        case DrawingCommands.LINE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawLine(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             userCurrentPositions[clientID].x = command.arg.x;
             userCurrentPositions[clientID].y = command.arg.y;
          }
          break;

        case DrawingCommands.SET_THICKNESS:
          userThicknesses[clientID] = command.arg;
          break;

        case DrawingCommands.SET_COLOR:
          userColors[clientID] = command.arg;
          break;
      }*/
        switch (command.commandName) {
        case DrawingCommands.MOVE_TO:
              userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          break;
           case DrawingCommands.UP_TO:
              //userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
             // img_update(mcontext,ncontext,ncanvasName);

          break;
           case DrawingCommands.DOWN_TO:
              userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          break;
		/*case DrawingCommands.NEWPAGE_TO:
         // if (userCurrentPositions[clientID] == undefined) {
           // userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
         // } else {
            drawPage3(mpageNo, mcanvasName,ncanvasName,mcontainer,ncontainer,mcontext,ncontext);
             userCurrentPositions[clientID].x = command.arg.x;
             userCurrentPositions[clientID].y = command.arg.y;
         // }
          break;
          case DrawingCommands.LEFTPAGE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
             myPageNumberIncreaseDecrease(mpageNo,'Left');
             userCurrentPositions[clientID].x = command.arg.x;
             userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
          case DrawingCommands.TEXTBOXVALUE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
             TextboxvalueChanged(mpageNo,mCurrentPageNo);
             userCurrentPositions[clientID].x = command.arg.x;
             userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
          case DrawingCommands.RIGHTPAGE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
             myPageNumberIncreaseDecrease(mpageNo,'Right');
             userCurrentPositions[clientID].x = command.arg.x;
             userCurrentPositions[clientID].y = command.arg.y;
          }
          break;*/
		case DrawingCommands.PEN_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawPen(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             userCurrentPositions[clientID].x = command.arg.x;
             userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
        case DrawingCommands.LINE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawLine(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;

		 case DrawingCommands.RECTANGLE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawRect(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
                    // img_update(mcontext,ncontext,ncanvasName);
           //  userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
          //img_update(mcontext,ncontext,ncanvasName);
		   case DrawingCommands.CIRCLE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawCircle(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
		   case DrawingCommands.TRIANGLE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawTriangle(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
		   case DrawingCommands.RIGHTTRIANGLE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawRightTriangle(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
		   case DrawingCommands.ELLIPSE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawEllipse(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;

		   case DrawingCommands.FRECTANGLE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawFilledRect(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
            // userCurrentPositions[clientID].x = command.arg.x;
             //userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
		   case DrawingCommands.FCIRCLE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawFilledCircle(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
		   case DrawingCommands.FTRIANGLE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawFilledTriangle(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
		   case DrawingCommands.FRIGHTTRIANGLE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawFilledRightTriangle(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
		   case DrawingCommands.FELLIPSE_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawFilledEllipse(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;
		  case DrawingCommands.GRAPHGRID_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawGraphGrid(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             userCurrentPositions[clientID].x = command.arg.x;
             userCurrentPositions[clientID].y = command.arg.y;
			 //grid('blocks', 10, 10, 800, 800);
          }
          break;
		  case DrawingCommands.ERASER_TO:
          if (userCurrentPositions[clientID] == undefined) {
            userCurrentPositions[clientID] = {x:command.arg.x, y:command.arg.y};
          } else {
            drawEraser(userColors[clientID] || defaultLineColor,
                     userThicknesses[clientID] || defaultLineThickness,
                     userCurrentPositions[clientID].x,
                     userCurrentPositions[clientID].y,
                     command.arg.x,
                     command.arg.y);
             //userCurrentPositions[clientID].x = command.arg.x;
            // userCurrentPositions[clientID].y = command.arg.y;
          }
          break;

        case DrawingCommands.SET_THICKNESS:
          userThicknesses[clientID] = command.arg;
          break;

        case DrawingCommands.SET_COLOR:
          userColors[clientID] = command.arg;
		  localLineColor = userColors[clientID] ;
          mlocalLineColor=localLineColor;
          break;
		  case DrawingCommands.SET_TOOL:

         userTool[clientID] = command.arg;

		  localTool=userTool[clientID];
		  mlocalTool=localTool;
         // if (userTool[clientID] == "newpage") {
             // drawPage3(mpageNo, mcanvasName,ncanvasName,mcontainer,ncontainer,mcontext,ncontext);
          //}
         break;
          case DrawingCommands.SET_TOOL1:

         userTool[clientID] = command.arg;

		  localTool=userTool[clientID];
		  mlocalTool=localTool;
            drawRect(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);
         break;
          case DrawingCommands.SET_MYMOUSEUP:

         userPage[clientID] = command.arg;

		  localTool=userPage[clientID];
		  mlocalTool=localTool;
          // drawPage3(mpageNo, mcanvasName,ncanvasName,mcontainer,ncontainer,mcontext,ncontext);
          img_update(mcontext,ncontext,ncanvasName);
          break;
          case DrawingCommands.SET_PAGE:

         userPage[clientID] = command.arg;

		  localTool=userPage[clientID];
		  mlocalTool=localTool;
           drawPage3(mpageNo, mcanvasName,ncanvasName,mcontainer,ncontainer,mcontext,ncontext);
          //img_update(mcontext,ncontext,ncanvasName);
          break;
          case DrawingCommands.SET_LEFTPAGE:
         // alert("My vini");
         userLeftPage[clientID] = command.arg;

		  localTool=userLeftPage[clientID];
		  mlocalTool=localTool;
               myPageNumberIncreaseDecrease(mpageNo,mCurrentPageNo,'Left');

         break;
          case DrawingCommands.SET_RIGHTPAGE:

                userRightPage[clientID] = command.arg;

		  localTool=userRightPage[clientID];
		  mlocalTool=localTool;
          myPageNumberIncreaseDecrease(mpageNo,mCurrentPageNo,'Right');
         break;
		 case DrawingCommands.SET_BUTTONS:
         //userButtons[clientID] = command.arg;
		 // localTool=userButtons[clientID];
         //localButtons=userButtons[clientID];
        // localTool=userButtons[clientID];
		 // mlocalTool=localTool;
         break;
        }
       // img_update(mcontext,ncontext,ncanvasName);
    }
  // img_update(mcontext,ncontext,ncanvasName);
  }

  //==============================================================================
  // TOUCH-INPUT EVENT LISTENERS
  //==============================================================================
  // On devices that support touch input, this function is triggered when the
  // user touches the screen.
  function touchDownListener (e) {
    // Note that this device supports touch so that we can prevent conflicts with
    // mouse input events.
    hasTouch = true;

    // Ignore off-canvas touches
    if (event.target.id != "ncanvasName") {
      return;
    }

    // Prevent the touch from scrolling the page.
    e.preventDefault();

    // Determine where the user touched screen.
    var canvasPos = getPos(ncanvasName);
    var touchX = e.changedTouches[0].clientX - canvasPos.x;
    var touchY = e.changedTouches[0].clientY - canvasPos.y;
    // A second "touch start" event may occur if the user touches the screen with
    // two fingers. Ignore the second event if the pen is already down.
    if (!isPenDown) {
      // Move the drawing pen to the position that was touched
      penDown(touchX, touchY);
    }
  }

  // On devices that support touch input, this function is triggered when the user
  // drags a finger across the screen.
  function touchMoveListener (e) {
    hasTouch = true;

    if (isPenDown) {
      e.preventDefault();
      var canvasPos = getPos(ncanvasName);
      var touchX = e.changedTouches[0].clientX - canvasPos.x;
      var touchY = e.changedTouches[0].clientY - canvasPos.y;
      // Draw a line to the position being touched.
      penMove(touchX, touchY);
    }
  }

  // On devices that support touch input, this function is triggered when the
  // user stops touching the screen.
  function touchUpListener () {
    // "Lift" the drawing pen, so lines are no longer drawn
    e.preventDefault();
      var canvasPos = getPos(ncanvasName);
      var touchX = e.changedTouches[0].clientX - canvasPos.x;
      var touchY = e.changedTouches[0].clientY - canvasPos.y;
    penUp(touchX, touchY);
  }

  //==============================================================================
  // MOUSE-INPUT EVENT LISTENERS
  //==============================================================================
  // Triggered when the mouse is pressed down
  function pointerDownListener (e) {
    // If this is an iPhone, iPad, Android, or other touch-capable device, ignore
    // simulated mouse input.
    if (hasTouch) {
      return;
    }

    // Retrieve a reference to the Event object for this mousedown event.
    // Internet Explorer uses window.event; other browsers use the event parameter
    var event = e || window.event;

    // Determine where the user clicked the mouse.
    var canvasPos = getPos(ncanvasName);
    var mouseX = event.clientX - canvasPos.x;
    var mouseY = event.clientY - canvasPos.y;

    // Move the drawing pen to the position that was clicked
    penDown(mouseX, mouseY);

    // We want mouse input to be used for drawing only, so we need to stop the
    // browser from/ performing default mouse actions, such as text selection.
    // In Internet Explorer, we "prevent default actions" by returning false. In
    // other browsers, we invoke event.preventDefault().
    if (event.preventDefault) {
      if (event.target.nodeName != "SELECT") {
        event.preventDefault();
      }
    } else {
      return false;  // IE
    }
  }

  // Triggered when the mouse moves
  function pointerMoveListener (e) {
    if (hasTouch) {
      return;
    }
    var event = e || window.event; // IE uses window.event, not e
    var canvasPos = getPos(ncanvasName);
    var mouseX = event.clientX - canvasPos.x;
    var mouseY = event.clientY - canvasPos.y;

    // Draw a line if the pen is down
    penMove(mouseX, mouseY);

    // Prevent default browser actions, such as text selection
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      return false;  // IE
    }
  }

  // Triggered when the mouse button is released
  function pointerUpListener (e) {
    if (hasTouch) {
      return;
    }
    // "Lift" the drawing pen
   var event = e || window.event; // IE uses window.event, not e
    var canvasPos = getPos(ncanvasName);
    var mouseX = event.clientX - canvasPos.x;
    var mouseY = event.clientY - canvasPos.y;
    penUp(mouseX, mouseY);
   // penUp(mouseX , mouseY);
  }

  //==============================================================================
  // CONTROL PANEL MENU-INPUT EVENT LISTENERS
  //==============================================================================
  // Triggered when an option in the "line thickness" menu is selected
  function thicknessSelectListener (e) {
    // Determine which option was selected
    var newThickness = this.options[this.selectedIndex].value;
    // Locally, set the line thickness to the selected value
    localLineThickness = getValidThickness(newThickness);
    // Share the selected thickness with other users by setting the client
    // attribute named "thickness". Attributes are automatically shared with other
    // clients in the room, triggering clientAttributeUpdateListener().
    // Arguments for SET_CLIENT_ATTR are:
    //   clientID
    //   userID (None in this case)
    //   attrName
    //   escapedAttrValue
    //   attrScope (The room)
    //   attrOptions (An integer whose bits specify options. "4" means
    //                the attribute should be shared).
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.THICKNESS,
                       newThickness,
                       appRoomID,
                       "4");
    // After the user selects a value in the drop-down menu, the iPhone
    // automatically scrolls the page, so scroll back to the top-left.
    iPhoneToTop();
  }

  // Triggered when an option in the "line color" menu is selected
  function colorSelectListener (e) {
    // Determine which option was selected
    var newColor = this.options[this.selectedIndex].value;
    // Locally, set the line color to the selected value
    localLineColor = newColor;
    // Share selected color with other users
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.COLOR,
                       newColor,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left.
    iPhoneToTop();
  }

  function PencolorSelectListener (e) {
    // Determine which option was selected
    var newColor = document.getElementById("myPenColor").value; //this.options[this.selectedIndex].value;"myColor"

   // Locally, set the line color to the selected value
    localLineColor = newColor;
    // Share selected color with other users
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.COLOR,
                       newColor,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left.
    iPhoneToTop();
  }
  function BoardcolorSelectListener (e) {
    // Determine which option was selected
    var newColor = document.getElementById("myBoardColor").value; //this.options[this.selectedIndex].value;"myColor"

   // Locally, set the line color to the selected value
    mBoardBackGroundColor  = newColor;
    mcanvasName.style.backgroundColor= newColor;
    // Share selected color with other users
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.COLOR,
                       newColor,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left.
    iPhoneToTop();
  }
 // Triggered when an option in the "line color" menu is selected
  function toolSelectListener (e) {
    // Determine which option was selected
    var newTool = this.options[this.selectedIndex].value;
    // buttonSelectListener("Rectangle")  ;
   //if(this.options[this.selectedIndex].value) {

 // newTool = this.options[this.selectedIndex].value;
  mlocalTool=newTool;
 // newTool = localTool ;

  // localTool = mlocalTool;
   //mlocalToolStatus = false;
  // } else {
    // newTool=localTool;
	// alert("Dig");
	 //}
   // Share selected tool with other users
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.TOOL,
                       //newTool,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left.
    iPhoneToTop();
	}

function toolSelectListener1 (e) {
    // Determine which option was selected
    var newTool = "rect";
   mlocalTool=newTool;
  // alert(Name);
  drawRect(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);
  /*switch (Name) {


		case "Pencil":
                newTool = "pen";
				 //mlocalToolStatus = "true";
				// window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor,mButtons) , false);

        break;
		case "NewPage":
               newTool = "newpage";
				//mlocalToolStatus = "true";
                 //drawPage3(mpageNo, mcanvasName,ncanvasName,mcontainer,ncontainer,mcontext,ncontext);
				window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor) , false);

        break;
        case "LeftBt":

				newTool = "leftbt";
				//mlocalToolStatus = "true";
               // myPageNumberIncreaseDecrease(mpageNo,'Left');
				window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor) , false);

        break;
        case "TextBoxValue":

				newTool = "textboxvalue";
				//mlocalToolStatus = "true";
               // TextboxvalueChanged(mpageNo,mCurrentPageNo);
				window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor) , false);

        break;
        case "RightBt":

				newTool = "rightbt";
				//mlocalToolStatus = "true";
                 //myPageNumberIncreaseDecrease(mpageNo,'Right');
				window.addEventListener('load',  MyDig(mlocalTool,mlocalToolStatus,mlocalLineColor) , false);

        break;
		case "Line":
		       newTool = "line";
				//mlocalToolStatus = "true";
        break;
		case "Rectangle":
               alert("Dig");
              newTool = "rect";
               mlocalToolStatus = "true";
               drawRect(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;
		case "Circle":
				newTool = "circ";
				// mlocalToolStatus = "true";
        break;
		case "Ellipse":
                  newTool = "ellipse";
				 // mlocalToolStatus = "true";
        break;
		case "Triangle":
                 newTool = "triangle";
				  //mlocalToolStatus = "true";
        break;
		case "RightTriangle":
                  newTool = "righttriangle";
				  //mlocalToolStatus = "true";
        break;
		case "FilledRectangle":
		         newTool = "frect";
				 //mlocalToolStatus = "true";
        break;
		case "FilledCircle":
		          newTool = "fcirc";
				  //mlocalToolStatus = "true";
        break;
		case "FilledEllipse":
		          newTool = "fellipse";
				  //mlocalToolStatus = "true";
        break;
		case "FilledTriangle":
		          newTool = "ftriangle";
				   //mlocalToolStatus = "true";
        break;
		case "FilledRightTriangle":
		        newTool = "frighttriangle";
				  // mlocalToolStatus = "true";
        break;

		case "Graphs":
		          newTool = "graphgrid";
				   //mlocalToolStatus = "true";
        break;
		case "Eraser":
		         newTool = "eraser";
				  // mlocalToolStatus = "true";
        break;
   }

   // Share selected tool with other users
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.TOOL1,
                       newTool,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left. */
    iPhoneToTop();
	}


function myMouseSelectListener(e) {

    // Determine which option was selected
var newMouseUp;
 // if (MyButtonName = "NewPage") {
 //drawPage3(mpageNo, mcanvasName,ncanvasName,mcontainer,ncontainer,mcontext,ncontext);
 img_update(mcontext,ncontext,ncanvasName);
 // newPage = mpageNo ;
// Share selected tool with other users
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.MYMOUSEUP,
                       newMouseUp,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left.
    iPhoneToTop();
	}

function newPageSelectListener(e) {
    // Determine which option was selected
var newPage;
 // if (MyButtonName = "NewPage") {
 drawPage3(mpageNo, mcanvasName,ncanvasName,mcontainer,ncontainer,mcontext,ncontext);
// img_update(mcontext,ncontext,ncanvasName);
  newPage = mpageNo ;
// Share selected tool with other users
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.PAGE,
                       newPage,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left.
    iPhoneToTop();
	}

function leftPageSelectListener(e) {
    // Determine which option was selected

  var leftPage;

    myPageNumberIncreaseDecrease(mpageNo,mCurrentPageNo,'Left');

  leftPage = mCurrentPageNo ;


   // Share selected tool with other users
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.LEFTPAGE,
                       leftPage,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left.
    iPhoneToTop();
	}

    function rightPageSelectListener(e) {
    // Determine which option was selected

  var rightPage;

    myPageNumberIncreaseDecrease(mpageNo,mCurrentPageNo,'Right');

  rightPage = mCurrentPageNo ;


   // Share selected tool with other users
    msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.RIGHTPAGE,
                       rightPage,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left.
    iPhoneToTop();
	}
  //==============================================================================
  // PEN
  //==============================================================================
  // Places the pen in the specified location without drawing a line. If the pen
  // subsequently moves, a line will be drawn.
  function penDown (x, y) {
    isPenDown = true;
    localPen.x = x;
    localPen.y = y;
    isImageUpdate = false;
    //alert("HindDown");
    // Send this user's new pen position to other users.
   broadcastMove(x, y);

    // Begin sending this user's drawing path to other users every 500 milliseconds.
    broadcastPathIntervalID = setInterval(broadcastPath, 500);

  }

  // Draws a line if the pen is down.
  function penMove (x, y) {
   var newTool = mlocalTool;
  isImageUpdate = false;
    if (isPenDown) {
       // alert(isPenDown);
      // Buffer the new position for broadcast to other users. Buffer a maximum
      // of 100 points per second.
      if ((new Date().getTime() - lastBufferTime) > 10) {
        bufferedPath.push(x + "," + y);
        lastBufferTime = new Date().getTime();
     }

      // Draw the line locally.
     // drawLine(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

      // Move the pen to the end of the line that was just drawn.
    //  localPen.x = x;
    //  localPen.y = y;
    //}
  //}
  switch (mlocalTool) {

		case "newpage":
		//newTool = document.getElementById("NewPage").click(1);
		//drawPage3(mpageNo, mcanvasName,ncanvasName,mcontainer,ncontainer,mcontext,ncontext); //Mypage, Mycanvas, Mycontainer,Mycontext
		 localPen.x = x;
         localPen.y = y;
        // localTool = "";
        break;
		case "pen":

		drawPen(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);
		 localPen.x = x;
         localPen.y = y;
        break;
		case "line":
          drawLine(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);
          //localPen.x = x;
       //  localPen.y = y;
        break;
		case "rect":
		     // alert("movemouse"+MyTool);
		   drawRect(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);
          // localPen.x = x;
         //  localPen.y = y;
        break;
		case "circ":
		       //alert("movemouse"+MyTool);
		drawCircle(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;
		case "triangle":

		drawTriangle(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;
		case "righttriangle":

		drawRightTriangle(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;
		case "ellipse":

		drawEllipse(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;

		case "frect":

		drawFilledRect(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);
        break;
		case "fcirc":

		drawFilledCircle(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;
		case "ftriangle":

		drawFilledTriangle(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;
		case "frighttriangle":

		drawFilledRightTriangle(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;
		case "fellipse":

		drawFilledEllipse(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;
     	case "graphgrid":

		drawGraphGrid(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);
		 //grid('blocks', 10, 10, 800, 800);
        break;
       	case "eraser":

		drawEraser(localLineColor, localLineThickness, localPen.x, localPen.y, x, y);

        break;

      // Move the pen to the end of the line that was just drawn.
      localPen.x = x;
      localPen.y = y;


	  }


    }

    // Share selected tool with other users
   msgManager.sendUPC(UPC.SET_CLIENT_ATTR,
                       orbiter.getClientID(),
                       "",
                       Attributes.TOOL,
                      newTool,
                       appRoomID,
                       "4");

    // Scroll the iPhone back to the top-left.
    iPhoneToTop();
  }
  // "Lifts" the drawing pen, so that lines are no longer draw when the mouse or
  // touch-input device moves.
  function penUp (x,y) {
    isPenDown = false;

		img_update(mcontext,ncontext,ncanvasName);

  }

  //==============================================================================
  // DRAWING
  //==============================================================================
  // Draws a line on the HTML5 canvas
 /* function drawLine (color, thickness, x1, y1, x2, y2) {
    context.strokeStyle = color;
    context.lineWidth   = thickness;

    context.beginPath();
    context.moveTo(x1, y1)
    context.lineTo(x2, y2);
    context.stroke();
  }*/
  function drawPen (color, thickness, x1, y1, x2, y2) {
     ncontext.strokeStyle = color;
    ncontext.lineWidth   = thickness;

   ncontext.beginPath();
    ncontext.moveTo(x1, y1)
    ncontext.lineTo(x2, y2);
    ncontext.stroke();


  }// Draws a line on the HTML5 canvas




 function drawLine (color, thickness, x1, y1, x2, y2) {
    ncontext.strokeStyle = color;
    ncontext.lineWidth   = thickness;
    ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
    ncontext.beginPath();
    ncontext.moveTo(x1, y1)
    ncontext.lineTo(x2, y2);
    ncontext.stroke();

  }


  function drawRect(color, thickness, x1, y1, x2, y2) {
  var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
      // document.body.insertBefore(canvas, canvas1);
	//if(isPenDown) {
	//context1.clearRect(0, 0, canvas1.width, canvas1.height);
	  //	context.drawImage(canvas1, 0, 0);
		//context1.clearRect(0, 0, canvas1.width, canvas1.height);
	  //context.drawImage(canvas1, 0, 0);
	  //context.clearRect(0, 0, canvas.width, canvas.height);

	  //context.clearRect(0, 0, canvas.width, canvas.height);
	   //context.drawImage(canvas, 0, 0);
      if (!w || !h) {
        return;
      }
ncontext.strokeStyle = color;
ncontext.lineWidth   = thickness;
ncontext.beginPath();
//context1.strokeRect(x, y, w, h);
ncontext.rect(x, y, w, h);
ncontext.stroke();
ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
 //context1.strokeStyle = color;
 //context1.lineWidth   = thickness;
//context1.beginPath();
//context1.strokeRect(x, y, w, h);
ncontext.rect(x, y, w, h);
ncontext.stroke();


  }
 // Draws a circle on the HTML5 canvas
 function drawCircle(color, thickness, x1, y1, x2, y2) {
    var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
          r1=Math.sqrt(w*w+h*h);

	ncontext.strokeStyle = color;
    ncontext.lineWidth   = thickness;
    //context.moveTo(x1, y1)
	ncontext.beginPath();
   // context1.clearRect(0, 0, canvas1.width, canvas1.height);
  //ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
      if (!w || !h) {
        return;
      }

ncontext.arc(x, y, r1, 0, 2 * Math.PI);
 ncontext.stroke();
 ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
 ncontext.arc(x, y, r1, 0, 2 * Math.PI);
 ncontext.stroke();
  }
  function drawTriangle(color, thickness, x1, y1, x2, y2) {
    var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
          r1=Math.sqrt(w*w+h*h);
		  midx = (x1+x2)/2;
		  midy = (y1+y2)/2;
		  Ax = midx-x2;
		  Ay = midy;
		  Bx = midx+x2;
		  By = midy;
		  Cx = midx;
		  Cy = midy-y2;
	 ncontext.strokeStyle = color;
     ncontext.lineWidth   = thickness;
    //context.moveTo(x1, y1)
    //context1.clearRect(0, 0, canvas1.width, canvas1.height);

      if (!w || !h) {
        return;
      }
 ncontext.beginPath();
 ncontext.moveTo( midx,midy);
 ncontext.lineTo(Ax,Ay);
 ncontext.lineTo(Bx,By);
 ncontext.lineTo(Cx,Cy);
 ncontext.lineTo(Ax,Ay);
 ncontext.stroke();
 ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
 ncontext.moveTo( midx,midy);
 ncontext.lineTo(Ax,Ay);
 ncontext.lineTo(Bx,By);
 ncontext.lineTo(Cx,Cy);
 ncontext.lineTo(Ax,Ay);
 ncontext.stroke();
  }
  function drawRightTriangle(color, thickness, x1, y1, x2, y2) {
    var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
          midx = (x1+x2)/2;
		  midy = (y1+y2)/2;
		  Ax = midx-x2;
		  Ay = midy;
		  Bx = midx+x2;
		  By = midy;
		  Cx = midx;
		  Cy = midy-y2;

	ncontext.strokeStyle = color;
    ncontext.lineWidth   = thickness;
    //context1.clearRect(0, 0, canvas1.width, canvas1.height);
      if (!w || !h) {
        return;
      }
ncontext.beginPath();
ncontext.moveTo( midx,midy);
ncontext.lineTo(Ax,Ay);
ncontext.lineTo(Cx,Cy);
ncontext.lineTo(midx,midy);
ncontext.stroke();
ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
ncontext.moveTo( midx,midy);
ncontext.lineTo(Ax,Ay);
ncontext.lineTo(Cx,Cy);
ncontext.lineTo(midx,midy);
ncontext.stroke();

  }
  function drawEllipse(color, thickness, x1, y1, x2, y2) {
    var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
          r1=Math.sqrt(w*w+h*h);

	ncontext.strokeStyle = color;
    ncontext.lineWidth   = thickness;
    //context1.clearRect(0, 0, canvas1.width, canvas1.height);
      if (!w || !h) {
        return;
      }
//context1.beginPath();
//context1.arc(x, y, r1, 0, 2 * Math.PI);
 ncontext.beginPath();
 ncontext.moveTo(x1, y1 - h/2); // A1
 ncontext.bezierCurveTo(
    x1 + w/2, y1 - h/2, // C1
    x1 + w/2, y1 + h/2, // C2
    x1, y1 + h/2); // A2

  ncontext.bezierCurveTo(
    x1 - w/2, y1 + h/2, // C3
    x1 - w/2, y1 - h/2, // C4
    x1, y1 - h/2); // A1
  ncontext.stroke();
  ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
  ncontext.moveTo(x1, y1 - h/2); // A1
 ncontext.bezierCurveTo(
    x1 + w/2, y1 - h/2, // C1
    x1 + w/2, y1 + h/2, // C2
    x1, y1 + h/2); // A2

  ncontext.bezierCurveTo(
    x1 - w/2, y1 + h/2, // C3
    x1 - w/2, y1 - h/2, // C4
    x1, y1 - h/2); // A1
  ncontext.stroke();
  }

  function drawFilledRect(color, thickness, x1, y1, x2, y2) {
  var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
       //context1.clearRect(0, 0, canvas1.width, canvas1.height);
      if (!w || !h) {
        return;
      }
 ncontext.strokeStyle = color;
 ncontext.fillStyle = color;
 ncontext.lineWidth   = thickness;
ncontext.beginPath();
ncontext.fillRect(x, y, w, h);
ncontext.stroke();
  }
 // Draws a circle on the HTML5 canvas
 function drawFilledCircle(color, thickness, x1, y1, x2, y2) {
    var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
          r1=Math.sqrt(w*w+h*h);

	ncontext.strokeStyle = color;
    ncontext.lineWidth   = thickness;
    //context.moveTo(x1, y1)
    //context1.clearRect(0, 0, canvas1.width, canvas1.height);
      if (!w || !h) {
        return;
      }
ncontext.beginPath();
ncontext.arc(x, y, r1, 0, 2 * Math.PI);
 ncontext.stroke();
 ncontext.fillStyle = color ;
 ncontext.fill();
  }
  function drawFilledTriangle(color, thickness, x1, y1, x2, y2) {
    var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
          midx = (x1+x2)/2;
		  midy = (y1+y2)/2;
		  Ax = midx-x2;
		  Ay = midy;
		  Bx = midx+x2;
		  By = midy;
		  Cx = midx;
		  Cy = midy-y2;
	ncontext.strokeStyle = color;
    ncontext.lineWidth   = thickness;

      if (!w || !h) {
        return;
      }
ncontext.beginPath();
ncontext.moveTo( midx,midy);
ncontext.lineTo(Ax,Ay);
ncontext.lineTo(Bx,By);
ncontext.lineTo(Cx,Cy);
ncontext.lineTo(Ax,Ay);
ncontext.fillStyle = color ;
ncontext.fill();
ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
ncontext.moveTo( midx,midy);
ncontext.lineTo(Ax,Ay);
ncontext.lineTo(Bx,By);
ncontext.lineTo(Cx,Cy);
ncontext.lineTo(Ax,Ay);
ncontext.stroke();
ncontext.fillStyle = color ;
 ncontext.fill();

  }
  function drawFilledRightTriangle(color, thickness, x1, y1, x2, y2) {
    var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
          midx = (x1+x2)/2;
		  midy = (y1+y2)/2;
		  Ax = midx-x2;
		  Ay = midy;
		  Bx = midx+x2;
		  By = midy;
		  Cx = midx;
		  Cy = midy-y2;

	ncontext.strokeStyle = color;
    ncontext.lineWidth   = thickness;
    //context1.clearRect(0, 0, canvas1.width, canvas1.height);
      if (!w || !h) {
        return;
      }
ncontext.beginPath();
ncontext.moveTo( midx,midy);
ncontext.lineTo(Ax,Ay);
ncontext.lineTo(Cx,Cy);
ncontext.lineTo(midx,midy);
ncontext.stroke();
ncontext.lineTo(midx,midy);
ncontext.stroke();
ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
ncontext.moveTo( midx,midy);
ncontext.lineTo(Ax,Ay);
ncontext.lineTo(Cx,Cy);
ncontext.stroke();
ncontext.lineTo(midx,midy);
ncontext.stroke();
ncontext.fillStyle = color;
ncontext.fill();
  }
  function drawFilledEllipse(color, thickness, x1, y1, x2, y2) {
    var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
          r1=Math.sqrt(w*w+h*h);

	ncontext.strokeStyle = color;
    ncontext.lineWidth   = thickness;
    // context1.clearRect(0, 0, canvas1.width, canvas1.height);
      if (!w || !h) {
        return;
      }
 ncontext.beginPath();
 ncontext.moveTo(x1, y1 - h/2); // A1
 ncontext.bezierCurveTo(
    x1 + w/2, y1 - h/2, // C1
    x1 + w/2, y1 + h/2, // C2
    x1, y1 + h/2); // A2

  ncontext.bezierCurveTo(
    x1 - w/2, y1 + h/2, // C3
    x1 - w/2, y1 - h/2, // C4
    x1, y1 - h/2); // A1
  ncontext.stroke();
  ncontext.fillStyle = color;
  ncontext.fill();
  }
  function drawGraphGrid (color, thickness, x1, y1, x2, y2) {
     	var x = Math.min(x2,x1),
          y = Math.min(y2,y1),
          w = Math.abs(x2 - x1),
          h = Math.abs(y2 - y1);
     ncontext.width  = totalW;
     ncontext.height = totalH;
        var blockW = 10;
		var blockH = 10;
        var totalW = 600; // totalW || $(document).width();
        var totalH = 600 ;//totalH || $(document).height();
     // if (!w || !h) {
       // return;
     // }
ncontext.strokeStyle = color;
ncontext.lineWidth   = thickness;
ncontext.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
ncontext.beginPath();
//context1.rect(x, y, 25, 25);
//context1.moveTo(x,y);

for(var i = 0;i < Math.round(totalW/blockW); i++){

                x = i*blockW;
                y = 0;
                ncontext.moveTo(x,y);
                ncontext.lineTo(x,y+totalH);

        }

        for(var j = 0; j < Math.round(totalH/blockH); j++){

                x = 0;
                y = j*blockH;

                ncontext.moveTo(x,y);
                ncontext.lineTo(x+totalW,y);


        }

ncontext.stroke();
//context1.clearRect(0, 0, canvas1.width, canvas1.height);
 //context1.strokeStyle = color;
 //context1.lineWidth   = thickness;
//context1.beginPath();
//context1.strokeRect(x, y, w, h);
//context1.rect(x, y, w, h);
//context1.stroke();

  }
  function grid(type, w, h, totalW, totalH){
    //alert("hello");
    var $this = this;
    this.type = type || 'blocks';// blocks, diamonds, hexagons
    this.blockW = w || 25;
    this.blockH = h || 25;
    this.container;
  $('#grid').empty();

        this.container = document.createElement('div');
        this.container.style.position = 'absolute';
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.id = 'gridContainer';


        var c = document.createElement("canvas");
        c.width  = totalW;
        c.height = totalH;

        var totalW = totalW || $(document).width();
        var totalH = totalH || $(document).height();

    if(this.type == 'blocks'){

        var mapGridCanvas = c.getContext("2d");
        mapGridCanvas.clearRect(0, 0, c.width, c.height);
        mapGridCanvas.globalAlpha = 1;
        mapGridCanvas.strokeStyle = "#1e1e1e";
        mapGridCanvas.lineWidth = 1;
        mapGridCanvas.beginPath();
        var x = 0;
        var y = 0;
        for(var i = 0;i < Math.round(totalW/blockW); i++){

                x = i*blockW;
                y = 0;
                mapGridCanvas.moveTo(x,y);
                mapGridCanvas.lineTo(x,y+totalH);

        }

        for(var j = 0; j < Math.round(totalH/blockH); j++){

                x = 0;
                y = j*blockH;

                mapGridCanvas.moveTo(x,y);
                mapGridCanvas.lineTo(x+totalW,y);


        }

        mapGridCanvas.stroke();
        this.container.appendChild(c);
        document.getElementById('grid').appendChild(this.container);
        alert("hello");
    }
    else if(this.type == 'hex'){

        var c = drawHexGrid({}, c);
        this.container.appendChild(c);
        document.getElementById('grid').appendChild(this.container);
    }
    else if(this.type == 'diamonds'){


        var mapGridCanvas = c.getContext("2d");
        mapGridCanvas.clearRect(0, 0, c.width, c.height);
        mapGridCanvas.globalAlpha = 1;
        mapGridCanvas.strokeStyle = "#1e1e1e";
        mapGridCanvas.lineWidth = 1;
        mapGridCanvas.beginPath();
        var x = 0;
        var y = 0;
        var z = 0;
        var counter = 0;
        for(var i = 0; i < Math.round(totalH/blockH); i++){

            var z = counter;
            while(x <= blockW*Math.round(totalW/blockW)){

                if(z%2 == 0){
                    mapGridCanvas.moveTo( x, y+blockW );
                    mapGridCanvas.lineTo( x+blockW, y );
                }
                else{
                    mapGridCanvas.moveTo(x,y);
                    mapGridCanvas.lineTo(x+blockW, y+blockW);
                }

                x += blockW;
                z += 1;
            }

            x = 0;
            y = y + blockW;
            counter += 1;

        }

        mapGridCanvas.stroke();
        this.container.appendChild(c);
        document.getElementById('grid').appendChild(this.container);

    }
//}
function drawHexGrid(opts,c) {

        var alpha       = opts.alpha || 1;
        var color       = opts.color || '#1e1e1e';
        var lineWidth   = opts.lineWidth || 1;
        var radius      = opts.radius || 20;


        var mapGridCanvas = c.getContext("2d");
        mapGridCanvas.clearRect(0, 0, c.width, c.height);
        mapGridCanvas.globalAlpha = alpha;
        mapGridCanvas.strokeStyle = color;
        mapGridCanvas.lineWidth = lineWidth;

        //length of line
        r = radius;
        part = 60;
        hexSize = r*Math.sqrt(3);
        yHexSize = r*Math.sqrt(2.25);
        xHexes = 2000 / hexSize;
        yHexes = 2000 / yHexSize;

        mapGridCanvas.beginPath();

        //loop through hex "rows" and every other row shift
        for (xGrid=0;xGrid<=xHexes;xGrid++){
            for (yGrid=0;yGrid<=yHexes;yGrid++){
                if (yGrid % 2 == 0) {
                    //even row
                    shiftX = hexSize/2;
                }
                else {
                    //odd row
                    shiftX=0;
                }
                for (i=0;i<=6;i++) {
                    var a = i * part - 90;
                    x = r * Math.cos(a * Math.PI / 180)+xGrid*hexSize+shiftX;
                    y = r * Math.sin(a * Math.PI / 180)+yGrid*yHexSize;
                    if (i == 0) {
                        mapGridCanvas.moveTo(x,y);
                    }
                    else {
                        mapGridCanvas.lineTo(x,y);
                    }
                }
            }
        }
        mapGridCanvas.stroke();

        return c;
    }

    function removeGrid(){

        document.removeChild(this.container);
    }
}
  function drawEraser (color, thickness, x1, y1, x2, y2) {
     context1.strokeStyle = color;
    context1.lineWidth   = 20;//thickness;
    context1.clearRect(0, 0, ncanvasName.width, ncanvasName.height);
    context1.beginPath();
    context1.moveTo(x1, y1)
    context1.lineTo(x2, y2);
    context1.stroke();


  }
  //==============================================================================
  // DOM UTILS
  //==============================================================================

  // Returns the x,y position of the supplied HTML element
  function getPos (obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      }
      while (obj = obj.offsetParent);
      return {x:curleft, y:curtop};
    }
  }

  //==============================================================================
  // IPHONE UTILS
  //==============================================================================
  // Hides the iPhone address bar by scrolling it out of view
  function iPhoneToTop () {
    if (navigator.userAgent.indexOf("iPhone") != -1) {
      setTimeout (function () {
        window.scroll(0, 0);
      }, 100);
    }
  }

  //==============================================================================
  // DATA VALIDATION
  //==============================================================================
  function getValidThickness (value) {
    value = parseInt(value);
    var thickness = isNaN(value) ? defaultLineThickness : value;
    return Math.max(1, Math.min(thickness, maxLineThickness));
  }
//})();
}
