// ideally, my_app should have that jsx syntax only
// but we don't have babel to transpile, so we will directly treat it as an object

const my_app = {
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to visit google'
}