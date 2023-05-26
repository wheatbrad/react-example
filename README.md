# Learning React

At this point we've learned about and utilized 3 hooks; [useState](https://reactjs.org/docs/hooks-reference.html#usestate), [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect), and [useRef](https://reactjs.org/docs/hooks-reference.html#useref). We've also learned about reusable components and passing props. At current, our application has a top-level component dubbed `App` that renders and collects data from three instances of `LabeledTextInput`. Each instance of `LabeledTextInput` maintains it's own state. `App` collects state from each child component, serializes this data, and writes it to a text area.

## Homework
### Task
Create a button that allows the user to click and reset the state of the application.

### Expectation
When the button is clicked, `App` state is reset to an empty object literal and the `state` of each instance of `LabeledTextInput` is reset to empty string literal.