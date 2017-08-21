For this assignment, I am using the ERD for my capstone project as subject matter.

This database contains 4 tables:
Users - Users to the website.

Projects- A project is a pixel art drawing, to be worked on by many users.

Teams- A team consists of multiple users and is specific to a single project.

Canvas- A canvas is the grid that makes up the pixel drawing. They are specific to a project.

Relationships:
A user can work on many projects, and a project can have many users. Thus, the Teams associative table sits in between the Users and Projects tables.

A team can have many users as members, but can only belong to one project.

A project has one user as a team leader.

A project has one canvas attached to it.
