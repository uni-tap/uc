<!DOCTYPE html>

  <html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Union HTML5 Collaborator</title>

<!--Prevents iPhone, iPad, and touch devices from zooming-->
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />

<!--
Load Canvas support for IE8. ExplorerCanvas courtesy Google. 
See: http://code.google.com/p/explorercanvas/
-->
<!--[if lt IE 9]>
<script src="excanvas.js"></script>
<![endif]-->

<!--CSS-->
<link href="style.css" rel="stylesheet" type="text/css"><style> .tlbtn{
  width:35px;
  text-align:center;
   height:35px;
  margin:3px;
margin-left: 1px;
}
.tlsbtn {
    border-radius: 5px;
    background: whitesmoke;
    color: #000;
    position: absolte;
    top: 12px;
    height: 35px;
    width: 35px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
}
</style>

</head>

<body>

<!--Contains the system status-->
<div id="statusField"></div>
<div id="downloadBanner"><div id="downloadLink"><a href="UnionCollaborator.zip">Download source...</a></div></div>

<div id="main">
<h1 id="header">HTML5&nbsp;COLLABORATOR</h1>
  <div id="leftPanel">
    <!--Contains the user list-->
    <ul id="userList"></ul>
    
    <div id="chat">
      <!--Incoming chat messages-->
      <div id="chatPane"></div>
      
      <!--Outgoing chat form-->
      <div id="inputContainer"><input type="text" id="chatOut"/></div>
      <div id="submitContainer"><input type="submit" id="chatSend" value="Send"/></div>
    </div>
  </div>
  
  <div id="rightPanel">
    <div id="controls">
      Size:
      <select id="thickness" class="fixed">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
  
      Color:
      <select id="color">
        <option value="#FFFFFF">#FFFFFF</option>
        <option value="#AAAAAA">#AAAAAA</option>
        <option value="#999999">#999999</option>
        <option value="#000000">#000000</option>
        <option value="#9BA16C">#9BA16C</option>
        <option value="#CC8F2B">#CC8F2B</option>
        <option value="#63631D">#63631D</option>
        <option value="#00FF00">#00FF00</option>
      </select>
	  Tool:
       <select id="tool">
	   <option value="pen">Pen</option>
	   <option value="newpage">NewPage</option>
	   <option value="line">Line</option>
	   <option value="rect">Rectangle</option>            
       <option value="circ">Circle</option>
		<option value="triangle">Triangle</option>
		<option value="righttriangle">RightTriangle</option>
		<option value="ellipse">Ellipse</option>
		<option value="frect">FilledRectangle</option>
		<option value="fcirc">FilledCircle</option>
		<option value="ftriangle">FilledTriangle</option>
		<option value="frighttriangle">FilledRightTriangle</option>
		<option value="fellipse">FilledEllipse</option>
      </select>
        <button class="tlsbtn  tlbtn"id="NewPage" >NewPage</button> 
  	   <button class="tlsbtn  tlbtn"id="Leftbt" >Left</button> 
       <input type="text" id = "textbox" name="PageNo" size="2" onchange = "myButtonClicked ('TextBoxValue')">
       <button class="tlsbtn  tlbtn"id="Rightbt" >Right</button>   
   
    </div>
    
<div id="controls1"class="fh-card-8 fh-animate-top" >
 <button class="tlsbtn  tlbtn"id="NewPage" onclick="myButtonClicked ('NewPage')">NewPage</button>   
<button class="tlsbtn tlbtn"id="Pencil" onclick="myButtonClicked ('Pencil')" style="background-image:url('pen.png')"></button> 
<button class="tlsbtn tlbtn" style="background-image:url('brush.png')"></button>
<button class="tlsbtn tlbtn" style="background-image:url('airbrsh.png')"></button>
<!--<button class="tlsbtn tlbtn" style="background-image:url('sbrush.png')"></button>-->
<input type="color" id="myPenColor" value="#00ff0080" onclick="myButtonClicked('myPenColor')" />  
<input type="color" id="myBoardColor" value="#ffff00" onclick="myButtonClicked('myBoardColor')" />  
<button   class="tlsbtn  tlbtn"id="Line"style="background-image:url('BlueLineIcon.png')"></button>  
<button   class="tlsbtn  tlbtn"id="Rectangle"style="background-image:url('BlueRectangleIcon.png')"></button>  
<button  class="tlsbtn  tlbtn"id="Circle" style="background-image:url('BlueCircleIcon.png')"></button>  
<button  class="tlsbtn  tlbtn"id="Ellipse" style="background-image:url('BlueEllipseIcon.png')"></button>  
<button class="tlsbtn  tlbtn"id="RightTriangle" style="background-image:url('BlueRightTriangleIcon.png')"></button>  
<button class="tlsbtn  tlbtn"id="Triangle" style="background-image:url('BlueTriangleIcon.png')"></button>  
 <!--filled  Graphics Tools  --> 
<button   class="tlsbtn  tlbtn"id="FilledRectangle" style="background-image:url('FGreenRectangleIcon.png')"></button>  
<button  class="tlsbtn  tlbtn"id="FilledCircle" style="background-image:url('FGreenCircleIcon.png')"></button>  
<button  class="tlsbtn  tlbtn"id="FilledEllipse" style="background-image:url('FGreenEllipseIcon.png')"></button>  
<button class="tlsbtn  tlbtn"id="FilledRightTriangle" style="background-image:url('FBlueRightTriangleIcon.png')"></button>  
<button class="tlsbtn  tlbtn"id="FilledTriangle" style="background-image:url('FBlueTriangleIcon.png')"></button>  


</div>
                                                         
 <!-- </div>
    
    <div id="canvasContainer">
      <!--The canvas where drawings will be displayed-->
      <!--<canvas id="canvas"></canvas>
    </div> 
  </div>
</div>-->
<div id="CanvasContainer"style.display = "none" >
    
   </div>
 <div id="MyBoard" >  
       <!--The canvas where drawings will be displayed-->
        <canvas id="canvas1"class="Mycanvas" ></canvas>
        <canvas id="MyTempcanvas"class="MyTempcanvas" ></canvas>
</div>     
</div>	


    
    <!-- <div id="canvasContainer">
     The canvas where drawings will be displayed
      <canvas id="Mycanvas"></canvas>
    </div>-->
	
 
<!--Load the Orbiter JavaScript library (non-minified version). Use during development.-->
<script type="text/javascript" src="http://cdn.unioncloud.io/Orbiter_latest.js"></script>
<!--Load the Orbiter JavaScript library (minified version). Use for production.-->
<!--<script type="text/javascript" src="http://cdn.unioncloud.io/Orbiter_latest_min.js"></script>-->

<!--Load application code.-->
<script type="text/javascript" src="ui.js"></script>
<script type="text/javascript" src="orbiterboot.js"></script>
<script type="text/javascript" src="unionchat.js"></script>
<script type="text/javascript" src="userlist.js"></script>
<script type="text/javascript" src="uniondraw.js"></script>
<script>
function removecntbx2() {
document.getElementById("cntbx2").style.display = "none";
}

</script>



</body>
</html>