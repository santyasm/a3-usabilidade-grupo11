import {
  Header,
  Home,
  About,
  Contact,
  Agreements,
  Specialties,
  Commitment,
} from "./components";

function App() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Contact />
      <Agreements />
      <Specialties />
      <Commitment />
    </div>
  );
}

export default App;
