import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./helper/jwt";
import { UserType } from "./db/models/users";

async function authentication(request: NextRequest) {
    try {
        const authCookie = cookies().get('Authorization');
        if (!authCookie) {
            throw new Error("Invalid token");
        }

        const [type, token] = authCookie.value.split(' ');
        if (type !== "Bearer") {
            throw new Error("Invalid token");
        }

        const result = await verifyToken<UserType>(token);

        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-user-id', result._id.toString());
        requestHeaders.set('x-user-name', result.name);
        requestHeaders.set('x-user-email', result.email);

        return requestHeaders;
    } catch (error) {
        console.log(error);
    }
}

export async function middleware(request: NextRequest) {
    try {
        const headers = await authentication(request);
        return NextResponse.next({
            request: {
                headers: headers,
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json<{ error: string }>({
                error: error.message
            }, {
                status: 401
            });
        }

        return NextResponse.json<{ error: string }>({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}

export const config = {
    matcher: [
        '/api/wishlist',
        '/api/wishlist/:path*'
    ]
}
