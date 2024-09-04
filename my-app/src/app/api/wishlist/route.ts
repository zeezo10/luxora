import { Wishlist, WishlistType } from "@/db/models/wishlist";
export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
type Body = {
  _id: string;
};

export async function DELETE(request: Request) {
  try {
    const body: Body = await request.json();

    const result = await Wishlist.DeleteWishList(body._id);

    return Response.json({ msg: "ddd" });
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request: Request) {
  try {
    const body: WishlistType = await request.json();
    console.log(body, "<<<<");

    const result = await Wishlist.AddToWishlist(body);

    return Response.json({ msg: result });
  } catch (error) {
    return Response.json(error);
  }
}

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-user-id") as string;

    const list = await Wishlist.findWishListByUserId(userId);

    return Response.json(list);
  } catch (error) {
    return Response.json(error);
  }
}
