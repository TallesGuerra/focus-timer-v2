import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}


export function plusTime() {
    let minutes = Number(el.minutes.textContent) + 5
    timer.updateDisplay(minutes)
}

export function minusTime() {
    let minutes = Number(el.minutes.textContent) - 5

    if (minutes <= 0) {
        reset()
        return

    }

    timer.updateDisplay(minutes)
}

export function toggleMusicTree() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.MusicTree.play()
        return
    }

    sounds.MusicTree.pause()
}


export function toggleMusicRain() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.MusicRain.play()
        return
    }

    sounds.MusicRain.pause()
}

export function toggleMusicFire() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.MusicFire.play()
        return
    }

    sounds.MusicFire.pause()
}

export function toggleMusicStore() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.MusicStore.play()
        return
    }

    sounds.MusicStore.pause()
}

