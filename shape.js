class Shape {
  constructor(type) {
    this.type = type;
    this.color = null;
  }
setColor(color) {
  this.color = color;
}

render(logoText, logoColor){
  throw new Error('render() method should be implemented by child classes.');
}

createShapeElement(shapeContent, textContent) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeContent}${textContent}</svg>`;
}

createTextElement(logoText, logoColor) {
  return `<text x="150" y="125" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="48" fill="${logoColor}">${logoText}</text>`;
}
}


class Triangle extends Shape {
  render(logoText, logoColor) {
    const shapeElement = `<polygon points= "150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    const textElement = this.createTextElement(logoText, logoColor);
    return this.createShapeElement(shapeElement, textElement);
  }
}

class Circle extends Shape {
  render(logoText, logoColor) {
    const shapeElement = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    const textElement = this.createTextElement(logoText, logoColor);
    return this.createShapeElement(shapeElement, textElement);
  }
}

class Square extends Shape {
  render(logoText, logoColor) {
    return `<rect x="50" y="50" width="200" height="100" fill="${this.color}"/>`;
  }
}

module.exports = {Shape, Triangle, Circle, Square};