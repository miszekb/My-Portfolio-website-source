import styles from './App.module.css'
import { PageFooter } from './components/PageFooter/PageFooter';
import { UpperBar } from './components/UpperBar/UpperBar';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from "react-router";
import Projects from './pages/Projects/Projects';
import Articles from './pages/Articles/Articles';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.pageContainer}>
        <UpperBar/>
        <div className={styles.currentPageContent} style={{ paddingTop: 50 }}>
          <div className={styles.contentContainer}>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/articles" element={<Articles/>}/>
              {/* <Route path="/contact" element={<MainPage/>}/> */}
            </Routes>
          </div>
          <PageFooter/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
