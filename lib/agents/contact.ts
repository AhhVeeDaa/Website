// contact.ts

interface ContactFormSubmission {
    name: string;
    email: string;
    message: string;
}

export function categorizeSubmission(message: string): string {
    if (message.includes('support')) {
        return 'Support Inquiry';
    } else if (message.includes('sales')) {
        return 'Sales Inquiry';
    } else {
        return 'General Inquiry';
    }
}

export async function processSubmission(submission: ContactFormSubmission, category: string) {
    console.log(`Processing submission from ${submission.name} categorized as ${category}.`);
}

export async function handleContactSubmission(body: string) {
    const submission: ContactFormSubmission = JSON.parse(body);
    const category = categorizeSubmission(submission.message);
    await processSubmission(submission, category);
    return {
        message: 'Submission received',
        category,
    };
}