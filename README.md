# Journey_to_learn_NODEJs

## Table of Content

-   [Cloning and running application](#cloning-and-running-application-💻)
-   [What Changed?](#what-changed❔🙋‍♀️)

Hello and Welcome to this repository! Glad to have you here.

The purpose of this repository is to document my progress in Learning Javascript.
I am currently being mentored by a friend Ebenezer, who gives me tasks to work on.
This repository would contain my attempts to the tasks he gives me.

## Updated README by Ebenezer.

## Cloning and running application 💻

> git clone https://github.com/E-Zbox/Journey_to_learn_NODEJs.git

On visual studio code, go to marketplace and download "Ritwick Dey Live Server" hold Alt L + Alt O key combination to launch live server and interact with the application

## What Changed❔🙋‍♀️

Let's walkthrough the chunk of code below 🚶‍♀️🚶‍♀️

#### ONE

In this snippet, the mouse position is defaulted to null

```javascript
var previousMousePos = { x: null, y: null };
```

#### TWO

On mouse move, the previousMousePos object is checked, if the value of x, y is null, it updates it to current mouse position. This shows the application just started or was just launched.

```javascript
document.addEventListener("mousemove", (e) => {
    let { screenX, screenY } = e;
    if (previousMousePos.x === null && previousMousePos.y === null) {
        previousMousePos = { x: screenX, y: screenY };
    }
```

#### THREE

If the change in mouse (x, y) position divided by 100 returns 0 that means there has been a 100px change in mouse (x, y) position.

```javascript
    else if ((previousMousePos.x - screenX) % 100 === 0) {
        previousMousePos.x = screenX;
    } else if ((previousMousePos.y - screenY) % 100 === 0) {
        previousMousePos.y = screenY;
    }
...
```

## Play around with the values using 50 in place of 100 😁🎉

## That will be all for now 😎🤷‍♂️
