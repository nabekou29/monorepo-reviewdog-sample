import { Button, Card } from '@monorepo/ui';

export default function Home() {
  const unused = 'This variable is unused 2';

  return (
    <div className="space-y-8">
      <img src="https://placehold.jp/150x150.png" />
      <section>
        <h2 className="text-2xl font-bold mb-4">UI Components Demo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Button Component">
            <div className="space-y-2">
              <div>
                <Button>Primary Button</Button>
              </div>
              <div>
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <div>
                <Button variant="outline">Outline Button</Button>
              </div>
              <div>
                <Button disabled>Disabled Button</Button>
              </div>
            </div>
          </Card>

          <Card title="Card Component">
            <p>This is a card component from the UI package.</p>
            <p className="mt-2">It can be used to display content in a structured way.</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">About This Project</h2>
        <Card>
          <p>
            This is a sample monorepo project demonstrating how to efficiently run reviewdog with
            ESLint across multiple packages.
          </p>
          <p className="mt-2">The project includes:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>A Next.js application (this page)</li>
            <li>A shared UI component library</li>
            <li>A shared ESLint configuration package</li>
            <li>Reviewdog integration for efficient linting</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
