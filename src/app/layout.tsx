"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/app/context/UserContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const client = new Ably.Realtime({
    key: "XgsLNg.Yk73oQ:PV49QrQHc4HfxuD8GEqr29_OKgRuxL_fUAPxlcbCAm0",
  });
  return (
    <html lang="en">
      {/* <script src="https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js"></script> */}
      <script src="https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js"></script>
      <body suppressHydrationWarning={true}>
        <SessionProvider>
          <UserProvider>
            <AblyProvider client={client}>
              <ChannelProvider channelName="chat-demo1">
                <div className="font-poppins dark:bg-boxdark-2 dark:text-bodydark ">
                  {loading ? <Loader /> : children}
                </div>
              </ChannelProvider>
            </AblyProvider>
          </UserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
