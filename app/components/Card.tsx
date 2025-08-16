export default function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600">{title}</p>
      <h3 className="text-2xl font-semibold">{value}</h3>
    </div>
  );
}
