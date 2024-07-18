import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Report } from "./components/Report";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />\
          <Route path="report/:id" element={<Report />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
