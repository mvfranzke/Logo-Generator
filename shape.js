//class Shape where triangle, square and circle inherit characters from
class Shape {
  constructor(type) {
    this.type = type;
    this.color = null;
  }
setColor(color) {
  this.color = color;
}

render(logoText, logoColor){
  throw new Error('Error');
}
//svg container to combine shape and text
createShapeElement(shapeContent, textContent) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeContent}${textContent}</svg>`;
}
//container to generate text in the svg markup
createTextElement(logoText, logoColor) {
  return `<text x="150" y="110" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="48" fill="${logoColor}">${logoText}</text>`;
}
}

//class Triangle to render triangle shape from users input
class Triangle extends Shape {
  render(logoText, logoColor) {
    //sets the polygon points to create triangle shape and render the color
    const shapeElement = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    //created the logo inside the shape, parametes logotext and logocolor added
    const textElement = this.createTextElement(logoText, logoColor);
    //combines shape and text
    return this.createShapeElement(shapeElement, textElement);
  }
}
//class Circle to render triangle shape from users input
class Circle extends Shape {
  render(logoText, logoColor) {
    const shapeElement = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    const textElement = this.createTextElement(logoText, logoColor);
    return this.createShapeElement(shapeElement, textElement);
  }
}

//class Square to render triangle shape from users input
class Square extends Shape {
  render(logoText, logoColor) {
    const shapeElement = `<rect x="50" y="50" width="200" height="100" fill="${this.color}"/>`;
    const textElement = this.createTextElement(logoText, logoColor);
    return this.createShapeElement(shapeElement, textElement);
  }
}

//exports shape, triangle, circle and square to be used in index.js
module.exports = {Shape, Triangle, Circle, Square};
