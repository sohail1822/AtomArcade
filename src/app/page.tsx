import Index from "@/components/Dashboard";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "AtomArcade: Your AI-powered molecular research hub....",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};
export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index></Index>
      </DefaultLayout>
    </>
  );
}
