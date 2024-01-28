# My Modal

This is a custom element that implements on &off toggle. It is built with [Lit](https://lit.dev/) and [TypeScript](https://www.typescriptlang.org/).

## Features

- Supports three sizes: small, medium, and large
- Supports disabled and required states
- Emits custom events for focus, blur, and change
- Uses shadow DOM for style encapsulation

## Installation

To install this component, run the following command:

```
npm i my-modal
```

## Usage

To use this component, you need to import it in your file:

```html
<script type="module" src="my-modal.js"></script>
```

```js
import { Switch } from '/Switch.js';
```

To use as defined Custom element:

```js
import '/my-modal.js';
```

Then you can use the <my-modal> tag in your HTML:

### html

 ```html
<my-modal disabled>
</my-modal>
<script
const mySwitch = document.querySelector('my-modal')
mySwitch.addEventListener('my-modal-change', ()=>console.log(e.detail.checked))
></script>
```

### lit-html

```html
<my-modal @my-modal-change=${console.log(e.detail.checked)}></my-modal>
```


## Attributes && Properties

The attribute name is equivalent to the property name, but in lowercase.
The component accepts the following attributes:

| Name     | Description                                    | Type    | Default |
|----------|------------------------------------------------|---------|---------|
| checked  | Toggling on/off of the switch                  | boolean | false   |
| disabled | Whether the switch is disabled or not          | boolean | false   |
| required | Whether the switch is required or not          | boolean | false   |
| size     | The size of the switch: small / medium / large | string  | medium  |

## CSS

### variables

| Name                      | Description            | Default |
|---------------------------|------------------------|---------|
| --my-modal-required-color | Color of required star | darkred |

### parts

| Name   | Description                     |  
|--------|---------------------------------|
| toggle | Part of the main toggling field |
| label  | Round switcher                  |


```css
my-modal::part(toggle) {
  background-color: blue;
}

my-modal{
    --my-modal-required-color: lightyellow;
}
```

## Events

| Event            | Description              | Detail            |
|------------------|--------------------------|-------------------|
| my-modal-focus	  | Emitted on focus         |      |
| my-modal-blur	   | Emitted on blur          |                 |
| my-modal-change	 | Emitted on toggle change | checked(:boolean) |

## Accessibility

Supports selection by tab key and click event works on pressing Enter button

## License
This component is licensed under the MIT license.