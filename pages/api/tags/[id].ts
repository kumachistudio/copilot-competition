import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Here you would fetch the tag by id, e.g., from a database
    // For now, we'll just return a mock tag
    return res.status(200).json({ id, tag: `Tag ${id}` });
  } else if (req.method === 'DELETE') {
    // Here you would delete the tag by id, e.g., from a database
    // For now, we'll just return a success response
    return res.status(200).json({ message: `Tag ${id} deleted successfully` });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
