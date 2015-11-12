System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: './src',
    api: './api',
    redux:'/libs/redux.js', // from https://cdnjs.cloudflare.com/ajax/libs/redux/3.0.4/redux.js
    // 'rx.all':'/libs/rx.all.js', // from https://cdnjs.cloudflare.com/ajax/libs/rxjs/4.0.6/rx.all.js
    // ^^ unnecessary since angular2 includes rxjs
  },
  //packages defines our app package
  packages: {
    libs:{
      defaultExtension: 'js'
    },
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    }
  }
});
