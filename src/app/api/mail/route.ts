import { sendEmail } from "@/utils/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest
  ) { 
    const data = await req.json();
    await sendEmail({
      to: "gwenpena21@gmail.com",
      subject: "Inquiry",
      html: `
        <div>
          <p><strong>Name</strong>: ${data.name}</p>
          <p><strong>Email</strong>: ${data.email}</p>
          <p><strong>Phone Number</strong>: ${data.phoneNumber || '--'}</p>
          <p><strong>Message</strong>: ${data.message}</p>
        </div>
      `,
    });
  
    return NextResponse.json({ message: "Email sent successfully", status: 200 });
  }