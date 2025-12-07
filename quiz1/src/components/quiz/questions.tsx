import { useState, type ReactNode } from "react";
import "./quiz.style.css";
import { Link } from "react-router-dom";






const questions = [
  {
    Question: "Í hvaða bæjarfélagi er NTV skólinn?",
    Options: ["Reykjavík", "Akureyri", "Kópavogur"],
    correctAnswer: "Kópavogur",
    wrongAnswer: ["Reykjavík", "Akureyri"]
  },
  {
    Question: "Hvað er höfuðborgin í Reykjavík?",
    Options: ["Miðbærinn", "Mjóddin", "Grafarvogur", "...ha?"],
    correctAnswer: "...ha?",
    wrongAnswer: ["Miðbærinn", "Mjóddin", "Grafarvogur"]
  },
  {
    Question: "Hvað hét gamla höfuðborgin í Japan á undan Tókýó?",
    Options: ["Kyoto", "Edo", "Shinjuku"],
    correctAnswer: "Edo",
    wrongAnswer: ["Kyoto", "Shinjuku"]
  },
   {
    Question: "Hvenær var internetið, í sinni núverandi mynd, fyrst sett á laggirnar?",
    Options: ["1990", "1989", "1994", "1974"],
    correctAnswer: "1989",
    wrongAnswer: ["1990", "1994", "1974"]
  },
  {
    Question: "Hver af þessum strætóleiðum fer EKKI í Grafarvog?",
    Options: ["6", "15", "18", "24"],
    correctAnswer: "15",
    wrongAnswer: ["6", "18", "24"]
  },
  {
    Question: "Í hvaða borg hefur Nintendo höfuðstöðvar sýnar?",
    Options: ["Kyoto", "Tokyo", "New York"],
    correctAnswer: "Kyoto",
    wrongAnswer: ["Tokyo", "New York"]
  },
   {
    Question: "Hvað heitir fyrsta íslenska forritunarmálið?",
    Options: ["CSS", "Þ", "Fjölnir"],
    correctAnswer: "Fjölnir",
    wrongAnswer: ["CSS", "Þ"]
  },
   {
    Question: "Hvað heitir pabbi Abigails í StardewValley?",
    Options: ["Willy", "Lewis", "Pierre", "Demetrius"],
    correctAnswer: "Pierre",
    wrongAnswer: ["Willy", "Lewis", "Demetrius"]
  },
  {
    Question: "Hverskonar kvikindi er Tom Nook í Animal Crossing?",
    Options: ["Krókódíll", "Dreki", "Tanuki", "Kirin"],
    correctAnswer: "Tanuki",
    wrongAnswer: ["Krókódíll", "Dreki", "Kirin"]
  },
  {
    Question: "Hvenær kom fyrsta Apple tölvan út?",
    Options: ["1976", "1977", "1984", "2001"],
    correctAnswer: "1976",
    wrongAnswer: ["1977", "1984", "2001"]
  },
   {
    Question: "Hvað er uppáhaldsliturinn minn?",
    Options: ["Brúnn", "Bleikur", "Fjólublár"],
    correctAnswer: "Fjólublár",
    wrongAnswer: ["Brúnn", "Bleikur"]
  },
];

export default questions;