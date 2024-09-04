import { log } from 'console';
import { ObjectId, WithId } from "mongodb";
import { string, z } from "zod";
import { db } from "../mongodb";
import { hash } from "bcryptjs";

const WishlistSchema = z.object({
  userId: z.instanceof(ObjectId),
  productId: z.instanceof(ObjectId),
  createdAt: z.date().optional(),
  updateAt: z.date().optional(),
});

export type WishlistType = z.infer<typeof WishlistSchema>;

export class Wishlist {
  static col() {
    return db.collection<WishlistType>("wishlist");
  }

  //   static async getWishlistById(userId: string) {
  //     const pipline = [
  //       {
  //         $match: {
  //           User_id: new ObjectId(userId),
  //         },
  //       },
  //     ];

  //     const result = await this.col().aggregate(pipline).toArray();
  //     return result;
  //   }

  //-----------------------------

  static async findWishListByUserId(userId: string) {
    
    const pipline = [
      {
        $match:{
          userId: new ObjectId(userId)
        }
      },
      {
        $lookup: {
          from: "products",        // The collection to join with
          localField: "productId", // Field from the wishlist collection
          foreignField: "_id",     // Field from the products collection
          as: "productDetails"     // Output array field
        }
      },
      {
        $unwind: "$productDetails" // Flatten the result to merge product details into wishlist document
      },
      {
        $project: {                // Select fields you want to include in the output
          _id: 1,
          userId: 1,
          "productDetails.name": 1,
          "productDetails.slug": 1,
          "productDetails.price": 1,
          "productDetails.thumbnail": 1,
          "productDetails.description": 1,
          createdAt: 1,
          updatedAt: 1
        }
      }
    ]

    const result = await this.col().aggregate(pipline).toArray();    

    return result;
  }

  static async AddToWishlist(payload: WishlistType) {
    console.log(payload);
    
    const data = {
      userId: new ObjectId(payload.userId ),
      productId: new ObjectId(payload.productId),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    WishlistSchema.parse(data);    

    const result = await this.col().insertOne(data);
    return {
      data,
      _id: result.insertedId,
    };
  }

  static async DeleteWishList(wishId : string){

      return  await this.col().deleteOne({ _id : new ObjectId(String(wishId))})
      
  }
}
