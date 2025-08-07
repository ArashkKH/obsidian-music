/**
 * songs.js
 *
 * The app's songs information
 */

// Import all images at the top
import bohemianRhapsody from "../asset/covers/Bohemian Rhapsody.jpeg";
import dontStopMeNow from "../asset/covers/Don't Stop Me Now.jpeg";
import anotherOneBitesTheDust from "../asset/covers/Another One Bites The Dust.jpeg";
import jigsawFallingIntoPlace from "../asset/covers/Jigsaw Falling Into Place.jpeg";
import paranoidAndroid from "../asset/covers/Paranoid Android.jpeg";
import karmaPolice from "../asset/covers/Karma Police.jpeg";
import takeMeToChurch from "../asset/covers/Take Me to Church.jpeg";
import almostSweetMusic from "../asset/covers/Almost (Sweet Music).jpeg";
import cherryWineLive from "../asset/covers/Cherry Wine - Live.jpeg";
import thePot from "../asset/covers/The Pot.jpeg";
import schism from "../asset/covers/Schism.jpeg";
import parabola from "../asset/covers/Parabola.jpeg";
import chopSuey from "../asset/covers/Chop Suey!.jpeg";
import toxicity from "../asset/covers/Toxicity.jpeg";
import aerials from "../asset/covers/Aerials.jpeg";
import numb from "../asset/covers/Numb.jpeg";
import inTheEnd from "../asset/covers/In the End.jpeg";
import papercut from "../asset/covers/Papercut.jpeg";

export const songs = [
  // Radiohead
  {
    songId: "SID-100000",
    artistId: "AID-100000",
    title: "Jigsaw Falling Into Place",
    imageUrl: jigsawFallingIntoPlace,
    year: "2007",
    duration: 248,
    url: "https://open.spotify.com/track/0YJ9FWWHn9EfnN0lHwbzvV",
    explicit: false
  },
  {
    songId: "SID-100001",
    artistId: "AID-100000",
    title: "Paranoid Android",
    imageUrl: paranoidAndroid,
    year: "1997",
    duration: 387,
    url: "https://open.spotify.com/track/6LgJvl0Xdtc73RJ1mmpotq",
    explicit: false
  },
  {
    songId: "SID-100002",
    artistId: "AID-100000",
    title: "Karma Police",
    imageUrl: karmaPolice,
    year: "1997",
    duration: 264,
    url: "https://open.spotify.com/track/63OQupATfueTdZMWTxW03A",
    explicit: false
  },

  // Hozier
  {
    songId: "SID-100003",
    artistId: "AID-100001",
    title: "Take Me to Church",
    imageUrl: takeMeToChurch,
    year: "2013",
    duration: 241,
    url: "https://open.spotify.com/track/3dYD57lRAUcMHufyqn9GcI",
    explicit: true
  },
  {
    songId: "SID-100004",
    artistId: "AID-100001",
    title: "Almost (Sweet Music)",
    imageUrl: almostSweetMusic,
    year: "2019",
    duration: 229,
    url: "https://open.spotify.com/track/5Apvsk0suoivI1H8CmBglv",
    explicit: false
  },
  {
    songId: "SID-100005",
    artistId: "AID-100001",
    title: "Cherry Wine - Live",
    imageUrl: cherryWineLive,
    year: "2014",
    duration: 269,
    url: "https://open.spotify.com/track/1C042FLYy7rP3MfnkOcnha",
    explicit: false
  },

  // Tool
  {
    songId: "SID-100006",
    artistId: "AID-100002",
    title: "The Pot",
    imageUrl: thePot,
    year: "2006",
    duration: 382,
    url: "https://open.spotify.com/track/1lATXTBJDHwawvT1UfxWu3",
    explicit: true
  },
  {
    songId: "SID-100007",
    artistId: "AID-100002",
    title: "Schism",
    imageUrl: schism,
    year: "2001",
    duration: 411,
    url: "https://open.spotify.com/track/55mJleti2WfWEFNFcBduhc",
    explicit: false
  },
  {
    songId: "SID-100008",
    artistId: "AID-100002",
    title: "Parabola",
    imageUrl: parabola,
    year: "2001",
    duration: 384,
    url: "https://open.spotify.com/track/1vxu8vMNshg5J8z3oA7QJZ",
    explicit: false
  },

  // System of a Down
  {
    songId: "SID-100009",
    artistId: "AID-100003",
    title: "Chop Suey!",
    imageUrl: chopSuey,
    year: "2001",
    duration: 210,
    url: "https://open.spotify.com/track/2DlHlPMa4M17kufBvI2lEN",
    explicit: true
  },
  {
    songId: "SID-100010",
    artistId: "AID-100003",
    title: "Toxicity",
    imageUrl: toxicity,
    year: "2001",
    duration: 217,
    url: "https://open.spotify.com/track/0snQkGI5qnAmohLE7jTsTn",
    explicit: true
  },
  {
    songId: "SID-100011",
    artistId: "AID-100003",
    title: "Aerials",
    imageUrl: aerials,
    year: "2001",
    duration: 248,
    url: "https://open.spotify.com/track/4e9eGQYsOiBcftrWXwsVco",
    explicit: false
  },

  // Linkin Park
  {
    songId: "SID-100012",
    artistId: "AID-100004",
    title: "Numb",
    imageUrl: numb,
    year: "2003",
    duration: 185,
    url: "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h",
    explicit: false
  },
  {
    songId: "SID-100013",
    artistId: "AID-100004",
    title: "In the End",
    imageUrl: inTheEnd,
    year: "2000",
    duration: 216,
    url: "https://open.spotify.com/track/3tSmXSxaAnU1EPGKa6NytH",
    explicit: false
  },
  {
    songId: "SID-100014",
    artistId: "AID-100004",
    title: "Papercut",
    imageUrl: papercut,
    year: "2000",
    duration: 185,
    url: "https://open.spotify.com/track/4HvcbAR8LisalXKt7cpqE1",
    explicit: false
  },

  // Queen
  {
    songId: "SID-100015",
    artistId: "AID-100005",
    title: "Bohemian Rhapsody",
    imageUrl: bohemianRhapsody,
    year: "1975",
    duration: 354,
    url: "https://open.spotify.com/track/7tFiyTwD0nx5a1eklYtX2J",
    explicit: false
  },
  {
    songId: "SID-100016",
    artistId: "AID-100005",
    title: "Don't Stop Me Now",
    imageUrl: dontStopMeNow,
    year: "1978",
    duration: 210,
    url: "https://open.spotify.com/track/7hQJA50XrCWABAu5v6QZ4i",
    explicit: false
  },
  {
    songId: "SID-100017",
    artistId: "AID-100005",
    title: "Another One Bites The Dust",
    imageUrl: anotherOneBitesTheDust,
    year: "1980",
    duration: 215,
    url: "https://open.spotify.com/track/57JVGBtBLCfHw2muk5416J",
    explicit: false
  }
];
