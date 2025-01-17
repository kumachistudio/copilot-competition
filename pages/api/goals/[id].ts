import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // Adjust the import path as necessary
import { getSession } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const userId = session.user.id;
  const { id } = req.query;

  if (req.method === "PUT") {
    const { title, description, category, startDate, endDate, priority, status, milestones, progress, reminders, tags, attachments, visibility } = req.body;

    try {
      const goal = await prisma.goal.update({
        where: { id: Number(id), userId },
        data: {
          title,
          description,
          category,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          priority,
          status,
          progress,
          visibility,
          milestones: {
            deleteMany: {}, // Clear existing milestones
            create: milestones.map((milestone: string) => ({ name: milestone })),
          },
          reminders: {
            deleteMany: {}, // Clear existing reminders
            create: reminders.map((reminder: string) => ({ time: new Date(reminder) })),
          },
          tags: {
            set: tags.map((tag: string) => ({ name: tag })),
          },
          attachments: {
            set: attachments.map((attachment: string) => ({ url: attachment })),
          },
        },
      });

      res.status(200).json(goal);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.goal.delete({
        where: { id: Number(id), userId },
      });

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
