//import shape js
const { exportSpecifier } = require('@babel/types');
const { Triangle, Circle, Square} = require ('./shape');

//test for triangle
test ('Triangle should render SVG content', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill = "blue"/>');
}
);

//text for circle


//text for square