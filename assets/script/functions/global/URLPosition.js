export function getURLPosition(){
    const url = window.location.pathname;
    const level = url.split('/').length - 1
    return level;
}

export function setURLPath(){
    let path = `./`;
    const level = getURLPosition();
    for(let i = 0; i<level-1; i++){
        path+=`../`
    }
    return path;
}