radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 8) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2B,
        255
        )
    } else if (receivedNumber == 9) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        255,
        robotbit.Motors.M2B,
        0
        )
    } else if (receivedNumber == 10) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        255,
        robotbit.Motors.M2B,
        255
        )
    } else if (receivedNumber == 11) {
        robotbit.MotorStopAll()
    } else if (receivedNumber == 12) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -255,
        robotbit.Motors.M2B,
        -255
        )
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(11)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(8)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(12)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(10)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(9)
})
radio.setGroup(174)
basic.forever(function () {
	
})
