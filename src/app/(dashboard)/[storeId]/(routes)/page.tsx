import { getStore } from "@/lib/db/getStore";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface Props {
  params: { storeId: number };
}

export default async function Page({ params }: Props) {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const { data: store, error } = await getStore(params.storeId, userId);
  if (!store) redirect("/");

  return <h1>Store: {store.name}</h1>;
}
