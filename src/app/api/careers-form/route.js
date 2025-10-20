import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'careersFormSubmission.json');

    // Parse the incoming JSON body
    const submission = await request.json();

    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });

    // Load existing submissions or start with empty array
    let submissions = [];
    try {
      const fileContents = await fs.readFile(filePath, 'utf-8');
      submissions = JSON.parse(fileContents);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }

    // Append new submission with timestamp
    submissions.push({ ...submission, timestamp: new Date().toISOString() });

    // Save updated submissions
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
