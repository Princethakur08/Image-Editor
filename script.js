let filters = {

    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    Contarst: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    Exposure: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    Saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    HueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg",
    },
    Blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px",
    },
    Greyscale:
    {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    Opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%",
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },

}

const imageCanvas = document.querySelector("#img-canvas");
const imgInput = document.querySelector("#image-input");
const filterContainer = document.querySelector(".filters");
const canvasCtx = imageCanvas.getContext("2d");
const resetBtn = document.querySelector("#reset-btn");
const downloadBtn = document.querySelector("#download-btn")
const presetsContainer = document.querySelector(".presets");



let file = null;
let image = null;

function createFilterElement(name, value, min, max, unit) {

    const div = document.createElement("div");
    div.classList.add("filters");

    const input = document.createElement("input");
    input.type = "range"
    input.min = min
    input.max = max
    input.value = value
    input.id = name


    const p = document.createElement("p")
    p.innerText = name


    div.appendChild(p);
    div.appendChild(input);


    input.addEventListener("input", (event) => {
        filters[name].value = input.value
        applyFilters();
    })

    return div
}

function createFilters(){
Object.keys(filters).forEach(key => {
    const filterElement = createFilterElement(key, filters[key].value, filters[key].min, filters[key].max, filters[key].unit)
    console.log(filterElement);

    filterContainer.appendChild(filterElement);
})
}
createFilters();
imgInput.addEventListener("change", (event) => {
    console.log(event);

    const file = event.target.files[0];
    const imagePlaceholder = document.querySelector(".placeholder")
    imageCanvas.style.display = "block";
    imagePlaceholder.style.display = "none";

    const img = new Image()
    img.src = URL.createObjectURL(file)

    img.onload = () => {
        image = img;
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        canvasCtx.drawImage(img, 0, 0);
    }
})

function applyFilters() {
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
    canvasCtx.filter = `
        brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.Contarst.value}${filters.Contarst.unit})
        saturate(${filters.Saturation.value}${filters.Saturation.unit})
        hue-rotate(${filters.HueRotation.value}${filters.HueRotation.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        opacity(${filters.Opacity.value}${filters.Opacity.unit})
        invert(${filters.invert.value}${filters.invert.unit})
    `.trim();


    canvasCtx.drawImage(image, 0, 0)
}

resetBtn.addEventListener("click", () => {
    filters = {

        brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%",
        },
        Contarst: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%",
        },
        Exposure: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%",
        },
        Saturation: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%",
        },
        HueRotation: {
            value: 0,
            min: 0,
            max: 360,
            unit: "deg",
        },
        Blur: {
            value: 0,
            min: 0,
            max: 20,
            unit: "px",
        },
        Greyscale:
        {
            value: 0,
            min: 0,
            max: 100,
            unit: "%",
        },
        sepia: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%",
        },
        Opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: "%",
        },
        invert: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%",
        },

    }
  applyFilters();
  filterContainer.innerHTML= "";
  createFilters();
})

downloadBtn.addEventListener("click",() => {

    const link = document.createElement("a");
    link.download = "eddited-image.png"
    link.href = imageCanvas.toDataURL()
    link.click()
})

const presets = {
    normal: {
        brightness: 100,
        Contarst: 100,
        Saturation: 100,
        HueRotation: 0,
        Blur: 0,
        Greyscale: 0,
        sepia: 0,
        Opacity: 100,
        invert: 0
    },

    vintage: {
        brightness: 110,
        Contarst: 90,
        Saturation: 80,
        HueRotation: 10,
        Blur: 0,
        Greyscale: 10,
        sepia: 40,
        Opacity: 100,
        invert: 0
    },

    drama: {
        brightness: 95,
        Contarst: 140,
        Saturation: 120,
        HueRotation: 0,
        Blur: 0,
        Greyscale: 0,
        sepia: 0,
        Opacity: 100,
        invert: 0
    },

    oldSchool: {
        brightness: 100,
        Contarst: 85,
        Saturation: 60,
        HueRotation: 0,
        Blur: 0,
        Greyscale: 20,
        sepia: 50,
        Opacity: 100,
        invert: 0
    },

    coolBlue: {
        brightness: 105,
        Contarst: 100,
        Saturation: 120,
        HueRotation: 200,
        Blur: 0,
        Greyscale: 0,
        sepia: 0,
        Opacity: 100,
        invert: 0
    },

    warmSun: {
        brightness: 115,
        Contarst: 105,
        Saturation: 130,
        HueRotation: 20,
        Blur: 0,
        Greyscale: 0,
        sepia: 15,
        Opacity: 100,
        invert: 0
    },

    noir: {
        brightness: 90,
        Contarst: 140,
        Saturation: 0,
        HueRotation: 0,
        Blur: 0,
        Greyscale: 100,
        sepia: 0,
        Opacity: 100,
        invert: 0
    },

    faded: {
        brightness: 110,
        Contarst: 80,
        Saturation: 70,
        HueRotation: 0,
        Blur: 0,
        Greyscale: 10,
        sepia: 20,
        Opacity: 100,
        invert: 0
    },

    cold: {
        brightness: 105,
        Contarst: 100,
        Saturation: 110,
        HueRotation: 180,
        Blur: 0,
        Greyscale: 0,
        sepia: 0,
        Opacity: 100,
        invert: 0
    },

    brightPop: {
        brightness: 120,
        Contarst: 130,
        Saturation: 150,
        HueRotation: 0,
        Blur: 0,
        Greyscale: 0,
        sepia: 0,
        Opacity: 100,
        invert: 0
    }
}; 


Object.keys(presets).forEach(presetName => {
    const presetDiv = document.createElement("div");
    const presetBtn = document.createElement("button");
    presetBtn.classList.add("btn");
    presetBtn.innerText = presetName
    presetsContainer.appendChild(presetBtn)

    
    
    presetBtn.addEventListener("click",() => {
      
     // change color when clicked
    presetBtn.style.backgroundColor = "red";

    // after 1 second return to normal
    setTimeout(() => {
        presetBtn.style.backgroundColor = "white";
    }, 200);

        
        const preset = presets[ presetName]

        Object.keys(preset).forEach(filterName =>  {
            filters[ filterName].value = preset[filterName]
        })
        applyFilters();
        filterContainer.innerHTML = "";
        createFilters()
         
       
    })
})