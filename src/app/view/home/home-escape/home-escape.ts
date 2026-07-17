import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

type DataTypeFanos = {
  img: string;
  title: string;
  user:string;
  part:number;
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
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
    stagePadding: 80,
  };


  Fanos: DataTypeFanos[] = [
    {
      img: '/img/3zy8PsNkn2e1s3R8h87KREP2nohC6UoJl8HfIFEA.jpg',
      title: 'طراحی استارت‌آپ فرهنگی',
      part:11,
      user:"دکتر باباخان"
    },
    {
      img: '/img/WEP3KM4kORJUZpuYN3duP2HVygeUvKltvAZSckE8.jpg',
      title: 'صنایع خلاق پیشران',
      part:16,
      user:"استاد محمد قطبی"
    },
    {
      img: '/img/lbcNxoA8wTsckHYDxJprdtqw8rTxeFsoNvrG1osr.jpg',
      title: 'ارائه مؤثر ایده',
      part:7,
      user:"استاد نواب"
    },
    {
      img: '/img/QWUw6ABogReKd4XdXLB6RHmlLeqfUUCRkA45FzKQ.png',
      title: 'آموزش ایده‌پردازی',
      part:21,
      user:"ایده میده"
    },
    {
      img: '/img/W5nvmr54nl7uuLezo3UJukHLZVdvnpIqFkzhtKJS.jpg',
      title: 'تیم‌سازی و کار تیمی',
      part:7,
      user:"استاد رضا نفری"
    },
    {
      img: '/img/6F5AXto6bOU5ll8T81F6pSBmXhtlg4L8RAciVQOY.jpg',
      title: 'ضبط و تدوین صوت',
      part:12,
      user:" استاد حمیدرضا شمسایی"
    },
    {
      img: '/img/sZ9aQ6B9u1CAZNVb7Ld9kRXvCoImCXZ4vnuZOY8k.jpg',
      title: 'مدیریت صفحات مجازی',
      part:10,
      user:"استاد مهرداد شاهسنایی"
    },
    {
      img: '/img/k5Ig4BopDzYgQjm8WOhOL46D9rTputIhvC9BQcav.jpg',
      title: 'کارگاه طراحی بوم',
      part:9,
      user:"استاد چپریان"
    },
    {
      img: '/img/K5Bp4GwyKLC1bglajK3lnDgkPrSxvPDVrZBXOxyu.jpg',
      title: 'آموزش فتوشاپ (فارسی)',
      part:29,
      user:"آپگراف"
    },
    {
      img: '/img/Gb2vrx1fCi2wA1O0QoUJROs15uWwExX9Vb6TUCEZ.jpg',
      title: 'کارآفرینی فرهنگی',
      part:18,
      user:"استاد نوید ادریس"
    }
  ];


}
