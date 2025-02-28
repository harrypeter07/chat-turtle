// app/api/create/route.js
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

export async function POST(request) {
  try {
    // Parse the webhook payload from Clerk
    const body = await request.json();
    const { data, type } = body;

    // Check if this is a user.created event
    if (type !== "user.created") {
      return new Response(JSON.stringify({ message: "Not a user creation event" }), {
        status: 200,
      });
    }

    const userId = data.id; // Clerk user ID from webhook payload

    if (!userId) {
      return new Response(JSON.stringify({ error: "No user ID provided" }), {
        status: 400,
      });
    }

    // Initialize Stream client
    const serverClient = StreamChat.getInstance(apiKey, apiSecret);

    // Generate Stream token
    const token = serverClient.createToken(userId);

    // Update Clerk user metadata with Stream token
    await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        streamToken: token,
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        token,
        userId,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process webhook",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}

// Optional: Add GET for debugging purposes
export async function GET() {
  return new Response(
    JSON.stringify({ message: "This endpoint is for Clerk webhooks (POST only)" }),
    { status: 405 }
  );
}