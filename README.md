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

Framework -> React + Vite
Styling -> Tailwind CSS
Routing -> React Router DOM
State Management -> React Context API
Deployment -> Vercel
Language -> JavaScript

## Project Structure
src/<br>
│<br>
├── assets/<br>
│   └── react.svg<br>
│<br>
├── components/<br>
│   └── ui/                   # Reusable UI components<br>
│        ├── Button.jsx        # Button used across forms & navigation<br>
│        ├── Checkbox.jsx      # Checkbox (SDGs, Terms & Conditions)<br>
│        ├── Input.jsx         # Text/number input field<br>
│        ├── RadioGroup.jsx    # Radio selection (Digital/Physical mode)<br>
│        ├── Select.jsx        # Custom dropdown<br>
│        ├── Textarea.jsx      # Standard textarea (used instead of rich text editor)<br>
│        └── Toggle.jsx        # Switch component (Impact Certificate, Backer toggle)<br>
│<br>
├── context/<br>
│   └── BountyFormContext.jsx # Global multi-step form state using React Context API<br>
│<br>
├── layout/<br>
│   ├── Sidebar.jsx           # Left sidebar navigation (Basics, Rewards, Backer)<br>
│   └── StepLayout.jsx        # Main layout wrapper (header + progress + buttons)<br>
│<br>
├── pages/<br>
│   ├── StepBasics.jsx        # Step 1: Basic Details<br>
│   ├── RewardsStep.jsx       # Step 2: Rewards & Timeline<br>
│   ├── StepBacker.jsx        # Step 3: Backer Information<br>
│   ├── Confirmation.jsx      # Confirmation screen before final submit<br>
│   └── ResultPage.jsx        # Final JSON output page<br>
│<br>
├── App.jsx                   # Main routing setup (React Router)<br>
├── main.jsx                  # App entry point<br>
└── index.css                 # Tailwind + global styles<br>

The project follows a modular and scalable folder structure.
All form-related screens are stored in /pages, shared UI components live inside /components/ui, and global state management is handled through React Context in /context.
The /layout folder contains reusable structural components such as the sidebar and multi-step layout wrapper.

## Setup & Installation

Run the following commands after cloning the repo:

# 1. Clone Repository

git clone https://github.com/shivangi-sati/bounty-creator-wizard.git

# 2. Install Dependencies

npm create vite@latest bounty-app
npm install
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite

# 3. Start Development Server

cd bounty-app
npm run dev

Open:

http://localhost:5173

## Build & Deployment Instructions

This project is deployed using Vercel.

Follow the steps below to deploy your project:

1. Push Your Code to GitHub

Make sure your full project is committed and pushed:

git add .
git commit -m "Initial bounty-creator-wizard"
git push origin main

2. Create a Vercel Account

Go to:
https://vercel.com/signup

Login with GitHub.

3. Import Your Repository

Click "New Project"

Select your GitHub repository

Vercel will auto-detect Vite + React

4. Configure Build Settings

Vercel will automatically fill these, but ensure they match:

Setting	Value
Framework Preset	Vite
Build Command	npm run build
Install Command	npm install
Output Directory	dist
5. Environment Variables (Not Required)

This project does not require additional env variables.

6. Click “Deploy”

Vercel will build your app and give you a live URL like:

https://bounty-creator-wizard.vercel.app/

## Assumptions & Notes

No backend is required; submission is simulated via setTimeout.

Bounty Description input is implemented using a standard HTML <textarea>.

SDGs provided as a sample list (extendable).

All validation rules strictly followed:

1. Title max 40 characters

2. Required fields must be filled

3. Amount & Winners > 0

4. Impact Certificate Brief required when toggle is ON

5. Backer fields required when toggle is ON

6. Responsiveness implemented based on Figma guidelines.

## How to Navigate the App

Sidebar allows backward navigation.

Forward navigation is blocked until each step is valid.

After final submit → Confirmation screen → JSON preview.
