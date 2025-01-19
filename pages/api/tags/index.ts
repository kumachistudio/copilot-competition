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
    const { goalId, tag } = req.body;

    if (typeof tag !== 'string' || typeof goalId !== 'string') {
      return res.status(400).json({ error: 'Invalid data format' });
    }

    try {
      const createdTag = await prisma.tag.create({
        data: {
          goalId: parseInt(goalId),
          name: tag,
        },
      });

      return res.status(200).json({ message: 'Tag created successfully', createdTag });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      const tags = await prisma.tag.findMany();
      return res.status(200).json({ tags });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
