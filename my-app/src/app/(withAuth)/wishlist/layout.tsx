import NavBar from "@/app/component/NavBar";
import ProtectedRoute from "../../component/ProtectedRoute";
export const dynamic = "force-dynamic";

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="bg-[#1d1c18]">
            <ProtectedRoute>
                <NavBar/>
                {children}
            </ProtectedRoute>
        </div>
    )   
} 