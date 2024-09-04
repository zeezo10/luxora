import { User, UserType } from "@/db/models/users";
export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export async function POST(request: Request) {
  const body: UserType = await request.json();

  const result = await User.register(body);

  return Response.json({ msg: result });
}
