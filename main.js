const dataProgress = document.querySelectorAll("div.progress-line div")
console.log(dataProgress)

// Comment out for Different Animation and Remove animation from CSS

// dataProgress.forEach((dataLine) => {
//     console.log(dataLine.getAttribute('data-progress'))
//     dataLine.style.width = dataLine.getAttribute('data-progress')
// })

let typed = new Typed(".text", {
    strings: ["Engineering Student", "Frontend Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});