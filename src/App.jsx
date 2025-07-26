import VantaBackground from "@/components/ui/VantaGlobe";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <VantaBackground />
        </div>

        <div className="flex flex-col py-80 md:py-50 md:px-10 lg:py-50 lg:px-30  min-h-screen px-5">
          <h1 className="font-Lacquer-Regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rosePink ">
            Welcome to Pass_Manager
          </h1>
          <p className="font-Lacquer-Regular text-xs md:text-xl text-white py-3 md:py-4 md:px-3 max-w-2xl">
            Securely store and manage all your passwords in one place
          </p>
        </div>
      </section>

      <section className="bg-black min-h-screen border-t flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-Lacquer-Regular text-3xl md:text-4xl lg:text-5xl font-bold text-rosePink">
          Don’t remember your Password?
        </h2>
        <p className="font-Lacquer-Regular text-xs sm:text-xl md:text-2xl text-white py-6 max-w-4xl">
          Don’t worry, we got you covered!
        </p>
        <div className="pt-10">
          <NavLink to="/password">
            <InteractiveHoverButton>Get Started</InteractiveHoverButton>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default App;
