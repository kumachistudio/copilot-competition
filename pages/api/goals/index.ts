import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // Adjust the import path as necessary
import { getSession } from "next-auth/react";
import { Session, DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const userId = session.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  if (req.method === "POST") {
    const { title, description, category, startDate, endDate, priority, status, progress, visibility, milestones, reminders, tags, attachments } = req.body;

    try {
      const goal = await prisma.goal.create({
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
          user: {
            connect: { id: Number(userId) },
          },
          milestones: {
            create: milestones.map((milestone: string) => ({ name: milestone })),
          },
          reminders: {
            create: reminders.map((reminder: string) => ({ time: new Date(reminder) })),
          },
          tags: {
            create: tags.map((tag: string) => ({ name: tag })),
          },
          attachments: {
            create: attachments.map((attachment: string) => ({ url: attachment })),
          },
        },
      });

      res.status(201).json(goal);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "GET") {
    try {
      const goals = await prisma.goal.findMany({
        where: { userId: Number(userId) },
      });

      res.status(200).json(goals);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
