import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '.'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Deve adicionar primeiro comentário de teste', () => {
        render(<PostComment />)
    
        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: { value: 'Primeiro comentário de teste'}
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Primeiro comentário de teste'))
    })

    test('Deve adicionar segundo comentário de teste', () => {
        render(<PostComment />)
    
        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: { value: 'Segundo comentário de teste'}
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Segundo comentário de teste'))
    })
})

