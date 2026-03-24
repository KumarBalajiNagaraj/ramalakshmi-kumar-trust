import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.email || !body.fullName) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
    }

    // Format email content for support form
    let subject = ""
    let text = ""

    if (body.formType === "support") {
      subject = `New Support Interest from ${body.fullName}`

      let donationInfo = ""
      if (body.supportType === "financial") {
        const amount = body.donationAmount === "custom" ? body.customAmount : body.donationAmount
        donationInfo = `Donation Amount: ${amount || "Not specified"}\n`
      }

      text = `
New Support Interest:

Full Name: ${body.fullName}
Email: ${body.email}
Phone: ${body.phone || "Not provided"}
Support Type: ${body.supportType || "Not provided"}
${donationInfo}
Message: ${body.message || "Not provided"}
Receive Updates: ${body.receiveUpdates ? "Yes" : "No"}
      `.trim()
    } else {
      // Generic message form
      subject = `Message from ${body.fullName}`
      text = `
Message from website:

Name: ${body.fullName}
Email: ${body.email}
Message: ${body.message || "No message provided"}
      `.trim()
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Ramalakshmi Kumar Trust <info@ramalakshmikumar.com>",
      to: ["info@ramalakshmikumar.com"],
      subject: subject,
      text: text,
      reply_to: body.email,
    })

    if (error) {
      return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully", id: data?.id }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: `An unexpected error occurred: ${error.message}` }, { status: 500 })
  }
}
