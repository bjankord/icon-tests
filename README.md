# icon-tests

This repo contains various test cases related to displaying icons.

The icons used for the test come from [Icomoon's free icon set](https://icomoon.io/#preview-free). This icon set includes 491 icons. I've decided to use Icomoon's free set as they offer an svg sprite of the icons along with font icons.

Contributions welcome, feel free to open an issue with your ideas.

## SVG Tests
### SVG Test 1
* Inline svg sprite at top of body
* SVG use xlink:href point to symbols in the svg sprite

### SVG Test 2
* Inline script at end of the body to ajax load inline svg sprite at top of body
* SVG use xlink:href point to symbols in the svg sprite

### SVG Test 3
* Inline script at end of the body to ajax load inline svg sprite at top of body
* SVG use xlink:href point to symbols in the svg sprite
* Noscript element with the SVG sprite markup inside of it (handles no-js case)
* SVG use xlink:href point to symbols in the svg sprite


### SVG Test 4
* SVG sprite loaded in object element at top of body
* Inline script at end of the body to replace the object with the SVG sprite
* SVG use xlink:href point to symbols in the svg sprite

### SVG Test 5
* External use xlink:href
* SVG use xlink:href point to symbols in the svg sprite

### SVG Test 6
* Inline script in the head to ajax load inline svg sprite at top of body
* SVG use xlink:href point to symbols in the svg sprite
* Noscript element with the SVG sprite markup inside of it (handles no-js case)
* SVG use xlink:href point to symbols in the svg sprite
(Same as test 3, though inline script has been moved to the head)

### SVG Test 7
* Inline script in the head to add a script tag to ajax the sprite into the head
* SVG use xlink:href point to symbols in the svg sprite
* Noscript element with the SVG sprite markup inside of it (handles no-js case)
* SVG use xlink:href point to symbols in the svg sprite
(Same as test 7, though inline JS adds a script tag to load in the ajax JS rather than include the ajax in the inline script block)

### SVG Test 8
* Inline every SVG

### SVG Test 9
* External use svg sprite
* SVG4Everybody.js polyfill

### SVG Test 10
* External use svg sprite
* svgxuse.js polyfill

====

## Font Tests
### Font Test 1
This test includes a loading the icons via webfont. The test CSS includes reference to ttf and woff fonts.




