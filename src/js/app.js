/**
 * WEB222 – Assignment 06
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Arash Kheirollahi
 *      Student ID: 146731245
 *      Date:       13-7-1025
 */

// const { artists, songs } = window;
import { songs } from "./songs.js";
import { artists } from "./artists.js";

function createSongCard(song) {
  // creating the whole card
  const card = document.createElement("a");
  card.classList.add("song__Card", "scrollFade");
  card.target = "_blank";
  card.href = song.url;

  // finding Artist name from the Artist ID
  const artist = artists.find((a) => a.artistId === song.artistId);
  const artistTitle = artist ? artist.name : "Unknown Artist";

  const imageUrl = song.imageUrl;

  // Adding other elemnts inside the card
  card.innerHTML = `
          <figure class="song__Card_Image">
            <img src="${imageUrl}" alt="${song.title}" />
          </figure>
          <div class="songCrad__Top">
            <div class="songCard__Name line-limit">${song.title}</div>
          </div>
          <div class="songCard__Artist">${artistTitle}</div>
    `;
  // Returning the final Card
  return card;
}

const songList = document.getElementsByClassName("songs__Cards_Wrapper")[0];

songs.forEach((song) => {
  songList.appendChild(createSongCard(song));
});

// creating randome cover images for hero section
const heroImageWrapper = document.querySelectorAll(".hero__cards_wrapper")[0];
for (let index = 0; index < 20; index++) {
  let randNum = Math.floor(Math.random() * (songs.length - 1));

  const imgUrl = songs[randNum].imageUrl;
  let heroImageCard = `<img style="--appendIndex:${index};" src="${imgUrl}" alt="${songs[randNum].title}" />`;

  heroImageWrapper.innerHTML += heroImageCard;
}
