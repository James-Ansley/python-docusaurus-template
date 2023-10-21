---
sidebar_position: 100
---

# Python Code Blocks

Markdown preformatted code blocks with the `python` language identifier are
automatically converted to runnable and editable code blocks thanks
to [react-py](https://github.com/elilambnz/react-py).
See the react-py repo and documentation for more info.

For example, in a Markdown docs file:

````
```python
print("Hello, World!")
```
````

Becomes:

```python
print("Hello, World!")
```

Play and reset buttons appear when hovering over the code windows.

Non-runnable preformatted python blocks can be included by using `py` as the
language identifier.

````
```py
print("Hello, World!")
```
````

Becomes:

```py
print("Hello, World!")
```

## Modifying the Default Code Editor / Runner

The `CodeEditor` component is located in `src/components/CodeEditor.js`.
This code editor uses font files located in `static/fonts` for the run and
reset buttons. Modifying this will alter all code editing windows.

Code windows are automatically inserted into documents by the modified
`CodeBlock` theme component located in `src/theme/CodeBlock/index.js`. This
is a good place to pass any global/default props to the `CodeEditor`
component – for example, globally setting the `showButtons` prop to have
play and reset buttons always visible.

The `PythonProvider` required by `react-py` is located in the `Root` theme
component in `src/theme/Root.js`. This is where lazy-loading or any other
global `react-py` settings can be set.

## Notes

If you intend to have several runnable code windows on a single page, it is
recommended to leave the react-py `lazy-loading` flag on. This means code
runner workers are only spawned when a code block is run. Without this, it
is likely several of the code windows will not work on weaker
browsers/computers.

## A Note on Usability

The default implementation of runnable and editable python code blocks on this
site is keyboard-navigable.

When navigating with the keyboard using <kbd>tab</kbd> or <kbd>shift +
tab</kbd>, code blocks can be focused, but do NOT capture tabs to indent code.
Tabs are only captured when the code block is either clicked on, or some other
key is used to interact with the code block (e.g. arrow keys, typing
characters) — at which point tabs and shift-tabs will indent and dedent the
code.
To go back to navigating the page, the escape key can be pressed — at which
point tabs will work as before.

Try it below:

### The First Code Block

```python
def main():
    print("Hello, Code Block 1!")
    
main()
```

### The second Code Block

```python
def main():
    print("Hello, Code Block 2!")
    
main()
```
