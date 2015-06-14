var Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000

var browser = new Browser();

browser.visit('http://www.google.com', function() {
    console.log(browser.location.href);



  browser.fill('.stimulus', 'test');
    /*
  browser.pressButton('.sayitbutton', done);

  browser.wait().then(function() {
        console.log('Form submitted ok!');
        // the resulting page will be displayed in your default browser
        browser.viewInBrowser();
    })
*/
 });
