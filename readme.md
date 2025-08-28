1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
        getElementById= Selects a single element by its unique "id".
        getElementsByClassName= Selects all elements with a given class.
        querySelector / querySelectorAll= Selects elements using any CSS selector.

2. How do you create and insert a new element into the DOM?
Answer:
        Using document.createElement() to create the element, set its content or attributes, and insert it into the DOM with methods like appendChild(), prepend(), or insertBefore()

3. What is Event Bubbling and how does it work?
Answer:
        Event Bubbling is a mechanism in the DOM where an event triggered on a child element propagates upward through its ancestors, all the way to the document root, unless explicitly stopped.

        Working Process:
                When an event (like click) occurs on a child element, it first runs the handlers on that element.
                Then the event bubbles up to its parent, grandparent, and so on, triggering any matching event handlers along the way.
                Stop this propagation using event.stopPropagation()


4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
        Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding separate listeners to multiple child elements. The parent listener handles events for its children using event bubbling.

        Why it’s useful:
                Reduces the number of event listeners, improving performance.
                Works for child elements added to the DOM after the listener is attached.
                Centralizes event handling in one place.


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
        preventDefault() stops the browser’s default action for an event, while stopPropagation() stops the event from bubbling up or capturing down the DOM tree.