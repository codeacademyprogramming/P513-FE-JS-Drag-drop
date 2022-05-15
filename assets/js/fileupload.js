// ------------------------------- File upload with file input -------------------------------

// const fileInput = document.querySelector(".file-input");
// const box = document.querySelector(".box");

// fileInput.addEventListener("change", function (e) {
//   const filesArray = Array.from(e.target.files);

//   filesArray.forEach((file) => {
//     previewImage(file);
//   });
// });

// function previewImage(f) {
//   const fileReader = new FileReader();

//   fileReader.readAsDataURL(f);

//   fileReader.addEventListener("loadend", function (fReader) {
//     const base64Image = this.result;

//     const image = document.createElement("img");
//     image.src = base64Image;
//     image.className = "image";

//     box.append(image);
//   });
// }

// const dropZone = document.querySelector(".drop-zone");
// const fileInput = document.querySelector("input[type=file]");

// dropZone.addEventListener("click", () => {
//   fileInput.click();
// });

// ------------------------------- File upload with drop zone -------------------------------

const dropZone = document.querySelector(".drop-zone");
const box = document.querySelector(".box");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();

  const filesArray = Array.from(e.dataTransfer.files);

  filesArray.forEach((file) => {
    previewImage(file);
  });
});

function previewImage(f) {
  const fileReader = new FileReader();

  fileReader.readAsDataURL(f);

  fileReader.addEventListener("loadend", function () {
    const base64Image = this.result;

    const image = document.createElement("img");
    image.src = base64Image;
    image.className = "image";

    box.append(image);
  });
}

box.append(element1, element2, element3);

box.appendChild(element1);
box.appendChild(element2);
box.appendChild(element3);
