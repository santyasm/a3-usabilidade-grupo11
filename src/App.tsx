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
    <div className="font-inter">
      <Header />
      <div className="flex flex-col gap-40">
        <Home />
        <About />
        <Contact />
        <Agreements />
        <Specialties />
        <Commitment />
        <div />
      </div>
    </div>
  );
}

export default App;
