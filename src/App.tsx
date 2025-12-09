import { APP_NAME, APP_DESCRIPTION } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {APP_NAME}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-gray-600">{APP_DESCRIPTION}</p>
            <p className="mt-4 text-sm text-gray-500">
              Professional project structure is ready!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
