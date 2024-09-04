'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"


export default async function handleLogout() {

    cookies().delete("Authorization")
    cookies().delete("_id")
    revalidatePath("/","layout")
    redirect("/")
}