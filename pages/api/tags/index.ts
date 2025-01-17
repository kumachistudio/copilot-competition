import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { tags } = req.body;

    // Here you would handle the tags, e.g., save them to a database
    // For now, we'll just log them and return a success response
    console.log('Received tags:', tags);

    return res.status(200).json({ message: 'Tags submitted successfully' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
