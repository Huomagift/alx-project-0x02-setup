import Card from '../components/common/Card';

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 space-y-4">
      <h1>Welcome to My Project</h1>
      <p>This is the home page of my ALX project.</p>
      <Card title="Getting Started" content="Learn how to build with Next.js, TypeScript, and Tailwind CSS." />
      <Card title="Project Structure" content="Understand how to structure your project using best practices." />
      <Card title="API Integration" content="Fetch data from external APIs and display it dynamically." />
    </div>

  );
}