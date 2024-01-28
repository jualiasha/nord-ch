# My Fancy Accordion

This is a custom element that implements a collapsible content panel. It is built with [Lit](https://lit.dev/) and [TypeScript](https://www.typescriptlang.org/).

## Features

- Inner content of the opened panel can be any and inserted as html inside the tag
- Supports tab key focus and opens/collapses on key Enter
- Uses click event
- Uses shoelace icon library (comes bundled with over 1,500 icons)
- Uses shadow DOM for style encapsulation

## Installation

To install this component, run the following command:

```
npm i my-fancy-accordion
```

## Usage

To use this component, you need to import it in your file:

```html
<script type="module" src="my-fancy-accordion.js"></script>
```

or use it in js:

To import component

```js
import { Accordion } from '/Accordion.js';
```

To use as defined Custom element:

```js
import '/my-fancy-accordion.js';
```

Then you can use the <my-fancy-accordion> tag in your HTML:

### html

 ```html
<my-fancy-accordion title = "My Accordion" open>
  This is some content inside the accordion.
</my-fancy-accordion>
<script
const myAccordion = document.querySelector('my-fancy-accordion')
myAccordion.badge=2
></script>
```

### lit-html

```html
<my-fancy-accordion .title='My Accordion' ?open=false .badge=3></my-fancy-accordion>
```


## Attributes && Properties

The attribute name is equivalent to the property name, but in lowercase.
The component accepts the following attributes:

| Name        | Description                                            | Type        | Default |
|-------------|--------------------------------------------------------|-------------|---------|
| open        | Toggling open/close of accordion panel                 | boolean     | false   |
| toggledText | Middle text that is reactive and toggled               | string      | ''      |
| title       | Main title of the accordion button                     | string      | ''      |
| badge | Blue point (badge) that indicates quantity if not null | number/null | null    |

## CSS

### variables

| Name                                | Description                          | Default |
| ----------------------------------- |--------------------------------------|---------|
| --accordion-margin-bottom         | Bottom margin of the accordion panel | 0       |

### parts

| Name      | Description                                                           |  
|-----------|-----------------------------------------------------------------------|
| accordion | Part of the main toggling button                                      |
| panel     | Collapsable panel of the accordion that allowes to insert custom HTML |


```css
my-fancy-accordion::part(accordion) {
  background-color: blue;
  color: white;
}

my-fancy-accordion::part(panel) {
  background-color: yellow;
}

my-fancy-accordion{
    --accordion-margin-bottom: 5rem;
}
```

## Events

Uses general click event to open accordion button

## Accessibility

Supports selection by tab key and click event works on pressing Enter button

## License
This component is licensed under the MIT license.