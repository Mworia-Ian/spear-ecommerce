import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ShieldBan } from "lucide-react";

export const metadata: Metadata = {
  title: "Unauthorized Access",
};

const Unauthorized = () => {
  return (
    <div
      className="container mx-auto flex flex-col items-center
    justify-center space-y-4 h-[calc(100vh-200px)]"
    >
      <ShieldBan width={100} height={100} />
      <h1 className="h1-bold text-4xl">Unauthorized Access</h1>
      <p className="text-muted-foreground">
        You do not have permission to access this page
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
};

export default Unauthorized;
