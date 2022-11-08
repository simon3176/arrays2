input.onButtonPressed(Button.A, function () {
    basic.showString("" + (list[0]))
})
input.onButtonPressed(Button.AB, function () {
    P1 = list[0]
    P2 = Villains[1]
    if (P1 > P2) {
        basic.showString("" + (P1))
        basic.showString("Win")
    } else {
        basic.showString("" + (P2))
        basic.showString("Win")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Villains[1]))
})
let P2 = ""
let P1 = ""
let Villains: string[] = []
let list: string[] = []
list = ["Superman", "Batman", "Lebron-James"]
Villains = ["Thanos", "Joker", "Dr Doom"]
basic.forever(function () {
	
})
