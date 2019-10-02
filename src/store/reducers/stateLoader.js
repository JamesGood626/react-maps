export function loadState() {
    try {
        let serializedState = localStorage.getItem('map-app-state')
        if (serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState)
    }
    catch (err) {
        return undefined
    }
}

export function saveState(state){
    try {
        let serializedState = JSON.stringify(state)
        localStorage.setItem('map-app-state', serializedState)
    }
    catch (err) {

    }
}