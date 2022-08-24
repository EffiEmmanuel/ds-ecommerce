export default function authHeader() {
    const user = sessionStorage.getItem('token')

    if(user && user.token) {
        return {
            'token': `bearer ${user.token}`
        }
    } else {
        return {}
    }
}