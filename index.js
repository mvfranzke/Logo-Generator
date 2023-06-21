//import inquirer, fs and shape.js file
const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Triangle, Circle, Square} = require('./shape');

//user can only input maximum of 3 characters on the logo text
const max_length = 3;

const generateLogo = () => {
  inquirer
  .prompt ([
    {
      name: "logoText",
      message: 'Please enter text for your logo (Note: maximum of 3 characters only)',
      validate: (input) => {
        if (input.length > max_length) {
          return 'Logo Text should be maximim of 3 characters.';}
        return true;
        },
    },
    { name: 'logoColor',
      message: 'Enter the text color (color name or hexadecinal number)',
    },
    {
      name: 'shape',
      message: 'Choose from the three shape below.',
      type: 'list',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter the shape color (color name or hexadecinal number)',
    }
  ])
  .then ((answers) => {
    const {logoText, logoColor, shape, shapeColor} = answers;
    
    let shapeInstance;

    switch(shape) {
      case 'circle':
        shapeInstance = new Circle();
        break;
      case 'triangle':
        shapeInstance = new Triangle();
        break;
      case 'square':
        shapeInstance = new Square();
        break;
      default:
         throw new Error(`Invalid shape: ${shape}`);
    }

    shapeInstance.setColor(shapeColor);

    const svgContent = shapeInstance.render(logoText, logoColor);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');

  }

  )
  .catch((error) => {
    console.log('Please try again', error);
  }

  );
};

generateLogo();