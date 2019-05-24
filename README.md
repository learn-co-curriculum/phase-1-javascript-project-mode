# JavaScript Project Mode

- Introduction
- Objectives
- Requirements
- Strategy, Timeline, and Tips
- Example Projects

## Introduction

Welcome to JavaScript Project Mode!

You're going build a Single Page Application (**SPA**). Your frontend will be built with HTML, CSS, and JavaScript. Your frontend will communicate with a backend API that you'll build with Ruby and Rails. This is a really exciting moment - the whole course up until this point is coming together!

## Objectives

Building this application will be challenging because it will integrate everything you've learned up to this point. Your goals with this project:

- Design and architect features across frontend and backend
- Communicate and collaborate in a technical environment
- Integrate JavaScript and Rails
- Debug issues in small- to medium-sized projects
- Build and iterate on a project MVP

### Project Requirements

1. Must be a HTML/CSS/JS frontend with a Rails API backend. All interactions between the client and the server should be handled asynchronously (AJAX) and use JSON as the communication format.

2. Backend must render a resource with at least one has-many relationship. For example, if we were building Instagram, we might display a list of photos with associated comments.

3. The backend and frontend must collaborate to demonstrate Read, Create, and either Update or Delete for at least two of your models. The results of each action should be diplayed to the user without a page refresh.

## Strategy, Timeline, and Tips

### Planning

- Plan out your features
- Develop user stories
  - Features should not need you there to explain them to users
- Plan out your models

### Feedback

- Get feedback from instructors before you start to build
- Get feedback from your peers as you build each feature. This will help identify bugs and design improvements
- Get feedback on your code from instructors as you build

### MVP ASAP

- Build a Minimum Viable Product (MVP) as quickly as possible.
- Consider starting with a json-server implementation of your backend

### Build vertically, not horizontally

You can visualize all the parts you of an app you need to build as a grid, with the features along the x axis (columns) and the different layers of the stack along the y axis.

|                    | Sign in flow | Make a Post | Comment on posts | Like posts | Reblog Posts |
| ------------------ | ------------ | ----------- | ---------------- | ---------- | ------------ |
| Styling            |              |             |                  |            |              |
| View Logic         |              |             |                  |            |              |
| Data Fetching      |              |             |                  |            |              |
| Controller actions |              |             |                  |            |              |
| Seed Data          |              |             |                  |            |              |
| Models             |              |             |                  |            |              |
| Migrations         |              |             |                  |            |              |

A strong temptation is to order your project timeline row-by-row. Do not do this! If you try to build all your migrations, then all your models, then all your controllers, then all your fetch calls, then all your view logic, you will have a bad time. Inevitably, your view logic ends up requiring changes to the underlying layers, and you end up building models that never end up using. If you instead build all the **vertical layers** involved in **one feature** before moving on to the next feature, you'll minimize rewriting, and end up with working features without waste.

- Add feature by feature, not model by model or layer by layer.
- Test each feature, add styles, and create seed data as you go (not all at once at the end)

### Rough Timeline

* Day 1 - Idea, Project Pitches, first commit
* Day 2 - MVP, first feature working
* Day 3 - Additional features
* Day 4 - Final features, bugfixes, polish

### Project Pitches

Before you start working on your project, you'll pitch your project idea to your instructors for approval and feedback.

For your project pitch, you should include:

- The basic story of your application
- The core features of your MVP
- Your data models and their relationships
- Challenges you expect to face

### Instructor Guidance

You should strive to solve problems independently, but you also shouldn't waste your time stuck on a problem. A good guideline for a small bug is the rule of 10s:

- 10 minutes debugging the code
- 10 minutes using Google and Stackoverflow to try to find an answer
- 10 minutes asking your teammates or fellow students for help
- Asking an instructor

If you seek out instructor guidance on your design from the start, they might help steer you into design and architectural decisions that will help you down the road. That will also give the instructors context for what your app is supposed to do, so you won't need to explain everything to them when asking for help debugging.

### Tips for Working in Pairs

- Pair on the design
- Pair on the MVP
- If you split work between partners and work separately, split work feature by feature (**do not** have one partner do html and the other build the migrations)
- Check in with your partner every morning and afternoon
- Use git branches
- Review each other's code before merging it in (use the github PR feature)

### Guidelines for working Solo

Just because you don't have a partner doesn't mean you shouldn't work as a team! For you, it'll be a team of one. 

Having a partner usually forces you to have explicit conversations about the design of your application and the choices you make. Without a partner, you should still be very clear - and **write down** - the decisions you make about your project. This will not only help you think more clearly, it will also help you communicate your project to instructors when asking for help.

- Write down your ideas (use diagrams!)
- Get your MVP, models, and wireframes approved by instructors before you start coding
- Start by creating the frontend and backend directories
- Next, build the **R** from CRUD for just one model, *vertically!* That means one migration, one model, one controller action, one `fetch` call, and one DOM update. Add seed data and confirm that your code works by testing it visually.
- Then, build the next CRUD action (maybe Create or Update), again building **vertically**.
- Continue building features one by one, (*vertically!*)

Since you are solo, you should not expect to build as large of an application as groups working in pairs. That's fine! Check in with your instructors to make sure your scope and timeline are manageable.

### Users and Auth

Key point: **Do not build user authentication with passwords**

The way you learned to build user auth in Rails relied on the fact that Rails was sending small pieces of data (cookies/sessions) back and forth along with every request and response. In a SPA, we would need to use a different pattern. We'll look at patterns for dealing with auth in an SPA in the next module.

If your design involves a user model you mock the "sign up" and "sign in" features by providing a username and/or email without a password field.

## Past Projects

- Word guessing game [Noggle](https://jamesgraham320.github.io/noggle-app/)
- [Remixer](https://remixer-v2.firebaseapp.com/)
- [Bounce Game](http://bounce-123.s3-website-us-east-1.amazonaws.com/)
- [Nicholas Cage Inspired Minesweeper](http://ncage.s3-website-us-east-1.amazonaws.com/)
- [Keyboard Karaoke](https://keyboard-karaoke.herokuapp.com/)
- [Muzart](https://muzart.herokuapp.com/)
- [Beat Machine](https://beat-machine.com/)
- [Karaoke App (connects to bluetooth microphones)](https://youtubektvpalace.herokuapp.com/index.html)
- [Words With Nerds™](https://wordswithnerds.herokuapp.com/)
