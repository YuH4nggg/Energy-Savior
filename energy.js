function showInfo(type){

    const title = document.getElementById("energy-title");
    const description = document.getElementById("description");

    if(type === "solar"){
        title.textContent = "☀️ Solar Energy";
        description.textContent =
        "Solar energy uses sunlight captured by solar panels to generate electricity. It is one of the most widely used renewable energy sources because sunlight is abundant and available in many parts of the world. Solar power produces clean energy without releasing greenhouse gases during operation, making it an important solution for reducing dependence on fossil fuels.";
    }

    else if(type === "wind"){
        title.textContent = "💨 Wind Energy";
        description.textContent =
        "Wind energy converts the movement of wind into electricity using wind turbines. When wind turns the turbine blades, a generator produces electrical energy. Wind power is a clean and renewable energy source that helps reduce carbon emissions, although it requires suitable locations with consistent wind speeds.";
    }

    else if(type === "hydro"){
        title.textContent = "💧 Hydropower";
        description.textContent =
        "Hydropower generates electricity by using the movement of water, usually from rivers, waterfalls, or dams. The flowing water spins turbines that produce electricity. It is one of the oldest and most reliable renewable energy sources, providing a stable supply of electricity while producing very low emissions.";
    }

    else if(type === "geo"){
        title.textContent = "🌋 Geothermal Energy";
        description.textContent =
        "Geothermal energy uses heat stored beneath the Earth's surface to generate electricity or provide heating. Underground heat from hot rocks and water is converted into usable energy through geothermal power plants. It provides a consistent energy supply because it does not depend on weather conditions like solar or wind energy.";
    }

    else if(type === "biomass"){
        title.textContent = "🌿 Biomass Energy";
        description.textContent =
        "Biomass energy is produced by converting organic materials such as plants, agricultural waste, and other biological materials into fuel or electricity. It helps reduce waste by giving unused materials a purpose while providing a renewable alternative to fossil fuels. However, it must be managed carefully to ensure sustainable use.";
    }
}