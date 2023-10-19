import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import { Provider } from "@/components/Provider";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat AI",
  description: "use OpenAI latest models",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="h-screen max-w-xs overflow-y-auto bg-[#202123] md:min-w-[20rem]">
                <SideBar />
              </div>
              {/* notification/toast */}

              <div className="flex-1 bg-[#343541]">{children}</div>
            </div>
          )}
        </Provider>
      </body>
    </html>
  );
}
