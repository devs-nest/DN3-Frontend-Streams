import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">this is the footer</footer>
    </div>
  );
}

function Dashboard() {
  return <h1>this is dashboard</h1>;
}

function About() {
  return <h1>This is about</h1>;
}
function Home() {
  return <h1>This is home</h1>;
}
export default App;
