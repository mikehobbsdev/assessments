# Mars Rovers

#### Author

Mike Hobbs

## Description

This is a node script that handles the 'Mars Rovers' technical assessment.

The top-level script is rove.js (receiving user input, initializing Mars and deploying rovers as user input comes in). I've created a class for Mars itself (managing the borders of the terrain, as well as deploying new rovers / describing their status), and a class for a Rover itself (managing the position and heading of an individual rover, as well as handling rover commands), to take advantage of object-oriented programming and make the top-level script a short 30 lines.

I added unit tests (runnable via jest, see below) for both classes with fairly complete test cases (positive and negative).

Some design decisions I've made for this project:
* Validating inputs (commands, positions, etc.) and using default values / no-ops instead of throwing errors and failing completely on invalid input
    * This can be easily changed by just throwing an error in the code blocks of the ifs inside of both constructors
* Rovers phase through each other and do not block movement
    * This can be changed fairly easy by modifying Rover.js to keep track of where all other rovers are and checking to make sure the new spot to move to isn't on top of an already-existing rover (or keeping a 2-dimensional representation of the map within Mars.js, and asking Mars if a spot is empty or not)
* Rovers can be deployed on the same tile as another rover
    * This doesn't have a quick-and-easy solution, if it needs to change. Does the script just fail? Does the script try to find an adjacent spot that's empty and launch the rover anyways (and what if there are no more empty spots 'nearby', or anywhere at all?) 

## How To Run

From the base directory:

    nvm use         // Swap to node 16.15.0
    npm i           // Install modules
    npx jest        // Run unit tests, 2 suites pass
    node rove.js    // Run the script itself
