const host = "ws://localhost:4455";
const password = "123abc"


const { default: OBSWebSocket } = require('obs-websocket-js');
const obs = new OBSWebSocket();




obs.on('Identified', () => {
	console.log('Identified, good to go!')

  // Send some requests.
  obs.call('GetSceneList').then((data) => {
    console.log('Scenes:', data);
  });


  // setting scene to scene 3 
  // Could be any scene name

  obs.call('SetCurrentProgramScene',{ sceneName: "Scene3"})


  //Opening projector
  obs.call('OpenVideoMixProjector',{
    videoMixType: 'OBS_WEBSOCKET_VIDEO_MIX_TYPE_PREVIEW',
    monitorIndex: 0
    })
});


obs.connect(host, password).then((info) => {
	console.log('Connected and identified', info)
}, () => {
	console.error('Error Connecting')
});
