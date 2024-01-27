# My Fancy Accordion

This is a custom element that implements a collapsible content panel. It is built with [Lit](https://lit.dev/) and [TypeScript](https://www.typescriptlang.org/).

## Usage

To use this component, you need to import it in your HTML file:

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
myAccordion.numberPoint=2
></script>
```

### lit-html

```html
<my-fancy-accordion .title='My Accordion' ?open=false .numberpoint=3></my-fancy-accordion>
```


## Attributes && Properties

The attribute name is equivalent to the property name, but in lowercase.
The component accepts the following attributes:

| Name        | Description                                  | Type        | Default |
|-------------|----------------------------------------------|-------------|---------|
| open        | Toggling open/close of accordion panel       | boolean     | false   |
| toggledText | Middle text that is reactive and toggled     | string      | ''      |
| title       | Main title of the accordion button           | string      | ''      |
| numberPoint | Blue point that indicates number if not null | number/null | null    |

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
    --accordion-margin-bottom: 5rem
}
```

## Events

Uses general click event to open accordion button

## Accessibility

Supports selection by tab key and click event works on pressing Enter button

## License
This component is licensed under the MIT license.