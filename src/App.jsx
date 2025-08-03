import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import BlogFeed from "./pages/BlogFeed";
import BlogPost from "./pages/BlogPost";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
      <Routes>
        <Route path="/" element={<BlogFeed />} />
        <Route path="/post/:slug" element={<BlogPost />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
