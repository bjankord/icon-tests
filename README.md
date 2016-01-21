# icon-tests

This repo contains various test cases related to displaying icons.

The icons used for the test come from [Icomoon's free icon set](https://icomoon.io/#preview-free). This icon set includes 491 icons. I've decided to use Icomoon's free set as they offer an svg sprite of the icons along with font icons.

Contributions welcome, feel free to open an issue with your ideas.

## SVG Tests
### SVG Test 1
This test includes a svg sprite inline at the top of the body. SVG use xlink:href is used to point to symbols in the svg sprite.

### SVG Test 2
This test ajax loads an svg sprite into the top of the body. SVG use xlink:href is used to point to symbols in the svg sprite.

### SVG Test 3
This test ajax loads an svg sprite into the top of the body. There is a noscript element with the SVG sprite markup inside of it at the top of the body as well to ensure the icons work if JS is disabled. SVG use xlink:href is used to point to symbols in the svg sprite.

### SVG Test 4
This test loads an svg sprite into an object element the top of the body and then replaces the object with the SVG sprite. SVG use xlink:href is used to point to symbols in the svg sprite.

### SVG Test 5
This test uses an external use xlink:href used to point to symbols in the svg sprite.

====

## Font Tests
### Font Test 1
This test includes a loading the icons via webfont. The test CSS includes reference to ttf and woff fonts.
