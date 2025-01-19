import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { goalId, milestones: newMilestones } = req.body;

    if (!Array.isArray(newMilestones) || typeof goalId !== 'string') {
      return res.status(400).json({ error: 'Invalid data format' });
    }

    try {
      const createdMilestones = await prisma.milestone.createMany({
        data: newMilestones.map((milestone: string) => ({
          goalId: parseInt(goalId),
          description: milestone,
          name: milestone, // Assuming 'name' is the same as 'description'
        })),
      });

      return res.status(200).json({ message: 'Milestones saved successfully', createdMilestones });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      const milestones = await prisma.milestone.findMany();
      return res.status(200).json({ milestones });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
