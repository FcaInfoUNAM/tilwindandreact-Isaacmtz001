import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  return (
    <div className="min-h-screen bg-orange-100">
      <Navbar />
      <div className="flex justify-center items-center py-20">
        <Card />
      </div>
    </div>
  );
}

export default App;
