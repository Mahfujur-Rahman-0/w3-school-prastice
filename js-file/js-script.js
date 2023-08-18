const sliders= document.querySelectorAll("#slider")
var counter= 1;
var ref;
sliders.forEach(
    (slider, index) => {
        slider.style.left= `${index * 100}%`
    }
)
const prev = () => {
    if(counter >0){
        counter--
        slidess()
    }
}
const next = () => {
    if(counter < sliders.length - 1){
        counter++;
        slidess();
    }
}
const slidess = () => {
    sliders.forEach(
        (slider) => {
            slider.style.transform = `translateX(-${counter * 100}%)`
        }

    )
}