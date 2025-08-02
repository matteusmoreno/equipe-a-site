import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Courses from './components/Courses/Courses';
import Approved from './components/Approved/Approved';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Approved />
      </main>
      <Footer />
    </>
  );
}

export default App;