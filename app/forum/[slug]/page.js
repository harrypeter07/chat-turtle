
import ChatForum from '@/components/ChatForums';

// your Stream app information




export default async function Page({params}) {

    // const client = useCreateChatClient({
        // apiKey,
        // tokenOrProvider: userToken,
        // userData: { id: userId },
    //   });

    const slug = (await params).slug;
    //  if (!client) return <div>Setting up client & connection...</div>;

  return <ChatForum />;
}





