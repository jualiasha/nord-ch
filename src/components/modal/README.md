# My Modal

This is a custom element that implements modal. It is built with [Lit](https://lit.dev/) and [TypeScript](https://www.typescriptlang.org/).

## Features

- Built with dialog tag
- Supports outside click, key Escape and close icon for close
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
import { MyModal } from '/MyModal.js';
```

To use as defined Custom element:

```js
import '/my-modal.js';
```

Then you can use the <my-modal> tag in your HTML:

### html

 ```html
<my-modal>Content comes here
</my-modal>
```

### lit-html

```html
<my-modal @my-modal-close=${()=>console.log('modal closed')}> Content comes here</my-modal>
```


## Attributes && Properties

The attribute name is equivalent to the property name, but in lowercase.
The component accepts the following attributes:

| Name     | Description                                    | Type    | Default |
|----------|------------------------------------------------|---------|---------|
| open     | Toggling open/close of modal                   | boolean | false   |
| title    | Title/header of the modal                      | string  | ''   |


## CSS

### parts

| Name    | Description            |  
|---------|------------------------|
| dialog  | Part of the dialog tag |
| header  | Header/title part      |
| close   | close button part      |
| content | content (slot) part    |


```css
my-modal::part(dialog) {
  background-color: blue;
}
```

## Events

| Event            | Description              | Detail            |
|------------------|--------------------------|-------------------|
| my-modal-close	  | Emitted on close modal   |      |

## Accessibility

Supports selection by tab key and click event works on pressing Enter button
Dialog closes on pressing Escape button

## License
This component is licensed under the MIT license.