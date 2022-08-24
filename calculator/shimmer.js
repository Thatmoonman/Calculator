
const shimmer = () => {
    let title = document.getElementsByClassName("title")[0]

    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    title.style.color = "#" + randomColor
    
    let t = setTimeout(shimmer, 2000)
}

window.onload = shimmer
