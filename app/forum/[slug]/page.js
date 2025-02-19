
import { metadata } from '@/app/layout';
import ChatForum from '@/components/ChatForum';

// your Stream app information

import { currentUser } from '@clerk/nextjs/server';

export default async function Page({params}) {
const user = await currentUser();
    // const client = useCreateChatClient({
        // apiKey,
        // tokenOrProvider: userToken,
        // userData: { id: userId },
    //   });

    const slug = (await params).slug;
    // if (!client) return <div>Setting up client & connection...</div>;

  return <ChatForum slug={slug} clerkUser={{ id: user.id , name: user.firstName , token: user.publicMetadata.token}}/>;
}





