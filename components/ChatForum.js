"use client"
import React, { useEffect, useState } from 'react'
import  { User, Channel as StreamChannel } from 'stream-chat';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, 
    MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

;




const ChatForum = ({ clerkUser , slug}) => {
  const apiKey = 'tpucdj6vdqxa'
  const userToken = clerkUser.token;
  const userId = clerkUser.id;
  const userName = clerkUser.firstName;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };


    function capitalizeTitle(title) {
        return title
            .toLowerCase() // Convert everything to lowercase first
            .split("-") // Split the string by spaces
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
            .join(" "); // Join words back into a string
    }
 const [channel , setChannel]= useState();

 const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(()=> {
    if(!client) return;

    const channel = client.channel("messaging", slug, {
        name:  capitalizeTitle(slug) + " Discussions",
        image: `https://getstream.io/random_png/?name=${slug}`,
        members: [user.id],
    });
    setChannel(channel);
  channel.addMembers([userId]);
  }, [client]);
  

  if(!client) return <div>Setting up client & connection...</div>;
  return (
    <Chat client={client}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
  )
}

export default ChatForum
