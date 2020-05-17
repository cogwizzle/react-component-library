# C-137 React
C-137 React is a Rick and Morty inspired Sci-Fi component library.  It is specifically loosely based on the user interface seen in Rick's ship in the keep summer safe scene of the TV show.  Currently the existing version is a prototype and I will be elaborating more on some components and makig it a bit more like it was inside of the show.

## How to get started
Install the library using yarn or npm which ever is your favorite.

### Yarn
```sh
yarn add https://github.com/jfehrman/c-137-react.git
```

### NPM
```sh
npm i -P https://github.com/jfehrman/c-137-react.git
```

### Example
Below is an example of using the library.

```JSX
import React from 'react';
import { AppBar } from 'c-137-react';

const MyCustomHeader = (props) => (
  <AppBar><h1>{props.title}</h1></AppBar>
);

export MyCustomHeader;
```

## Components
Here is a list of the components.

* [App-Bar](./src/lib/app-bar/README.md)
* [Background](./src/lib/background/README.md)
* [Button](./src/lib/button/README.md)
* [Card](./src/lib/card/README.md)
* [Container](./src/lib/container/README.md)
* [Modal](./src/lib/modal/README.md)

## Demo
To see all of our components visit our [Storybook](// TODO put storybook link here)
