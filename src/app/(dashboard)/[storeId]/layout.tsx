import React from "react";

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
