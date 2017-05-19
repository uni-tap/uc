// Displays a single status message
function status (message) {
  // Make the new message element
  var msg = document.createElement("span");
  msg.appendChild(document.createTextNode(message));
  msg.appendChild(document.createElement("br"));

  // Get a reference to the status element
  var statusField = document.getElementById("statusField");
  
  // Remove previous status message
  if (statusField.childNodes.length > 0) {
    statusField.removeChild(statusField.firstChild);
  }
  
  // Append the new message
  statusField.appendChild(msg);
  
  statusField.scrollTop = statusField.scrollHeight;
}