import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore interviews, ads, and talking head edits from AssociateVisuals in Lagos.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-10 md:pt-32">
        <h1 className="text-hero">Selected work</h1>
        <div className="mt-8">
          <WorkGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
