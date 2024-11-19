import { Header, Home, About, Contact, Convenios } from "./components";

function App() {
  return (
    <div className="font-inter">
      <Header />
      <div className="flex flex-col gap-40">
        <Home />
        <About />
        <Contact />
        <Convenios />
      </div>
    </div>
  );
}

export default App;
