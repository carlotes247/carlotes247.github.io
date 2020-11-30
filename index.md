---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
[//]: # (Change to layout home if blog functionality is wanted)
layout: home
header:
  title: Carlos Gonzalez Diaz
  text: >
    Playful Interactive AI and ML for Immersive Technologies. 
  action: # action button is optional
    label: More About Me
    url: '#about'

# About
sections:
  - type: call-to-action.html
    section_id: about
    background_style: bg-primary
    title: Intelligent Games and Games Intelligence (IGGI) PhD 
    text: I am a PhD Candidate at the leading Center for Doctoral Training in Intelligent Games and Games Intelligence (IGGI) in the UK. The institutions where I am being trained to succeed in my doctorate are the University of York, Goldsmiths - University of London and Queen Mary - University of London. My current research interests are (1) Playful uses of ML and AI, (2) Encouraging movement during user interaction, and (3) Understanding motivation and user/player experience. 
    actions: 
      - title: Skills
        url: '#skills'
        class: btn-light
      - title: Projects
        url: '#portfolio'
        class: btn-light
      - title: Experience
        url: '#experience'
        class: btn-light

  # Skills
  - type: services.html
    section_id: skills
    #background_style: bg-info
    title: Skills
    services:
      - title: Computer Science
        text: 6+ years programming. C#, C++, Java, Python, C, JS, HTML5... and the curiosity to learn more!
        icon: fa-laptop-code text-info
      - title: Doctoral Research 
        text: Qualitative and Quantitative methods, HCI, Player/User Experience
        icon: fa-user-graduate
      - title: Immersive Tech
        text: 3+ years experience on XR SDKs and APIs. Oculus, Steam, PSVR, Vuforia.
        icon: fa-vr-cardboard text-info
      - title: Machine Learning
        text: Theoretical and practical ML. Lover of IML <3
        icon: fa-brain
      - title: Games R&D
        text: Passion for games and games tech. PhD in IML for VR Games. Unity, UE, Custom Engines.
        icon: fa-gamepad text-info
      - title: Team Player
        text: Enjoys working closely with others and can also work independently.
        icon: fa-users
      - title: SW Engineering
        text: Data Structures, Algorithms, Version Control... I even made my own visual scripting language!
        icon: fa-code-branch text-info
      - title: Public Speaking
        text: Speaker at different industry and academic conferences. Some of the venues include IEEE CoG, ACM MOCO, NordiCHI, Develop or Games Week Berlin.
        icon: fa-chalkboard-teacher

  # Timeline
  - type: timeline.html
    section_id: experience
    title: Previous Experience
    background_style: bg-info text-light
    last_image: assets/img/members/Carlos_Picture_01_Medium.jpg
    actions:      
      - image: assets/img/logos/UoYork.jpg
        title: >+
          2021
          **PhD in Intelligent Games and Games Intelligence (IGGI)**
        text: >-
            University of York. 5 years. Interactive Machine Learning for Designing Movement Interactions in VR Games.             
      - image: assets/img/logos/GS_UoL.png
        title: >+
          2019
          **ML for Game Engines Project**
        text: >-
            Google Artists + Machine Intelligence (AMI) project at Goldsmiths, University of London. 4 Months. Unity 3D, C#, C++, Interactive Machine Learning. London (UK). 
      - image: assets/img/logos/unity.png
        title: >+
          2019
          **AI Consulting**
        text: >-
            Unity Technologies. 4 weeks. C#, Python. London (UK).
      - image: assets/img/logos/sie.png
        title: >+
          2018
          **Research Engineer Internship**
        text: >-
            Sony Interactive Entertainment R&D West. 6 Months. Unity 3D, C#, PS4, PSVR SDK. Londo (UK)
      - image: assets/img/logos/UoYork.jpg
        title: >+
          2017 - 2018
          **University Teaching Assistant**
        text: >-
           University of York. 6 Months. Unity 3D and Processing. York (UK).
      - image: assets/img/logos/skovde.jpeg
        title: >+
          2016
          **MSc Digital Narration : Game and Cultural Heritage**
        text: >-
          University of Skövde, School of Informatics, Skövde (Sweden)  
      - image: assets/img/logos/skovde.jpeg
        title: >+
          2015
          **MSc Serious Games**
        text: >-
          University of Skövde, School of Informatics, Skövde (Sweden)
      - image: assets/img/logos/IUSinnovation.png
        title: >+
          2015
          **Internship Serious Games Developer**
        text: >-
           IUS Innovation. 6 Months. Unity 3D and iOS, C#. Skövde (Sweden).
      - image: assets/img/logos/urjc.png
        title: >+
          2015
          **BSc Software Engineering**
        text: >-
          Rey Juan Carlos University, Specialization: Game Technologies. Madrid (Spain) 
         

  # Portfolio
  - type: portfolio.html
    # this section has always ID 'portfolio'
    #section_id: portfolio
    #background_style: bg-dark
    projects:
      - title: InteractML
        text: Interactive Machine Learning Visual Scripting for Unity
        # the images are located in:
        # img/portfolio/fullsize
        # img/portfolio/thumbnails
        icon: 1.jpg
        url: http://interactml.com/
      - title: Attitude MSc Research Project
        text: MSc Investigation on How an iOS Game can Affect Attitudes towards Bullying in Children
        icon: 2.jpg
        url: '#skills'
      - title: BSc Firearm Simulator
        text: Virtual Firearm Simulator built in Unity3D and Connected to Custom Replica
        icon: 3.jpg
        url: '#about'
      - title: BSc Firearm Replica
        text: Modified Physical Replica of Firearm. Arduino, Wii remote, Unity3D
        icon: 4.jpg
        url: '#'
      - title: PhD Research Prototype 1
        text: Motion Controlled Research Prototype for Study on Immersion
        icon: 5.jpg
        url: '#'
      - title: PhD Research Prototype 2
        text: Hand-tracked Research Prototype using Machine Learning for Motion Recognition
        icon: 6.jpg
        url: '#'     

  # Awards
  - type: services.html
    section_id: awards
    #background_style: bg-info
    title: Awards
    services:
      - title: EPSRC Doctoral Scholarship Award 
        text:  2016 - 2021. PhD at the University of York, UK.
        icon: fa-award
      - title: 1st Prize HTC Vive Hackathon 2020
        text: 15 teams. London, UK. VR, Machine Learning, C#, Unity3D. 
        icon: fa-trophy
        url: https://doc.gold.ac.uk/blog/?p=2886
      - title: People’s Choice Award 2017
        text: DEN Entrepreneurship Hackathon. London, UK. 
        icon: fa-medal
      - title: 1st Prize (Art&Audio) York’s Global Game Jam 2017 
        text: 18 teams. York, UK. C#, Unity3D. 
        icon: fa-trophy      
        url: https://globalgamejam.org/2017/games/wavelength-2
      - title: 2nd Prize (Concept) York’s Global Game Jam 2017 
        text: 18 teams. York, UK. C#, Unity3D. 
        icon: fa-medal      
        url: https://globalgamejam.org/2017/games/wavelength-2
      - title: 2nd Prize in the Madrid Global Game Jam 2014 
        text: 11 teams. Madrid, Spain. C#, Unity3D. 
        icon: fa-medal
        url: gamejam.es/2014/games.html

  # Presentations
  - type: presentations.html
    # this section has always ID 'portfolio'
    section_id: presentations
    #background_style: bg-dark
    # the images are located in:
        # img/presentations/fullsize
        # img/presentations/thumbnails
    title: Presentations
    presentations:
      - title: Interactive Machine Learning for Expressive VR Game Interactions 
        text: Presentation for the yearly conference of my PhD
        icon: 4.jpg
        url: '#'
        vid: 'iggi-video'    
      - title: Understanding Natural Controls in Virtual Reality Games
        text: Presented at the Doctoral Symposium of the MOCO17 Conference, this talks briefly introduces the research during my first year of doctoral studies at the Univeristy of York.
        icon: 2.jpg
        url: '#skills'
        vid: 'moco-video'
      - title: Game Dev London VR Presentation
        text: Introducing InteractML, a ML visual scripting framework for Unity        
        icon: gamedevlondon.jpg
        url: http://interactml.com/
        vid: 'gdl-video'
      ##- title: Procedural Content Generation Summer School 2019
        ##text: Small proyect attempting to combine procedural content generation of geometry together with a supervised learning algorithm trained on input data.
        ##icon: 3.jpg
        ##url: '#about'
        ##vid: 'pcg-video'           
      

  # Contact
  - type: contact.html
    section_id: contacts
    title: Let's Get In Touch!
    text: >-
      Ready to start your next project with us? Give us a call or send us an email
      and we will get back to you as soon as possible!
    actions:
    - title: E-Mail
      icon: fa-envelope
      url: mailto:cgd506@york.ac.uk
    - title: Twitter
      icon: fa-twitter
      icon_type: fab
      url: http://www.twitter.com/carlotes247
    - title: Linkedin
      icon: fa-linkedin
      icon_type: fab
      url: https://www.linkedin.com/in/carlosglesdiaz/ 

---

[//]: # (Update the profile pic url as needed)
[profilePic]: https://pbs.twimg.com/profile_images/660952520945086464/7CBiEIRM_400x400.jpg "My profile pic. Good looking right?"

[//]: # (Here we display the pic)
![alt text][profilePic]


Hi, my name is Carlos Gonzalez Diaz. Welcome to my humble site! :D

I am a PhD Candidate at the leading Center for Doctoral Training in Intelligent Games and Games Intelligence ([IGGI](http://www.iggi.org.uk/)) in the UK. The institutions where I am being trained to succeed in my doctorate are the [University of York](https://www.york.ac.uk), [Goldsmiths, University of London](https://www.gold.ac.uk) and [Queen Mary, University of London](https://www.qmul.ac.uk). Don't forget to check my [PhD programme profile](http://www.iggi.org.uk/students/2016/carlos-gonzalez-diaz/) as well.

First, you can check more [about me](https://carlotes247.github.io/about/) or go and check my [publications](https://carlotes247.github.io/publications/). You can also look at some of the [games I developed](https://carlotes247.github.io/games/).

Then, go follow me on twitter at [@Carlotes247](http://www.twitter.com/carlotes247). I share a lot of sciency and techy stuff there that I enjoy. I can be a source of interesting AI, Machine Learning, VR, Games and HCI tweets/retweets! 

Connect with me on [LinkedIn](https://www.linkedin.com/in/carlosglesdiaz/) if you want something more professional. Disclaimer: *it can be outdated*.

You can also email me to carlosglesdiaz (at) gmail (dot) com.
If you fancy my academic emails, you can choose between:
- cgd506 (at) york (dot) ac.uk
- c.gonzalezdiaz (at) gold (dot) ac.uk

And a little reminder that you are probably a wonderful person and I wish you a lovely day <3