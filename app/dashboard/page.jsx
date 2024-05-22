"use client";

import React, { useEffect, useState } from "react";
import { Layout, LayoutBody, LayoutHeader } from "@/components/ui/layout";
import { Search } from "@/components/search";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";
import { TopNav } from "@/components/top-nav";
import Sidebar2 from "@/components/sidebar";

const Example = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Ensure the initial state is the same on both server and client
  useEffect(() => {
    setIsCollapsed(false);
  }, []);

  const topNav = [
    { title: "Overview", href: "/dashboard/overview", isActive: true },
    { title: "Customers", href: "/dashboard/customers", isActive: false },
    { title: "Products", href: "/dashboard/products", isActive: false },
    { title: "Settings", href: "/dashboard/settings", isActive: false },
  ];

  return (
    <div>
      <Layout>
        <Sidebar2 isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <div className={`flex flex-1 flex-col ${isCollapsed ? "md:ml-14 lg:ml-14" : "md:ml-64 lg:ml-64"}`}>
          <LayoutHeader>
            <TopNav links={topNav} />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </LayoutHeader>
          <LayoutBody className="space-y-4">
            <div className="flex items-center justify-between space-y-2">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Dashboard
              </h1>
              <div className="flex items-center space-x-2">
                <Button>Download</Button>
              </div>
            </div>
            {/* Add tabs or any other components here */}
          </LayoutBody>
        </div>
      </Layout>
    </div>
  );
};

export default Example;
