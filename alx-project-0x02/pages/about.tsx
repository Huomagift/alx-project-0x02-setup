import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50 space-y-6">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}
