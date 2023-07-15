import { UserButton } from "@clerk/nextjs";

import { Navbar } from "@/components/Navbar";
import { StoreSelector } from "@/components/StoreSelector";

export function Header() {
  return (
    <nav className="border-b-2 flex p-4 items-baseline gap-4">
      <h1 className="text-4xl font-black">Tartarus</h1>
      <StoreSelector />
      <Navbar className="" />
      <div className="ml-auto flex items-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
