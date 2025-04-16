import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
