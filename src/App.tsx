import { DropdownList } from "./components/DropdownList";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-[#f3f4f6] text-black dark:bg-[#1e1e2f] dark:text-white">
      <div className="p-6 transition-colors duration-300">
        <Header />
        <DropdownList />
      </div>
    </div>
  );
};

export default App;
