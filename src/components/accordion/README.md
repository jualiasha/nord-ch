# My Fancy Accordion

This is a custom element that implements a collapsible content panel. It is built with [Lit]() and [TypeScript]().

## Usage

To use this component, you need to import it in your HTML file:

```html
<script type="module" src="my-fancy-accordion.js"></script>
```
Then you can use the <my-fancy-accordion> tag in your HTML:

HTML
 ```html
<my-fancy-accordion title="My Accordion" open>
  This is some content inside the accordion.
</my-fancy-accordion>
```


## Attributes
The component accepts the following attributes:

title: The title of the accordion. Default value is “Accordion Title”.
open: A boolean attribute that indicates whether the accordion is open or closed. Default value is false.

## Styling
The component uses the following CSS classes:

.accordion: The class for the button that toggles the accordion state.
.panel: The class for the div that contains the content of the accordion.
You can override the default styles by using the ::part pseudo-element:

## CSS

```css
my-fancy-accordion::part(accordion) {
  background-color: blue;
  color: white;
}

my-fancy-accordion::part(panel) {
  background-color: yellow;
}
```

## License
This component is licensed under the MIT license.