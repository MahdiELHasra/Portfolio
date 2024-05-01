import { useReducer, createContext } from "react";
import reducer from "./reducers/reducer";
import sampleStore from "./utils/samples/sampleStore";
import "./App.css";
// Create store (redux naming convention)
export const store = createContext<any>(null);

// Create store provider to wrap subcomponents in
const StoreProvider = ({ children }: any) => (
  <store.Provider value={useReducer(reducer, sampleStore)}>
    {children}
  </store.Provider>
);

function App() {
  return <StoreProvider>HALLO!</StoreProvider>;
}

export default App;
