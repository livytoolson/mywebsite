import { React } from 'react';

const StorySquad = () => {
    return (
        <div>
            <h2>Story Squad</h2>
            <h3>What is Story Squad?</h3>
            <p>As I was finishing up my full-stack web development training at <a target="_blank" href="https://lambdaschool.com/">Lambda School</a>, I joined a small group of three full stack web developers to work on a children’s reading, writing, and drawing game called <a target="_blank" href="https://www.storysquad.education/">Story Squad</a>. Story Squad is a web application that allows parents to sign up their children and monitor their progress, children to upload their creative work and vote on other players creative work, and moderators to review and approve content each step of the way.</p>
            <img src="StorySquad.png" alt="Story Squad Mission Control Panel"/>
            <p>Our goal was to create a developer operations tool pack to decrease the time of onboarding as well as any confusion that comes with understanding flow of the game in the codebase.</p>
            <h3>Creating a Developer Operations Tool Pack</h3>
            <p>The stakeholders of Story Squad wanted web developers to spend *less* time understanding the code base, and *more* time optimizing the application. The developer operations tool pack allows developers to choose which slices of state they want to see in game play throughout the five stages, inspect bugs, test changes before pushing to production, and understand the moving parts that are the meat and potatoes behind this application. <br/>In order for the developer operations tool pack to get off the ground we hit the ground running by creating a developer database.</p>
            <img src="getApiUrl.png" alt="getApiUrl() function"/>
            <p>We created an exact copy of the production database and deployed it to Heroku, thus creating a development database. We implemented a “staging” branch that future developers will push changes to and merge into, before merging into the “main” branch. Having a “staging” branch allows developers to keep the developer database up-to-date and gives them the opportunity to test changes in the developer database before sending it to the live production database. This makes the developer operations and developer database ideal for testing bugs and implementing new features.</p>
            <p>Story Squad is a game based on date and time. Each day of the week, at a specific time, a new stage in the game is unlocked, i.e. the creative stages (reading, writing, and drawing), squad assignment, point allocation, match-ups, and voting. In order to bypass the date and time constraints of the game we created a function that can spoof the day as well as the hour, allowing different stages of the game to be unlocked in developer mode.</p>
            <img src="findDayOfWeek.png" alt="findNextDayOfWeek() function"/>
            <p>Next, we created a function with SQL queries to the database in order to add the ability to simulate the first three stages of the game: reading, uploading a drawing, and uploading a story.  Below is a snippet of code showing one of the functions in order to do this.</p>
            <img src="setAllTasks.png" alt="setAllTasks() function"/>
            <p>Next, we created a function with SQL queries to the database in order to add the ability to simulate the first three stages of the game: reading, uploading a drawing, and uploading a story.  Below is a snippet of code showing one of the functions in order to do this.</p>
            <h3>How This Project Changed Me</h3>
            <p>Coding is a skill, and like everything else, the only way to get good at it is through repetition. I learned that helping my teammates solve issues they’re struggling with is a great opportunity to strengthen what I know, be exposed to new material, and be a supportive teammate. Working on a remote team of three web developers and five data scientists taught me how to cross-collaborate, to communicate effectively, and to be a creative problem solver. I actively participated in daily team stand-ups, Slack channel discussions, stake holder meetings, and squad programming sessions.</p>
            <p>My team and I put our blood, sweat, and tears into this application throughout the past four weeks and made some great progress. Working on Story Squad was an amazing experience and the perfect transition into the workforce that I will be forever grateful for!</p>
        </div>
    );
};

export default StorySquad;