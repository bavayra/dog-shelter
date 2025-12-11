import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <h1>placeholder</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
