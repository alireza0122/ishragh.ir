import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

type DataTypeFanos = {
  img: string;
  title: string;
  user: string;
  part: number;
};
type DataTypeKarizman = {
  img: string;
  title: string;
  StartTime: string;
  EndTime: string;
};

type DalItem = {
  id: number;
  title: string;
  logo: string;
  color: string;
  type: string;
  person: {
    name: string;
    position: string;
    image: string;
  };

  activityLevel: string;

  categories: string[];

  number: string;
  numberValue: string;

  bgCategory: string;
};


type DataTypeSoog = {
  img: string;
  title: string;
  melli: string;
  melliNumber: number;
  date:string
};

@Component({
  selector: 'app-home-escape',
  imports: [CarouselModule],
  templateUrl: './home-escape.html',
  styleUrl: './home-escape.scss',
})
export class HomeEscape {
  customOptions: OwlOptions = {
    // loop: true,
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
        stagePadding: 30,
      },
      576: {
        items: 2,
        stagePadding: 80,
      },
      768: {
        items: 3,
        stagePadding: 50,
      },
      992: {
        items: 4,
        stagePadding: 30,
      },
    },
  };
  Fanos: DataTypeFanos[] = [
    {
      img: '/img/3zy8PsNkn2e1s3R8h87KREP2nohC6UoJl8HfIFEA.jpg',
      title: 'طراحی استارت‌آپ فرهنگی',
      part: 11,
      user: 'دکتر باباخان',
    },
    {
      img: '/img/WEP3KM4kORJUZpuYN3duP2HVygeUvKltvAZSckE8.jpg',
      title: 'صنایع خلاق پیشران',
      part: 16,
      user: 'استاد محمد قطبی',
    },
    {
      img: '/img/lbcNxoA8wTsckHYDxJprdtqw8rTxeFsoNvrG1osr.jpg',
      title: 'ارائه مؤثر ایده',
      part: 7,
      user: 'استاد نواب',
    },
    {
      img: '/img/QWUw6ABogReKd4XdXLB6RHmlLeqfUUCRkA45FzKQ.png',
      title: 'آموزش ایده‌پردازی',
      part: 21,
      user: 'ایده میده',
    },
    {
      img: '/img/W5nvmr54nl7uuLezo3UJukHLZVdvnpIqFkzhtKJS.jpg',
      title: 'تیم‌سازی و کار تیمی',
      part: 7,
      user: 'استاد رضا نفری',
    },
    {
      img: '/img/6F5AXto6bOU5ll8T81F6pSBmXhtlg4L8RAciVQOY.jpg',
      title: 'ضبط و تدوین صوت',
      part: 12,
      user: ' استاد حمیدرضا شمسایی',
    },
    {
      img: '/img/sZ9aQ6B9u1CAZNVb7Ld9kRXvCoImCXZ4vnuZOY8k.jpg',
      title: 'مدیریت صفحات مجازی',
      part: 10,
      user: 'استاد مهرداد شاهسنایی',
    },
    {
      img: '/img/k5Ig4BopDzYgQjm8WOhOL46D9rTputIhvC9BQcav.jpg',
      title: 'کارگاه طراحی بوم',
      part: 9,
      user: 'استاد چپریان',
    },
    {
      img: '/img/K5Bp4GwyKLC1bglajK3lnDgkPrSxvPDVrZBXOxyu.jpg',
      title: 'آموزش فتوشاپ (فارسی)',
      part: 29,
      user: 'آپگراف',
    },
    {
      img: '/img/Gb2vrx1fCi2wA1O0QoUJROs15uWwExX9Vb6TUCEZ.jpg',
      title: 'کارآفرینی فرهنگی',
      part: 18,
      user: 'استاد نوید ادریس',
    },
  ];

  karizman: OwlOptions = {
    // loop: true,
    margin: 20,
    nav: false,
    dots: false,

    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    rtl: true,

    responsive: {
      0: {
        items: 1 ,
        stagePadding: 10,
      },
      576: {
        items: 2,
        stagePadding: 40,
      },
      768: {
        items: 2,
        stagePadding: 60,
      },
      992: {
        items: 2,
        stagePadding: 80,
      },
    },
  };
  karizmanData: DataTypeKarizman[] = [
    {
      img: '/img/mvBTmDqZ73gxnzboDmB5cQ9K2PCRHYmE5IGMcY36_.png',
      title: 'رویداد ایده پردازی هم سرنوشت',
      StartTime: 'از 12 اردیبهشت 1405',
      EndTime: 'تا 12 اردیبهشت 1406',
    },
    {
      img: '/img/B0hjpLIPvQUbOawVl6w7csHyNuDLnO7J2aWhoOHn_.png',
      title: 'خدمات خلاق',
      StartTime: 'از 08 آذر 1403',
      EndTime: ' تا 06 تیر 1404',
    },
    {
      img: '/img/p5BbSUizKU9s8cpJyYUk1deWHZdPkjuLwtoouXBo_.png',
      title: 'رویداد ایده‌پردازی در حوزه یاددهی و یادگیری',
      StartTime: 'از 20 دی 1403',
      EndTime: ' تا 31 اردیبهشت 1404',
    },
    {
      img: '/img/TsVKA99G6ObBGSApAzOHIiqd7xyB3YjYJ5YAa6pv_.png',
      title: 'دومین رویداد ملّی رشدآوند',
      StartTime: 'از 06 اسفند 1403',
      EndTime: 'تا 20 آذر 1404',
    },
    {
      img: '/img/4MasAsFClysCWU7pikcoblTvNQ9z3l16wyB0X7vZ_.png',
      title: 'دومین رویداد ملی نوآوری و ایده پردازی مهدوی',
      StartTime: 'از 17 اسفند 1401',
      EndTime: 'تا 27 اردیبهشت 1402',
    },
    {
      img: '/img/Id8JudeaottVBFO4KYkTe0riyzcurWmEo8PwOGi3_.png',
      title: 'تدبیرگران؛ رویداد شبیه سازی حل مساله',
      StartTime: 'از 01 تیر 1404',
      EndTime: 'تا 24 آبان 1404',
    },
    {
      img: '/img/yDxLkOmVQVc89nApHSIuYxksNO6afemqO2rv7wXQ_.png',
      title: 'رویداد تبادل فناوری اطلاعات',
      StartTime: 'از 01 اردیبهشت 1402',
      EndTime: ' تا 30 آبان 1402',
    },
    {
      img: '/img/m22kcCEI5LZ3XI01kemI13q78zZeyGljXvDbKUPa_.png',
      title: 'رویداد ایده پردازی سبک زندگی رضوی',
      StartTime: 'از 20 شهریور 1402',
      EndTime: ' تا 10 مهر 1402',
    },
  ];

  daldata: DalItem[] = [
    {
      id: 1,
      title: 'فیتشو',
      logo: '/img/zpepVu0iBb921nMY9bH9PqiAl3rUk5SWgJudaxA7.jfif',

      person: {
        name: 'طاهره جعفرزاده',
        position: 'مدیرعامل',
        image: '/img/UL8EFy7mu5xvBGboSvnWvstLI70LESxIESi6qUl7.jfif',
      },
      type: 'تیم ایده',
      activityLevel: 'سطح فعالیت',

      categories: ['MP'],

      number: '۱/۴',
      color: '#f57f30',
      bgCategory: '#F3E4D8',
      numberValue: '1',
    },
    {
      id: 2,
      title: 'مدرسه کارآمد',
      logo: '/img/VOO9HXQodiJHn5BToONnojEzRJVTlAIqImVZFSsM.jpg',

      person: {
        name: 'سید مهدی روحبخش',
        position: 'مدیرعامل',
        image: '/img/hU5FD7IeOFoiE1MNUfaJ5yYGm7oVo3VLJFa7RVpf.png',
      },
      type: 'تیم ایده',
      activityLevel: 'سطح فعالیت',

      categories: ['Ideas', 'BM'],

      number: '۱/۴',
      color: '#f57f30',
      bgCategory: '#F3E4D8',
      numberValue: '1',
    },
    {
      id: 3,
      title: 'آکادمی اسکرین شات',
      logo: '/img/2xpeV5JhEdFUTHVRXryOUntblks63WSt92OOr2b1.png',

      person: {
        name: ' مصطفی حیدری',
        position: 'مدیرعامل',
        image: '/img/hU5FD7IeOFoiE1MNUfaJ5yYGm7oVo3VLJFa7RVpf.png',
      },
      type: 'تیم ایده',
      activityLevel: 'سطح فعالیت',

      categories: ['Ideas', 'BM'],

      number: '2/۴',
      color: '#c41321',
      bgCategory: '#f9e7e8',
      numberValue: '2',
    },
    {
      id: 1,
      title: 'کارنوج',
      logo: '/img/1edqKAEaUpkIRYOFtUdBBZe8lslAeKyBKch8jFhI.png',

      person: {
        name: 'سید احمد رضوی‌نژاد',
        position: 'مدیرعامل',
        image: '/img/hU5FD7IeOFoiE1MNUfaJ5yYGm7oVo3VLJFa7RVpf.png',
      },
      type: 'تیم ایده',
      activityLevel: 'سطح فعالیت',

      categories: ['Ideas', 'BM'],

      number: '3/۴',
      color: '#c41321',
      bgCategory: '#f9e7e8',
      numberValue: '3',
    },
  ];

  Soogdata: DataTypeSoog[] = [
    {
      img: '/img/IMuevppK6Jgvlrv1jQkC9kL2gZHRDv2U3Y1rHLc8.jpg',
      title: 'موسسه قرآنی تسنیم لنجان',
      melli: 'شناسه ملی',
      melliNumber: 10980211432,
      date: ' 1401/03/27   15 آذرماه 1400 '
    },
    {
      img: '/img/IMuevppK6Jgvlrv1jQkC9kL2gZHRDv2U3Y1rHLc8.jpg',
      title: 'موسسه قرآنی تسنیم لنجان',
      melli: 'شناسه ملی',
      melliNumber: 10980211432,
      date: ' 1401/03/27   15 آذرماه 1400 '
    },
    {
      img: '/img/IMuevppK6Jgvlrv1jQkC9kL2gZHRDv2U3Y1rHLc8.jpg',
      title: 'موسسه قرآنی تسنیم لنجان',
      melli: 'شناسه ملی',
      melliNumber: 10980211432,
      date: ' 1401/03/27   15 آذرماه 1400 '
    },
    {
      img: '/img/IMuevppK6Jgvlrv1jQkC9kL2gZHRDv2U3Y1rHLc8.jpg',
      title: 'موسسه قرآنی تسنیم لنجان',
      melli: 'شناسه ملی',
      melliNumber: 10980211432,
      date: ' 1401/03/27   15 آذرماه 1400 '
    },
  ];
}
