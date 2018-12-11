# Curology Coding Challenge

# Setup Instructions
    -  npm install
    -  Enter "npm start" on terminal to run webpack
    -  Open "index.html" inside folder 

# Challenges
A challenge I encountered was figuring out how to handle pagination. In the beginning, I looked into using react libraries that would handle it for me but after playing around with it for a bit, I decided that it was not what I wanted. From there, I decided to build my own simple pagination. I created a pagination component that takes in the total number of pages and render a set amount of pages that updates depending on the current page number. Each time a page number was clicked, I sent an API request to the movie api with the title and the page number.

# Design Decisions
When a user first loads into the website, I render a list of current popular movies. I did not want my users to load into a blank page that simply had the search form for movie titles.

# Future Improvment
With more time, I could render a show page when clicked for each movie that shows more information about the movie. I could also look into potentially caching my previous results because at the moment, the application is making an API request each time a user wants to change pages. The UI also needs some work but for this purpose of this assignment, I focused more on the core features of the application.