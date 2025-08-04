import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Post from "./components/Post.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { AllPostsDataProvider } from "./hooks/useAllPosts.jsx";

function App() {
  return (
    <AllPostsDataProvider>
      <>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </>
    </AllPostsDataProvider>
  );
}

export default App;
