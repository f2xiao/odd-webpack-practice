# odin-webpack-practice
webpack basic setup and how to bundle modules

## Why needs Webpack

1. introduction

  old-school way: 1 html with js files
  
2. adding 3rd-party library

  manually download and link files
  
3. using a package manager

  javascript package manager: npm
  
  download and update automatically, and easier to share code
  
4. installing npm

  npm init
  
5. importing javascript files

  `require` statement, but invlaid syntax in browser
  
6. using a module bundler

    build step (with access to file system): replace all require statements with the actual content of the code
    
    final result output: a single bundled js file which is browser compatible (no access to file system)
    
    inspired by: CommonJs and nodejs which has access to file system
    
7. configure webpack

    entry and output files
    
8. transpiling code

    new js features to old versions
    
    sourcemap
    
9. using a task runner


    automatically build the bundle with changes so no need to use command to do the build step
10.using a dev server

  
