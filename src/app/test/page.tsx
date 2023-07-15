import { getAllStores } from "@/lib/db/getAllStores";

export default async function Page() {
  const { data: stores, error } = await getAllStores();
  console.log({ stores });
  return (
    <main>
      <h1>Test</h1>
      <ul>
        {stores ? (
          stores.map((store) => (
            <li key={"store" + store.id}>
              <p>Store: {store.name}</p>
              <p>Author: {store.author}</p>
              <br />
            </li>
          ))
        ) : error ? (
          <p>Failed to fetch stores</p>
        ) : (
          <p>No stores</p>
        )}
      </ul>
    </main>
  );
}
