import { BackButton, ForwardButton } from "./NavigationBtns";

const Header = () => {
  return (
    <header className="w-full bg-green-300 text-gray-800">
      <div className="max-w-5xl mx-auto w-full px-2 flex items-center justify-between">
        <BackButton />
        <h1 className="text-2xl p-2">Grahak khata book</h1>
        <ForwardButton />
      </div>
    </header>
  );
};

export default Header;
