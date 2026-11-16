function FormField({ label, name, type = "text", placeholder = "", required = false }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} />
    </div>
  );
}

export default FormField;