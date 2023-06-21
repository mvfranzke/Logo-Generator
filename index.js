//import inquirer, fs and shape.js file
const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Triangle, Circle, Square} = require('./shape');

//user can only input maximum of 3 characters on the logo text
const max_length = 3;

//function to generate logo
const generateLogo = () => {
  inquirer
  .prompt ([
    { // prompt to ask user for the text to be put in the logo
      name: "logoText",
      message: 'Please enter text for your logo (Note: maximum of 3 characters only)',
      validate: (input) => {
        if (input.length > max_length) {
          return 'Logo Text should be maximim of 3 characters.';}
        return true;
        },
    }, // prompt to ask user for the text color
    { name: 'logoColor',
      message: 'Enter the text color (color name or hexadecinal number)',
    },
    { //prompt to ask user for shape they want
      name: 'shape',
      message: 'Choose from the three shape below.',
      type: 'list',
      choices: ['circle', 'triangle', 'square'],
    },
    { //prompt to ask user for the color to fill the shapes
      name: 'shapeColor',
      message: 'Enter the shape color (color name or hexadecinal number)',
    }
  ])
  .then ((userInput) => {
    //deconstruct users answer on the prompts
    const {logoText, logoColor, shape, shapeColor} = userInput;
    
    //variable to determine final shapes
    let shapeGenerator;

    //switch statement to create the shape based from user input
    switch (shape) {
      case "circle":
        //Circle class imported from shape.js
        shapeGenerator = new Circle();
        break;
      case "triangle":
        //Triangle class imported from shape.js
        shapeGenerator = new Triangle();
        break;
      case "square":
        //Square class imported from shape.js
        shapeGenerator = new Square();
        break;
      default:
        throw new Error(`Invalid shape: ${shape}`);
    }

    //sets the shape color fill
    shapeGenerator.setColor(shapeColor);

    //creates the logo.svg file 
    const svgContent = shapeGenerator.render(logoText, logoColor);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');

  }

  )
  //message to prompt for any error
  .catch((error) => {
    console.log('Please try again', error);
  }

  );
};

//initialize generateLogo function
generateLogo();