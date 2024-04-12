import { controls } from './elements.js'
import { cardControls } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] != "function") {
            return
        }  
        
        actions[action]()
    })
}

export function registerCardControls() {
    cardControls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] != "function"){
            return
        }   
        
        actions[action]()
    })
}

/*  export function plusTime() {
    let newMinutes = Number(minutesDisplay.textContent) + 5
    return newMinutes

}  */


