function Button({ label, variant = "primary" }) {
  return <button className={`btn btn-${variant}`}>{label}</button>;
}

export default Button;