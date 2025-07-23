import VantaBackground from "@/components/ui/VantaGlobe";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";


export function InteractiveHoverButtonDemo() {
  return <InteractiveHoverButton></InteractiveHoverButton>;
}

function App() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <VantaBackground />
        </div>

        {/* Foreground Content */}
        <div className="flex flex-col py-50 min-h-screen px-20">
          <h1 className="font-Lacquer-Regular text-6xl font-bold text-rosePink">
            Welcome to Pass_Manager
          </h1>
          <p className="font-Lacquer-Regular text-xl text-white py-6 max-w-2xl">
            Securely store and manage all your passwords in one place
          </p>
        
        </div>
      </section>

      {/* Section 2 - Black Background */}
      <section className="bg-black min-h-screen border-t flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-Lacquer-Regular text-5xl font-bold text-rosePink">
          Dont remember your Password?
        </h2>
        <p className="font-Lacquer-Regular text-2xl text-white py-6 max-w-4xl">
          Dont worry, we got you covered!
        </p>
        <div className="pt-10">
         <InteractiveHoverButton>Get Started</InteractiveHoverButton>
        </div>
      </section> 
    </>
  );
}

export default App;
