### Super Yacht Times

Is a simple mono-component web app scaffolded with create-react-app.

- State management solution: Context-API
- Styled with sass

### Demo

![App-homepage-screenshot](src/assets/images/water-bg.webp)

### Hot to install deps & run the app

- Clone the repository into your local machine
- Install the node_modules
- Run the beautiful app

_Run the following CLI commands respectively_

```
$ git clone https://github.com/BassamHajar/syt-ta.git
```

```
$ npm i
```

```
$ npm start
```

## Technical Assignment

Design: 
I sent you a Figma invite, and also the link here. The Figma file contains some additional comments regarding the page details. The design only includes a desktop version, so you can disregard a potential mobile version for now. 
https://www.figma.com/file/4CfY3shUa4c2U6RRxZ9WIj/Bassam-Briefing?node-id=0%3A1

Story:
As a visitor of a yacht profile on the SuperYacht Times website, I’d like to be presented with a gallery of all the images of the yacht. When I click on an image, I’d like to be able to view the image in a large (lightbox) overlay.

Definition of done:

- A react application, containing a gallery component
- The gallery renders, given a list of images, a grid according to the design
- The grid can accommodate both landscape and portrait images, without distorting their aspect ratio
- When a user clicks on a photo, a lightbox opens to view the gallery in large format

Dataset:
https://gist.github.com/fabdrol/c2df76cba17f739922d36decb0ff0942

### Todos CheckList

- [x] using create-react-app
- [x] containing a single React component ( gallery )
- [x] design from Figma shared file

### Story

As a visitor of a yacht profile on the SuperYacht Times website, I’d like to be presented with a gallery of all the images of the yacht. When I click on an image, I’d like to be able to view the image in a large (lightbox) overlay.

- [x] SuperYacht Times website
- [x] yacht profile
- [ ] gallery - images grid
- [ ] onClick => lightbox
- [ ] Images.length

### DOD

- [ ] - A react application, containing a gallery component
- [ ] - The gallery renders, given a list of images, a grid according to the design
- [ ] - The grid can accommodate both landscape and portrait images, without distorting their aspect ratio
- [ ] - When a user clicks on a photo, a lightbox opens to view the gallery in large format

### Challenges

- How to specify interior & exterior photos dynamically without any identifiers or constraints?
  - I improvised using my judgement as the categories of the photos provided are not so many.
- Time :(
  - Will improve it on demand

### Would love to do

- [] Cleanup & refactor
- [] Convert to TS
- [] Add tests (Jest & Cypress)
- [] Add a component-library
- [] Update README.md

---

## Thanks for Reading...

---
