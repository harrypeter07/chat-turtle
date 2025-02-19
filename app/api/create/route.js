import { StreamChat } from "stream-chat"
import { clerkClient } from "@clerk/nextjs/server";


const api_key = "tpucdj6vdqxa";
const api_secret = "wzvumujdm9t4u5m4uaphpbzpfqzdfypk6p4a8s5rz6s5ch35ks6pjgakfg43v6rv";
const user_id = "user_2sAjFz9PrIG8wFLaFcTTWWTPXXc";


export async function POST( requst ) {




 const serverClient = StreamChat.getInstance(api_key, api_secret);

    const user = await requst.json();
    // console.log(body);

// Create User Token
const token = serverClient.createToken(user.data.id);
console.log("New uSer CREATED" , token)

const client = await clerkClient()

await client.users.updateUserMetadata( user.data.id , {
    publicMetadata : {
        token: token
    }
})
// console.log(token);
    return Response.json({ message: 'Hello World' })
  }