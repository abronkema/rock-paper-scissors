# INTRO

I'll be creating a Rock Paper Scissors game via JavaScript, according to [The Odin Project assignment](https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors).

## Goals

- Create a simple UI version of the original rock-paper-scissors (console only) version.
- UI should be responsive (Flexbox)
- Game should end at 5 points or when player selects "reset"

## What I Did Well

- I continued to keep functions mostly single-task oriented. It felt most rewarding, once the function was written, to call it where I needed it and move it around when troubleshooting.
- The page is responsive, and no text overflows/overlaps on smaller screens (tested to iPhone X)
- Semantic markup, where possible. There's on `<div>` in a `<section>` I probably need to refine.

## What I Need To Improve

- Global scope seems unnecessarily polluted. `playerScore` and `computerScore` feel like they should be local.
- There's a lot of `innerHTML` and I should try to find another option for replacing an element's text.
- I feel like there should be a wrapping `game()` function that invokes all necessary functions and holds local variables to make a better/cleaner experience.
- It's ugly. The styling is boring. There's not color. There are some places I need to add headers (Player/Computer Score, etc).

## Pseudocode

- Round begins
- Player selects `playerSelection` button
- Player's choice is saved as `playerSelection`
- Computer's selection is randomly generated and saved as `computerSelection`
- `playerSelection` is compared to `computerSelection`
- Winner (or draw) is declared
- Message is shown in `resultsDisplaySection`
- `playerScore` or `computerScore` is incremented if not a draw
- `playerScore` and `computerScore` results are displayed in `resultsDisplaySection`
- Round ends
- If `playerScore` or `computerScore` is 5, the game is over
