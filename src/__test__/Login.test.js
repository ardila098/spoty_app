import { render } from "@testing-library/react";
import Login from '../pages/Login/Login';

test('Renderizacion Home', () => {

    const component = render(<Login />);

    component.getByText('Login');
})