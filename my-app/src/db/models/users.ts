import { ObjectId, WithId } from "mongodb";
import { z } from "zod";
import { db } from "../mongodb";
import { hash } from "bcryptjs";

const UserSchema = z.object({
  _id: z.string(),
  username: z.string(),  
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
  createdAt: z.date().optional(),
  updateAt: z.date().optional(),
});

export type UserType = z.infer<typeof UserSchema>;

export class User {


  static col() {
    return db.collection<UserType>("users");
  }

  static async register(payload : UserType) {
    payload.password = await hash(payload.password,10)  
    payload.createdAt = new Date()
    payload.updateAt = new Date()
    const result = await this.col().insertOne(payload)    
    return "Success create user"
  }

  static async getUserByEmail(email : string){
    const result = await this.col().findOne({email})
    return result
  }
  
 
}

