import { TopMenu } from "@/components";

export default function WebsiteLayout({
 children
}: {
 children: React.ReactNode;
}) {

  return (
    <main className="bg-[var(--background)]">
    <TopMenu/>
    {/* <Sidebar/> */}
    <div> 
    {children}
    </div>
    </main>
  );
}