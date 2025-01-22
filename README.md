
# assingment-9


# Lingo Bingo: A Vocabulary Learning Application  

## Project Overview  
Lingo Bingo is a fun and interactive single-page language learning application designed to help users expand their vocabulary and improve their communication skills in Spanish. The app ensures an engaging learning experience by using Firebase for authentication, JSON-based vocabulary data, and unique design elements.  

## Purpose  
The purpose of Lingo Bingo is to make learning new vocabulary easier and more enjoyable by providing structured lessons, tutorials, and interactive features.  

## Live Link  
[https://incredible-maamoul-2c95d5.netlify.app/](#)  

## Key Features  
### General Features  
- Fully responsive design for mobile, tablet, and desktop.  
- Unique layout and design for engaging user experience.  
- JSON data with vocabulary for Spanish words, including word meaning, pronunciation, examples, and usage context.  

### Functional Features

#  npm packages I have used
- Animate.css
- react toastify
- react-countup
- react-scroll-trigger
-  react-simple-typewriter


1. **Authentication**  
   - Firebase-based authentication system.  
   - Login with email/password or Google social login.  
   - Registration form with password validation.  
   - Password reset functionality.  

2. **User Dashboard**  
   - Welcome message for logged-in users with their profile image and name.  
   - Profile management, including the ability to update name and profile photo.  

3. **Learning Pages**  
   - **Home Page**:  
     - Banner with a slider for language learning images.  
     - About section explaining the application’s purpose.  
     - Success section with animated user stats using `react-countup`.  
     - Two additional sections with unique content.  
   - **Let's Learn Page**:  
     - Displays 10 static lesson cards.  
     - Embedded tutorial videos for learning Spanish alphabets.  
     - View More button for accessing detailed tutorials.  
   - **Lesson Details**:  
     - Vocabulary cards grouped by lesson number.  
     - Modal for usage examples and context.  
     - Color-coded difficulty levels.  
     - Speak functionality for word pronunciation.  

4. **Tutorials Page**  
   - Embedded YouTube videos for additional learning resources.  

5. **Error Handling**  
   - Custom 404 page with navigation back to the home route.  

### Advanced Features  
- Animation package implemented on the home page using `AOS`.  
- Environment variables for Firebase configuration for secure deployment.  

## JSON Data Example  

