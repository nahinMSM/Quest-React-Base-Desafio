import './App.css';
import Button from './components/Button/Button';
import ColoredUppercaseText from './components/ColoredUpperCaseText/ColoredUpperCaseText';

function App() {
  return (
    <>
      <ColoredUppercaseText text="Olá, mundo!" color="blue" />
      <ColoredUppercaseText text="Esse é um texto vermelho" color="red" />
      <ColoredUppercaseText text="Esse é um texto hexadecimal" color="#FF5733" />

      <Button label="baixar cv" />
      <Button label="Eviar Formulário" />
      <Button label="Cancelar" />
    </>
  );
}

export default App;
