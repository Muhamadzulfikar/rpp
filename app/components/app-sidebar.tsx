import * as React from "react"
import {
    IconDashboard,
} from "@tabler/icons-react"

import {NavMain} from "~/components/nav-main"
import {NavUser} from "~/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "~/components/ui/sidebar"

const data = {
    user: {
        name: "Muhamad Zulfikar",
        email: "admin@rpp.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: IconDashboard,
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="/" className="flex items-center gap-2 font-medium">
                                <div className="flex size-6 items-center justify-center rounded-md">
                                    <img src="/school.svg"/>
                                </div>
                                SIMRPP
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <NavUser user={data.user}/>
            <SidebarContent>
                <NavMain items={data.navMain}/>
            </SidebarContent>
        </Sidebar>
    )
}
