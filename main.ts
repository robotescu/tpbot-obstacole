input.onButtonPressed(Button.A, function () {
    stop = 1
})
function evita () {
    TPBot.stopCar()
    TPBot.setTravelTime(TPBot.DriveDirection.Backward, 30, 1)
    TPBot.setTravelTime(TPBot.DriveDirection.Left, 30, 0.5)
}
let stop = 0
basic.showIcon(IconNames.Heart)
stop = 0
TPBot.headlightColor(0xff0000)
while (stop == 0) {
    TPBot.setWheels(50, 50)
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, 5) && TPBot.sonarJudge(TPBot.Sonarjudge.Less, 12)) {
        evita()
    }
}
TPBot.stopCar()
basic.forever(function () {
	
})
