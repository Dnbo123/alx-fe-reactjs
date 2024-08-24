import UserContext from './components/UserContext';
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
<>
<UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
</>
  //return <ProfilePage userData={userData} />;
}

export default App;