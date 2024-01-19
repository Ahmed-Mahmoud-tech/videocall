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
    
      
      

      <JitsiMeeting
    roomName = { 'YOUR_CUSTOM_ROOM_NAME0' }
          getIFrameRef={node => { node.style.height = '500px'; console.log({ node }) }}
          jwt="eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtNmEyZWZkMmIyODcwNGQ5NTkyYzE5YmNmNzU4NmJmZjMvNjM4NThjLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3MDU2ODc0NDEsImV4cCI6MTcwNTY5NDY0MSwibmJmIjoxNzA1Njg3NDM2LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtNmEyZWZkMmIyODcwNGQ5NTkyYzE5YmNmNzU4NmJmZjMiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6ImFobWVkbWFobW91ZHRlY2giLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTE4MzEyMTIwMjA1NTY2OTUzNDU2IiwiYXZhdGFyIjoiIiwiZW1haWwiOiJhaG1lZG1haG1vdWR0ZWNoQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.CgjbKNbFG0-WJUfsyPV_ULGzSf6ixvs-Gf9H1J16VTq03kfLThZwjnqw7f_ieWU_XpwbnTOuFzKUftXlK5oUFfBwwLhU3kIvmI-6VCvVay9Yc-WhtHGCu6fsTvb1N4EDnXkqSYhtpSGvxT4SjgxW4Isw7yVofzyiL1ftIVPuhUHadCuzOo9zgeRbiemPLHRMWcqJ-NGihW8kKoYzYopm7x2lRU4YXMGasMqlTitSNU6jUsE1mbQHV_mEHHsh1oa7s0SaCL4sd4i-Kh5Ilje6U5KDqYZGOBzc-milp7dz8jx2uKfxQfEWEvKu9egbnXQuvxtsf6i7ijH0NDMH2HJm0g"
    // configOverwrite = {{
    //     startWithAudioMuted: true,
    //   hiddenPremeetingButtons: ['microphone'],
    //              DISABLE_FOCUS_INDICATOR: false,

    // }}
      //      interfaceConfigOverwrite={{
      //    DISABLE_FOCUS_INDICATOR: true,
      //  }}
      />
        </div>


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
