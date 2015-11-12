based on @robwormald angular2 starter plunkr

Visit the folder in web server of choice.

Running code at http://a-laughlin.github.io/angular2-flux-starter/


A simple demo of angular2 with redux:
- SystemJS + TypeScript compile on the fly (no need for grunt, gulp, etc)
- Includes binding, directives, and DI usage.
- It looks like Rob was making a partial redux implementation using rx.js
- Open questions
    - When/how can rxPipe.ts be removed (see note in the file)?
    - Why were both redux and rxjs necessary in the earlier example?
    - Why did Rob switch to using rxjs without redux?
    - Ohhh... angular2 actually includes rxjs, which is why importing @reactivex/rxjs/dist/cjs/Rx works even without rxjs, and why there are no network calls for the imports
    - I started including redux.js based on his earlier example at http://plnkr.co/edit/LBZ8gyWScPmAJVycmVuy?p=preview.  Check in Feb to see if anyone has implemented the redux api in angular2(assuming rxjs is still embedded).  It looks like Rob implemented the createStore part of redux with rx, but not the other parts yet.
    - Learn more about rxjs and redux in February/March
        + http://www.slideshare.net/nilspetersohn/redux-js
