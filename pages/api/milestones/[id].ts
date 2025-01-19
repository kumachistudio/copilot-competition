import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  if (req.method === 'GET') {
    try {
      const milestone = await prisma.milestone.findUnique({
        where: { id: parseInt(id) },
      });

      if (milestone) {
        return res.status(200).json({ milestone });
      } else {
        return res.status(404).json({ error: 'Milestone not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedMilestone = await prisma.milestone.delete({
        where: { id: parseInt(id) },
      });

      return res.status(200).json({ message: 'Milestone deleted successfully', deletedMilestone });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
