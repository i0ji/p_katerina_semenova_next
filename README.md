<h1>Reworked <a href="https://katerinasemenova.ru"> KaterinaSemenova</a> site using Next.JS, new libs, Turbopack</h1>

<h3>Table of contents:</h3>
1. Stack/libruary usage<br>
2. Commit short history description/progress<br>
3. Known issues
<hr>

<!-- <h3>Table of contents:</h3>
- [1. Stack/library usage](#stack-library-usage)
- [2. Commit short history description/progress](#commit-history)
- [3. Known issues](#known-issues)
<hr> -->

<br>
<h3> ## 1. Stack/libruary usage:</h3>
1.1 Next.JS, SASS, TS;<br>
1.2 Choose React-slick to implement slider: it has fade in/out, dots; <br>
1.3 Next 15^, React 19^ (small compatibility issue), React-dom 19^ (small compatibility issue), TS, SASS, slick-carousel, react-slick, react-loading-skeleton, react-accessible-accordion, react-yandex-metrika<br>
1.4 UUID for unqiue array IDs
<br>
<br>
<h3> ## 2. Commit short history description/progress:</h3>
<ul><li><b>v: 0.0.1 / d: 29.10.24</b> <br>    
project/repo init, git-flow init, first commit,</li>
<li><b>v: 0.0.1 / d: 30.10.24</b> <br>    
The basic structure, layout and styles are copied from the original app, adapted to use Next.JS;<br>
Implement scroll, add new styles: mixins and link underline animation;
Still have issue with SASS -> Migration;</li>
<li><b>v: 0.0.1 / d: 04.11.24<br></b> 
MySQL connecting attempts;    <br></li>
<li><b>v: 0.0.1a / d: 12.11.24<br></b> 
While I have some problems with connecting to the DB, I decided to make a static, local resource storage as it was before;<br>Add react-slick lib to implement carousel;</li>
<li><b>v: 0.1.0 a / d: 20.11.24<br></b> 
Setteled on the choice of react-slick lib to implement slider;<br>
Setting styles and small logic touches;</li>
<li><b>v: 0.1.5 a / d: 21.11.24<br></b> 
Start GH Action settings and met some deploy issues with paths;
After about <b>56(!SIC)</b> deploys found out how to set next.conifg+nextjs.yml for deploying static app;
I have working styles and logic, although some features like fonts and library styles don't work as well;<br>
Decided to use another lib - Swiper;<br>
Styling in progress; I am almost satisfied with everything;</li>
<li><b>v: 0.1.5 a / d: 10.12.24<br></b>
Add 'scroll to top' button when rich lowest contacts block;
Multiple style and logic touches;<br></li></li>
<li><b>v: 0.1.6 a / d: 11.12.24<br></b>
Set up font and favico paths using metadata object in layout.tsx;<br></li>
<li><b>v: 0.2.0 / d: 12.12.24<br></b>
Start skeleton loading implementation;</li>
<li><b>v: 0.2.0 / d: 17.12.24<br></b>
Trying to add Yandex.Metrika script into<br>
Get rid of font path issues by taking lib \*.css files into component and adding them only where they should be;<br>
Add Yandex.Metrika script into build index.html. Automatisation to go.
Next won`t build up with script errors. <br></li>
<li><b>v: 0.2.1 / d: 18.12.24<br></b> 
Scroll button customizing: change arrow type and add timeout to display, but refused to implement in prod.<br>
Got an issue with SSR/Client render and build diffs; Solved it by adding a `window` type check<br></li>
<li><b>v: 0.2.2a / d: 24.12.24<br></b> 
After multiple attempts to use different slider and carousel libs I`m testing react-multi-carousel;</li>
<li><b>v: 0.3.0 / d: 27.12.24<br></b>
After trying to modify the Slide library multiple times, I decided to go with React-Slick as it covers all my/the designer's implementation requirements;<br>
Implemented accordion react-accessible-accordion lib => testing;<br>
Faced some difficultes trying to insert Yandex-Metrika script inside the < HEAD >, so i used react-yandex-metrika lib with separate component, wich implements Yandex script;</li>
<li>   <b>v: 0.3.0 / d: 14.01.25<br></b>
Multiple libs update: react/dom/sass/eslint/next/pnpm;<br>
Small image id refactor (should I use UUID?)</li>
<li>   <b>v: 0.3.1 / d: 15.01.25<br></b>
   Start making slide description; Multiple attepmts; <br>Face an issue with paragraph height. Non of parents have certain height in PX;</li>
<li> <b>v: 0.3.2 / d: 16.01.25<br></b>
   Make dynamically changing height based on <Image> height;<br>
   Change my SCSS mixin flex forumla;<br>
      Font size issue to go;</li>
<li> <b>v: 0.3.2 / d: 20.01.25<br></b>
 Package updates;<br>
Font issues resolved;<br> Continue skeleton loading setting;</li>
<li> <b>v: 0.3.2 / d: 28.01.25<br></b>
 Restore <b>develop</b> branch to main view: w/o accordion, skeleton and descriptions;<br>
 Add conditional render to remove dev issues;<br></li>
<li>    <b>v: 0.3.3 / d: 04.02.25<br></b>
 moved away from the idea of ​​a slider with a description, switched to Skeleton implementation;</li>
<li>
    <b>v: 0.3.3a / d: 05.02.25<br></b>
 Add UUID lib for unique ids<br>
 Finnaly found some new Splide-lib to implement carousel/swiper w/o focus issues like it was in the Slick-slider;</li>

<li><b>v: 0.3.3a / d: 06.02.25<br></b> Pagination dots set via scss selector magic!
 SASS^<br></li>
<li> <b>v: 0.3.3a / d: 07.02.25<br></b>
 Add typeRoots setting to tsconfig<br>
    </li>
<li><b>v: 0.3.3b / d: 10.02.25<br></b>
    1.Multiple libs: keen, nuka, slick, embla, alice, response carousel and others were tested;
    Now: Flickity; eslint^
pnpm^<br></li>
<li>  <b>v: 0.3.3.11 / d: 11.02.25<br></b>
 I decided to assign versions based on the number of carousel/slider variations; So 11 will stand for 11 lib - AwesomeSlider. For some reason and due to unsuitable implementation, none of the recent libraries suited my needs;<br></li>
<li> <b>v: 0.3.3.11 / d: 12.02.25<br></b>
 Package updates, pnpm update;<br>
 Cleared package.json from multiple libs;<br>
 Package updates, pnpm update;<br></li>
<li><b>v: 0.3.4 / d: 26.02.25</b><br>
Return to react-slick and decided to fix this slider console issues;</li>   
<li><b>v: 0.3.4 / d: 10.03.25</b><br>
Update packages;
</ul>

<br>
<h3> ## 3.  Known issues:</h3>
[X] <del>Still have trouble with build/dev paths and aliases; Still have to change it manually when deploy to Pages or to prod;</del><br>
<b>UPD: multiple path attempts and setting changings</b><br>
<del>[X] New one: missing react-slick lib fonts, which i do not use at all. Get rid of console warning by removing Slick font-face settings from final output build. Still have to find the solution;</del><br>
<b>UPD: moved slick styles to component folder and get rid of unused classes</b><br>
<del>[X] Yandex.Analytics - UPD: have an integration issue; For now do not know where to put in in the dev version; I just put the script into the final bundle;</del><br>
<b>UPD: use lib to add Metrika;</b><br>
[&nbsp;&nbsp;] Non typed YM script<br>
[&nbsp;&nbsp;] Implement DB with phpAdminPanel - to go;<br>
[&nbsp;&nbsp;] Skeleton loading - still can`t figure out if it works correctly or not<br> <strong>UPD: NOW TESTINGS</strong>;<br>
