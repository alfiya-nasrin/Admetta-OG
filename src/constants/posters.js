import happinessBox from "../assets/css/posters/Happiness-box-story.jpg";
import vivoV70 from "../assets/css/posters/VIVO V70 story.jpg";
import addisEid from "../assets/css/posters/addis eid.jpg";
import dripzSummer from "../assets/css/posters/dripz summer delight story.jpg";
import koottanadHappyaan from "../assets/css/posters/koottanad happyaan.jpg";
import koottandainBest from "../assets/css/posters/koottandain best.jpg";
import lenrahEaster from "../assets/css/posters/lenrah-easter copy.jpg";
import lenrahLabour from "../assets/css/posters/lenrah-labour day copy.jpg";
import mobileEid from "../assets/css/posters/mobile gallery eid story.jpg";
import moccaLabour from "../assets/css/posters/mocca-labour day copy.jpg";
import ramadanBallathe from "../assets/css/posters/ramadan kareem ballathe story.jpg";
import ramadanMobile from "../assets/css/posters/ramdan kareem mobile gallery story.jpg";
import samsungMobile from "../assets/css/posters/samsung mobile gallery story.jpg";
import vishuLenrah from "../assets/css/posters/vishu lenrah story.jpg";

export const posters = [
  { id: "happiness-box", src: happinessBox, title: "Happiness Box Story", size: "2x2" },
  { id: "vivo-v70", src: vivoV70, title: "VIVO V70 Story", size: "2x1" },
  { id: "mocca-labour", src: moccaLabour, title: "Mocca Labour Day", size: "1x1" },
  { id: "dripz-summer", src: dripzSummer, title: "Dripz Summer Delight", size: "1x1" },
  { id: "koottanad-happyaan", src: koottanadHappyaan, title: "Koottanad Happyaan", size: "1x1" },
  { id: "koottandain-best", src: koottandainBest, title: "Koottandain Best", size: "1x1" },
  { id: "lenrah-easter", src: lenrahEaster, title: "Lenrah Easter", size: "1x1" },
  { id: "lenrah-labour", src: lenrahLabour, title: "Lenrah Labour Day", size: "1x1" },
  { id: "mobile-eid", src: mobileEid, title: "Mobile Gallery Eid", size: "1x1" },
  { id: "addis-eid", src: addisEid, title: "Addis Eid", size: "1x2" },
  { id: "ramadan-ballathe", src: ramadanBallathe, title: "Ramadan Kareem Ballathe", size: "1x1" },
  { id: "ramadan-mobile", src: ramadanMobile, title: "Ramadan Mobile Gallery", size: "1x1" },
  { id: "samsung-mobile", src: samsungMobile, title: "Samsung Mobile Gallery", size: "1x1" },
  { id: "vishu-lenrah", src: vishuLenrah, title: "Vishu Lenrah", size: "1x1" },
  // 15th slot — alternate crop of VIVO for even 3×5 grid (only 14 source files on disk)
  { id: "vivo-v70-accent", src: vivoV70, title: "VIVO V70 Story", size: "1x1", crop: "center 35%" },
];
