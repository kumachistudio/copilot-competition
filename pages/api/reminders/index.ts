import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // Adjust the import path as necessary
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  

  if (req.method === "POST") {
    const { time, goalId } = req.body;

    try {
      const reminder = await prisma.reminder.create({
        data: {
          time: new Date(time),
          goal: {
            connect: { id: goalId },
          },
        },
      });

      res.status(201).json(reminder);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
