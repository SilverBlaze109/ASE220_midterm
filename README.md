#ASE220_midterm
This website is a basic forum. The users can create sections to ask questions about various topics. Within each section, the users can post questions, and other users can respond to the questions.

### How to start
1. Load the folder into Visual Studio code and start the live server
2. Browse index.html

### How it works
The assets folder contains the following "libraries":
- api.js: this libary realizes API calls to exchange information between the client and the server in JSON format. API calls are based on AXIOS (https://axios-http.com/docs/intro).
- database.js: this library manages CRUD database operations and standardizes them, providing an interface to the API libary.
- getAllURLParams.js: this library retrieves query string parameters, which are utilized to view, edit, or delete a single quote.

The database is a jsonBlob file that contains one object. The object contains different entities as described in the "What Entities" section below. The jsonBlob is manipulated by the functinos in database.js that are called by app.js.

Each html document calls a function or multiple functions from app.js to manipulate the current page or to modify the database. Notable funcitons include but aren't limited to:
 - getSections(): adds each Section name and a link to the navBar on the top of each page.
 - createComment(section, index): adds a comment to the post indicated by the section and index parameters
 - updateSection(section): is run on submission of a <form>; takes input and uses it to add a new section to the json database

 ### What Entities
 There are 3 entities manipulated by the website as listed below.
 - Sections - topics users can ask questions about
 - Questions - specific question in a section
 - Comments - a comment to a question
 All of these entities can be created, edited, and deleted by the user, and they are displayed in the website.