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

await serverClient.upsertUser({ id: user.data.id})


await client.users.updateUserMetadata( user.data.id , {
    publicMetadata : {
        token: token
    }
})


 function capitalizeTitle(title) {
    return title
        .toLowerCase() // Convert everything to lowercase first
        .split("-") // Split the string by spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(" "); // Join words back into a string
}



   const slugs = ["Python", "JavaScript", "React", "nodejs", "Data-Science", "Ai"]

   slugs.forEach(async (item)=> {
    const channel = serverClient.channel("messaging", item, {
        image: `https://getstream.io/random_png/?name=react`,
        name: item.capitalizeTitle(),
        created_by_id: user.data.id,
    });

    await channel.create();
    channel.addMembers([user.data.id]);

   })
// console.log(token);
    return Response.json({ message: 'Hello World' })
  }