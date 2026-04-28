export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-4">
        Campus Companion
      </h1>

      <p className="mb-6 text-lg">
        Your all-in-one hub for campus life.
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="/events"
          className="p-3 bg-blue-600 text-white rounded text-center"
        >
          View Events
        </a>

        <a
          href="/lost-found"
          className="p-3 bg-green-600 text-white rounded text-center"
        >
          Lost & Found
        </a>

        <a
          href="/canteen"
          className="p-3 bg-purple-600 text-white rounded text-center"
        >
          Canteen Menu
        </a>
      </div>
    </main>
  );
}