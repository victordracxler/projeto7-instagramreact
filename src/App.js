import Footer from "./Footer";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";


export default function App() {
  return (
    <>
      <Navbar />
      <div class="layout">
        <div class="container">
          <Stories/>
          <Posts/>
          <Footer/>
        </div>
        <div class="container-sidebar">
          <Sidebar/>
        </div>
      </div>
    </>
  );
}
