# My Switch

This is a custom element that implements on &off toggle. It is built with [Lit](https://lit.dev/) and [TypeScript](https://www.typescriptlang.org/).

## Features

- Supports three sizes: small, medium, and large
- Supports disabled and required states
- Emits custom events for focus, blur, and change
- Uses shadow DOM for style encapsulation

## Installation

To install this component, run the following command:

```
npm i my-switch
```

## Usage

To use this component, you need to import it in your file:

```html
<script type="module" src="my-switch.js"></script>
```

```js
import { Switch } from '/Switch.js';
```

To use as defined Custom element:

```js
import '/my-switch.js';
```

Then you can use the <my-switch> tag in your HTML:

### html

 ```html
<my-switch disabled>
</my-switch>
<script
const mySwitch = document.querySelector('my-switch')
mySwitch.addEventListener('my-switch-change', ()=>console.log(e.detail.checked))
></script>
```

### lit-html

```html
<my-switch @my-switch-change=${console.log(e.detail.checked)}></my-switch>
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

| Name                                | Description            | Default |
| ----------------------------------- |------------------------|---------|
| --my-switch-required-color         | Color of required star | darkred |

### parts

| Name   | Description                     |  
|--------|---------------------------------|
| toggle | Part of the main toggling field |
| label  | Round switcher                  |


```css
my-switch::part(toggle) {
  background-color: blue;
}

my-switch{
    --my-switch-required-color: lightyellow;
}
```

## Events

| Event             | Description              | Detail            |
|-------------------|--------------------------|-------------------|
| my-switch-focus	  | Emitted on focus         |      |
| my-switch-blur	   | Emitted on blur          |                 |
| my-switch-change	 | Emitted on toggle change | checked(:boolean) |

## Accessibility

Supports selection by tab key and click event works on pressing Enter button

## License
This component is licensed under the MIT license.