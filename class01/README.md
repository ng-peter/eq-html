# HTML - Class 01

## Getting Started Guides:

W3Schools:  
[HTML5 Tutorial](https://www.w3schools.com/html/default.asp)

Mozilla Developer Network:  
[Intro to HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)  
[Mozilla Dev Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)

---

## Developers’ Docs + Tags References:

[HTML - Mozilla Dev Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)

[Complete HTML elements reference - Mozilla Dev Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

[HTML Element Reference - W3Schools](https://www.w3schools.com/tags/default.asp)

---

## Recommended Free Code Editors:

[Visual Studio Code](https://code.visualstudio.com/)  
Recommended Plugins:  
[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
[Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)

[Atom](https://atom.io/)  
Recommended package:  
atom-live-server

[Brackets](http://brackets.io/)

---

## What is HTML?

![alt text](https://github.com/ng-peter/eq-html/raw/master/class01/html-css-js-stack.png "Modern Web Stack")

[MDN - Getting started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_element)

---

## Anatomy of an HTML element

![alt text](https://github.com/ng-peter/eq-html/raw/master/class01/grumpy-cat-small.png "HTML Tag Anatomy")

[MDN - Anatomy of an HTML element](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_element)

---

## `<TAGS>` and HTML Anatomy

We focused on understanding what tags are and what essential tags are required for an HTML page:

- `<!DOCTYPE html>` It is the shortest string of characters that counts as a valid doctype; that's all you really need to know.
- `<html></html>`: The `<html>` element. This element wraps all the content on the entire page, and is sometimes known as the root element.
- `<head></head>`: The `<head>` element. This element acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers. This includes things like keywords and a page description that you want to appear in search results, CSS to style our content, character set declarations, and more. You'll learn more about this in the next article in the series.
- `<meta charset="utf-8">`: This element sets the character set your document should use to UTF-8, which includes most characters from the vast majority of human written languages. Essentially it can now handle any textual content you might put on it. There is no reason not to set this, and it can help avoid some problems later.
- `<title></title>`: The `<title>` element. This sets the title of your page, which is the title that appears in the browser tab the page is loaded in, and is used to describe the page when you bookmark/favorite it.
- `<body></body>`: The `<body>` element. This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else.

[Getting Started - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)  
[HTML Intro - W3Schools](https://www.w3schools.com/html/html_intro.asp)

---

## Basic Page Example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```
