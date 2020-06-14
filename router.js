import Controller from '/controller.js';

function getRouteInfo(){
    const hash = location.hash ? location.hash.slice(1) : '';
    const [name, id] = hash.split('/');

    return {name, params: { id } }
}

function handleHash(){
    const {name, params} = getRouteInfo();

    if (name) {
        const routName = name + 'Route';
        Controller[routName](params);
    }
}

export default{
    init() {
        addEventListener('hashchange', handleHash);
        handleHash();
    }
}