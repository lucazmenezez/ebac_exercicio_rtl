import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve adicionar dois comentários', () => {
        const { debug } = render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Primeiro comentário adicionado'
            }
        });

        fireEvent.click(screen.getByTestId('comment-button'));

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Segundo comentário adicionado'
            }
        });

        fireEvent.click(screen.getByTestId('comment-button'));

        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});