import ProtectedRoute from "../../component/ProtectedRoute";
export const dynamic = "force-dynamic";

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <ProtectedRoute>
                {children}
            </ProtectedRoute>
        </div>
    )   
} 