import { fireEvent, render } from "@testing-library/react"
import Button from "../components/atoms/Button"


test('click en el boton de cerrar sesion', () => {

    const buttonProps = {
        type: 'submit',
        value: 'Cerrar sesion',
    }

    const mockHandler = jest.fn();

    const component = render(<Button type={buttonProps.type} value={buttonProps.value} onclick={mockHandler} />);
    const button = component.getByText('Cerrar sesion');
    fireEvent.click(button);
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(2);   
})