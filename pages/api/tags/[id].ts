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
      const tag = await prisma.tag.findUnique({
        where: { id: parseInt(id) },
      });

      if (tag) {
        return res.status(200).json({ tag });
      } else {
        return res.status(404).json({ error: 'Tag not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedTag = await prisma.tag.delete({
        where: { id: parseInt(id) },
      });

      return res.status(200).json({ message: 'Tag deleted successfully', deletedTag });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
