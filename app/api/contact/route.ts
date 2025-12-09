import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, phone, course, message } = data;

        // Here you would typically:
        // 1. Validate data on server
        // 2. Save to database
        // 3. Send email notification via SMTP/Resend/SendGrid

        console.log("Received Inquiry:", { name, phone, course, message });

        // Mock success with delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: "Inquiry received" });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
