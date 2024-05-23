const baseURL = 'http://localhost:3000'

const orders = '/orders'
const auth = '/auth'
const comments = '/comments'
const groups = '/group'

const urls = {
    orders:orders,
    auth:{
        login:`${auth}/sign-in`,
        refresh:`${auth}/refresh`,
        logout:`${auth}/logout`
    }
}

export {
    baseURL,
    urls
}