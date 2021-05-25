# Bingeflix

Bingeflix is a place to discover & save all your binge-worthy Movies and TV Shows!

## Tech Specs:
#### Frontend Specifications
* Angular 10
* Bootstrap 4
* HTML5

#### Backend Specifications
* Node.js v14.16.0
* Express.js (@4.17.1)


## Routes 

### Home (/ or /home)

> The homepage showing a list of currently highest rated, trending and popular Movies and TV shows.

#### Special components:
1) Continue Watching
Includes a "Continue Watching" section that maintains a list of 24 most recently visited media (FIFO style)

2) Search 
The search is implemented using ngbtypeahead that calls the backend with the keywords entered by the user to return a list of autocomplete suggestions


#### Screens:


### Watch (/watch/tv/.. and /watch/movie/..)

> Details for the selected media (Movie or TV show) that displays the following details:
> * Tagline, Original Airdate, Average rating, Runtime, Genre & languages
> * Embedded Trailer/Teaser Video (from youtube) 
> * Description of the plot
> * Share buttons (facebook and twitter)
> * Cast and Crew Cards
> * Reviews
> * Recommended and Similar Media

#### Screens:

### MyList (/mylist)

> User list containing all saved media implemented using localStorage from HTML5

#### Screens:




