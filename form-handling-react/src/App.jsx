import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm.js';

function App() {
  return (
    <div className="App">
      <h1>Controlled Component Form</h1>
      <RegistrationForm />
      
      <h1>Formik Form</h1>
      <FormikForm />
    </div>
  );
}

export default App;