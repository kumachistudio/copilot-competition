import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // Adjust the import path as necessary
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const userId = session.user.id;
  const { id } = req.query;

  if (req.method === "PUT") {
    const { title, description, startDate, endDate, priority, status } = req.body;

    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    try {
      const goal = await prisma.goal.update({
        where: { id: Number(id), userId: Number(userId) },
        data: {
          title,
          description,
          startDate: parsedStartDate,
          endDate: parsedEndDate,
          priority,
          status
        },
      });

      res.status(200).json(goal);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.goal.delete({
        where: { id: Number(id), userId: Number(userId) },
      });

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
