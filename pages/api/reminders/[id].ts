import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // Adjust the import path as necessary
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const { id } = req.query;

  if (req.method === "PUT") {
    const { time } = req.body;

    try {
      const reminder = await prisma.reminder.update({
        where: { id: Number(id) },
        data: {
          time: new Date(time),
        },
      });

      res.status(200).json(reminder);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.reminder.delete({
        where: { id: Number(id) },
      });

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
