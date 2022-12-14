# Danny Boone's BBQ -- website by Ryan Cornett  
## Code Kentucky Web Development pt 1 Fall 2022 Final Project  

---

"Danny Boone's BBQ" is named after my beloved uncle, Reuben Daniel Cornett (affectionately known as "Boone" by many).  
I'm passionate about smoking meats and providing good food to family, so I had a lot of fun with this project.  

---

### Project Plan Wireframe:

https://design.penpot.app/#/view/c6d71d80-3e91-11ed-b414-cf2300df1f4f?page-id=c6d71d81-3e91-11ed-b414-cf2300df1f4f&section=interactions&index=0&share-id=1ddc8470-3f2e-11ed-bf98-c67f7655c7b3

---

## Features List:
 1. Create a responsive menu with JavaScript *(mobile hamburger menu)*
 2. Create a custom animation that animates across the screen *(canvas animation with random text populated from an array)*
 3. Create accordion boxes to display different types of information *(food menu with meats, sides, specials, etc.)*
 4. Add your own transition animation(s) to an element on hover *(links change color, de-saturated images saturate, and 'about-us' images expand)*  

---
  
## Checklist:
- [x] Project plan features list
- [x] Project plan wireframe with mobile, tablet, and desktop views
- [x] Project brief explaining the project and included features
---
- [x] Website visually appealing
- [x] Color palette
- [x] Font stack
- [x] Mobile-first CSS base
- [X] Tablet media query
- [X] Desktop media query
- [x] Project uploaded to GitHub repository with at minimum 5 separate commits
- [x] Project README file (1+ paragraph project description, features included)
- [x] Headers, footers, and body sections
- [x] Semantic HTML
- [x] Flexbox or grid page layout
- [x] Best efforts for accessibility
    - I downloaded the "axe Accessibility Linter" extension for VSCode. It found ten errors: a missing lang attribute, missing alt attributes, and link images with no discernible text.
    - I added the necessary lang="en" attribute to the html element, gave all images alt attributes, and gave all image-only links aria labels.  
  
I ran the accessiBe.com accessScan on my GitHub Pages site. My site was marked "Compliant! Great work, you are compliant with the WCAG 2.1 level AA."  
I did make changes to the colors to achieve a contrast ratio of 4.5, but the scan after doing so showed issues remained with contrast. I couldn't figure out why. I also added "aria-required" attributes to form fields, added a "role" attribute to an empty span element given textContent with JavaScript, and added a hidden link that skips navigation.
   
I ran the web.dev PageSpeed Insights report on my GitHub Pages site and received the following scores:  
- Mobile
    - Performance: 92
    - Accessibility: 96
    - Best Practices: 92
    - SEO: 92
- Desktop
    - Performance: 97
    - Accessibility: 96
    - Best Practices: 92
    - SEO: 90
---
- [x] Pluralsight videos
- [x] Informational interview
- [x] Tech event
- [x] Job readiness workshop  
  