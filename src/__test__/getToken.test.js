import '@testing-library/jest-dom/extend-expect';
import { getToken } from '../services/getToken';

test('Obteniendo token de la URL', () => {
    const hash = '#access_token=BQCmh82_c9OKF_QnxZUqa5xuBTLMkDcUjXeEbQ5Cyw0NEQHKXv4s8LGxasYugi51fshWcNCdKHsSVu2cTT8f9V7NEAs6uTIPJ10msFODvLSsg4S_yXnrsJ-R3xDOR0rVfnVbvTWn3m6pzRmEc1z74O8XXeHoi4GBjwtwvT6T-qU1QuxKuiKHJ76-np3W6u8GlPI5d3H3ltypP--aRfmlcMgHhUkNeb51hho6UmrOkGMmk-IYgAfGQ6VGG9vt&token_type=Bearer&expires_in=3600';
    const response = getToken(hash);
    expect(response).toBe('BQCmh82_c9OKF_QnxZUqa5xuBTLMkDcUjXeEbQ5Cyw0NEQHKXv4s8LGxasYugi51fshWcNCdKHsSVu2cTT8f9V7NEAs6uTIPJ10msFODvLSsg4S_yXnrsJ-R3xDOR0rVfnVbvTWn3m6pzRmEc1z74O8XXeHoi4GBjwtwvT6T-qU1QuxKuiKHJ76-np3W6u8GlPI5d3H3ltypP--aRfmlcMgHhUkNeb51hho6UmrOkGMmk-IYgAfGQ6VGG9vt')
    expect(response).not.toBe('#');
    expect(response).not.toBe('=');
})
