# innerframe

Create your content inside a iframe, and sleep like a baby.

## Installation

```html
<script src="jquery.innerframe.js" type="text/javascript"></script>
```

## Usage

Get your blessed *element* and insert any content on it. Your content will be wrapped inside a iframe. 

```javascript
//freaking easy!!!!
$("#yourdiv").innerframe("<b>any content<\/b>" [, options])
```

And you can customize your **innerframe** \o/

```javascript
var options = 
  {
     width      : "100px"
    ,height     : "100px"
    ,style      : {}
    ,scrolling  : "no"
    ,frameborder: 0 
    ,name       : "" 
    ,seamless   : "seamless" 
    ,srcdoc     : "" 
  }
```


## Features

### `Fast, Easy and Reliable`

Never get caught with your pants down again with external contents. Within iframe these **dirty** codes can not destroy your beautiful work, ever.

### `Supports All Browsers`

Yes we are watching you IE!


## TODO

 - More Tests!
 - More IE.

## Running Tests

To run the test suite just open the ***```test/test.html```*** file at your browser

## Credits

This library was a crazy dream build by [Bruno Agutoli](https://github.com/agutoli);
and [Tcha-Tcho](https://github.com/tcha-tcho);

## License

(The MIT License)

Copyright (c) 2012 Bruno Agutoli &lt;brunotla1@gmail.com&gt;
Copyright (c) 2012 Tcha-Tcho &lt;tchatcho66@hotmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.