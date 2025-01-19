import { getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // Adjust the import according to your project structure
import { authOptions } from "@/lib/authOptions"; // Adjust the import path as necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const userId = session.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  if (req.method === "POST") {
    const { title, description, startDate, endDate, priority, status } = req.body;
    
    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    if (parsedStartDate > parsedEndDate) {
      return res.status(400).json({ message: "Start date cannot be later than end date" });
    }

    try {
      console.log("Creating goal with data:", { title, description, startDate, endDate, priority, status, userId });
      const goal = await prisma.goal.create({
        data: {
          title,
          description,
          startDate: parsedStartDate,
          endDate: parsedEndDate,
          priority,
          status,
          userId: parseInt(userId, 10),
        },
      });
      console.log("Goal created successfully:", goal);
      return res.status(201).json(goal);
    } catch (error) {
      console.error("Error creating goal:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}