# Obsidian Music Library 🎵

**Obsidian** is a minimalist, dark-themed music library web app created for **WEB222 Assignment 6**. It showcases a curated list of rock-focused songs and artists, allowing users to browse music and request new artists to be added. This project was built using HTML5, CSS, and JavaScript, with modern modular practices and Parcel bundling.

---

## 🌟 Features

- 🎸 Dynamic rendering of song cards and artist info
- 🎯 Newsletter signup form (validates email, posts to httpbin)
- 📝 Artist request form with:
  - Name input
  - Genre selection using `<datalist>` (with autocomplete + custom genre option)
  - Social media URLs (single field, comma-separated)
  - Dynamic song/video URL fields (add as many as needed)
  - Checkbox for explicit lyrics
  - Long description textarea
- 🎨 Fully responsive, dark UI design inspired by modern music brands
- 📦 Built with [Parcel](https://parceljs.org/) for modular JS and asset handling

---

## 📁 Project Structure

```
src/
├── assets/           # Static images (covers, logo, icons)
├── css/              # Root, animation, and theme stylesheets
├── js/               # Modular scripts: app.js, songs.js, artists.js
├── pages/            # requestSinger.html
├── index.html        # Main entry point
```

---

## 🚀 How to Run

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Open in browser:
```
http://localhost:8080
```

---

## 📦 Submission Command

```bash
npm run prepare-submission
```
This will format the code, validate scripts, and create `assignment-4.zip` for upload.

---

## 🙋 About
Built with ❤️ by [Arash Kheirollahi](https://github.com/arashkkh) as part of Seneca College's Web Programming course.

---

## 📜 License
This project is for academic purposes. All rights reserved © 2025 Arash Kh.