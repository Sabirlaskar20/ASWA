function Button({ label, variant = "primary", type = "button" }) {
  return (
    <button type={type} className={`btn btn-${variant}`}>
      {label}
    </button>
  );
}

export default Button;