health-dashboard-app
====================

This is a demo app only. It's for Medfusion's "Simple Health Dashboard" challenge.


Setup and Launch
----------------

These steps assume NodeJS is already set up, with Bower installed globally. You can also just put index.html in the root of
any webserver.

1. `npm install`
2. `node server/server.js`


Notes
-----

This uses AngularJS, which I'm admittedly not as familiar with compared to some other libraries.
All relevant code is under `public/health-dashboard-app`.

There's just enough interactivity for a minimal demonstration: the health score's components have a simple toggle, and
the walking/jogging/running distances are live-bound to their sum, which changes the panel's appearance if the total
falls below 10km.

Mostly due to time, but also because I didn't want to get too risky, this code takes a naive/simplistic approach to
several rather important things: data is hardcoded in controllers instead of using a Service, markup and classes are
duplicated when it would probably be better to transclude them, etc.
