// import { useState, useEffect } from 'react';
// import { User, Channel as StreamChannel } from 'stream-chat';
// import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

// import 'stream-chat-react/dist/css/v2/index.css';

// const apiKey = 'dz5f4d5kzrue';
// const userId = 'proud-recipe-3';
// const userName = 'proud';
// const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicHJvdWQtcmVjaXBlLTMiLCJleHAiOjE3NDAwNjQ4MDN9.qbq2YQi3athLxogGoV82S1sRuGc3ys_dFvs2LbSBjIc';

// const user = {
//   id: userId,
//   name: userName,
//   image: `https://getstream.io/random_png/?name=${userName}`,
// };

// const App = () => {
//   const [channel, setChannel] = useState();
//   const client = useCreateChatClient({
//     apiKey,
//     tokenOrProvider: userToken,
//     userData: user,
//   });

//   useEffect(() => {
//     if (!client) return;

//     const channel = client.channel('messaging', 'custom_channel_id', {
//       image: 'https://getstream.io/random_png/?name=react',
//       name: 'Talk about React',
//       members: [userId],
//     });

//     // setChannel(channel);
//   }, [client]);

//   if (!client) return <div>Setting up client & connection...</div>;

//   return (
//     <Chat client={client}>
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// };

// export default App;