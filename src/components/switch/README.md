# My Fancy Switch

This is a custom element that implements a collapsible content panel. It is built with [Lit](https://lit.dev/) and [TypeScript](https://www.typescriptlang.org/).

## Usage

To use this component, you need to import it in your HTML file:

```html
<script type="module" src="my-switch.js"></script>
```

or use it in js:

To import component

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
mySwitch.badge=2
></script>
```

### lit-html

```html
<my-switch .title='My Accordion' ?open=false .badge=3></my-switch>
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
my-switch::part(accordion) {
  background-color: blue;
  color: white;
}

my-switch::part(panel) {
  background-color: yellow;
}

my-switch{
    --accordion-margin-bottom: 5rem;
}
```

## Events

Uses general click event to open accordion button

## Accessibility

Supports selection by tab key and click event works on pressing Enter button

## License
This component is licensed under the MIT license.