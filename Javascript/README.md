Welcome to this directory! 

This directory would host my learning on just pure javascript. Note I took Traversy Media's crashcourse on Javascript and also took FreeCodeCamp's.


I plan on  becoming a backend developer in some months time leveraging frameworks like NodeJs and ExpressJs. 

My friend, Ebenezer, is guiding on the journey by giving me tasks!


On my first ever task, which is on Document object Model by the way, I was asked to display the current location of the mouse pointer after it has moved 100px 
in either x or y direction. 

If you have a better way to solve this, kindly let me know! I didn't take DOM seriously though 🙃 as I plan to do strictly backend, well for now. 


Thank you!


## Ebenezer's Correction to task

## Table of Content

-   [Cloning and running application](#cloning-and-running-application-💻)
-   [What Changed?](#what-changed❔🙋‍♀️)


## Cloning and running application 💻

> git clone https://github.com/AjibolaMatthew1/Journey_to_learn_NODEJs.git

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

## That will be all for now 😎🤷‍♂️


## Latest addition by Jibola 

#### ONE

I changed the function to be able to allow some tolerance. The former code permits only exact 100px change. I added a +2 tolerance to make it flexibile.

```javascript
      else if ((delta_x % 100 >= 0 && delta_x > 100) && (delta_x % 100 <= 2)) {
        previousMousePos.x = screenX;
    } else if ((delta_y % 100 >= 0 && delta_y > 100) && (delta_y % 100 <= 2)) {
        previousMousePos.y = screenY;
    }

...
```

#### TWO 

The delta_x and delta_y variables are basically just to compute the changes. I also used the absolute value instead.

```javascript

    let delta_x = Math.abs(screenX - previousMousePos.x)
    let delta_y = Math.abs(previousMousePos.y - screenY)
...
```

## Thanks to @Z-box for assisting greatly on this task! A link to his page [Z-Box](https://github.com/E-Zbox)
