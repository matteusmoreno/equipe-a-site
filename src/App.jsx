import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Courses from './components/Courses/Courses';
import Approved from './components/Approved/Approved';
import StudentArea from './components/StudentArea/StudentArea';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Approved />
        <StudentArea />
      </main>
      <Footer />
    </>
  );
}

export default App;