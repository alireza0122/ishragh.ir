import { Component } from '@angular/core';


type DataType = {
  id: string;
  title: string;
  price: number;
  currency: string;
  support: {
    duration: number;
    unit: string;
    label: string;
  };
  storage: {
    amount: number;
    unit: string;
    label: string;
  };
  features: {
    title: string;
    available: boolean;
  }[];
  button: {
    text: string;
  };
};
@Component({
  selector: 'app-show-version',
  imports: [],
  templateUrl: './show-version.html',
  styleUrl: './show-version.scss',
})
export class ShowVersion {
  version: DataType[] = [
    {
      id: 'basic',
      title: 'نسخه پایه',
      price: 18000000,
      currency: 'تومان',
      support: {
        duration: 6,
        unit: 'ماه',
        label: 'پشتیبانی رایگان',
      },
      storage: {
        amount: 2,
        unit: 'گیگابایت',
        label: 'فضای بارگذاری',
      },
      features: [
        {
          title: 'پنل مدیریتی',
          available: true,
        },
        {
          title: 'بخش صوت و تصویر',
          available: true,
        },
        {
          title: 'بنر و اسلایدر',
          available: true,
        },
        {
          title: 'اسپلیش و آژورینگ',
          available: true,
        },
        {
          title: 'تقویم',
          available: false,
        },
        {
          title: 'اخبار',
          available: false,
        },
        {
          title: 'بخش برگزاری رویداد و وبینار',
          available: false,
        },
        {
          title: 'جستجو',
          available: false,
        },
        {
          title: 'صندوق پیام',
          available: false,
        },
        {
          title: 'کیف پول',
          available: false,
        },
        {
          title: 'بخش محتوای متنی و پیوست فایل‌ها',
          available: false,
        },
        {
          title: 'بخش محتوای مبتنی بر تقویم',
          available: false,
        },
        {
          title: 'نسخه وب‌اپلیکیشن',
          available: false,
        },
      ],
      button: {
        text: 'خرید',
      },
    },
    {
      id: 'bronze',
      title: 'برنزی',
      price: 30000000,
      currency: 'تومان',
      support: {
        duration: 6,
        unit: 'ماه',
        label: 'پشتیبانی رایگان',
      },
      storage: {
        amount: 6,
        unit: 'گیگابایت',
        label: 'فضای بارگذاری',
      },
      features: [
        {
          title: 'پنل مدیریتی',
          available: true,
        },
        {
          title: 'بخش صوت و تصویر',
          available: true,
        },
        {
          title: 'بنر و اسلایدر',
          available: true,
        },
        {
          title: 'اسپلیش و آژورینگ',
          available: true,
        },
        {
          title: 'تقویم',
          available: true,
        },
        {
          title: 'اخبار',
          available: true,
        },
        {
          title: 'بخش برگزاری رویداد و وبینار',
          available: false,
        },
        {
          title: 'جستجو',
          available: false,
        },
        {
          title: 'صندوق پیام',
          available: false,
        },
        {
          title: 'کیف پول',
          available: false,
        },
        {
          title: 'بخش محتوای متنی و پیوست فایل‌ها',
          available: false,
        },
        {
          title: 'بخش محتوای مبتنی بر تقویم',
          available: false,
        },
        {
          title: 'نسخه وب‌اپلیکیشن',
          available: false,
        },
      ],
      button: {
        text: 'خرید',
      },
    },
    {
      id: 'silver',
      title: 'نسخه نقره‌ای',
      price: 42000000,
      currency: 'تومان',
      support: {
        duration: 12,
        unit: 'ماه',
        label: 'پشتیبانی رایگان',
      },
      storage: {
        amount: 8,
        unit: 'گیگابایت',
        label: 'فضای بارگذاری',
      },
      features: [
        {
          title: 'پنل مدیریتی',
          available: true,
        },
        {
          title: 'بخش صوت و تصویر',
          available: true,
        },
        {
          title: 'بنر و اسلایدر',
          available: true,
        },
        {
          title: 'اسپلیش و آژورینگ',
          available: true,
        },
        {
          title: 'تقویم',
          available: true,
        },
        {
          title: 'اخبار',
          available: true,
        },
        {
          title: 'بخش برگزاری رویداد و وبینار',
          available: true,
        },
        {
          title: 'جستجو',
          available: true,
        },
        {
          title: 'صندوق پیام',
          available: true,
        },
        {
          title: 'کیف پول',
          available: true,
        },
        {
          title: 'بخش محتوای متنی و پیوست فایل‌ها',
          available: false,
        },
        {
          title: 'بخش محتوای مبتنی بر تقویم',
          available: false,
        },
        {
          title: 'نسخه وب‌اپلیکیشن',
          available: false,
        },
      ],
      button: {
        text: 'خرید',
      },
    },
    {
      id: 'gold',
      title: 'نسخه طلایی',
      price: 55000000,
      currency: 'تومان',
      support: {
        duration: 12,
        unit: 'ماه',
        label: 'پشتیبانی رایگان',
      },
      storage: {
        amount: 10,
        unit: 'گیگابایت',
        label: 'فضای بارگذاری',
      },
      features: [
        {
          title: 'پنل مدیریتی',
          available: true,
        },
        {
          title: 'بخش صوت و تصویر',
          available: true,
        },
        {
          title: 'بنر و اسلایدر',
          available: true,
        },
        {
          title: 'اسپلیش و آژورینگ',
          available: true,
        },
        {
          title: 'تقویم',
          available: true,
        },
        {
          title: 'اخبار',
          available: true,
        },
        {
          title: 'بخش برگزاری رویداد و وبینار',
          available: true,
        },
        {
          title: 'جستجو',
          available: true,
        },
        {
          title: 'صندوق پیام',
          available: true,
        },
        {
          title: 'کیف پول',
          available: true,
        },
        {
          title: 'بخش محتوای متنی و پیوست فایل‌ها',
          available: true,
        },
        {
          title: 'بخش محتوای مبتنی بر تقویم',
          available: true,
        },
        {
          title: 'نسخه وب‌اپلیکیشن',
          available: true,
        },
      ],
      button: {
        text: 'خرید',
      },
    },
  ];
}
