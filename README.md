TWEETS CARDS

--This project is a test task
--LAYOUT: https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1

Technical task:

1. According to the layout, you need to implement user cards.

2. When you click on the Follow button, the text changes to Following. The color of the button also changes. And your number of followers is added to the number of followers. That is, the initial number is 100,500 followers. When you click on the button, it will be 100,501.

3. When updating a page, the final result of the user's actions should be recorded. That is, if you click on the button and refresh the page, the button remains in the Following state with the corresponding color, and the number of followers does not decrease to the initial value.

4. When you click on the button again, its text and color change to the original state. The number of followers also changes. It decreases by 1 (100,500).

5. In the code, the number 100,500 should be written as a single value (100500). In the UI, it is displayed separated by commas (100,500).

6. Create your own personalized backend for development with the mockapi.io UI service. Create a users resource. Use the resource constructor and describe the user object as described below.

- Create a user in Mockapi with the following fields: id, user, tweets, followers, avatar (see screenshot below).
- Avatar images must be specified with separate url in the "avatar" property. You can choose them yourself.
- There must be at least 12 users with different values (at your discretion) in the database. Make a pagination. At least 3 tweets should be displayed on one pagination page, the rest should be loaded when you click Load More
- The rest of the requirements are similar to the above terms of reference.

--INSTALLATION

git clone https://github.com/Maksym235/tech-task-tweets-cards.git
cd tech-task-tweets-cards
npm install
npm start

--LIBRARIES
A list of libraries used in the project and their purpose:

- axios
- react-content-loader
- react-icons
- react-router-dom
- styled-components

--BACKEND

https://mockapi.io/
mockapi.io is a simple tool that lets you easily mock up APIs, generate custom data, and perform operations on it using RESTful interface. It is meant to be used as a prototyping/testing/learning tool.
