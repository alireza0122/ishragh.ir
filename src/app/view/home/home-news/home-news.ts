import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

type DataType = {
  img: string;
  title: string;
};

@Component({
  selector: 'app-home-news',
  imports: [CarouselModule],
  templateUrl: './home-news.html',
  styleUrl: './home-news.scss',
})
export class HomeNews {
  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    rtl: true,

    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
        margin: 30,
      },
      375: {
        items: 1,
        stagePadding: 50,
        margin: 30,
      },
      425: {
        items: 1,
        stagePadding: 50,
        margin: 30,
      },

      484: {
        items: 3,
        // stagePadding: 50,
        margin: 30,
      },

      610: {
        items: 4,
        margin: 30,
        stagePadding: 30,
      },
      768: {
        items: 4,
        margin: 30,
        stagePadding: 30,
      },
      992: {
        items: 1,
        margin: 35,

        // stagePadding: 50  ,
      },
      1024: {
        items: 1,
        margin: 35,

        // stagePadding: 50  ,
      },
      1040: {
        items: 4,
        margin: 35,

        stagePadding: 30,
      },
    },
  };

  newsdata: DataType[] = [
    {
      img: '/img/u9LArC2M18QwdnhOvgC9vm9y16Dhj4VoHiyEmc4l.jpg',
      title: 'دریافت گواهی‌ دانش‌بنیانی توسط یکی دیگر از شرکت‌های مرکز ...',
    },
    {
      img: '/img/c13mmkzYtCTkPZoOoa88e1PRzmcFX5lmjDqhEpx2.jpg',
      title: 'تولید امید و روایت‌گری حق؛ پاسخ اکوسیستم نوآوری به جنگ رو...',
    },
    {
      img: '/img/MRzdZb0MV0Gqd7VJQf2DNZ8zWPRcjBeLPdSmLwVX.jpg',
      title: 'گفت وگو با استراتژیست اتاق جنگ شناختی اشراق/ حضور 60 طلبه...',
    },
    {
      img: '/img/y3Vc09YqDQ77enhKlls2eUzWCQsNByaa753xmKcM.jpg',
      title: 'امت به‌مثابه فاعل راهبری در فقدان رهبر',
    },
    {
      img: '/img/Pw1fjn3oZb4RJmh1YKZmIBDWHLT9GV9unBRfkHal.jpg',
      title: 'ضرورت تجهیز جبهه مقاومت با قدرت رسانه‌های نوین از طریق تو...',
    },
    {
      img: '/img/pb7zNt8tqRAzAtcyvrw4Izu2RH4ZvHEClCvEpuLF.jpg',
      title: 'از جهان‌های موازی تا زبان مشترک با نسل نو',
    },
    {
      img: '/img/L3RwUEZ07lB9ZxVyj2CnWFOc9iDZm1zuLcHGqdqx.jpg',
      title: 'کار، هویت‌ساز و معنابخش زندگی؛ معرفی تکنیکی نوین برای طرا...',
    },
    {
      img: '/img/3wwvHliejv3h9mfFaVN8rcG0GLNRZ8l2l9WHBekw.jpg',
      title: 'توانمندسازی اقتصاد دیجیتال؛ تقویت نقش شرکت‌های خلاق و دان...',
    },
    {
      img: '/img/ZahytewJoZp5bOsUzsScMj2XWRPDxMVodLDO6WnC.jpg',
      title: 'بررسی روایت نوآورانه رسانه‌ای از احکام دختران در دهمین نش...',
    },
    {
      img: '/img/G0ecSAXowWA2sx4V4b103WMN9IzNR57ztfku40b7.jpg',
      title: 'سلسله وبینارهای آموزشی «عصر هوش مصنوعی» برگزار می‌شود',
    },
    {
      img: '/img/ilmBva6XZS0UZsUAr67qyGAAr8OKKCmKGvv0xwfz.jpg',
      title: 'قرآن کریم؛ بهترین راهنمای کسب‌وکار',
    },
    {
      img: '/img/fl6h49FmVNjwVVVjniFsXGHGyetdxeaQD7az6eRW.jpg',
      title: 'بازنمایی خلاق مفاهیم قرآنی با هوش مصنوعی/ معرفی تیم «طلبه...',
    },
    {
      img: '/img/wWki5MdwRd5pUlqY5WMIaPYrH2w0WZhJxJqwbcfr.jpg',
      title: 'وقتی فاطمیه به زبان بازی روایت می‌شود/ معرفی بازی پرونده‌...',
    },
    {
      img: '/img/hg9nBYURA4RusLfs4iXaVOerKncQL0JIWxW3XlqU.jpg',
      title: 'بازدید دانشجویان دانشگاه معارف از شعبه اصفهان مرکز نوآوری...',
    },
    {
      img: '/img/lfssnvtNyTB8O5nuw1tHSewxA9eZnTGMpF9dxbQr.jpg',
      title: 'ارائه 25 اثر تیم « طلبه Ai » در دومین گالری آثار هنری قرآ...',
    },
  ];
}
