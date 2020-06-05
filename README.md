# DreamState

![DreamState Logo](./Assets/DreamStateLogo.png)
======   

**DREAMSTATE** was made to support the African American communities around the world to give them an outlet to share their stories and experiences of their every day lives and struggles.  These stories of theirs are their personal experiences and more likely than not, to the outsider, seems like a dream.  

DREAMSTATE is a place where non-POC can educate themselves, start being active in their communities to become better allies, support eachother, attend gatherings, spread awareness, etc.  

The only way for a better future is through compassion, unity, and support of eachother regardless of color, race, status, sexual orientation, disabilities and religious beliefs.  

The more people see, hear and listen to eachother, this nightmare of a reality can end.

**Core Features**  
Any person on this has the ability to create a dream.  

**Goals**
* Outlet for the African American Community to safely, free of judgement, share their stories.
* Gives non-POC the chance to get a glimpse of what marginalized people experience and fear on an everyday basis.
* Serve as a stepping stone for anyone and everyone to get educated, aware, and active of the injustices committed on an everyday basis across all communities and countries.


## MVP 
#### Client (Front End)
Frontend - React  
Frontend Deployment - Netlify

#### Server (Back End)
Backend - Ruby on Rails  
Backend Deployment - Heroku

#### Design
**Iconography** 
**Fonts** 
DreamState logo - Orbitron, sans-serif  
Links - Wire One, sans-serif  
Text - Open Sans, sans-serif  
Headers/Subheaders - Montserrat, serif  

**Color Scheme** 

**WireFrame Images**   
<!-- Desktop & Tablet Renderings are the same.    -->
Refer to Wireframes Folder in this repository for a detailed view of each page's rendering.
<!-- ![Wireframe Photo](./Wireframes/HomeDesktop.png) -->

**Component Heirarchy**
    src
    |__ Assets/
      |__ images
    |__ Wireframes/
      |__ Wireframes.jsx
    |__ Components/
      |__ Home.jsx
      |__ About.jsx
      |__ Navigation.jsx
      |__ Logo.jsx
      |__ Dreams.jsx
      |__ DozeOff.jsx
      |__ Contact.jsx
      |__ WakeUp.jsx
      |__ Interpret.jsx

**Component Breakdown**
Component | Type | State | Props | Description
------------ | ------------- | ------------ | ------------- | ------------ |
Home | Functional | No | No | Contains random dream rendering. |
About | Functional | No | No | Contains description of app. |
Navigation | Functional | No | No | Contains Logo & Links: About, Dreams, Doze Off, Wake Up and Interpret. |
Logo | Functional | No | No | Neumorphism Text Effect of DreamState. |
Dreams | Class | No | Yes | Contains cards of specific dreams. |
Doze Off | Functional | Yes | No | Contains form prompting guest to submit a dream for review. |
Contact | Functional | No | Yes | Contains contact form. |
Wake Up| Functional | No | No | Contains links to organizations and official donations sites, etc.  |
Interpret | Functional | No | No | Contains links, resources, black-owned companies, best-seller books and educational materials to bring more awareness to user. |


**Component Tree**
![Component Tree Photo](./ComponentTree.png) 

**ERD Model**
![ERD Model Photo](./ERDModel.png)
To prevent spam and user harassment as well as protect user anonminity, all stories will be directed to a site-specific account where they will be filtered out.  Stories will be posted, and spam won't be clogging the purpose of the site.

**Dependancies**
| Library | Purpose |
| ------------ | ------------ |
React | User interface rendering framework |
React Router | Front End Link and Route components|
React Animations | Homepage Logo and general page animations|
CORS | CORS enabling middleware |
Axios | Make front end API calls to backend |



## Post MVP
Once MVP is complete future features that would benefit this app and take it to the next level include but not limited to:

- [ ] Comment Model
- [ ] Packing List Model
- [ ] Tags Model for specific locations  
  E.g. Action, Experience, Food Tour, Water, Wind, Earth, Mountain, Relax, Solo, Friends, etc.
- [ ] Search Bar to see locations, other users, or tags
- [ ] Randomizer button link in Navigation Bar to display random location of another user & their bucketlist for that location for inspiration.  User's information will not be displayed; only location and bucketlist will be displayed

