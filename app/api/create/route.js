// /app/api/stream/token/route.ts
import { StreamChat } from "stream-chat";
import { auth } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

export async function POST(request) {
    try {
        // Get the authenticated user from Clerk
        const { userId } = auth();
        
        if (!userId) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const serverClient = StreamChat.getInstance(api_key, api_secret);

        // Create Stream token
        const token = serverClient.createToken(userId);

        // Get the user from Clerk
        const user = await clerkClient.users.getUser(userId);

        // Update user's public metadata with the Stream token
        await clerkClient.users.updateUser(userId, {
            publicMetadata: {
                ...user.publicMetadata, // Preserve existing metadata
                streamToken: token
            }
        });

        return Response.json({ 
            token,
            success: true 
        });
    } catch (error) {
        console.error("Token generation error:", error);
        return Response.json({ 
            error: "Failed to generate token",
            details: error.message 
        }, { 
            status: 500 
        });
    }
}
