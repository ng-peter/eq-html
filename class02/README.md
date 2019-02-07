# HTML - Class 02

## Lorem Ipsum

You will often see dummy texts used for templates or cms (content management systems) such as wordpress. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is still used in this modern digital age as a placeholder for help designing layouts.

```html
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget facilisis
odio. Sed ut pretium mauris, eu faucibus turpis. Donec placerat orci vulputate
nisi semper, in sodales metus tempus. Cras lobortis orci ac odio tempor, id
luctus odio maximus.
```

https://www.lipsum.com/

---

## HTML Formatting Elements

We talked about how we can use tags to help format elements within our page and also how some tags (are prefered over others to) give semantic meaning.

For example:

`<b>` and `<strong>`  
The HTML `<b>` element defines bold text, without any extra importance.  
The HTML `<strong>` element defines strong text, with added semantic "strong" importance.

`<i>` and `<em>`  
The HTML `<i>` element defines italic text, without any extra importance.  
The HTML `<em>` element defines emphasized text, with added semantic importance.

https://www.w3schools.com/html/html_formatting.asp  
https://www.w3schools.com/tags/tag_em.asp

---

## Quotes and Blockquotes

We saw how we can use `<q>` and `<blockquote>` tags to help us more specifically define quotes inside our content and help give define the content in a better way.

```html
<p>
  When Dave asks HAL to open the pod bay door, HAL answers:
  <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">
    I'm sorry, Dave. I'm afraid I can't do that.
  </q>
</p>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q  
https://www.w3schools.com/tags/tag_q.asp

```html
<blockquote cite="http://www.worldwildlife.org/who/index.html">
  For 50 years, WWF has been protecting the future of nature. The world's
  leading conservation organization, WWF works in 100 countries and is supported
  by 1.2 million members in the United States and close to 5 million globally.
</blockquote>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote  
https://www.w3schools.com/tags/tag_blockquote.asp

We started seeing how inside tags, we can have attributes to help give extra meaning or add additional features to the tag, in this case, the cite attribute helps specifies the source / URL of the quotation. While this is not directly visible to the user, it gives additional meaning for search engines to help index and map relationships between websites and help with SEO (Search Engine Optimization).

---

## `<abbr>`, the Abbreviation element

Another element we looked at that also had attributes was the `<abbr>`, the Abbreviation element.

```html
<p>
  You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
  <abbr title="HyperText Markup Language">HTML</abbr>.
</p>
```

While we saw that attributes sometimes do not do anything for the user, the
title attribute for `<abbr>` actually is visible when the tag is rendered by the browser (by default
with an underline and a tooltip when you hover your mouse over this element)

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr  
https://www.w3schools.com/tags/tag_abbr.asp

---

## Lists (ordered and unordered)

We looked at how we can have ordered `<ol>` and unordered `<ul>` lists and list items `<li>` that they contain Ordered list would be rendered with numbering and are often used for lists where ordering or steps are required. (In the following example, how to bake a cake)

```html
<ol>
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <li>Fill muffin tray 3/4 full.</li>
  <li>Bake for 20 minutes.</li>
</ol>
```

Unordered lists would be without numbering, just to list items that belong together.

```html
<ul>
  <li>Milk</li>
  <li>Cheese</li>
</ul>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol  
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul  
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li

https://www.w3schools.com/tags/tag_ol.asp  
https://www.w3schools.com/tags/tag_ul.asp  
https://www.w3schools.com/tags/tag_li.asp

---

## Nested Lists

```html
<ul>
  <li>Coffee</li>
  <li>
    Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```

We took a look at how to nest lists inside lists and how websites quite often use this method to organize menu items in a logical and nested manner (for dropdowns or expanding sections of a submenu).

Important to note, any lists within a list, should be nested within a list element `<li></li>` so the hierarchy is preserve properly. (In the example above, the two different kinds of teas belong to the tea category and if the list was not within the list item, it would not considered be ‘within’ the tea section)

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#Nesting_list  
https://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists_nested

---

## Removing the <head> tag with javascript

Sometimes it is useful to see the raw content of pages to see how they are structured, you can use this line of javascript code in the developer’s console to remove the `<head></head>` tag and thus remove any styling metadata that is applied to the page.
For Chrome - Press `Ctrl+Shift+J` (Windows / Linux) or `Cmd+Opt+J` (Mac) and the console will open, and you can enter (or copy / paste) this following line of code and press Enter.

```javascript
document.head.parentNode.removeChild(document.head);
```

https://developers.google.com/web/tools/chrome-devtools/console/

---

## Semantic Elements in HTML5 - Content Sectioning

We looked at how new HTML5 elements provide better means to help section our page content.

`<header>`

`<nav>`

`<main>`

`<section>`

`<aside>`

`<footer>`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning  
https://www.w3schools.com/html/html5_semantic_elements.asp

---

## Bonus round! Bookmarklets

The steps are pretty simple:
Copy the bookmarklet code
Create a new bookmark on your toolbar
Name it
Paste the copied code into the URL Field
Save and use it!

https://gist.github.com/carlosabalde/6139924#file-bookmarklet-js  
(you can click the “Raw” button on the right of the code window to just have the script open in plain text)

How to add a bookmarket:  
https://help.crossbrowsertesting.com/live-testing/getting-started/installing-the-bookmarklet/
