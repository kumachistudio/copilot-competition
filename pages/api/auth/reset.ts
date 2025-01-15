import { NextApiRequest, NextApiResponse } from "next";
import { prisma }  from "@/lib/prisma"; // Adjust the import path as necessary
import bcrypt from "bcrypt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { token, password } = req.body;

    try {
      const user = await prisma.user.findFirst({
        where: {
          resetPasswordToken: token,
          resetPasswordTokenExpiry: {
            gte: new Date(),
          },
        },
      });

      if (!user) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await prisma.user.update({
        where: { id: user.id },
        data: {
          password: hashedPassword,
          resetPasswordToken: null,
          resetPasswordTokenExpiry: null,
        },
      });

      res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
