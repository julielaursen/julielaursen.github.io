# My Portfolio Website

## Project Overview

This portfolio is a collection of artifacts from my work in my UX/UI college program, marketing material for my non-profit volunteer work, description of my freelance services outlining my process in accessibility testing, usability testing and social media marketing, and a Javascript/HTML based copy of my resume.

## Table of Contents

- [Developer Portfolio Website](#developer-portfolio-website)
  - [Project Overview](#project-overview)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
  - [Continuous Integration](#continuous-integration)

## Technologies Used

- JavaScript
- HTML
- CSS

## Project Structure

```
portfolio-test-automation/
├── images/
├── portfolios/
│   ├── accessibility
|   ├── developer
|   ├── marketing
|   ├── UX/UI
├── node_modules
├── styles
├── blog
├── index.html
├── package.json
├── .gitignore
└── README.md
```

- `images/`: Contains image files used in portfolio
- `portfolios/`: Contains portfolios organized by role
- `node_modules`: The directory containing all the packages and dependencies for the project. It is automatically generated when you run `npm install`.
- `styles`: Contains CSS files that define the project's visual presentation
- `blog`: a collection of content including written work and videos
- `index.html`: the entry point for the website
- `package.json`: Defines project dependencies and scripts
- `.gitignore`: Specifies intentionally untracked files to ignore

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

## Running Tests

I have created E2E cypress tests within another repository to mock the way I might black box test a client webite: `https://github.com/julielaursen/portfolio-cypress-tests`

TBD on jest/unit tests

## Continuous Integration

This project is not set up for Continuous Integration yet
