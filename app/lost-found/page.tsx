type LostItem = {
  id: number;
  item_name: string;
  description: string;
  location_found: string;
  date_reported: string;
  status: string;
};

import lostData from "@/data/lost-found.json";

const items: LostItem[] = lostData;

export default function LostFoundPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lost & Found</h1>

      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{item.item_name}</h2>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Location:</strong> {item.location_found}</p>
            <p><strong>Date:</strong> {item.date_reported}</p>
            <p><strong>Status:</strong> {item.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}