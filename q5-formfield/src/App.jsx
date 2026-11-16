import FormField from "./components/FormField";
import "./App.css";

function App() {
  return (
    <div className="form-container">
      <h2>Member Details</h2>
      <FormField label="Full Name" name="fullName" placeholder="Enter full name" />
      <FormField label="Email" name="email" type="email" placeholder="Enter email" />
      <FormField label="Phone" name="phone" type="tel" placeholder="Enter phone number" />
      <FormField label="Password" name="password" type="password" placeholder="Enter password" />
    </div>
  );
}

export default App;