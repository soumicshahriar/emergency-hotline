[Visit Google](https://soumicshahriar.github.io/emergency-hotline/)


### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **`getElementById("id")`**

  - Selects **one element** by it's `id`.
  - Returns a single element object or `null` if not found the element.
  - Fastest method because IDs are Unique.

- **`getElementsByClassName("class")`**

  - Selects **all element** with a given class.
  - Return an **HTMLCollection**.
  - We must loop through it to access the individual elements.

- **`querySelector("selector")`**

  - Selects the **first element** matching a **CSS selector**.
  - Can target by id (`#id`), class (`.class`), tag (`div`), or combined selectors (`div.class`).

- **`querySelectorAll("selector")`**
  - Selects **all elements** matching a **CSS selector**.
  - Returns a **static NodeList** (not live).
  - You can use `forEach` directly on it.

### 2. How do you create and insert a new element into the DOM?

1. **Create the element** using `document.createElement(tagName)`.
2. **Add content or attributes** using `element.textContent` or `element.innerHTML`.
3. **Insert into the DOM** using methods like:

   - `parent.appendChild(newElement)`
   - `parent.append(newElement)` _(can append text or elements)_

### 3. What is Event Bubbling and how does it work?

- **Event Bubbling** is the process where an event starts at the target element and then propagates upward through its parent elements in the DOM.
- By default, most events in JavaScript bubble.
- Example: clicking on a button inside a `<div>` will first trigger the button’s event, then the `<div>`'s event, and so on up to document.

### 4. What is Event Delegation in JavaScript? Why is it useful?

- **Event Delegation** is attaching one event listener to a parent element instead of adding listeners to each child.
- It works because of **event bubbling** — the event reaches the parent, and you can check which child triggered it using event.target.

  **Benefits:**

  - Fewer event listeners → better performance.
  - Automatically handles dynamically added elements.
  - Cleaner and more maintainable code.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**preventDefault():**

    - Stops the default browser action of an event.
    - xample: prevent a form from submitting or a link from navigating.

**stopPropagation():**

    - Stops the event from bubbling up to parent elements.
    - The event still works on the target element but does not propagate further.
