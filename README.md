## Bounty Creation Wizard – Frontend Assignment

A 3-step responsive wizard for creating a Bounty, built as part of the Varunastra Technologies Frontend Engineer assignment.
The application follows the provided Figma reference and includes state management, validation, reusable UI components, multi-step navigation, confirmation screen, and final JSON output.

## Live Demo

https://bounty-creator-wizard.vercel.app/

## Project Overview

This project implements a multi-step “Add Bounty” creation flow, guiding the user through:

Basic Details

Rewards & Timeline

Backer Information

Confirmation Screen

Final Payload Result Page

The app maintains persistent form data across steps, includes strong validation, and strictly follows the structure defined in the assignment.

## Features Implemented

1.  Fully functional 3-step wizard

2.  Sidebar navigation with step highlighting

3.  Top step progress tracker

4.  State persistence using React Context

5.  Form validation on each screen

6.  Reusable UI components (Inputs, Buttons, Toggles, Dropdowns)

7.  Conditional fields (Location, Impact Certificate, Backer block)

8.  SDG multi-select system

9.  Simulated API submission using setTimeout

10. Final JSON payload preview

11. Responsive layout

12. Clean UI following the Figma theme

## Tech Stack

Framework -> React + Vite <br>
Styling -> Tailwind CSS<br>
Routing -> React Router DOM<br>
State Management -> React Context API<br>
Deployment -> Vercel<br>
Language -> JavaScript<br>

## Project Structure

src/
├── assets/
│ └── react.svg
│
├── components/
│ └── ui/ # Reusable UI components
│ ├── Button.jsx # Reusable button component used in forms & navigation
│ ├── Checkbox.jsx # Checkbox component (used for SDGs selection)
│ ├── Input.jsx # Text/number input component
│ ├── RadioGroup.jsx # Radio button group (Digital/Physical mode)
│ ├── Select.jsx # Custom dropdown component
│ ├── Textarea.jsx # Textarea for descriptions and messages
│ └── Toggle.jsx # Switch/toggle (Impact Certificate, Backer toggle)
│
├── context/
│ └── BountyFormContext.jsx # Global state for the 3-step form using React Context API
│
├── layout/
│ ├── Sidebar.jsx # Left sidebar navigation (Basics, Rewards, Backer)
│ └── StepLayout.jsx # Shared layout wrapper for all steps (sidebar + header + buttons)
│
├── pages/ # All main step screens
│ ├── StepBasics.jsx # Step 1: Basic Details form
│ ├── RewardsStep.jsx # Step 2: Rewards & Timeline form
│ ├── StepBacker.jsx # Step 3: Backer Information form
│ ├── Confirmation.jsx # In-between confirmation screen
│ └── ResultPage.jsx # Final JSON preview page after submission
│
├── App.jsx # Main routes configuration (React Router)
├── main.jsx # App entry point
└── index.css # TailwindCSS + global styles

The project follows a modular and scalable folder structure.
All form-related screens are stored in /pages, shared UI components live inside /components/ui, and global state management is handled through React Context in /context.
The /layout folder contains reusable structural components such as the sidebar and multi-step layout wrapper.

## Setup & Installation

Run the following commands after cloning the repo:

# 1. Clone Repository

git clone https://github.com/shivangi-sati/bounty-creator-wizard.git

# 2. Install Dependencies

npm create vite@latest bounty-app<br>
npm install<br>
npm install react-router-dom<br>
npm install tailwindcss @tailwindcss/vite<br>

# 3. Start Development Server

cd bounty-app<br>
npm run dev<br>

Open:

http://localhost:5173

## Build & Deployment Instructions

This project is deployed using Vercel.<br>

Follow the steps below to deploy your project:<br>

Push Your Code to GitHub<br>
Make sure your full project is committed and pushed:<br>

git add .<br> git commit -m "Initial bounty-creator-wizard"<br> git push origin main<br>

Create a Vercel Account<br>
Go to: https://vercel.com/signup<br>

Login with GitHub.<br>

Import Your Repository<br>
Click "New Project"<br>

Select your GitHub repository<br>

Vercel will auto-detect Vite + React<br>

Configure Build Settings<br>
Vercel will automatically fill these, but ensure they match:<br>

Setting Value <br>Framework Preset Vite <br> Build Command<br> npm run build <br>Install Command <br> npm install Output Directory dist<br> 5. Environment Variables (Not Required)<br>

This project does not require additional env variables.<br>

Click “Deploy”<br>
Vercel will build your app and give you a live URL like:<br>

https://bounty-creator-wizard.vercel.app/<br>

## Assumptions & Notes<br>

No backend is required; submission is simulated via setTimeout.<br>

Bounty Description input is implemented using a standard HTML <textarea>.<br>

SDGs provided as a sample list (extendable).<br>

All validation rules strictly followed:<br>

1. Title max 40 characters<br>

2. Required fields must be filled<br>

3. Amount & Winners > 0<br>

4. Impact Certificate Brief required when toggle is ON<br>

5. Backer fields required when toggle is ON<br>

6. Responsiveness implemented based on Figma guidelines.<br>

## How to Navigate the App<br>

Sidebar allows backward navigation.<br>

Forward navigation is blocked until each step is valid.<br>

After final submit → Confirmation screen → JSON preview.<br>
