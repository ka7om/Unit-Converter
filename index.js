let inputNum = document.getElementById("input-num")

let metersEl = document.getElementById("meters")
let feetEl = document.getElementById("feet")
let litersEl = document.getElementById("liters")
let gallonsEl = document.getElementById("gallons")
let kilosEl = document.getElementById("kilos")
let poundsEl = document.getElementById("pounds")


let metersCon = document.getElementById("meters-con")
let feetCon = document.getElementById("feet-con")
let litersCon = document.getElementById("liters-con")
let gallonsCon = document.getElementById("gallons-con")
let kilosCon = document.getElementById("kilos-con")
let poundsCon = document.getElementById("pounds-con")

let number = 24


inputNum.textContent = number

metersEl.textContent = number
feetEl.textContent = number
litersEl.textContent = number
gallonsEl.textContent = number
kilosEl.textContent = number
poundsEl.textContent = number


let feetF = number * 3.2808399
let metersF = number * 0.3048
let gallonsF = number * 0.264172052
let litersF = number * 3.78541178
let poundsF = number * 2.20462262
let kilosF = number * 0.45359237


feetCon.textContent = feetF.toFixed(3)
metersCon.textContent = metersF.toFixed(3)
gallonsCon.textContent = gallonsF.toFixed(3)
litersCon.textContent = litersF.toFixed(3)
poundsCon.textContent = poundsF.toFixed(3)
kilosCon.textContent = kilosF.toFixed(3)