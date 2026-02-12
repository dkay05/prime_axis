import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cred-black pt-16">{children}</main>
      <Footer />
    </>
  );
}
