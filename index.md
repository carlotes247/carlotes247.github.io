---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
[//]: # (Change to layout home if blog functionality is wanted)
layout: home
header:
  title: Carlos Gonzalez Diaz
  text: >
    Software Engineering and Playful Interactive AI and ML for Immersive Technologies. 
  action: # action button is optional
    label: More About Me
    url: '#about'

# About
sections:
  - type: call-to-action.html
    section_id: about
    background_style: bg-primary
    title: "**Intelligent Games and Games Intelligence (IGGI) PhD**"
    text: "I am a Software Engineer and a PhD Candidate at the leading Center for Doctoral Training in Intelligent Games and Games Intelligence (IGGI) in the UK. 
    

    My current software engineering projects revolve around game technology systems for Unity and Unreal Engine, involving ***(1) gameplay programming, (2) networking, and (3) ML inference through supervised and reinforcement learning.***
  

    My current research interests are ***(1) Interactive use of ML and AI, (2) Encouraging movement during user interaction, and (3) Understanding motivation and user/player experience.***   
    

    The institutions where I am being trained to succeed in my doctorate are the University of York, Goldsmiths - University of London and Queen Mary - University of London. 
    
    
    I am supervised by [Prof. Sebastian Deterding](https://www.york.ac.uk/tfti/staff/research/sebastian-deterding/) and [Prof. Marco Gillies](https://www.gold.ac.uk/computing/staff/m-gillies/)."
    actions: 
      - title: Skills
        url: '#skills'
        class: btn-light ml-2 mb-2
      - title: Experience
        url: '#experience'
        class: btn-light ml-2 mb-2
      - title: Projects
        url: '#portfolio'
        class: btn-light ml-2 mb-2
      - title: Publications
        url: '#publications'
        class: btn-light ml-2 mb-2
      - title: Presentations
        url: '#presentations'
        class: btn-light ml-2 mb-2
      - title: Awards
        url: '#awards'
        class: btn-light ml-2 mb-2
      - title: Contacts
        url: '#contacts'
        class: btn-light ml-2 mb-2
      
  # Skills
  - type: services.html
    section_id: skills
    background_style: bg-light
    title: Skills
    services:
      - title: Computer Science
        text: 11+ years programming. C#, C++/C, Java, Python, JS, HTML5... and the curiosity to learn more!
        icon: fa-laptop-code text-info
      - title: HCI Research 
        text: Qualitative and Quantitative methods, HCI, User Experience, Interaction Analysis
        icon: fa-user-graduate
      - title: Immersive Tech
        text: 7+ years experience on XR SDKs and APIs. Meta Quest, Steam, PSVR, ARToolkit/Vuforia
        icon: fa-vr-cardboard text-info
      - title: Machine Learning
        text: Theoretical and Practical. Interactive Machine Learning with low-level inference libraries (C++/C#), TensorFlow (C#/Python)
        icon: fa-brain
      - title: Games R&D
        text: Passion for games and games tech. PhD in ML for VR Games. Unity, Unreal Engine, Custom Engines.
        icon: fa-gamepad text-info
      - title: Team Player
        text: Enjoys working closely with others and can also work independently. Previous experience consulting and contracting solo or as part of a team
        icon: fa-users
      - title: SW Engineering
        text: Data Structures, Algorithms, Version Control... I even made my own visual scripting language!
        icon: fa-code-branch text-info
      - title: Public Speaking
        text: Speaker at different industry and academic conferences. Some of the venues include ACM CHI, IEEE CoG, ACM MOCO, NordiCHI, Develop or Games Week Berlin.
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
          2023
          **PhD in Intelligent Games and Games Intelligence (IGGI)**
        text: >-
            University of York. 6 years. Interactive Machine Learning for VR Motion Gameplay Creation.             
      - image: assets/img/logos/uem.png
        title: >+
          2023
          **Course Authorship at Masters level in Unreal Engine Programming**
        text: >-
            European University of Madrid. Unreal Engine (Spain) 
      - image: assets/img/logos/ms_logo_small_simple.jpg
        title: >+
          2021
          **Doctoral Researcher (Telepresence)**
        text: >-
            Microsoft Research Cambridge. 4 Months. Unity 3D, Microsoft Mesh, C#. Cambridge (UK) 
      - image: assets/img/logos/musemio_logo.jpg
        title: >+
          2021
          **ML Researcher / Lead Tool Architect**
        text: >-
            Musemio Limited. 4 Months. Unity 3D, C#, C++, Machine Learning. London (UK) 
      - image: assets/img/logos/GS_UoL.png
        title: >+
          2019
          **Doctoral Researcher (ML for game engines)**
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
            Sony Interactive Entertainment R&D West. 6 Months. Unity 3D, C#, PS4, PSVR SDK. London (UK)
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
    background_style: bg-light
    title: Projects
    projects:
      - title: InteractML
        text: Interactive Machine Learning Visual Scripting Toolkit for Unity. C# Editor, C++ ML inference with Rapidlib, interops
        # the images are located in:
        # img/portfolio/fullsize
        # img/portfolio/thumbnails
        icon: 1.jpg
        url: http://interactml.com/
      - title: Attitude MSc iOS Research Project
        text: MSc Investigation on How an iOS Game can Affect Attitudes towards Bullying in Children. C# iOS
        icon: 2.jpg
        url: '#skills'
      - title: BSc Windows Firearm Simulator
        text: Virtual Firearm Simulator built in Unity3D and Connected to Custom Replica. C# Windows
        icon: 3.jpg
        url: '#about'
      - title: BSc Arduino Firearm Replica
        text: Modified Physical Replica of Firearm. Arduino, Wii remote, Unity3D 
        icon: 4.jpg
        url: '#'
      - title: PhD PSMove Research Prototype 1
        text: Motion Controlled Research Prototype for Study on Immersion. C#, C++ PSMovelib library, interops
        icon: 5.jpg
        url: '#'
      - title: PhD Leap Motion Research Prototype 2
        text: Hand-tracked Research Prototype using Machine Learning for Motion Recognition. C#, Leap Motion, Wekinator (Java)
        icon: 6.jpg
        url: '#'     
      - title: The Pit 
        text: Ludum Dare 48 entry. Online 4 player Multiplayer. Photon Networking. Procedural voxel world generation. C#
        icon: thepit.png
        url: '#'  
      - title: C++ Modern Art Generator
        text: Little project in C++ where everything is procedurally generated using OpenFrameworks, emulating the style of paintings by Kandinsky.
        icon: kandinsky.png
        url: '#' 
      - title: QT Labs
        text: VR game focused on adorable little microbes floating around you. You have a pistol that shoots fire and another one that shoots iced water, and a number of sugar cubes. The pistol is used to change the colour of the microbes, but heating them up too much results in them going into heat and reproducing. C#, VRTK 
        icon: qtlabs.png
        url: '#' 
      - title: The Empire of Evil
        text: Lowrezjam 2017 entry. On-rails pixel shooter. Custom Motion Control Framework in C#.
        icon: empireofevil.jpg
        url: '#' 
      - title: Filiam Dei
        text: Jamchester 2017 Best Audio Design Winner. Asymmetric Cooperative 3D Puzzle Platformer in which a God helps free their daughter. PlayStation Move Controllers. PC. Custom Motion Control Framework in C# with C++ interops
        icon: filiamdei.png
        url: '#' 
      - title: Merienda VR
        text: A VR Feeding Experience. HTC Vive, Virtual Reality Toolkit (VRTK), C#
        icon: meriendaVR.png
        url: '#' 
      - title: Wavelength
        text: Best Art&Audio Award. Best concept 2nd place GGJ 2017. Cross-Platform Game. PC, Google Cardboard, WebGL. Unity 3D, Photon Networking. C#
        icon: wavelength.png
        url: '#' 
      - title: This-Order
        text: This-Order is a serious game about a person who has Obsessive Compulsive Disorder (OCD). The person needs everything in the room to be perfect before the person is finally be able to go out of the house. PC. GGJ 2016
        icon: thisorder.png
        url: '#' 
      - title: KLUB
        text: Transmedia Game. MSc Thesis Digital Narration. Game and Cultural Heritage. Unity 3D. PC, WebGL, Android, iOS.
        icon: klub.png
        url: '#' 
      - title: Travel
        text: In Travel, you start out as a star lost in space, with no real instructions as to what to do and what the game is about. So you start exploring... Loosely inspired by Le Petit Prince. The Windows build supports Wiimote input. Unity 3D. PC, C++ library for wiimote integration
        icon: travel.png
        url: '#' 
      - title: Between
        text: Between is a short and physically interactive digital game, played on the Playstation Move. The narrative wields the myth of reincarnation as an expression of consciousness experiencing itself. Unity 3D, PlayStation Move Controller. PC, C++ library for psmove integration
        icon: between.jpg
        url: '#' 
      - title: Braveness&Cowardice
        text: Braveness/Cowardice is a 2D lateral scroll game in which the player controlls the mood of the main character, braveness and cowardice. The Brave world is iluminated but the Coward world is in darkness and reversed. Unity 3D
        icon: braveness.png
        url: '#' 


# Publications       
  - type: paragraph.html
    section_id: publications
    background_style: bg-light
    text_style: text-body
    title: Publications
    paragraphs:       
      - title: '**Conference Paper**'
        text: '**Carlos Gonzalez Diaz**, John Tang, Advait Sarkar, and Sean Rintel. 2022. Making Space for Social Time: Supporting Conversational Transitions Before, During, and After Video Meetings. In 2022 Symposium on Human-Computer Interaction for Work (CHIWORK 2022). Association for Computing Machinery, New York, NY, USA, Article 4, 1–11.
        [[ACM Digital Library]](https://doi.org/10.1145/3533406.3533417) '
        icon: fa-file-alt 
      - title: '**Conference Paper**'
        text: 'Clarice Hilton, Nicola Plant, **Carlos González Díaz**, Phoenix Perry, Ruth Gibson, Bruno Martelli, Michael Zbyszynski, Rebecca Fiebrink, and Marco Gillies. 2021. InteractML: Making machine learning accessible for creative practitioners working with movement interaction in immersive media. In Proceedings of the 27th ACM Symposium on Virtual Reality Software and Technology (VRST 21). Association for Computing Machinery, New York, NY, USA, Article 23, 1–10. 
        [[ACM Digital Library]](https://doi.org/10.1145/3489849.3489879) '
        icon: fa-file-alt
      - title: '**Workshop Paper**'
        text: '**Gonzalez Diaz, C.**, Plant, N., Hilton, C., Zbyszyński, M., Fiebrink, R., Perry, P., Gibson, R., Martelli, B., Deterding, S. and Gilles, M., 2021. Bodystorming in SocialVR to Support Collaborative Embodied Ideation. In: CHI 2021 Workshop on Social VR. New York, NY, USA: ACM, p.3. 
        [[PDF]](https://carlotes247.github.io/papers/Bodystorming_In_SocialVR_ShortPaper_2021.pdf) '
        icon: fa-file-alt
      - title: '**Workshop Paper**'
        text: 'Gibson, R, Plant, N, **Gonzalez Diaz, C**, Martelli, B, Zbyszyński, M, Fiebrink, R, Gillies, M, Hilton, C & Perry, P 2020, Using Machine Learning to Design Movement Interaction in Virtual Reality. in Electronic Visualisation & the Arts EVA London. BCS: The Chartered Institute for IT, Electronic Visualisation and the Arts, 6/07/20. 
        [[Science Open Link]](https://doi.org/10.14236/ewic/EVA2020.0) '
        icon: fa-file-alt
      - title: '**Workshop Paper**'
        text: 'Nicola Plant, Ruth Gibson, **Carlos Gonzalez Diaz**, Bruno Martelli, Michael Zbyszyński, Rebecca Fiebrink, Marco Gillies, Clarice Hilton, and Phoenix Perry. 2020. Movement interaction design for immersive media using interactive machine learning. In Proceedings of the 7th International Conference on Movement and Computing (MOCO20). Association for Computing Machinery, New York, NY, USA, Article 33, 1–2. 
        [[ACM Digital Library]](https://doi.org/10.1145/3401956.3404252) '
        icon: fa-file-alt
      - title: '**Demo Paper**'
        text: ' **Gonzalez Diaz, C.**, Perry, P. and Fiebrink, R., 2019. Interactive Machine Learning for More Expressive Game Interactions. In: Proceedings of the IEEE Conference on Games. London, UK. 
        [[PDF]](http://ieee-cog.org/2019/papers/paper_256.pdf) [[Conference Website]](http://ieee-cog.org/2019/proceedings/) '
        icon: fa-file-alt
      - title: '**Conference Paper**'
        text: 'Gaina, R., Volkovas, R., **Gonzalez Diaz, C.** and Davidson, R., 2017. Automatic Game Tuning for Strategic Diversity. In: 2017 9th Computer Science and Electronic Engineering (CEEC). Colchester, UK: IEEE. 
        [[Publisher Page (IEEE Xplore)]](https://ieeexplore.ieee.org/abstract/document/8101624)'
        icon: fa-file-alt
      - title: '**Doctoral Consortium Paper** '
        text: '**Gonzalez Diaz, C.**, 2017. The Effect of Control-Display Ratio in Handheld Motion Controllers on Player Immersion: A Pilot Study. In: Proceedings of the 4th International Conference on Movement Computing (MOCO ’17). New York, NY, USA: Association for Computing Machinery. 
        [[PDF]](http://moco17.movementcomputing.org/index.php/doctoral-symposium-proceedings/) [[Conference Website]](http://moco17.movementcomputing.org/index.php/doctoral-symposium-proceedings/)'
        icon: fa-file-alt
      - title: '**Book Chapter**' 
        text: 'Kristensen, L., Mazierska, E., Kirkpatrick, G., Holloway-Attaway, L., Brusk, J., Oldrell, T., Essvik, O., Fallon, B., Homewood, R.J., Tapper, M., Ryding, K., Borén, O., Bjarnehed, M., Idun, J., Fridén, K., Sörensen, J., Stennabb, B., Farhanieh, I., **Gonzalez Diaz, C.** and Helmisaari, M., 2016. Art and Game Obstruction. 1st ed. [online] Gothenburg: Rojal Förlag. 
        [[PDF (pg. 151 for my chapter)]](http://his.diva-portal.org/smash/get/diva2:1068196/FULLTEXT01.pdf) [[Publisher Page (University of Skövde)]](http://urn.kb.se/resolve?urn=urn:nbn:se:his:diva-13335)'
        icon: fa-book
      - title: '**MSc Thesis**' 
        text: '**Gonzalez Diaz, C.**, 2015. ATTITUDE GAME: A study in the increase of bullying awareness in 9-12 years old children. [online] University of Skövde. 
        [[PDF]](http://www.diva-portal.org/smash/get/diva2:855618/FULLTEXT01.pdf) [[Publisher Page (University of Skövde)]](http://www.diva-portal.org/smash/record.jsf?pid=diva2:855618)'
        icon: fa-scroll


  # Presentations
  - type: presentations.html
    # this section has always ID 'portfolio'
    section_id: presentations
    background_style: bg-light
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

  # Awards
  - type: services.html
    section_id: awards
    background_style: bg-primary
    title_style: text-white light
    title: Awards
    services:
      - title: Rabin Ezra Research Scholarship Award
        text:  2022. ML for interactive VR motion gameplay creation. London, UK.
        icon: fa-award text-light
        title_style: text-white
        text_style: text-white-50
        url: https://xr4all.eu/results-phase1-2nd-open-call/  
      - title: XR4ALL EU Horizon 2020 Grant Award
        text:  2020 - 2021. ML to predict user learning in VR. London, UK.
        icon: fa-file-invoice-dollar text-light
        title_style: text-white
        text_style: text-white-50
        url: https://xr4all.eu/results-phase1-2nd-open-call/  
      - title: EPSRC Doctoral Scholarship Award 
        text:  2016 - 2021. PhD at the University of York, UK.
        icon: fa-award text-light
        title_style: text-white
        text_style: text-white-50
      - title: 1st Prize HTC Vive Hackathon 2020
        text: 15 teams. London, UK. VR, Machine Learning, C#, Unity3D. 
        icon: fa-trophy text-light
        title_style: text-white
        text_style: text-white-50
        url: https://doc.gold.ac.uk/blog/?p=2886
      - title: People’s Choice Award 2017
        text: DEN Entrepreneurship Hackathon. London, UK. 
        icon: fa-medal text-light
        title_style: text-white
        text_style: text-white-50
      - title: 1st Prize (Art&Audio) York’s Global Game Jam 2017 
        text: 18 teams. York, UK. C#, Unity3D. 
        icon: fa-trophy text-light
        title_style: text-white
        text_style: text-white-50
        url: https://globalgamejam.org/2017/games/wavelength-2
      - title: 2nd Prize (Concept) York’s Global Game Jam 2017 
        text: 18 teams. York, UK. C#, Unity3D. 
        icon: fa-medal text-light 
        title_style: text-white
        text_style: text-white-50  
        url: https://globalgamejam.org/2017/games/wavelength-2
      - title: 1st Prize DEN Break the Museum Hackathon 
        text: 10 teams. Newcastle, UK. C#, C++, Unity3D. 
        icon: fa-medal text-light 
        title_style: text-white
        text_style: text-white-50  
        url: https://globalgamejam.org/2017/games/wavelength-2
      - title: 2nd Prize in the Madrid Global Game Jam 2014 
        text: 11 teams. Madrid, Spain. C#, Unity3D. 
        icon: fa-medal text-light  
        title_style: text-white
        text_style: text-white-50
        url: gamejam.es/2014/games.html          
      

  # Contact
  - type: contact.html
    section_id: contacts
    background_style: bg-light
    #text_style: text-light
    title: Let's Get In Touch!
    text: >-
      Ready to start a conversation into how I might help you? I am currently open for contracting work and internships!
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