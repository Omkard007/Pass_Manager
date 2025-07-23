import VantaBackground from "@/components/ui/VantaGlobe"
function App() {
  return (
      <>
      <VantaBackground/>
      <div className="relative z-10">
        <div className="container mx-auto px-20 py-35 flex flex-col ">
          <h1 className="font-Lacquer-Regular text-6xl font-bold text-rosePink ">Welcome to Pass_Manager</h1>
          <p className="font-Lacquer-Regular text-xl gap-4 text-white px-20 py-6 ">Securely store and manage all your passwords in one place</p>                    
        </div>
      </div>
    </>
  );
}

export default App
  