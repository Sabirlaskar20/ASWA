import FormField from "../components/FormField";
import Button from "../components/Button";

function Registration() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Registration successful!");
  };

  return (
    <div className="form-container">
      <h2>Member Registration</h2>
      <form onSubmit={handleSubmit}>
        <FormField label="Full Name" name="fullName" placeholder="Enter full name" required />
        <FormField label="Email" name="email" type="email" placeholder="Enter email" required />
        <FormField label="Password" name="password" type="password" placeholder="Enter password" required />
        <FormField label="Course" name="course" placeholder="Enter course" required />
        <Button label="Register" type="submit" />
      </form>
    </div>
  );
}

export default Registration;