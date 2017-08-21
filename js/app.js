var connection = new RTCMultiConnection();

connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

connection.session = {
  audio: true,
  video: true
}

connection.sdpConstraints.mandatory = {
  OfferToReceiveAudio: true,
  OfferToReceiveVideo: true
}

connection.onstream = function(event) {
  var video = event.mediaElement;
  if(event.type === 'local') {document.body.appendChild(video)}
  if(event.type === 'remote') {document.body.appendChild(video)}
  
}

var roomid = document.getElementById("roomId");
roomid.value = connection.token();

document.getElementById('submit').onclick = function() {
  connection.openOrJoin(roomid.value);
}
