/* eslint-disable no-undef */
import './App.css';
import ZoomMtgEmbedded from '@zoom/meetingsdk/embedded'
 
 import { useEffect } from 'react';

const client = ZoomMtgEmbedded.createClient()
function App() {
 
  useEffect(() => {
    window.onload = () => {
            const api = new JitsiMeetExternalAPI("8x8.vc", {
              roomName: "vpaas-magic-cookie-6a2efd2b28704d9592c19bcf7586bff3/SampleAppArbitraryPassagesSwimCuriously0000",
              parentNode: document.querySelector('#jaas-container'),
							// Make sure to include a JWT if you intend to record,
							// make outbound calls or use any other premium features!
							// jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtNmEyZWZkMmIyODcwNGQ5NTkyYzE5YmNmNzU4NmJmZjMvNjM4NThjLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3MDU2ODgzMDcsImV4cCI6MTcwNTY5NTUwNywibmJmIjoxNzA1Njg4MzAyLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtNmEyZWZkMmIyODcwNGQ5NTkyYzE5YmNmNzU4NmJmZjMiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOmZhbHNlLCJvdXRib3VuZC1jYWxsIjpmYWxzZSwic2lwLW91dGJvdW5kLWNhbGwiOmZhbHNlLCJ0cmFuc2NyaXB0aW9uIjpmYWxzZSwicmVjb3JkaW5nIjpmYWxzZX0sInVzZXIiOnsiaGlkZGVuLWZyb20tcmVjb3JkZXIiOmZhbHNlLCJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJUZXN0IFVzZXIiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTE4MzEyMTIwMjA1NTY2OTUzNDU2IiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ0ZXN0LnVzZXJAY29tcGFueS5jb20ifX0sInJvb20iOiIqIn0.FmFMR9q-5cIUIap1sktv7LcWauzxDhnSgMjj8AEVJnIyS764VzlrkLz8wnxTKqAMhdjHtl6J2tHrGy33Ps3tCUZ2r6zTGd2YNtQNQT1VuVj4U_P-AbJ7u-TpMi9SziDG1IAVBOGEi0H-5l7nSCYFuINpM8gjXD_JQSzy9NG9AmAVh9obFofdpMVEZlPsxFWA1Jiks8_npx1oCRuIAaAMkZPHEIL64HoWeG8TSerHfozE-qJCTQuVlq7dOmkwqmiBayNMLIFDiJn-vrx2nqaZxUWh8ci55pPXkbcjo8XbtGNBwTFdJJfuPnsh8t5b6l4r0tJuHIoC0VFpF8iiEKk3EQ"
							// jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtNmEyZWZkMmIyODcwNGQ5NTkyYzE5YmNmNzU4NmJmZjMvNjM4NThjLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3MDU2ODc0NDEsImV4cCI6MTcwNTY5NDY0MSwibmJmIjoxNzA1Njg3NDM2LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtNmEyZWZkMmIyODcwNGQ5NTkyYzE5YmNmNzU4NmJmZjMiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6ImFobWVkbWFobW91ZHRlY2giLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTE4MzEyMTIwMjA1NTY2OTUzNDU2IiwiYXZhdGFyIjoiIiwiZW1haWwiOiJhaG1lZG1haG1vdWR0ZWNoQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.CgjbKNbFG0-WJUfsyPV_ULGzSf6ixvs-Gf9H1J16VTq03kfLThZwjnqw7f_ieWU_XpwbnTOuFzKUftXlK5oUFfBwwLhU3kIvmI-6VCvVay9Yc-WhtHGCu6fsTvb1N4EDnXkqSYhtpSGvxT4SjgxW4Isw7yVofzyiL1ftIVPuhUHadCuzOo9zgeRbiemPLHRMWcqJ-NGihW8kKoYzYopm7x2lRU4YXMGasMqlTitSNU6jUsE1mbQHV_mEHHsh1oa7s0SaCL4sd4i-Kh5Ilje6U5KDqYZGOBzc-milp7dz8jx2uKfxQfEWEvKu9egbnXQuvxtsf6i7ijH0NDMH2HJm0g"
            });
          }
  }, [])
  

  return (
    <div className="App">
<div id="jaas-container"></div>

    </div>
 
     
  );
}

export default App;
