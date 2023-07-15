import { auth } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";

import { getStore } from "@/lib/db/getStore";
import { Header } from "@/components/Header";

interface Props {
  children: React.ReactNode;
  params: { storeId: number };
}

export default async function Layout({ children, params }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
