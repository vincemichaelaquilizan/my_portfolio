# 🎨 Portfolio — Vince Michael Aqilizan

A Nuxt 4 portfolio built with **pure SCSS** (no Tailwind), organized for easy content editing.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`

---

## ✏️ How to Edit Content

**All your personal content lives in one file:**

```
app/content.config.js
```

Open it and edit each section — no need to touch the Vue components at all.

### Sections you can edit:

| Export | What it controls |
|--------|-----------------|
| `SITE` | Page title & favicon |
| `NAV` | Your name + navigation links |
| `HERO` | Hero/title page — year, heading, roles typewriter |
| `ABOUT` | Bio, email, location, education, skills, tech bars |
| `SHOWCASE` | Project cards — title, description, image, URL, tags |
| `CERTIFICATIONS` | Cert cards — title, issuer, date, link |
| `REVIEWS` | Testimonials — name, role, rating, quote (leave `[]` to hide section) |
| `SOCIAL` | Social media links & icons |
| `MUSIC` | Music player track list |

---

## 📁 Project Structure

```
app/
├── content.config.js          ← 🔑 Edit your content here
├── app.vue                    ← Root layout (sections listed here)
├── assets/
│   └── css/
│       └── main.scss          ← Global styles, design tokens
└── components/
    ├── titlePage.vue          ← Hero section
    ├── AboutMe.vue            ← About section
    ├── myContent.vue          ← Showcase/projects
    ├── Certifications.vue     ← Certifications
    ├── Reviews.vue            ← Testimonials
    ├── SocialMedia.vue        ← Social links
    ├── MusicPlayer.vue        ← Floating music player
    └── reuse/
        ├── navBar.vue         ← Navbar (desktop + mobile)
        ├── comicBorder.vue    ← Manga dot borders
        ├── customCards.vue    ← Project cards
        ├── labelPageTitle.vue ← Pill label tag
        └── progressBar.vue   ← Skill progress bars
```

---

## 🎵 Music Player

1. Add your `.mp3` files to `public/music/`
2. Edit `MUSIC.tracks` in `content.config.js`:

```js
{
  id: 1,
  title: 'My Song',
  artist: 'Artist Name',
  cover: '/music/cover.jpg',
  src: '/music/my-song.mp3',   // ← put your file here
}
```

---

## 🎨 Design Tokens

Change colors/fonts globally in `app/assets/css/main.scss` under `:root {}`:

```scss
:root {
  --color-accent: #e8b84b;    // Gold accent color
  --font-title:   'Bungee', sans-serif;
  --font-body:    'Saira', sans-serif;
}
```

---

## 📦 Build for Production

```bash
npm run generate   # Static site output
# or
npm run build      # SSR build
```
