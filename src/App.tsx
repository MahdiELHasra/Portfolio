import { useReducer, createContext } from "react";
import reducer from "./reducers/reducer";
import setCursorLocation from "./utils/helpers/setCursorLocation";
import setCursorAppearance from "./utils/helpers/setCursorAppearance";
import toggleContextMenu from "./utils/helpers/toggleContextMenu";
// import playAudio from "./utils/helpers/playAudio";
import hideContextMenu from "./utils/helpers/hideContextMenu";
import sampleStore from "./utils/samples/sampleStore";
import "./App.scss";
import { Toaster } from "react-hot-toast";
import Cursor from "./components/Cursor/Cursor";
import NavBar from "./components/NavBar/NavBar";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import LanguageSwitch from "./components/LanguageSwitch/LanguageSwitch";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import Hero from "./components/Hero/Hero";
import Manifest from "./components/Manifest/Manifest";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
// Create store (redux naming convention)
export const store = createContext<any>(null);

// Create store provider to wrap subcomponents in
const StoreProvider = ({ children }: any) => (
  <store.Provider value={useReducer(reducer, sampleStore)}>
    {children}
  </store.Provider>
);

function App() {
  return (
    <StoreProvider>
      <div
        className="App"
        onClick={hideContextMenu}
        onMouseMove={(e) => setCursorLocation(e)}
        onScroll={(e) => setCursorLocation(e)}
        onMouseDown={(e) => setCursorAppearance(e)}
        onMouseUp={(e) => setCursorAppearance(e)}
        onContextMenu={(e) => toggleContextMenu(e)}
      >
        <Toaster />
        <Cursor />
        <NavBar />
        <ThemeButton />
        <LanguageSwitch />
        <ContextMenu />
        <Hero />
        <Manifest />
        <AboutMe />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </StoreProvider>
  );
}

export default App;
