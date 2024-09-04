import { User, UserType } from "@/db/models/users";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { z } from "zod";
export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
const jwtSecret = process.env.JWT_SECRET as string

export async function POST(request: Request) {
  try {
    const body: { email: string; password: string } = await request.json();
    
    const user = await User.getUserByEmail(body.email);
    
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    console.log(user);

    const isValidPassword = await compare(body.password, user.password);

    if (!isValidPassword) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    const { password, ...safeUser } = user;
    const access_token = sign(safeUser, jwtSecret);

    return Response.json({ access_token: access_token, _id: user._id });
  } catch (error) {

   return new Response(JSON.stringify({ error: "Invalid request data" }), { status: 400 });
  }
}


