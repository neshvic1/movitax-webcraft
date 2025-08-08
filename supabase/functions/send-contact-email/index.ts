import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const { email, name, message } = await req.json();
    
    if (!email || !name || !message) {
      throw new Error("Missing required fields: name, email, or message");
    }

    console.log("Processing request for:", { name, email });

    // For testing before domain verification
    const isTestMode = true; // Set this to false after domain verification
    const testRecipient = "munenevictor834@gmail.com"; // The Resend account email

    // Determine recipients based on test mode
    const userRecipient = isTestMode ? testRecipient : email;
    const notificationRecipient = isTestMode ? testRecipient : "movitaxconsultants@gmail.com";
    
    // Note: After domain verification, change the from address to use your domain
    // e.g., "Movitax <contact@yourdomain.com>"
    const fromAddress = "Movitax <onboarding@resend.dev>";

    // Send confirmation email to user
    let userEmailResult;
    try {
      const userEmailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromAddress,
          to: userRecipient,
          subject: "Thank you for contacting Movitax",
          html: `
            <h1>Thank you for reaching out!</h1>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you shortly.</p>
            ${isTestMode ? "<p><strong>Note:</strong> This is in test mode. After domain verification, this email will be sent to the actual user.</p>" : ""}
          `
        })
      });
      userEmailResult = await userEmailResponse.json();
      console.log("User email result:", JSON.stringify(userEmailResult));
    } catch (error) {
      console.error("Error sending user email:", error);
      userEmailResult = { error: error.message };
    }
    
    // Send notification email to Movitax
    let notificationEmailResult;
    try {
      const notificationEmailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromAddress,
          to: notificationRecipient,
          subject: "New Contact Form Submission",
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            ${isTestMode ? "<p><strong>Note:</strong> This is in test mode. After domain verification, this email will be sent to movitaxconsultants@gmail.com.</p>" : ""}
          `
        })
      });
      notificationEmailResult = await notificationEmailResponse.json();
      console.log("Notification email result:", JSON.stringify(notificationEmailResult));
    } catch (error) {
      console.error("Error sending notification email:", error);
      notificationEmailResult = { error: error.message };
    }

    return new Response(JSON.stringify({ 
      success: true,
      testMode: isTestMode,
      userEmailResult,
      notificationEmailResult
    }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 200,
    });

  } catch (error) {
    console.error("Function error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 500,
    });
  }
})
