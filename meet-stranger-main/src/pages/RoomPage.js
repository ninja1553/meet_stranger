import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const RoomPage = () => {
  const { roomId } = useParams();

  const meeting = async (element) => {
    const appID = 376985928;
    const serverSecret = '8405527c8e52c0ad502ecfa988960c4d';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      localStorage.getItem("userName") !== null ? localStorage.getItem("userName") : 'Enter Your Name'
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
           name: 'Copy Link',
           url: `https://meet-stranger.netlify.app/room/${roomId}`,
        }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: true,

    })
  }
  return (
    <div
      className="myCallContainer"
      ref={meeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  )
}

export default RoomPage;