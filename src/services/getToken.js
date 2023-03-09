export const getToken = (token) => {
    const response = token.split('&', 1)[0].split('=', -1);
    return response[1]
}