## [LINK TO WEBSITE](https://subtle-jelly-37f12b.netlify.app/). ##

Site is styled to fit 1920x1080px (27" screen) so will need to zoom out if on a smaller screen.
 
#### Initial assumptions

> "centralized systemt hat can be updated... they behave consistently and are easily updated/added to"
* Will use React. Because react is dynamic, I won't be directly putting information (such as text) into the html.
* Data will be hardcoded json. This can be later converted to a cms
* Have data in backend and push to frontend (express)

> "create a format for the configuration files"
* json file will need same data structure across both exhibits
* For now: have 2 seperate .jsx files (per exhibit) which could later be converted to one.

> "27” FHD touch screen"
* CSS can be less responsive as it will only be 16:9 ratio when physically in its space.
* 1080 x 1920 pixel screen

> redirecting after one minute:
* use onclick as the determiner of activity as it would be touchscreen. (this is instead of mouseover etc.)

other thoughts: <br />
* web performance less of a priority for now as pages only need to load once
* use hotspots -> html image mapping
* react router to navigate through pages
* express backend

#### updated thoughts after finishing: <br />
* Deleted the backend. The data can just be in the front as a backend is out of scope for now.
* Two seperate .jsx components are needed with two seperate css -> one for horizontal, one for vertical.
* html image mapping doesnt work in react. Needed react-img-mapper dependency which I dont know how to use yet. Unfortunately, I couldn't figure it out in time. The json should have the appropriate information for the image mapping. I have provided (unstyled) links to the other pages for you to navigate around easier
