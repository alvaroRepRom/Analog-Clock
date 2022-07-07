setInterval(setClock, 1000)

const hourHand = document.querySelector("[data-hour-hand]")
const minuteHand = document.querySelector("[data-minute-hand]")
const secondHand = document.querySelector("[data-second-hand]")

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 // sumamos los ratios del anterior para
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12     // que aumente poco a poco

    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(secondHand, secondsRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()