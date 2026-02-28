import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Here we would handle the form submission, e.g. send an email or save to a database
    console.log({ name, email, message });

    return NextResponse.json({ success: true, message: 'Form submitted successfully.' });
}