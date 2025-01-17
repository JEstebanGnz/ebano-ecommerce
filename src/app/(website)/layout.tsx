import { Sidebar, TopMenu } from "@/components";
import { useUIStore } from "@/store";

export default function WebsiteLayout({
 children
}: {
 children: React.ReactNode;
}) {

  return (
    <main className="min-h-screen bg-green-100">
    <TopMenu/>
    <Sidebar/>

    <div className="px-5"> 
    {children}
    </div>
    </main>
  );
}