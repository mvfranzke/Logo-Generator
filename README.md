# Module-10-Challenge (Logo-Generator)
## Description
This is the 10th assignment or challenge for our bootcamp class. In this assignment we're tasked to create an SVG logo maker using Node.js command-line application that takes user input. The application prompts user to select a color, shape, text and text color for the logo and saves the generated SVG to a `.svg` file.

The application will be invoked by using the following command:

```
node index.js
```
Below are the sample logo created:

![Circle Logo](./Examples/circle.jpg)
![Square Logo](./Examples/square.jpg)
![Triangle Logo](./Examples/triangle.jpg)

## Installation
Inquirer and jest package must be installed by entering below in the command line:

```
npm i inquirer @8.2.5
npm i jest
```

## Usage
Given the command-line application that accepts user input, user will be prompted to enter the logo text which will only accept a maximum of 3 characters, then will receive prompt to enter the text color, shape of the logo - user have 3 option (circle, square and triangle) then finally the background color. After user inputs all information, they will receive a message that logo.svg is generated.

To run the test:

```
npm run test
```

URL of Github repository : https://github.com/mvfranzke/Logo-Generator

Video Link (user flow): https://drive.google.com/file/d/1jCyyVu1zKicMkUt-9tGtRsUNG-j6Wylo/view

## Credits
I've used the references and SVG resources provided to us to complete the assignment:

* [Example SVG](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)

* [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

* [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

* [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

* [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)

* [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)

Below are the youtube tutorial I also used to complete this assignment:

* <https://www.youtube.com/watch?v=ajiAl5UNzBU>

* <https://www.youtube.com/watch?v=GJYMcLus3v0>

## License
N/A
