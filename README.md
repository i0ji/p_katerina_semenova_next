<h1>Reworked <a href="https://katerinasemenova.ru"> KaterinaSemenova</a> site using Next.JS, new libs, Turbopack</h1>

<h3>Table of contents:</h3>
1. Stack/libruary usage<br>
2. Commit short history descryption/progress<br>
3. Known issues<br>

<hr>
<h3> 1.</h3>
1.1 Next.JS, SASS, TS;<br>
1.2 Choose React-slick to implement slider: it has fade in/out, dots; <br>
1.3 Next 15^, React 19^ (small compatibility issue), React-dom 19^ (small compatibility issue), TS, SASS, slick-caroulse, react-slick, react-loading-skeleton
<br>
<hr>
<h3> 2.</h3>
<b>v: 0.0.1 / d: 29.10.24</b> <br>    
project/repo init, git-flow init, first commit,
<br>
<b>v: 0.0.1 / d: 30.10.24</b> <br>    
The basic structure, layout and styles are copied from the original app, adapted to use Next.JS;
Implement scroll, add new styles: mixins and link underline animation;
Still have issue with SASS -> Migration;
<br>  
<b>v: 0.0.1 / d: 04.11.24<br></b> 
MySQL connecting attempts;    <br>
<b>v: 0.0.1a / d: 12.11.24<br></b> 
While I have some problems with connecting to the DB, I decided to make a static, local resource storage as it was before;
<br>Add react-slick lib to implement carousel;
<br>
<b>v: 0.1.0 a / d: 20.11.24<br></b> 
Setteled on the choice of react-slick lib to implement slider;
Setting styles and small logic touches;
<br><b>v: 0.1.5 a / d: 21.11.24<br></b> 
Start GH Action settings and met some deploy issues with paths;
After about <b>56(!SIC)</b> deploys found out how to set next.conifg+nextjs.yml for deploying static app;
I have working styles and logic, although some features like fonts and library styles don't work as well;
<br><b>v: 0.1.5 a / d: 10.12.24<br></b> 
Add 'scroll to top' button when rich lowest contacts block;
Multiple style and logic touches;<br>
<b>v: 0.1.6 a / d: 11.12.24<br></b> 
Set up font and favico paths using metadata object in layout.tsx;<br>
<b>v: 0.2.0 / d: 12.12.24<br></b> 
Start skeleton loading implementation;
<b>v: 0.2.0 / d: 17.12.24<br></b> 
Trying to add Yandex.Metrika script into <Head><br>
Get rid of font path issues by taking lib *.css files into component and adding them only where they should be<br>
Add Yandex.Metrika script into build index.html. Automatisation to go.
Next won`t build up with script errors. <br>
<b>v: 0.2.1 / d: 18.12.24<br></b> 
Scroll button customizing: change arrow type and add timeout to display, but refused to implement in prod.<br>
Got an issue with SSR/Client render and build diffs; Solved it by adding a `window` type check

<br>
<hr>
<h3> 3.</h3>
[X] Still have trouble with build/dev paths and aliases; Still have to change it manually when deploy to Pages or to prod;<br>
[X] New one: missing react-slick lib fonts, which i do not use at all///Get rid of console warning by removing Slick font-face settings from final output build. Still have to find the solution;<br>
[X] Yandex.Analytics<br>
[&nbsp;&nbsp;] Implement DB with phpAdminPanel - to go<br>
[&nbsp;&nbsp;] Skeleton loading - still can`t figure out if it works correctly or not - to go<br>
