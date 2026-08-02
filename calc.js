function calculateEnergy(){
    let appliance = document.getElementById("appliance").value;
    let power = Number(document.getElementById("power").value);
    let hours = Number(document.getElementById("hours").value);
    let rate = Number(document.getElementById("rate").value);

    let energy = (power * hours * 30) / 1000;
    let cost = energy * rate;

    document.getElementById("result-title").innerHTML =
    appliance + " Results";

    document.getElementById("output").innerHTML =
    `
    ⚡ Monthly Energy Usage:
    <b>${energy.toFixed(2)} kWh</b>
    <br><br>
    💰 Estimated Monthly Cost:
    <b>RM ${cost.toFixed(2)}</b>
    <br><br>
    🌱 Tip:
    Try reducing usage time to save energy!
    `;
}