const getRoutePath = (route) => process.env.REACT_APP_ROUTER_BASE? `${process.env.REACT_APP_ROUTER_BASE}${route}` : `${route}`

export default {
    home: getRoutePath('/'),
    error: getRoutePath('/error')
}
