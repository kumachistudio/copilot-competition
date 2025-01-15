import { NextApiRequest, NextApiResponse } from 'next';

let milestones: string[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { milestones: newMilestones } = req.body;
    if (!Array.isArray(newMilestones)) {
      return res.status(400).json({ error: 'Invalid data format' });
    }
    milestones = newMilestones;
    return res.status(200).json({ message: 'Milestones saved successfully', milestones });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
