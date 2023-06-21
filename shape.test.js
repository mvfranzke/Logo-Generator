//import shape js
const { Triangle, Circle, Square} = require ('./shape');

//test for triangle
describe('Triangle', () => {
test ('Triangle should render SVG content MVF, black font and yellow background', () => {
  const shape = new Triangle();
  shape.setColor('yellow');
  const logoText = 'MVF';
  const logoColor = 'black';
  expect(shape.render(logoText, logoColor)).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="yellow"/><text x="150" y="110" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="48" fill="black">MVF</text></svg>');
  }
  );
}
);

//text for circle
describe ('Circle', () => {
  test('Circle should render SVG content MVF, black font and yellow background', () => {
    const shape = new Circle();
    shape.setColor('yellow');
    const logoText = 'MVF';
    const logoColor = 'black';
    expect(shape.render(logoText, logoColor)).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="yellow"/><text x="150" y="110" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="48" fill="black">MVF</text></svg>'
    );
  }
  );
}
);


//text for square