# Search Bar Icon

- A basic magnifying glass icon with customizable color schemes
- When clicked it animates into a search bar
- Sets up a click listener for the enter key and fires a function that can be passed in with the typed value

API:

<table>
<th>Props</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
<tr><td>magnifyGlassBackground</td><td>String</td><td>White</td><td>This controls the color of the background of the magnifying class</td></tr>
<tr><td>magnifyGlassBorderColor</td><td>String</td><td>Black</td><td>This controls the color of the border of the Magnifying Glass</td></tr>
<tr><td>magnifyGlassHandleColor</td><td>String</td><td>Black</td><td>This controls the color of the Magnifying Glass handle</td></tr>
<tr><td>closeIconColor</td><td>String</td><td>Black</td><td>This controls the color of the close icon</td></tr>
<tr><td>searchClickHandler</td><td>Function</td><td>A function which console logs the search arg</td><td>A function which is called with the current search arg unless empty string</td></tr>
</table>
