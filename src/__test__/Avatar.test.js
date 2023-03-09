import { render } from '@testing-library/react';
import avatar from '../assets/person.png';
import Avatar from '../components/atoms/Avatar'

test('Renderizacion avatar', () => {
    const props = {
        avatar,
        name: 'Avatar Icon'
    }

    const component = render(<Avatar name={props.name} avatar={props.avatar} />);

    component.getByAltText('Avatar Icon')

})