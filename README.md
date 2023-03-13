# CircularGraph

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Stand Alone Component of a simple circular graph

This project is very simple. It's a standAlone Component wich means that you can copy the folder where the circular Graph component is. Paste it onto your Angular project , import it into a module and done.

You have a circular graph that you can pass an array of numbers and it will show you the representation in the graph.

And this component is an svg so it has transparency in his center unlike a canvas where you have no transparency in the middle.

This are the values you can pass

### [<span style="color:green">data</span>]: Array<number\>

This is the data that you want to represent in the graph, you can pass as many values as you want and it will calculate the percentage representation in th graph. Keep in mind that if you pass more than 6 values you need to pass an array of [<span style="color:lightgreen">c</span><span style="color:red">o</span><span style="color:yellow">l</span><span style="color:cyan">o</span><span style="color:pink">r</span><span style="color:orange">s</span>] with the same amount of values that you have passed.

### [<span style="color:green">colors</span>]: Array<string\>

By default it has an array with 6 colors, if you want to change the colors you need to pass an array of strings with the colors you want.

### [<span style="color:green">strokeWidth</span>]: number

By default the value of the stroke is 15px, you can change it.

### [<span style="color:green">heightAndWidth</span>]: number

By default it the width and the height is the 100% of the father container. And this is the expected behaivour, but if you want you can pass a value in px and set it manualy. But this will make the graph not responsive when the size of the window changes.
