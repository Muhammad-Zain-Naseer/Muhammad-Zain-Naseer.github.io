// Project data shared by the home page (cards) and project.html (detail pages).
// Detail fields are optional: a section is only shown when it has content.
//   context:  paragraphs for "Context & Motivation"
//   features: bullet points for "Key Features"
//   gallery:  [{ src, alt, wide }]; the first two also illustrate context/features
//   outcome:  paragraphs for "Outcome"
//   links:    [{ label, url }]
window.PROJECTS = [
  {
    slug: 'flowparallel',
    name: 'FlowParallel',
    badge: 'Automation',
    shot: 'shots/flowparallel-hero.jpg',
    c: '#0b2d3a',
    desc: 'An automation service for businesses: a website with a live worked example, and a WhatsApp assistant that answers customers with Gemini and hands over to a person when it should.',
    tags: ['Node.js', 'Express', 'WhatsApp Cloud API', 'Gemini', 'Vertex AI', 'Python', 'Google Cloud', 'Cloud Run', 'Cloud CDN', 'Terraform'],
    context: [
      '<strong>FlowParallel</strong> is an automation service for businesses. Teams answer the same questions, chase the same enquiries and copy the same information between tools every day. FlowParallel finds that repeat work and automates it around the tools the team already uses.',
      'It is built on WhatsApp first, because that is where customers in Pakistan already message businesses.'
    ],
    features: [
      'The website: a custom site with its own brand, an interactive worked example that shows an enquiry being handled step by step, and a free automation audit enquiry',
      'A WhatsApp assistant on the business number: Gemini on Vertex AI answers only from an approved set of facts, falls back to scripted replies, and hands over to a person by email with the conversation so far',
      'A secure webhook: Meta signature checks, duplicate suppression, rate limiting, and secrets redacted from logs',
      'Internal admin pages to send messages and manage the WhatsApp Business phone numbers and message templates',
      'Contact-form emails sent by a Python function on Cloud Run',
      'Google Cloud infrastructure as code with Terraform: the site is served from Cloud Storage behind a global HTTPS load balancer with a managed certificate and Cloud CDN, and deploys from GitHub through Workload Identity Federation'
    ],
    gallery: [
      { src: 'shots/flowparallel-hero.jpg', alt: 'The FlowParallel website: take the repeat work off your team’s plate' },
      { src: 'shots/flowparallel-example.jpg', alt: 'Worked example: a WhatsApp enquiry is read, availability checked, a reply drafted and a person flagged' },
      { src: 'shots/flowparallel-work.jpg', alt: 'The repeat work FlowParallel removes, and what changes' },
      { src: 'shots/flowparallel-how.jpg', alt: 'The three-step process: find the opportunity, build around your process, help it keep working' }
    ]
  },
  {
    slug: 'hersafar',
    name: 'HerSafar',
    short: 'Her<br>Safar',
    badge: 'Final-year project',
    shot: 'shots/hersafar-cover.jpg',
    phoneGallery: true,
    c: 'radial-gradient(circle at 20% 20%, #3fe9c4aa, transparent 55%), radial-gradient(circle at 90% 90%, #6a2fd8cc, transparent 60%), #07121a',
    desc: 'Voice-first ride-sharing app for low-literacy female commuters. Gemini turns Urdu speech into structured ride requests, with SOS alerts and real-time matching.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Socket.IO', 'Google Gemini', 'Google TTS', 'Oracle Kubernetes Engine', 'GitHub Actions', 'SonarQube', 'Google Cloud', 'Jest', 'Docker'],
    meta: 'Final-year project, team of four',
    context: [
      'HerSafar is my final-year project at LUMS, built by a team of four with <strong>Mr. Waqar Ahmad</strong> as advisor.',
      'Ride-hailing apps assume riders can read and type. HerSafar is built for female commuters with low literacy, so the main way to use it is by speaking Urdu.'
    ],
    role: [
      'I worked mostly on the Node.js backend and managed deployment: Oracle Kubernetes Engine with GitHub Actions CI/CD, and SonarQube for code quality.'
    ],
    features: [
      'Urdu voice input converted into structured ride requests with Google Gemini',
      'Works around the accuracy limits of standard speech-to-text for low-resource languages',
      'Urdu voice navigation with Google Text-to-Speech',
      'Real-time ride booking and live driver tracking over Socket.IO',
      'Safety features: SOS alerts, buddy pairing, trusted contact sharing, unsafe-area management, and CNIC and licence verification for drivers',
      'In-app chat, and an admin panel for fraud detection',
      'Multimodal interaction (voice and visual) designed and refined through user research with target commuters',
      'Deployed on Oracle Kubernetes Engine with GitHub Actions CI/CD'
    ],
    gallery: [
      { src: 'shots/hersafar-landing.jpg', alt: 'Landing screen in Urdu: new user, returning user or register as a driver, with a mic button to speak instead' },
      { src: 'shots/hersafar-voice-signup.jpg', alt: 'Sign-up by voice: say your email instead of typing it' },
      { src: 'shots/hersafar-home.jpg', alt: 'Commuter home: one large button to book a ride' },
      { src: 'shots/hersafar-book.jpg', alt: 'Booking a ride: pickup, stops and destination, by voice or typing' },
      { src: 'shots/hersafar-driver.jpg', alt: 'Driver dashboard: go online, today’s earnings and trips' },
      { src: 'shots/hersafar-admin.jpg', alt: 'Admin panel: dashboard, users, trip monitor, analytics, alerts and policy' }
    ]
  },
  {
    slug: 'atom-manager',
    name: 'DipGos Atom Manager',
    short: 'Atom<br>Manager',
    badge: 'In production at WAPDA',
    logo: 'logos/dipgos.svg',
    shot: 'shots/atom-dash-1.jpg',
    c: 'radial-gradient(circle at 80% 10%, #3f64e9cc, transparent 55%), radial-gradient(circle at 10% 100%, #3fe9c488, transparent 55%), #070b18',
    desc: 'The resource layer of a project governance platform: what every resource is, where it sits and what it has done, from the project level down to the unit.',
    tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy'],
    meta: 'INDUS Technologies',
    context: [
      'DipGos (Digital Project Governance and Operations System) is a project governance platform built at <strong>INDUS Technologies</strong> and deployed to <strong>WAPDA</strong>, the Pakistan Water &amp; Power Development Authority.',
      'I built the Atom Manager business function end to end, across the React/TypeScript frontend and the FastAPI/PostgreSQL backend. It is the part of DipGos that knows every resource on a project: people, machines and materials.'
    ],
    features: [
      'Resource domain model spanning workforce and material resources: kinds, atoms, units, lots, vessels and holdings',
      'A live command view of the whole catalogue across six classes: material, actors, equipment, temporary works, deliverables and storage',
      'Demand forecast showing which resource types run short over the next 8 weeks, 6 months, 12 months or until stock runs out',
      'Schedule forecast per class or per atom, with a "problems only" view for shortages, clashes and faults',
      'Multi-step resource creation wizard with per-step validation and duplicate-tag detection',
      'Resource catalogue scoped across every level of the project hierarchy',
      'Performance-reporting APIs at both atom and unit level'
    ],
    gallery: [
      { src: 'shots/atom-dash-1.jpg', alt: 'Atom Manager command view and 8-week demand forecast' },
      { src: 'shots/atom-dash-2.jpg', alt: 'Schedule forecast and the six-class catalogue' },
      { src: 'shots/atom-dash-3.jpg', alt: 'Equipment class: every machine type and how many are held' },
      { src: 'shots/atom-wizard-1.jpg', alt: 'New atom wizard, step 1: choosing how the resource takes part in the work' },
      { src: 'shots/atom-wizard-2.jpg', alt: 'New atom wizard, step 2: picking the kind of equipment from the directory' },
      { src: 'shots/dipgos-project.jpg', alt: 'DipGos project dashboard with contracts, map and productivity' }
    ]
  },
  {
    slug: 'lums-opportunities',
    name: 'LUMS Opportunities',
    badge: '6,000+ members',
    url: 'https://www.lumsopportunities.com/',
    shot: 'shots/lumsopp-home.jpg',
    c: '#fff',
    desc: 'Sign-up and WhatsApp group approval for LUMS’ largest opportunities community. Students verify their LUMS email and register their number, and eligible join requests are approved automatically.',
    tags: ['Node.js', 'Express', 'MongoDB Atlas', 'Baileys', 'WhatsApp', 'Resend', 'Netlify', 'Render'],
    context: [
      'LUMS Opportunities is a student-run community that shares internships, jobs, grad-school and freelance openings through its WhatsApp groups, with 6,000+ members.',
      'Admins were checking every join request by hand to make sure the person was really a LUMS student in the right batch. I built the sign-up site and a WhatsApp approver that does those checks automatically.'
    ],
    features: [
      'Passwordless sign-up: students verify their LUMS email with a 6-digit code, then register their WhatsApp number',
      'An approver linked to WhatsApp polls every group’s pending join requests and approves eligible students',
      'Approval uses the same rules module the website uses to decide which groups a student can see, so what students see and what they can join never drift apart',
      'Unknown numbers are left pending, not rejected, so someone who taps an invite before finishing sign-up is approved on a later poll',
      'Anti-ban safeguards: dry-run by default, a daily action limit, random human-like delays and a cooldown on repeat rejections',
      'Admin panel for linking the WhatsApp account by QR code'
    ],
    gallery: [
      { src: 'shots/lumsopp-signup.jpg', alt: 'Sign-up form: verify your LUMS email' },
      { src: 'shots/lumsopp-home.jpg', alt: 'LUMS Opportunities home page' }
    ],
    outcome: [
      'The site and approver serve a community of 6,000+ members, and admins no longer approve join requests by hand.'
    ],
    links: [{ label: 'lumsopportunities.com', url: 'https://www.lumsopportunities.com/' }]
  },
  {
    slug: 'whatsapp-ai-assistant',
    name: 'WhatsApp AI Assistant',
    badge: 'Conversational AI',
    shot: 'shots/n8n-whatsapp-card.jpg',
    c: '#1a1a1a',
    desc: 'A personal AI assistant on WhatsApp that remembers each conversation and picks its own tools: web search, page scraping, Google Calendar and Google Sheets.',
    tags: ['n8n', 'OpenAI', 'WhatsApp', 'Google Calendar', 'Google Sheets'],
    context: [
      'A personal assistant that lives in WhatsApp. It answers naturally, keeps the context of each conversation, and decides on its own which tool a message needs.'
    ],
    features: [
      'WhatsApp trigger receives every incoming message',
      'AI agent on an OpenAI chat model (GPT-5 nano)',
      'Per-user memory using a custom session key',
      'Tool workflows for web search and web-page scraping',
      'Reads Google Calendar events for scheduling questions',
      'A Google Sheets orchestrator workflow for storing and updating data',
      'Replies are sent back through WhatsApp'
    ],
    gallery: [
      { src: 'shots/n8n-whatsapp.jpg', alt: 'n8n workflow: WhatsApp trigger, AI agent with memory and tools, send message', wide: true }
    ],
    outcome: [
      'Multi-tool agent orchestration through WhatsApp, with per-user memory and real-time tool access.'
    ]
  },
  {
    slug: 'ai-lead-follow-up',
    name: 'AI Lead Follow-Up Automation',
    badge: 'Automation',
    shot: 'shots/n8n-leads-card.jpg',
    c: '#1a1a1a',
    desc: 'Every three minutes it reads new Follow Up Boss leads, validates their contact details, and writes a tailored real-estate email or SMS for each one, sent through Gmail or Twilio.',
    tags: ['n8n', 'JavaScript', 'Vertex AI', 'Gemini 2.5 Flash Lite', 'Gmail', 'Twilio', 'Follow Up Boss'],
    context: [
      'Real-estate teams lose leads when follow-up is slow. This workflow picks up every new lead in Follow Up Boss within minutes and sends a message written for that lead.'
    ],
    features: [
      'Schedule trigger runs every three minutes',
      'Stateful: stores the last run time and fetches only leads created since then',
      'Rate control between API calls, then splits leads to process one at a time',
      'JavaScript step validates which contact channels (email, phone) each lead actually has',
      'AI agent on Google Vertex (Gemini 2.5 Flash Lite) writes the email and SMS copy',
      'Structured AI output is parsed and validated before anything is sent',
      'Switch routes each message to Gmail or Twilio SMS depending on the valid channels'
    ],
    gallery: [
      { src: 'shots/n8n-leads.jpg', alt: 'n8n workflow: schedule trigger, Follow Up Boss fetch, validation, AI agent, Gmail and Twilio', wide: true }
    ],
    outcome: [
      'Stateful batch processing, structured AI output validation, and conditional Gmail or Twilio delivery.'
    ]
  },
  {
    slug: 'ustaadonline',
    name: 'UstaadOnline',
    badge: 'Live',
    url: 'https://se-project-2024-cqrf.vercel.app/',
    shot: 'shots/ustaad-home.jpg',
    c: '#fff',
    desc: 'Tutoring platform on PostgreSQL, Express, React and Node.js, with role-based access, tutor–student matching, session booking and Stripe payments.',
    tags: ['PostgreSQL', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Stripe', 'JWT', 'Google OAuth'],
    meta: 'Group project, team of five',
    context: [
      'UstaadOnline connects students with tutors: find a tutor by subject, book a session, and learn live online. A team of five built it as a group project at LUMS, advised by <strong>Dr. Naveed Arshad</strong> and <strong>Dr. Suleman Shahid</strong>.',
      'Students, tutors and admins each get their own view of the platform.'
    ],
    role: [
      'I worked mostly on the backend (REST APIs in Node.js and Express on PostgreSQL) and managed the deployment on Vercel. The team tracked work in Jira.'
    ],
    features: [
      'JWT authentication and Google sign-in, with role-based access for students, tutors and admins',
      'Tutor–student matching that prioritises subject expertise, ratings and availability',
      'Session booking with a calendar, and email notifications',
      'Payments with Stripe',
      'Public tutor directory with search by name or subject',
      'RESTful APIs for user management, session booking and matching; deployed on Vercel'
    ],
    gallery: [
      { src: 'shots/ustaad-home.jpg', alt: 'UstaadOnline home page' },
      { src: 'shots/ustaad-tutors.jpg', alt: 'Browse tutors page' },
      { src: 'shots/ustaad-how.jpg', alt: 'How it works and why choose the platform' }
    ],
    links: [
      { label: 'Live site', url: 'https://se-project-2024-cqrf.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/Muhammad-Zain-Naseer/UstaadOnline' }
    ]
  },
  {
    slug: 'darbaar',
    name: 'Darbaar',
    badge: 'Live',
    url: 'https://darbaar.vercel.app/',
    shot: 'shots/darbaar-home.jpg',
    c: '#f5c518',
    desc: 'Real-time multiplayer social deduction game inspired by "Badshah Ka Wazir Kon?", with rooms, role assignment, voting, chat and timers.',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Vercel'],
    meta: 'Group project',
    context: [
      'Darbaar brings the desi party game "Badshah Ka Wazir Kon?" online: players get secret roles and have to find the Wazir.'
    ],
    features: [
      'Decentralised state management: each player’s state is broadcast over Socket.IO to keep concurrent game rooms in sync',
      'Full game-room lifecycle: creation, joining, role assignment, voting, public chat, timers and resolution',
      'Strategic voting mechanics',
      'Accounts with login and sign-up; deployed on Vercel'
    ],
    gallery: [
      { src: 'shots/darbaar-home.jpg', alt: 'Darbaar landing page: Find the Wazir' }
    ],
    links: [
      { label: 'Play Darbaar', url: 'https://darbaar.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/Muhammad-Zain-Naseer/Darbaar' }
    ]
  },
  {
    slug: 'sensai',
    name: 'SensAI',
    short: 'Sens<br>AI',
    badge: 'AIHI, LUMS',
    logo: 'logos/aihi.jpg',
    c: 'radial-gradient(circle at 50% 0%, #3fe9c4aa, transparent 60%), radial-gradient(circle at 0% 100%, #3f64e988, transparent 55%), #061414',
    desc: 'Diagnostic platform for physicians. Gemini transcribes consultations and a filtering layer pulls out medications, dosages and symptoms.',
    shot: 'shots/sensai-visit.jpg',
    tags: ['React', 'Vite', 'GraphQL', 'AWS DynamoDB', 'Auth0', 'Google Gemini'],
    meta: 'AI in Healthcare Initiative',
    context: [
      'I led full-stack development of SensAI at the <strong>AI in Healthcare Initiative (AIHI)</strong> at LUMS, advised by <strong>Dr. Basma Ali</strong> (LUMS, Harvard Medical School).',
      'Doctors spend a large part of each consultation writing notes. SensAI listens to the consultation and prepares the notes for them.'
    ],
    features: [
      'Real-time audio transcription of the doctor–patient conversation with Google Gemini',
      'Filtering layer that extracts medications, dosages and symptoms from unstructured dialogue',
      'Structured note built during the visit: plan, allergies, medicines, past medical history, personal details, lifestyle and family history',
      'Past visits can be reviewed and filtered by clinic and date',
      'Backend on AWS DynamoDB with Auth0, built for HIPAA-compliant data handling',
      'React (Vite) frontend with a GraphQL API'
    ],
    gallery: [
      { src: 'shots/sensai-visit.jpg', alt: 'A visit in progress: live transcription beside the structured doctor’s note' },
      { src: 'shots/sensai-dash.jpg', alt: 'SensAI home: start a visit, open the comprehensive note, or review past visits' }
    ],
    outcome: [
      'Iterative usability testing with practising physicians reached a <strong>~50% reduction in documentation time</strong> per consultation.'
    ]
  },
  {
    slug: 'structure-from-motion',
    name: 'Structure-from-Motion',
    short: 'SfM<br>3D',
    badge: 'Computer Vision',
    c: 'radial-gradient(circle at 30% 30%, #3f64e9aa, transparent 55%), radial-gradient(circle at 80% 90%, #6a2fd8aa, transparent 55%), #080818',
    desc: '3D reconstruction from 2D photos using calibration, feature matching, epipolar geometry and bundle adjustment, built for interactive virtual tours.',
    shot: 'shots/sfm-tour-2.jpg',
    tags: ['Python', 'OpenCV', 'NumPy', 'SciPy', 'Open3D', 'Three.js'],
    meta: 'LUMS, with Kousar Pervaiz',
    context: [
      'A pipeline that turns ordinary 2D photographs of a place into a 3D point cloud that can be explored as a virtual tour, advised by <strong>Dr. Murtaza Taj</strong> at LUMS.',
      'The goal was spatial reconstruction suitable for preserving cultural heritage sites.'
    ],
    features: [
      'Camera intrinsics estimated from the photos’ EXIF metadata',
      'SIFT features detected and matched across overlapping views',
      'Essential-matrix estimation and a cheirality check to recover the first camera pair',
      'Incremental reconstruction: new cameras registered with PnP, new points triangulated',
      'Global bundle adjustment to reduce accumulated drift',
      'A Three.js virtual-tour viewer that moves between camera views by interpolating positions and orientations and cross-fading the photos'
    ],
    gallery: [
      { src: 'shots/sfm-tour-1.jpg', alt: 'Virtual tour viewer with the reconstructed corridor point cloud' },
      { src: 'shots/sfm-tour-3.jpg', alt: 'Navigating between the 17 camera views in the tour' },
      { src: 'shots/sfm-inputs.jpg', alt: 'Input photographs of the corridor', wide: true },
      { src: 'shots/sfm-keypoints.jpg', alt: '7,011 SIFT keypoints detected on the first image' },
      { src: 'shots/sfm-matches.jpg', alt: 'Feature matches between two neighbouring views' },
      { src: 'shots/sfm-pointcloud.jpg', alt: 'The sparse 3D point cloud from four angles', wide: true }
    ],
    outcome: [
      'The final reconstruction registered <strong>19 cameras</strong> and more than <strong>11,000 sparse 3D points</strong>, with a virtual tour that moves smoothly between viewpoints.'
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Muhammad-Zain-Naseer/CV-Project-final-submission' },
      { label: 'Technical report', url: 'https://drive.google.com/file/d/1xSGebjUQGDjAEBFrKpNvbRpSTd3uZoBU/view?usp=sharing' }
    ]
  },
  {
    slug: 'urdu-news-classifier',
    name: 'Urdu News Classifier',
    short: 'Urdu<br>NLP',
    badge: '97.6% accuracy',
    c: 'radial-gradient(circle at 90% 10%, #6a2fd8bb, transparent 55%), radial-gradient(circle at 10% 90%, #3fe9c477, transparent 55%), #0c0816',
    desc: 'Scraped 1,000+ Urdu news articles and built three classifiers from scratch. Naive Bayes reached 97.6% test accuracy and the PyTorch network 95%.',
    tags: ['Python', 'PyTorch', 'BeautifulSoup', 'TF-IDF', 'NLP'],
    meta: 'Group project',
    context: [
      'Urdu has far fewer labelled datasets than English. We built our own corpus and compared classifiers written from scratch.'
    ],
    features: [
      'Scraped 1,000+ Urdu news articles from Geo, Express and Jang with BeautifulSoup',
      'Labelled corpus across five categories: entertainment, business, sports, science and technology, and international',
      'Three classifiers implemented from scratch: a PyTorch neural network, one-vs-all logistic regression and multinomial Naive Bayes',
      'TF-IDF features with dropout regularisation'
    ],
    outcome: ['On the held-out test set, multinomial Naive Bayes reached <strong>97.6% accuracy</strong> (F1 97.6), the PyTorch neural network <strong>95.2%</strong>, and one-vs-all logistic regression <strong>94%</strong>.'],
    gallery: [
      { src: 'shots/urdu-confusion.png', alt: 'Confusion matrix for one-vs-all logistic regression across the five categories' }
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/Muhammad-Zain-Naseer/UrduNewsClassifier' }]
  },
  {
    slug: 'tandurust-pakistan',
    name: 'Tandurust Pakistan',
    short: 'Tan<br>durust',
    badge: 'UX Research',
    shot: 'shots/tandurust-cover.jpg',
    phoneGallery: true,
    c: 'radial-gradient(circle at 20% 20%, #3fe9c488, transparent 55%), radial-gradient(circle at 80% 80%, #3f64e9aa, transparent 55%), #06101a',
    desc: 'Visual-first healthcare platform for 50+ low-literacy users across three government hospitals in Lahore, in Urdu, English and regional languages.',
    tags: ['Figma', 'UX Research', 'Multilingual Design'],
    meta: 'Advised by Dr. Suleman Shahid (LUMS)',
    context: [
      'Patients with low literacy struggle with medical terms and text-heavy screens. Tandurust (“healthy”) Pakistan is a visual-first mobile health app design for them, built by a team of five and advised by <strong>Dr. Suleman Shahid</strong>.'
    ],
    features: [
      'Visual-first interface for low-literacy users',
      'Multilingual support in Urdu, English and regional languages',
      'Multi-phase usability testing across three government hospitals in Lahore',
      'Iterative design refinement to improve interface comprehension',
      'Home screen with local health alerts (such as dengue), a symptom checker you can speak or type into, first aid, nearby facilities and medical information',
      'One-tap emergency screen: call an ambulance, find a hospital or alert family'
    ],
    gallery: [
      { src: 'shots/tandurust-language.jpg', alt: 'Choose a language: English, Urdu, Pashto, Sindhi, Punjabi or Balochi' },
      { src: 'shots/tandurust-home.jpg', alt: 'Home: dengue alert, symptom checker, first aid, nearby facilities, medical information' },
      { src: 'shots/tandurust-symptoms.jpg', alt: 'Symptom checker: describe symptoms by speaking or typing' },
      { src: 'shots/tandurust-emergency.jpg', alt: 'Emergency: call an ambulance, find a hospital, alert family' },
      { src: 'shots/tandurust-phone.jpg', alt: 'Sign-up with a mobile number, with pictures instead of text-heavy instructions' },
      { src: 'shots/tandurust-splash.jpg', alt: 'Splash screen' }
    ],
    outcome: ['Tested with 50+ low-literacy users across three government hospitals.'],
    links: [
      { label: 'Figma prototype', url: 'https://figma.com/design/jXQkUq71MW4SwDXtja7r1r/Tandarust-Pakistan?node-id=0-1&t=aDmReQRIsaHdXrRP-1' },
      { label: 'Usability report', url: 'https://docs.google.com/document/d/1Ze4Ik7qOIbQ3wAT1Q9hQrpjgIuYKncF3/edit' }
    ]
  },
  {
    slug: 'top-view-scene-mapping',
    name: 'Top-View Scene Mapping',
    short: 'Top<br>View',
    badge: 'Computer Vision',
    c: 'radial-gradient(circle at 70% 30%, #3fe9c499, transparent 55%), radial-gradient(circle at 20% 90%, #6a2fd899, transparent 55%), #081012',
    desc: 'Turns ground-level camera views into top-down scene maps with homography and semantic segmentation.',
    tags: ['Python', 'OpenCV', 'Semantic Segmentation'],
    meta: 'LUMS',
    context: ['A spatial intelligence pipeline, advised by <strong>Dr. Murtaza Taj</strong> at LUMS, that converts what a ground-level camera sees into a top-down map of the scene, for uses such as autonomous navigation.'],
    features: [
      'Homography transformation from camera view to top-down view',
      'Semantic segmentation to label what is in the scene',
      'Combined into top-down scene maps'
    ]
  },
  {
    slug: '2d-shooting-game',
    name: 'Bee Buster (2D Shooting Game)',
    short: '2D<br>Shooter',
    badge: 'Unity',
    shot: 'shots/bee-buster.jpg',
    c: 'radial-gradient(circle at 25% 25%, #e9a23f99, transparent 55%), radial-gradient(circle at 85% 85%, #6a2fd8aa, transparent 55%), #120c08',
    desc: 'A 2D shooter built in Unity: fire at waves of bees before they reach you, and chase a high score.',
    tags: ['Unity', 'C#', 'Game Development'],
    features: [
      'Menu, gameplay and settings scenes',
      'Enemy generator that spawns bees over time',
      'Shooting, bullets and collision detection',
      'Score and saved high score, with a reset option',
      'Sound on/off and pause'
    ],
    gallery: [
      { src: 'shots/bee-buster.jpg', alt: 'The game’s player, fireball and bee enemy sprites', wide: true }
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/Muhammad-Zain-Naseer/unity-games-LFS' }]
  },
  {
    slug: 'dht-filevault',
    name: 'DHT FileVault',
    short: 'DHT<br>Vault',
    badge: 'Distributed Systems',
    c: 'radial-gradient(circle at 10% 10%, #3f64e9aa, transparent 55%), radial-gradient(circle at 90% 90%, #3fe9c466, transparent 55%), #070a14',
    desc: 'Distributed hash table built from scratch with consistent hashing, node replication and fault tolerance.',
    tags: ['Python', 'Distributed Systems', 'Consistent Hashing'],
    context: ['A file store spread across many nodes, built from scratch to learn how distributed hash tables stay correct when nodes come and go.'],
    features: [
      'Consistent hashing for key distribution',
      'Node replication for redundancy',
      'Fault tolerance: graceful handling of node failures'
    ]
  }
];

// Display order on the home page and for previous/next links.
const PROJECT_ORDER = [
  'flowparallel', 'whatsapp-ai-assistant', 'ai-lead-follow-up', 'lums-opportunities',
  'hersafar', 'tandurust-pakistan', 'ustaadonline',
  'atom-manager', 'sensai', 'darbaar', 'structure-from-motion', 'urdu-news-classifier',
  'top-view-scene-mapping', '2d-shooting-game', 'dht-filevault'
];
window.PROJECTS.sort((a, b) => {
  const i = slug => (PROJECT_ORDER.indexOf(slug) + 1 || 999);
  return i(a.slug) - i(b.slug);
});
