function showInfo(type){

    const title = document.getElementById("energy-title");
    const description = document.getElementById("description");

    if(type === "solar"){
        title.textContent = "☀️ Solar Energy";
        description.textContent =
        "Solar energy uses sunlight captured by solar panels to generate electricity.";
    }

    else if(type === "wind"){
        title.textContent = "💨 Wind Energy";
        description.textContent =
        "Wind energy uses turbines to convert wind movement into electricity.";
    }

    else if(type === "hydro"){
        title.textContent = "💧 Hydropower";
        description.textContent =
        "Hydropower generates electricity using moving water.";
    }

    else if(type === "geo"){
        title.textContent = "🌋 Geothermal Energy";
        description.textContent =
        "Geothermal energy uses heat from inside the Earth.";
    }

    else if(type === "biomass"){
        title.textContent = "🌿 Biomass Energy";
        description.textContent =
        "Biomass uses organic materials such as plants and waste to produce energy.";
    }
}