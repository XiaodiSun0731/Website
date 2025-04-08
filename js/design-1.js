window.addEventListener("DOMContentLoaded", function () {
    const imgContainer = document.getElementById("resultImage");
    const storedImg = localStorage.getItem("selectedImage");

    if (storedImg && imgContainer) {
        const img = document.createElement("img");
        img.src = storedImg;
        img.alt = "Uploaded Result";
        img.style.maxWidth = "350px";
        img.style.objectFit = "contain";  // 你可以根据需要调整这个属性
        imgContainer.appendChild(img);
    } else {
        console.log("No image selected.");
    }
});