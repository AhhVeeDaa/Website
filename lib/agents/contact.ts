// contact.ts

import { Handler } from 'aws-lambda';

interface ContactFormSubmission {
    name: string;
    email: string;
    message: string;
}

export const handler: Handler = async (event) => {
    const submission: ContactFormSubmission = JSON.parse(event.body);
    
    // Analyze the submission content for categorization
    const category = categorizeSubmission(submission.message);
    
    // Process the submission (e.g., save to database, send email, etc.)
    await processSubmission(submission, category);
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Submission received',
            category,
        }),
    };
};

function categorizeSubmission(message: string): string {
    // Basic keyword categorization logic
    if (message.includes('support')) {
        return 'Support Inquiry';
    } else if (message.includes('sales')) {
        return 'Sales Inquiry';
    } else {
        return 'General Inquiry';
    }
}

async function processSubmission(submission: ContactFormSubmission, category: string) {
    // Implement submission processing logic here
    console.log(`Processing submission from ${submission.name} categorized as ${category}.`);
}