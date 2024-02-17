export const topHeaderLinks = [
  { label: "تواصل معنا", href: "/contact" },
  { label: "سياسة الإستبدال أو الاسترجاع", href: "/contact" },
  { label: "المفضلة", href: "/contact" },
];

import delivery from "../public/delivery.png";
import charge from "../public/charge.png";
import pay from "../public/pay.png";

export const features = [
  {
    img: pay,
    title: "مدفوعات آمنة",
    description: "مدفوعات آمنة أقساط تصل إلى 12 شهرًا",
  },
  {
    img: charge,
    title: "شحن مجاني",
    description: "مدفوعات آمنة أقساط تصل إلى 12 شهرًا",
  },
  {
    img: delivery,
    title: "منتجات مضمونه",
    description: "مدفوعات آمنة أقساط تصل إلى 12 شهرًا",
  },
];

import as1 from "../public/assets/as1.png";
import as2 from "../public/assets/as2.png";

export const sales = [
  { img: as1, title: "سماعات ديجتال", description: "أفضل صوت نقي" },
  { img: as2, title: "اتف ذكي", description: "تصميم عصري" },
];

import as3 from "../public/assets/as3.png";
import as4 from "../public/assets/as4.png";
import as5 from "../public/assets/as5.png";
import as6 from "../public/assets/as6.png";
import as7 from "../public/assets/as7.png";
import as8 from "../public/assets/as8.jpeg";

export const products = [
  {
    category: "سماعات",
    img: as3,
    title: "سماعة ساوند كور كيو30 فوق الاذن",
    description: "سماعة ذات صوت عالي الدقة",
    price: 550,
    sale: 25,
  },
  {
    category: "ساعات",
    img: as4,
    title: "ساعة ذكية جديدة من سلسلة 8",
    description: "سوار رياضي اسود - عادي.",
    price: 350,
    sale: 25,
  },
  {
    img: as5,
    category: "موبايلات",
    title: "ابل ايباد برو 12.9 بوصة واي فاي",
    description: "شاشة ليكويد ريتينا اكس دي ار رائعة مقاس 11",
    price: 350,
    sale: 25,
  },
  {
    img: as6,
    category: "موبايلات",
    title: "موبايل ابل ايفون 14 (128 جيجابايت) ",
    description: "شاشة سوبر ريتينا XDR مقاس 6.1 بوصة",
    price: 520,
    sale: 0,
  },
  {
    img: as8,
    category: "ساعات",
    title: "ساعة ذكية جديدة من سلسلة 8",
    description: "سوار رياضي اسود - عادي.",
    price: 320,
    sale: null,
  },
  {
    category: "سماعات",
    img: as7,
    title: "سماعات ايربودز 3 سيم اوريجينال",
    description: "سماعة ذات صوت عالي الدقة",
    price: 425,
    sale: 0,
  },
];

import c1 from "../public/categories/c1.jpeg";
import c2 from "../public/categories/c2.jpeg";
import c3 from "../public/categories/c3.jpeg";
import c4 from "../public/categories/c4.jpeg";
import c5 from "../public/categories/c5.jpeg";
import c6 from "../public/categories/c6.jpeg";

export const categories = [
  {
    img: c1,
    label: "سماعات أذن",
    quantity: 150,
  },
  {
    img: c2,
    label: "شاشات كمبيوتر",
    quantity: 11,
  },
  {
    img: c3,
    label: "موبايلات",
    quantity: 1200,
  },
  {
    img: c4,
    label: "ساعات رقمية",
    quantity: 12,
  },
  {
    img: c5,
    label: "سماعات",
    quantity: 31,
  },
  {
    img: c6,
    label: "أجهزة لابتوب",
    quantity: 23,
  },
];

import p1 from "../public/preview/p1.png";
import p2 from "../public/preview/p2.png";
import p3 from "../public/preview/p3.png";
import pf from "../public/preview/pf.png";

export const preview = [
  {
    img: p1,
    title: "سماعات ديجتال",
    description: "أفضل صوت نقي",
  },
  {
    img: p2,
    title: "سماعات ديجتال",
    description: "أفضل صوت نقي",
  },
  {
    img: p3,
    title: "سماعات ديجتال",
    description: "أفضل صوت نقي",
  },
  {
    img: pf,
    title: "سماعات ديجتال",
    description: "أفضل صوت نقي",
  },
];

import as9 from "../public/assets/as9.jpeg";

export const productsInSale = [
  {
    category: "سماعات",
    img: as9,
    title: "سماعة ساوند كور كيو30 فوق الاذن",
    description: "سماعة ذات صوت عالي الدقة",
    price: 550,
    sale: 25,
    rate: 3,
    endDate: "",
  },
  {
    category: "ساعات",
    img: as9,
    title: "ساعة ذكية جديدة من سلسلة 8",
    description: "سوار رياضي اسود - عادي.",
    price: 350,
    sale: 25,
    rate: 4.5,
    endDate: "",
  },
];

import n1 from "../public/newest/p1.png";
import n2 from "../public/newest/p2.png";
import n3 from "../public/newest/p3.png";
import { title } from "process";

export const newest = [
  {
    img: n1,
    title: "معالجة أسرع وأكثر ثراءً",
    features:
      "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
  },
  {
    img: n2,
    title: "معالجة أسرع وأكثر ثراءً",
    features:
      "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
  },
  {
    img: n3,
    title: "معالجة أسرع وأكثر ثراءً",
    features:
      "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
  },
];

export const comments = [
  {
    by: "محمد السيد",
    profession: "مهندس إستشارى لدى شركة سلة",
    comment:
      "استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً",
    rate: 4,
  },
  {
    by: "محمد السيد",
    profession: "مهندس إستشارى لدى شركة سلة",
    comment:
      "استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً",
    rate: 3,
  },
  {
    by: "محمد السيد",
    profession: "مهندس إستشارى لدى شركة سلة",
    comment:
      "استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً",
    rate: 1,
  },
];

export const footerLinks: {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}[] = [
  {
    title: "تواصل معنا",
    links: [
      { title: "واتساب", href: "/" },
      { title: "موبايل", href: "/" },
      { title: "البريد ", href: "/" },
    ],
  },
  {
    title: "روابط مهمة",
    links: [
      { title: "من نحن", href: "/" },
      { title: "ساسية الخصوصية", href: "/" },
      { title: "الشروط والاحكام", href: "/" },
      { title: "الدعم الفنى", href: "/" },
    ],
  },
  {
    title: "حسابى",
    links: [
      { title: "حسابى", href: "/" },
      { title: "طلباتى", href: "/" },
      { title: "سلة المشتريات", href: "/" },
      { title: "المفضلة", href: "/" },
    ],
  },
];

import facebook from "../public/social-media/facebook.png";
import twiter from "../public/social-media/twiter.png";
import instagram from "../public/social-media/instagram.png";

export const socialMedia = [
  { img: facebook, link: "", label: "facebook" },
  { img: twiter, link: "", label: "twiter" },
  { img: instagram, link: "", label: "instagram" },
];
