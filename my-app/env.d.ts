// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      JWT_SECRET: string;
      NEXT_PUBLIC_BASE_URL:string
    }
  }
  