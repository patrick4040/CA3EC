type Event = {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendance: number;
};

import eventsData from "@/data/events.json";

const events: Event[] = eventsData;

export default function EventsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Campus Events</h1>

      <div className="grid gap-4">
        {events.map((event) => (
          <div key={event.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Date:</strong> {event.date} at {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p className="text-sm text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}