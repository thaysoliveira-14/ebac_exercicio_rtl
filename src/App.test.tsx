import { render, screen } from  '@testing-library/react';
import App from './App'

describe('Deve renderizar o <App />', () => {
    test('Deve renderizar corretamente', () => {
        render(<App />)

        expect(screen.getByTestId('btn-comentar')).toBeInTheDocument
    })
})