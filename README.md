# INTRO

I'll be creating a Rock Paper Scissors game via JavaScript, according to [The Odin Project assignment](https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors).

## Goals

- ~~console-only for the initial part of this project~~

## What I Did Well

- I kept my functions to a single purpose. `options()` randomizes computer's selection, `resultMessage()` logs a clarifying message after each round, `playRound()` does exactly that, and the parts in the `game()` function make sense (`round`, `computerScore`, `playerScore` seem like they should all be scoped to the game)

## What I Need To Improve

- My code isn't really DRY. Especially `playRound()` where I'm using `console.log(resultMessage()` invocations at every step. There's gotta be a better way.
- I hacked through this. I didn't pseudo-code ahead of time, so I spent a lot of time back-tracking and re-doing work.
