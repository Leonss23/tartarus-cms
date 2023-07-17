import React from "react";

import { Header } from "@/components/Header";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
  params: { storeId: number };
}

export default async function Layout({ children, params: { storeId } }: Props) {
  const slug = Number(storeId);
  if (!slug) redirect(`/`);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
