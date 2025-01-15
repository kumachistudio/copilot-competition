import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // Adjust the import path as necessary
import nodemailer from "nodemailer";
import crypto from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const token = crypto.randomBytes(32).toString("hex");
      const tokenExpiry = new Date(Date.now() + 3600000); // 1 hour

      await prisma.user.update({
        where: { email },
        data: {
          resetPasswordToken: token,
          resetPasswordTokenExpiry: tokenExpiry,
        },
      });

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        to: email,
        from: process.env.EMAIL_USER,
        subject: "Password Recovery",
        text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        ${process.env.NEXTAUTH_URL}/auth/reset?token=${token}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Password recovery email sent" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}