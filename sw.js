console.log("SW startup");

this.onfetch = function(event) {
  console.log("Fetch event", event);
  console.log(".request", event.request);
  console.log(".respondWith", event.respondWith);
  console.log(".default", event.default);
};
