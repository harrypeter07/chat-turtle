"use client"
import { Chat, useCreateChatClient } from 'stream-chat-react';

// your Stream app information
const apiKey = 'dz5f4d5kzrue';
const userId = 'spring-river-0';
const userName = 'spring';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3ByaW5nLXJpdmVyLTAiLCJleHAiOjE3Mzk4MjkwMDF9.tLdMw_iJDPxE97QGITO_6MGSi6w-7F_DchkBBUNgToE';

export default  function ChatForum() {

    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: { id: userId },
      });

     if (!client) return <div>Setting up client & connection...</div>;

  return <Chat client={client}>Chat with client is ready! hhh</Chat>;
}





