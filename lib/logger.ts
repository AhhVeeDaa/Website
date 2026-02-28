import fs from 'fs';
import path from 'path';

const logContactSubmission = (submissionData, agentAnalysis) => {
    const logsDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }

    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const logFile = path.join(logsDir, `contacts-${date}.json`);
    const logEntry = {
        timestamp: new Date().toISOString(),
        submissionData,
        agentAnalysis
    };

    // Read existing logs if any
    let logs = [];
    if (fs.existsSync(logFile)) {
        const existingLogs = fs.readFileSync(logFile);
        logs = JSON.parse(existingLogs);
    }

    
    logs.push(logEntry);

    // Write updated logs back to the file
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 4));
};

export { logContactSubmission };