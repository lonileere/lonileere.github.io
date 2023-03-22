import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { useCallback } from "react";
import Particles from "react-particles";
import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";
import { config } from "../particles.config";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full p-6">
        <div className="flex flex-col justify-start border h-full w-full p-6 space-y-8">
          <div>
            <header className="text-4xl font-light">Leke Onile-ere</header>
            <p className="text-sm font-light">Front-End Developer</p>
          </div>
          <NavBar />
        </div>
        <div className="absolute bottom-0 right-0 w-full p-6">
          <div className="max-w-sm font-bold text-right p-6 w-full ml-auto overflow-auto max-h-[300px]">
            <Outlet />
          </div>
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
      />
    </>
  );
}

export default App;
