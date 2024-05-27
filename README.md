## Summary of My Work

I spent the allotted time working on CRUD functionality:

* I fully implemented the ability to create a new member. They appear at the bottom of the list after being added.
* I partially implemented the ability to edit existing members. The editing functionality isn't complete yet: you can click the "EDIT" button for a member and change their data in the form fields, but it's not fully functional yet.

### Implementation Details

Here's some more details about what I did:

* Added the MUI component library as a starting point for the new components' style.
* Created the `AddMemberForm` component to input data for a new member
* Created a `LabelledCheckbox` component, since each Activity checkbox operated very similarly
* Created the `useMemberState` hook to manage the state for member data in forms.
  * I knew we'd need very similar form states for both the "Create a member" and "Edit a member" functionality; the only difference is that one needed to be blank and the other needed to be pre-filled. I wanted to single-source that logic.
* Set up an `api.js` file for API functions so that the API logic isn't contained in each component
  * I personally try to avoid having fetch logic hard-coded within a component. If I'm not using an standalone fetching library, I at least try to put the API calls in their own file(s).
* Created a `MemberRow` component to hold the single-member display/edit functionality

### Issues

Working within the time limit was a challenge! There are problems in my code that bother me: these are things I'd definitely want to fix if I continued working on these features.

* The "Edit a member" functionality needs to be completed properly; it's only half-finished as-is. Beyond the actual functionality itself, there's some bugs in the current state:
  * The `MemberRow` component re-renders every time its input fields change. This is either due to a problem with how I'm handling the state, or it's an issue with the fact that I put the `Cell` styled component *inside* the `MemberRow` component itself. (I haven't used `styled-components` before, so I'd need to learn how to use them properly.) Either way, I need to fix that.
  * The table layout got broken when I changed the row to use the MemberRow component. Each input field should cleanly replace the read-only data in its cell when the EDIT button is selected, and the EDIT button should have its own column (such as "Actions", which is where the DELETE button would live as well).
* The API re-fetches the entire member list after adding a member, instead of using the member data from the axios response to update the local state. I'd like to fix that unnecessary fetch.
* The way the API functions update the client state isn't intuitive. `getData` requires an `afterFetch` function to update the member list, rather than having direct access to the application state. I think my instinct to move the data fetching logic outside of the component was overkill for this specific assignment.

* Overall, the CSS needs a lot of attention. The layout of `AddMemberForm` in particular is really rough.

### Other Things I'd Like To Do

* I'd like to add TypeScript to the project. I thought about adding it to the repo when I begain, but decided that it would eat up more time than it was worth. If I was setting up a project from scratch, I'd definitely use TypeScript from the beginning.
* The styling is a mix of styled-components and MUI. If I was starting this project with no time limits, I'd take a bit of time to learn how to use styled-components properly, and have my components follow that convention (or replace styled-components with a different system; either is fine, I'd just want to be consistent).

## Available Scripts

In the project directory, you can run:

### `npm start`

This starts the client portion of the application

### `npm run server`

This starts the server


## Original Task Description

Enhance this simple club member index to improve it UI/UX and implement additional functionality currently missing.
You can install/edit anything you want to accomplish the assigned goals. You have no obligation to use any of the existing components that are provided. Please accomplish as much of the below as you can within the allotted time.

To create an organized and clear interview technical task for a frontend developer, you can group the requirements based on the specific skills and areas of knowledge you want to test. Here's how you could structure the requirements:

### React
1. **Add the missing create/edit/delete functionality**
2. **Ensure there are no unnecessary re-renders using the available React features to accomplish this**
3. **Implement react-router as needed**

### API and Data Management
1. **Implement filtering through the server by the "name" field**
2. **Implement filtering by the "rating" and "activities" fields**
3. **Implement sorting by the "name" and "activities" field**

### Frontend Design and User Experience
1. **Allow for filtering using the search bar**
2. **Improve the styling of the page**

## Bonus

The actions being performed (for example CRUD actions, filtering etc.) should be implemented to avoid unnecessary API calls in the scenario where the action is being performed multiple times in a small amount of time. For eg. performing filtering when typing in the search bar

## Instructions

1. You can use basic UI libraries including but not limited to bootstrap for providing a flexbox based responsive layout.
2. The rest of the functionality and helper methods should be self implemented or be used from the already provided dependencies in `package.json` file.