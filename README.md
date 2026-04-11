
# Scalence Academy

> *Where Potential Meets Purpose - Results That Speak*

A coaching institute landing page that opens with a scoreboard instead of a hero, because results are the only pitch that matters. Built for JEE, NEET, MHT-CET and Foundation coaching in Pune.

**Live Site:** [Scalence-Academy](https://scalence-academy.vercel.app) <!-- Replace with your Vercel URL -->

---

## The Idea Behind This

Most coaching websites look the same - hero image, "why choose us" cards, testimonials, contact form. This one doesn't.

It opens with **THE SCOREBOARD** - a newspaper-style results table showing real ranks and colleges secured. Students either feel the pull immediately or they don't. No soft selling.

Four interactive elements make this unique:

| Feature | What it does |
|---|---|
| **Exam Selector** | Click JEE / NEET / MHT-CET - courses, faculty and toppers filter instantly |
| **Day Timeline** | Animated vertical timeline showing a full day at the institute |
| **Audience Toggle** | Switch between Student and Parent testimonials |
| **Seat Grid** | 35 circles per batch - filled seats go dark, under 5 remaining pulses red |

All four run purely on React `useState` - no external libraries.

---

## Tech Stack

- **Next.js** — App Router
- **Tailwind CSS** — design tokens via CSS variables
- **Framer Motion** — scroll animations, timeline line draw, stagger reveals
- **React Icons** — icon library
- **Google Fonts** — Montserrat + Nunito

---

## Color Palette

```
Deep Red    #C41230   — primary, CTAs, accents
Dark Navy   #1A1A2E   — secondary, dark sections, footer
Warm Cream  #FFFDF9   — background
Surface     #FBF8F2   — section backgrounds
```


---

## Project Structure

```
├── app/
│   ├── globals.css          # design tokens, section-badge arrow shape, utilities
│   ├── layout.js            # Montserrat + Nunito, full SEO metadata
│   └── page.js
├── components/
│   ├── ui/
│   │   ├── AnimatedSection.jsx
│   │   └── Button.jsx       # primary / outline / cream / ghost variants
│   ├── interactive/
│   │   ├── ExamSelector.jsx # useState — filters courses, faculty, toppers by exam
│   │   ├── DayTimeline.jsx  # animated vertical timeline with line draw on scroll
│   │   ├── AudienceToggle.jsx # useState — student / parent testimonial switch
│   │   └── SeatGrid.jsx     # useState — visual seat availability with urgency pulse
│   ├── ResultsWall.jsx      # scoreboard opening + results ticker tape
│   ├── Hero.jsx             # static geometric layout with achievement cards
│   ├── WhyUs.jsx            # dark navy numbered manifesto
│   ├── Enrollment.jsx       # WhatsApp redirect form
│   ├── Contact.jsx          # dark split panel with map
│   └── Footer.jsx           # CTA strip + stats + animated hover links
└── data/
    └── coachingData.js      # all content in one file
```

---


## License

© 2026 Nihal Gavandi. All rights reserved.

This repository is public for portfolio viewing only. Do not copy, reuse, or redistribute without written permission.
