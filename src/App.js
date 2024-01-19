import './App.css';
import ZoomMtgEmbedded from '@zoom/meetingsdk/embedded'
import { useEffect } from 'react';
import axios from 'axios';
import { JitsiMeeting } from '@jitsi/react-sdk';

const client = ZoomMtgEmbedded.createClient()
function App() {

//   useEffect(() => {

// let meetingSDKElement = document.getElementById('meetingSDKElement')

//     client.init({ zoomAppRoot: meetingSDKElement, language: 'en-US' })
  
//   }, [])
  

  return (
    <div className="App">
    <div id="meetingSDKElement">
      </div>

      
      

      <JitsiMeeting
    roomName = { 'YOUR_CUSTOM_ROOM_NAME' }
    getIFrameRef = { node => node.style.height = '800px' }
    configOverwrite = {{
        startWithAudioMuted: true,
        hiddenPremeetingButtons: ['microphone']
    }}
      />
      

      {/* <button onClick={async () => {
        
        axios.post('http://localhost:5000/generate-signature', { apiKey:"nHk_srcjSnKrSHr44HE9sA", apiSecret:"I9F3VEcK3klUo7WMOUOo8df5JPds4jFE", meetingNumber:777, role : 1 })
  .then(function (response) {
    //          client.join({
    //           sdkKey: "XveUYUyfTVKta_0tBv33hw",
    //           signature: response.data.signature,
    //           meetingNumber: 777,
    //           userEmail:"ahmedmahmoudtech@gmail.com",
    //           password: '',
    //           userName: "ahmed",
    //           zak: "I9F3VEcK3klUo7WMOUOo8df5JPds4jFE" // the host's zak token
    // })


    client.join({
       sdkKey: "nHk_srcjSnKrSHr44HE9sA",
              signature: response.data.signature,
              meetingNumber: 777,
  password: "",
  userName: "ahmed"
})
  })
  .catch(function (error) {
    console.log(error);
  });

      }
      }>aaaaa</button> */}
    </div>
  );
}

export default App;
