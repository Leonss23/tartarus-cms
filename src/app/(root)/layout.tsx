import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

import { getFirstStore } from "@/lib/db/getFirstStore";

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const { data: store } = await getFirstStore(userId);
  if (store) redirect(`/${store.id}`);

  return <>{children}</>;
}
