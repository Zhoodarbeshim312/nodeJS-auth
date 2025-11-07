import jwt from "jsonwebtoken";
export const generateToken = (userId: number, userEmail: string) => {
  const JWT_SECRET = process.env.JWT_SECRET!;
  return jwt.sign(
    {
      id: userId,
      email: userEmail,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};
