import * as jose from 'jose';

export async function verifyToken<T>(token: string): Promise<T> {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);

        const { payload } = await jose.jwtVerify(token, secret);

        return payload as T;
    } catch (error) {
        throw new Error('Invalid token or secret');
    }
}
