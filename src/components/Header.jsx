import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="p-4 border-b bg-neutral-900 text-white">
      <Link to="/">
        <div className="max-w-fit mx-auto text-center flex gap-4 items-center justify-center">
            <img
              src="/favicon.png"
              alt="MindShelf Logo"
              className="mx-auto mb-2 h-10 w-10"
            />
            <h1 className="text-xl font-semibold">MindShelf</h1>
        </div>
      </Link>
    </header>
  );
}

export default Header;
