import Navigation from "@/components/AdminOrder/Navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen justify-around">
      <div>
        {" "}
        <Navigation />
      </div>
      <div className="w-screen h-fit bg-[#F4F4F5] ">{children}</div>
    </div>
  );
}
