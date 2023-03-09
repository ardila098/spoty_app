import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from '../components/organisms/Nav'


test('Renderizacion Nav', () => {
    const component = render(
    <BrowserRouter>
        <Nav />
    </BrowserRouter>
    )
    component.getByText('Home');
})