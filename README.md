[LINK TO WEBSITE](https://subtle-jelly-37f12b.netlify.app/). deployment still in progress
 
Initial assumptions

"centralized systemt hat can be updated... they behave consistently and are easily updated/added to"
React app. so the data isnt coded into the html but rather dynamic. and template-like. 
data will be hardcoded json -  later can be converted to a cms
start with backend and push json data to frontend

"create a format for the configuration files"
json file will need same data structure across both exhibits
for now have 2 seperate .jsx files (per exhibit) which could possibly be converted to one

"27” FHD touch screen"
get away with having it less responsive in css cause it will only be 1920x1080 when actually in its space.
So it will need to be viewed with a 16:9 ratio

redirecting after one minute:
use onclick as the determiner of activity as it would be touchscreen. (this is instead of mouseover etc.)

web performance less of a priority cause pages only need to load once
hotspots-html image mapping
use react router i reckon

updated thoughts after finishing: 
back end DELETED cause the data can just be in the front end which in retrospect makes more sense
need having 2 seperate .jsx components and css, one for horizontal, one for vertical
html image mapping doesnt work and need react-img-mapper dependency which i dont knw how to use yet, unfortunately i couldn't figure it out in time. The json should have the appropriate information for the image mapping
