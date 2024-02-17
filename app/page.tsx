import Hero from "@/components/Hero/Hero";
import Label from "@/components/Products/Label";
import Products from "@/components/Products/Products";
import Features from "@/components/UI/Features";
import Sales from "@/components/UI/Sales";
import Banner from "@/components/UI/Banner";
import Sale from "@/components/Products/Sale";
import Newest from "@/components/UI/Newest";
import VideoBanner from "@/components/UI/VideoBanner";
import Comments from "@/components/Comments/Comments";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Sales className="gap-x-4" />
      <Label
        title="منتجات مميزة"
        description="تسوق احدث المنتجات المميزة المضافة جديد"
        buttonTxt="عرض الكل"
      />
      <Products />
      <Banner />
      {/* <Label
        title="تسوق حسب الفئات"
        description="تسوق احدث المنتجات المميزة المضافة جديد"
        buttonTxt="عرض الكل"
      /> */}
      {/* <Sales data={preview} className="gap-4" /> */}
      <Label
        title="عروض تنتهى قريبا"
        description="تسوق احدث المنتجات المميزة المضافة جديد"
        buttonTxt="عرض الكل"
      />
      <Sale />
      {/* <Label
        title="وصل حديثا"
        description="تسوق احدث المنتجات المميزة المضافة جديد"
        buttonTxt="عرض الكل"
      /> */}
      {/* <Newest /> */}
      {/* <VideoBanner /> */}
      {/* <Label
        title="آراء العملاء"
        description="بيتم استعراض بعض آراء وتعليقات المستخدمين"
        buttonTxt="عرض الكل"
      /> */}
      {/* <Comments /> */}
    </main>
  );
}
