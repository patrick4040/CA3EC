type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  availability: boolean;
};

import menuData from "@/data/canteen-menu.json";

const menu: MenuItem[] = menuData;

export default function CanteenPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Canteen Menu</h1>

      <div className="grid gap-4">
        {menu.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> €{item.price.toFixed(2)}</p>
            <p>
              <strong>Status:</strong>{" "}
              {item.availability ? "Available" : "Unavailable"}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}