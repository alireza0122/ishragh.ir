import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

type DataType = {
  img: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-show-facilities',
  imports: [CarouselModule],
  templateUrl: './show-facilities.html',
  styleUrl: './show-facilities.scss',
})
export class ShowFacilities {


  newsdata: DataType[] = [
    {
      img: '/img/showlogo/lOGO01.png',
      title: 'پنل مدیریتی',
      description: 'مدیریت، تعریف، بارگذاری، ویرایش، نظارت، انتشار و ... با امکان تعیین دسترسی افراد متعدد ',
    },
    {
      img: '/img/showlogo/lOGO02.png',
      title: 'صندوق پیام',
      description: 'ارسال پیام انبوه و نامه به اعضا',
    },
    {
      img: '/img/showlogo/lOGO03.png',
      title: 'اخبار',
      description: 'انتشار اخبار همراه با عکس، لینک، لایک، نظر و ...',
    },
    {
      img: '/img/showlogo/lOGO04.png',
      title: 'حساب کاربری',
      description: 'حساب کاربری با امکانات کامل و شخصی‌سازی شده',
    },
    {
      img: '/img/showlogo/lOGO05.png',
      title: 'تقویم',
      description: 'تقویم شمسی، قمری و میلادی',
    },
    {
      img: '/img/showlogo/lOGO06.png',
      title: 'بنر و اسلایدر',
      description: 'بارگذاری بنر و اسلایدر اطلاع‌رسانی یا تبلیغاتی',
    },
    {
      img: '/img/showlogo/lOGO07.png',
      title: 'جستجو',
      description: 'جستجوی پیشرفته',
    },

    {
      img: '/img/showlogo/lOGO08.png',
      title: 'درباره اپلیکیشن',
      description: 'صفحه اختصاصی معرفی شخص، سازمان، شرکت و ...',
    },

    {
      img: '/img/showlogo/lOGO09.png',
      title: 'وب اپلیکیشن',
      description: 'نمایش تمام محتوا بر روی وب،',
    },

    {
      img: '/img/showlogo/lOGO10.png',
      title: 'کیف پول',
      description: 'با قابلیت شارژ مستقیم و غیرمستقیم (کافه‌بازار) و با امکان',
    },

    {
      img: '/img/showlogo/lOGO11.png',
      title: 'نوتیفیکیشن',
      description: 'ارسال نوتیفیکیشن اطلاع‌رسانی، یادآوری و ...',
    },

    {
      img: '/img/showlogo/lOGO12.png',
      title: 'استایل و آنبوردینگ',
      description: 'طراحی صفحه اختصاصی برای شروع استفاده',
    },
  ];
}
