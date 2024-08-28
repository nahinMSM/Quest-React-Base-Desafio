
const Button = ({ label }) => {
  const handleClik = () => {
    alert(`A label desse botão é ${label}`);
  };

  return (
    <button onClick={handleClik}>
      {label}
    </button>
  );
};

export default Button;