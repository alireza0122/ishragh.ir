import { Component, HostListener } from '@angular/core';
import { AboutsTitle } from '../../shared/abouts-title/abouts-title';

type ServiceItem = {
  number: number;
  title: string;
  color: string;
};
type SeminaryItem = {
  number: number;
  title: string;
  svg: string;
};

@Component({
  selector: 'app-abouts-main',
  imports: [AboutsTitle],
  templateUrl: './abouts-main.html',
  styleUrl: './abouts-main.scss',
})
export class AboutsMain {
  openIndex: number | null = 0;
  activeSection: string = 'Introduction';
  toggleAnswer(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  @HostListener('window:scroll')
  onScroll() {
    const ids = ['Introduction', 'Arena', 'Services', 'Seminary', 'Pillars'];
    for (const id of ids.reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) {
        this.activeSection = id;
        break;
      }
    }
  }

  Services: ServiceItem[] = [
    {
      number: 1,
      title: 'آموزش حضوری و غیرحضوری',
      color: '#F9D325',
    },
    {
      number: 2,
      title: 'مشاوره',
      color: '#2fbdbc',
    },
    {
      number: 3,
      title: 'منتورینگ',
      color: '#F9D325',
    },
    {
      number: 4,
      title: 'فضای اشتراکی برای استقرار',
      color: '#2fbdbc',
    },
    {
      number: 5,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      color: '#F9D325',
    },
    {
      number: 6,
      title: 'کمک به مطالعات بازار',
      color: '#2fbdbc',
    },
    {
      number: 7,
      title: 'خدمات فنی-ارتباطی و اینترنت،خدمات حقوقی-اداری',
      color: '#F9D325',
    },
    {
      number: 8,
      title: 'استودیو صوت و تصویر',
      color: '#2fbdbc',
    },
    {
      number: 9,
      title: 'سالن همایش و کنفرانس اشتراکی',
      color: '#F9D325',
    },
    {
      number: 10,
      title: 'فن‌بازار و جذب سرمایه‌گذار',
      color: '#2fbdbc',
    },
    {
      number: 11,
      title: 'ارتباط و معرفی به بانک و صندوق سرمایه‌گذاری',
      color: '#F9D325',
    },
    {
      number: 12,
      title: 'تجربه نوردی و تورهای فناورانه',
      color: '#2fbdbc',
    },
    {
      number: 13,
      title: 'رویدادهای آموزشی-تمرینی',
      color: '#F9D325',
    },
    {
      number: 14,
      title: 'جذب اسپین‌آف و شرکت‌های زایشیی',
      color: '#2fbdbc',
    },
    {
      number: 15,
      title: 'جذب خدمات برون‌سپاری و فرصت برابر',
      color: '#F9D325',
    },
    {
      number: 16,
      title: 'خدمات حوزه رسانه و خبر و اطلاع‌رسانی اخبار فناوری فرهنگی کشور',
      color: '#2fbdbc',
    },
    {
      number: 17,
      title: 'کمک به دریافت گواهی و سرتیفیکیت‌های ملی و بین‌المللی',
      color: '#F9D325',
    },
    {
      number: 18,
      title: 'کراودفاندینگ و جمع‌سپاری مالی، فیوچر و ...',
      color: '#2fbdbc',
    },
    {
      number: 19,
      title: 'خدمات فریلنسینگ و سرویس‌های آزادکاری',
      color: '#F9D325',
    },
    {
      number: 20,
      title: 'خدمات رنکینگ و اعتباربخشی',
      color: '#2fbdbc',
    },
  ];
  Seminary: SeminaryItem[] = [
    {
      number: 1,
      title: 'بازی ویدیویی و موبایلی',
      svg: '/img/gamepad_icon.svg',
    },
    {
      number: 2,
      title: 'مشاوره',
      svg: '/img/gamepad_icon.svg',
    },
    {
      number: 3,
      title: 'منتورینگ',
      svg: '/img/gamepad_icon.svg',
    },
    {
      number: 4,
      title: 'فضای اشتراکی برای استقرار',
      svg: '/img/gamepad_icon.svg',
    },
    {
      number: 5,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 6,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 7,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 8,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 9,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 10,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 11,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 12,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 13,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 14,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 15,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 16,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 17,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 18,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 19,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 20,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 21,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 22,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 23,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },

    {
      number: 24,
      title: 'خدمات فنی-ارتباطی و اینترنت، هاستینگ و...',
      svg: '/img/gamepad_icon.svg',
    },
  ];
}
