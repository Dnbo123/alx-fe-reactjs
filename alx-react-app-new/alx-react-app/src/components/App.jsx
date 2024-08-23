import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';   
 import UserProfile from './UserProfile';


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
<UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}



export default App;
