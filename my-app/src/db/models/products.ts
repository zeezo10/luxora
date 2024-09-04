import { WithId } from "mongodb";
import { z } from "zod";
import { db } from "../mongodb";

const ProductSchema = z.object({
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  excerpt: z.string(),
  price: z.number(),
  tags: z.array(z.string()),
  thumbnail: z.string(),
  images: z.array(z.string()),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type ProductType = WithId<z.infer<typeof ProductSchema>>;

class Product {
  static col() {
    return db.collection<ProductType>("products");
  }

  static async findAll(page : number , limit : number , query?: string) {
    try {
      const skip = (page - 1)* limit

      let filter ={}
  
      if(query){
        filter ={
          $or:[
            {name: {$regex: query, $options: 'i'}},

          ]

        }
      }
  
      const result = await this.col().find(filter).skip(skip).limit(limit).toArray();
      return result;
      
    } catch (error) {
      console.log(error);
      
    }
  }

  static async findBySlug(slug: string) {
    const result = await this.col().findOne({ slug: slug });
    return result;
  }
}

export default Product;