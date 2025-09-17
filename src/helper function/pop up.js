export const displayPopUpMessage = (message, setpopUpMsg, setpopUpType, setdisplayPopUp, status) => {
    setpopUpMsg(message)
    setdisplayPopUp(true)
    status ? setpopUpType('success') : setpopUpType('error')
}

export const cancelPopUP = (setdisplayPopUp, duration) => {
    setTimeout(() => {
        setdisplayPopUp(false)
    }, duration)
}