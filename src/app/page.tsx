import TemperatureTable from '@/components/TemperatureTable';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="container mx-auto py-8">
        <TemperatureTable />
      </div>
    </main>
  );
}