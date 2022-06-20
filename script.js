const solarSystem = document.getElementById("solarSystem")
const button = document.getElementById("button")
let newPlanetArray = []
const planets = [
    {
        "name": "Mercury",
        "diameter": 4879,
        "color": "#d4d4d4"
    },
    {
        "name": "Venus",
        "diameter": 12104,
        "color": "#fffad1ff"
    },
    {
        "name": "Earth",
        "diameter": 12742,
        "color": "#e1f0e5ff"
    },
    {
        "name": "Mars",
        "diameter": 6779,
        "color": "#fbe6f4ff"
    },
    {
        "name": "Jupiter",
        "diameter": 139822,
        "color": "#fffad1ff"
    },
    {
        "name": "Saturn",
        "diameter": 116464,
        "color": "orange"
    },
    {
        "name": "Uranus",
        "diameter": 50724,
        "color": "#f5e6db"
    },
    {
        "name": "Neptune",
        "diameter": 49244,
        "color": "#b5caf9ff"
    }
]


function renderPlanets() {
    solarSystem.innerHTML = ""
    // setup()
    let indivPlanet = planets.map((planet) => {

        let name = planet.name
        let diameter = planet.diameter / 500
        let diameterFact = planet.diameter
        let color = planet.color

        let planetDiv = document.createElement("div")
        planetDiv.classList.add("planetDiv")
        solarSystem.appendChild(planetDiv)

        let planetEl = document.createElement("div")
        planetEl.style.width = `${diameter}`
        planetEl.style.height = `${diameter}`
        planetEl.style.backgroundColor = `${color}`
        // planetEl.style.linearG
        planetEl.classList.add("planet")
        planetDiv.appendChild(planetEl)
        planetDiv.onmouseover = () => {
            if (planetInfo.classList.contains("hide")) {
                planetInfo.classList.remove("hide")
                planetInfo.classList.add("show")
            }
        }
        planetDiv.onmouseout = () => {
            if (planetInfo.classList.contains("show"))
                planetInfo.classList.remove("show")
            planetInfo.classList.add("hide")
        }

        let planetInfo = document.createElement("div")
        planetDiv.appendChild(planetInfo)
        planetInfo.classList.add("hide")
        planetInfo.classList.add("planetInfo")



        let planetName = document.createElement("p")
        planetName.innerHTML = `${name}`
        planetInfo.appendChild(planetName)
        planetName.style.color = `${color}`
        planetName.classList.add("planetName")

        let planetDiameter = document.createElement("p")
        planetDiameter.innerHTML = `Diameter:  ${diameterFact}km`
        planetInfo.appendChild(planetDiameter)
        planetDiameter.classList.add("planetDiameter")





    })


}

