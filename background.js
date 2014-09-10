/**
 * Simple/Sweet way to say $.ready() open the main page and
 * show it to our users.
 *
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    "window.html",
    {
      id: "mainWindow"
    }
  );
});
