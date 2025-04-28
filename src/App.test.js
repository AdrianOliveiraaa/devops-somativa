import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // <-- Essa linha aqui
import App from './App';

test('verifica se aparece o texto Bem-vindo ao meu App React!', () => {
  render(<App />);
  const texto = screen.getByText(/Bem-vindo ao meu App React!/i);
  expect(texto).toBeInTheDocument();
});
