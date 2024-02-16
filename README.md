Weather App Workshop

# Based on Ironhack Weather App

---

My experience:
It was a very useful experience. I didn't understand everything, but I understood so much more than before my bootcamp.
The part with the template at the end is really nice.
At first we added individual parts manually, but later we were able to change everything at the same moment with the template.

---

I get this Error: "ReferenceError: navigator is not defined"

->"navigator.geolocation.getCurrentPosition(success, error);

Now I know:
The error "ReferenceError: navigator is not defined" occurs when JavaScript code attempts to use the navigator object in a Node.js module context. The navigator object is defined specifically for the browser and not for Node.js.

To use browser-based functions such as navigator.geolocation.getCurrentPosition(), the code must be executed in a browser environment. Node.js does not provide support for browser APIs.
To ensure that functions work correctly, the JavaScript code should be tested in a browser by opening the corresponding HTML file. This ensures that the application works as expected and that browser-based functions are used correctly.

Following information from Ironhack:

- We will be using the [Open Meteo API](https://open-meteo.com/) during the workshop, as we won't need an API key and we can grab the informations passing some parameters to the URL.

- To work with the URL params in an easier way we'll use the [URLSearchParams()](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams).

- To request the information to the API we'll use the browser native solution the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

- We'll take the use location also using the native solution [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

- We also use the namespace [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) to work with the dates and hours.

- We'll use [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) for the most of the layouts.

- Lastly we'll manipulate what is shown to the user through [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) manipulation.
