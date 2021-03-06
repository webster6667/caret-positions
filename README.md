<p align="center" style="text-align:center">
    <img src="./illustration.svg" alt="illustration" width="200"/>
</p>

# caret-positions

> micro lib for control caret

[![npm version](https://badge.fury.io/js/caret-positions.svg)](https://www.npmjs.com/package/caret-positions)
[![](https://data.jsdelivr.com/v1/package/npm/caret-positions/badge)](https://www.jsdelivr.com/package/npm/caret-positions)


## Table of Contents

- [Quick start](#quick-start)
  - [Install](#install)
  - [Initialization](#initialization)
- [Methods](#methods)
  - [setFormElementCaretPosition](#setFormElementCaretPosition)

## Quick start

### Install

We support all platforms.

#### npm

For module bundlers such as Webpack or Browserify.

```shell
npm i caret-positions
```

#### Include with &lt;script&gt;

1. <a href="https://cdn.jsdelivr.net/npm/caret-positions/dist/lib/caret-positions.js" target="_blank">Download lib</a>
2. Add script to html

```html
<script src="caret-positions.js"></script>
```

##### CDN

Recommended for learning purposes, you can use the latest version:

```html
<script src="https://cdn.jsdelivr.net/npm/caret-positions/dist/lib/caret-positions.js"></script>
```

Recommended for production for avoiding unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/caret-positions@0.0.0/dist/lib/caret-positions.js"></script>
```

### Initialization

#### ES6

caret-positions as an ES6 module.

```js
import { setFormElementCaretPosition } from 'caret-positions';


const $input = document.querySelector('input'),
      symbolNumberAfterWhichPutCaret = 1

      $input.onfocus = (e) => {
        const target = e.target
        caretPosition.setFormElementCaretPosition(target, symbolNumberAfterWhichPutCaret)
      }
```

#### Browser

Exports a global variable called `caretPosition`. Use it like this

Connect to html file ```<script src="https://cdn.jsdelivr.net/npm/caret-positions/dist/lib/caret-positions.js" ></script>```

```html
<script>
    const $input = document.querySelector('input'),
          symbolNumberAfterWhichPutCaret = 1

    $input.onfocus = (e) => {
        const target = e.target
        caretPosition.setFormElementCaretPosition(target, symbolNumberAfterWhichPutCaret)
    }
</script>
```

#### AMD

caret-positions as an AMD module. Use with Require.js, System.js, and so on.

1. <a href="https://cdn.jsdelivr.net/npm/caret-positions/dist/lib/caret-positions.js" target="_blank">Download lib</a>
2. Connect to your module loader

```js
requirejs(['caret-positions'], function(caretPosition) {

    const $input = document.querySelector('input'),
    symbolNumberAfterWhichPutCaret = 1

    $input.onfocus = (e) => {
        const target = e.target
        caretPosition.setFormElementCaretPosition(target, symbolNumberAfterWhichPutCaret)
    }

});
```

## Methods

### setFormElementCaretPosition

set caret position on form element like input or textarea


#### Params
- `formElement`
  - Type: `HTMLInputElement,HTMLTextAreaElement`
  
- `symbolNumberAfterWhichPutCaret`
  - Type: `number`
  


#### Example
```JS
const $input = document.querySelector('input'),
      symbolNumberAfterWhichPutCaret = 1

$input.onfocus = (e) => {
    const target = e.target
    caretPosition.setFormElementCaretPosition(target, symbolNumberAfterWhichPutCaret)
}
```



## Author

webster6667
