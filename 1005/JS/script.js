function GenerateElement(elementName = "div", elementAttributes, elementInnerText = "") {
  const newElement = document.createElement(elementName)
  try {
    for (let i = 0; i < elementAttributes.length; i++) {
      newElement.setAttribute(elementAttributes[i][0], elementAttributes[i][1])
    }
  } catch (e) { console.log(`No attributes were set! Error: ${e}`) }
  newElement.innerText = elementInnerText
  return newElement
}

function GenerateCarousel(imageURLList) {
  const imageURLs = imageURLList
  const carouselExampleIndicators = GenerateElement("div", [["id", "carouselExampleIndicators"], ["class", "carousel slide"], ["data-ride", "carousel"]])

  const carouselIndicators = GenerateElement("ol", [["class", "carousel-indicators"]])
  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      carouselIndicators.append(GenerateElement("li", [["data-target", "#carouselExampleIndicators"], ["data-slide-to", `${i}`], ["class", "active"]]))
    } else {
      carouselIndicators.append(GenerateElement("li", [["data-target", "#carouselExampleIndicators"], ["data-slide-to", `${i}`]]))
    }
  }
  carouselExampleIndicators.append(carouselIndicators)

  const carouselInner = GenerateElement("div", [["class", "carousel-inner"]])
  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      carouselItem = GenerateElement("div", [["class", "carousel-item active"]])
      carouselItem.append(GenerateElement("img", [["class", "d-block w-100"], ["src", `${imageURLs[i]}`], ["alt", `Slide ${i + 1}`]]))
    } else {
      carouselItem = GenerateElement("div", [["class", "carousel-item"]])
      carouselItem.append(GenerateElement("img", [["class", "d-block w-100"], ["src", `${imageURLs[i]}`], ["alt", `Slide ${i + 1}`]]))
    }
    carouselInner.append(carouselItem)
  }
  carouselExampleIndicators.append(carouselInner)

  const carouselControlPrev = GenerateElement("a", [["class", "carousel-control-prev"], ["href", "#carouselExampleIndicators"], ["role", "button"], ["data-slide", "prev"]])
  carouselControlPrev.append(GenerateElement("span", [["class", "carousel-control-prev-icon"], ["aria-hidden", "true"]]))
  carouselControlPrev.append(GenerateElement("span", [["class", "sr-only"]], "Previous"))
  carouselExampleIndicators.append(carouselControlPrev)

  const carouselControlNext = GenerateElement("a", [["class", "carousel-control-next"], ["href", "#carouselExampleIndicators"], ["role", "button"], ["data-slide", "next"]])
  carouselControlNext.append(GenerateElement("span", [["class", "carousel-control-next-icon"], ["aria-hidden", "true"]]))
  carouselControlNext.append(GenerateElement("span", [["class", "sr-only"]], "Next"))
  carouselExampleIndicators.append(carouselControlNext)

  return carouselExampleIndicators
}

const body = document.querySelector("body")
const carouselImages = [
  "https://www.dogbreedslist.info/dog-wallpapers/golden-retriever-grass-side-view-standing-900x506.jpg",
  "https://www.dogbreedslist.info/dog-wallpapers/golden-retriever-butterfly-muzzle-green-900x506.jpg",
  "https://www.dogbreedslist.info/dog-wallpapers/golden-retriever-puppy-lying-muzzle-900x506.jpg"
]
body.append(GenerateCarousel(carouselImages))
