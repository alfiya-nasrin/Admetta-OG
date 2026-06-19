import happinessBox from "../assets/css/posters/Happiness-box-story.jpg";
import happinessBoxWebp from "../assets/css/posters/Happiness-box-story.webp";
import vivoV70 from "../assets/css/posters/VIVO V70 story.jpg";
import vivoV70Webp from "../assets/css/posters/VIVO V70 story.webp";
import addisEid from "../assets/css/posters/addis eid.jpg";
import addisEidWebp from "../assets/css/posters/addis eid.webp";
import dripzSummer from "../assets/css/posters/dripz summer delight story.jpg";
import dripzSummerWebp from "../assets/css/posters/dripz summer delight story.webp";
import koottanadHappyaan from "../assets/css/posters/koottanad happyaan.jpg";
import koottanadHappyaanWebp from "../assets/css/posters/koottanad happyaan.webp";
import koottandainBest from "../assets/css/posters/koottandain best.jpg";
import koottandainBestWebp from "../assets/css/posters/koottandain best.webp";
import lenrahEaster from "../assets/css/posters/lenrah-easter copy.jpg";
import lenrahEasterWebp from "../assets/css/posters/lenrah-easter copy.webp";
import lenrahLabour from "../assets/css/posters/lenrah-labour day copy.jpg";
import lenrahLabourWebp from "../assets/css/posters/lenrah-labour day copy.webp";
import mobileEid from "../assets/css/posters/mobile gallery eid story.jpg";
import mobileEidWebp from "../assets/css/posters/mobile gallery eid story.webp";
import moccaLabour from "../assets/css/posters/mocca-labour day copy.jpg";
import moccaLabourWebp from "../assets/css/posters/mocca-labour day copy.webp";
import ramadanBallathe from "../assets/css/posters/ramadan kareem ballathe story.jpg";
import ramadanBallatheWebp from "../assets/css/posters/ramadan kareem ballathe story.webp";
import ramadanMobile from "../assets/css/posters/ramdan kareem mobile gallery story.jpg";
import ramadanMobileWebp from "../assets/css/posters/ramdan kareem mobile gallery story.webp";
import samsungMobile from "../assets/css/posters/samsung mobile gallery story.jpg";
import samsungMobileWebp from "../assets/css/posters/samsung mobile gallery story.webp";
import vishuLenrah from "../assets/css/posters/vishu lenrah story.jpg";
import vishuLenrahWebp from "../assets/css/posters/vishu lenrah story.webp";

export const posters = [
  { id: "happiness-box", src: happinessBox, srcWebp: happinessBoxWebp, title: "Happiness Box Story", size: "2x2" },
  { id: "vivo-v70", src: vivoV70, srcWebp: vivoV70Webp, title: "VIVO V70 Story", size: "2x1" },
  { id: "mocca-labour", src: moccaLabour, srcWebp: moccaLabourWebp, title: "Mocca Labour Day", size: "1x1" },
  { id: "dripz-summer", src: dripzSummer, srcWebp: dripzSummerWebp, title: "Dripz Summer Delight", size: "1x1" },
  { id: "koottanad-happyaan", src: koottanadHappyaan, srcWebp: koottanadHappyaanWebp, title: "Koottanad Happyaan", size: "1x1" },
  { id: "koottandain-best", src: koottandainBest, srcWebp: koottandainBestWebp, title: "Koottandain Best", size: "1x1" },
  { id: "lenrah-easter", src: lenrahEaster, srcWebp: lenrahEasterWebp, title: "Lenrah Easter", size: "1x1" },
  { id: "lenrah-labour", src: lenrahLabour, srcWebp: lenrahLabourWebp, title: "Lenrah Labour Day", size: "1x1" },
  { id: "mobile-eid", src: mobileEid, srcWebp: mobileEidWebp, title: "Mobile Gallery Eid", size: "1x1" },
  { id: "addis-eid", src: addisEid, srcWebp: addisEidWebp, title: "Addis Eid", size: "1x2" },
  { id: "ramadan-ballathe", src: ramadanBallathe, srcWebp: ramadanBallatheWebp, title: "Ramadan Kareem Ballathe", size: "1x1" },
  { id: "ramadan-mobile", src: ramadanMobile, srcWebp: ramadanMobileWebp, title: "Ramadan Mobile Gallery", size: "1x1" },
  { id: "samsung-mobile", src: samsungMobile, srcWebp: samsungMobileWebp, title: "Samsung Mobile Gallery", size: "1x1" },
  { id: "vishu-lenrah", src: vishuLenrah, srcWebp: vishuLenrahWebp, title: "Vishu Lenrah", size: "1x1" },
  // 15th slot — alternate crop of VIVO for even 3×5 grid (only 14 source files on disk)
  { id: "vivo-v70-accent", src: vivoV70, srcWebp: vivoV70Webp, title: "VIVO V70 Story", size: "1x1", crop: "center 35%" },
];
