import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { StoreSelector } from "@/components/StoreSelector";
import { getStores } from "@/lib/db/getStores";

export async function Header() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const { data: stores } = await getStores(userId);
  if (!stores) redirect("/");

  return (
    <header className="border-b-2 flex p-4 items-baseline gap-4">
      <h1 className="text-4xl font-black">Tartarus</h1>
      <StoreSelector stores={stores} />
      <Navbar className="" />
      <div className="ml-auto flex items-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
