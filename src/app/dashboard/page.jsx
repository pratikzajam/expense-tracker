import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTableDemo } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-6 md:p-8 lg:p-10"> 
          <div className="@container/main flex flex-1 flex-col gap-4 md:gap-6"> 
            <div className="flex flex-col gap-6 py-6 md:gap-8 md:py-8 lg:gap-10 lg:py-10"> 
              <SectionCards />
              <div className="p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
                <DataTableDemo />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
