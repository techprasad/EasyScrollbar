# EasyScrollbar
In lengthy page user scrolls through multiple sections or paragraphs. This code helps to identify blocks in page and then convert them in draggable, floating menu. With which user can directly navigate to that section in page.

Below are the steps,
1. Define div tag with id scrollToMenu
2. Wrap all page content in div with id content
3. Note above two id should not part or child of each other. They are separate div tags which are at same level. Another thing is this menu is supported only for Dektop screens hence media query to target is already placed in index.css
4. To customize menu styles use index.css and #scrollToMenu
