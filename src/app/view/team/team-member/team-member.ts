import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';


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

@Component({
  selector: 'app-team-member',
  imports: [CarouselModule],
  templateUrl: './team-member.html',
  styleUrl: './team-member.scss',
})
export class TeamMember {
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
      id: 4,
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
    {
      id: 5,
      title: 'صبح سپید',
      logo: '/img/pAuUzKpUGo4gZMdycbGgySJF0vTCyqQNmsfEVRP6.png',

      person: {
        name: 'حسن کریمی',
        position: 'مدیرعامل',
        image: '/img/lr1IZbWIBgKoqKPxZRG3chrsUxzuyTXQ6oTKqCZk.jfif',
      },
      type: 'تیم ایده',
      activityLevel: 'وظیعت فعالیت',

      categories: ['فعال'],

      number: '۱/۴',
      color: '#1b8ac7',
      bgCategory: '#e8f3f9',
      numberValue: '1',
    },
    {
      id: 6,
      title: 'عرش',
      logo: '/img/pTW5BChqBi3j2NtVRIkarEUVJlZS4e4paMnNnANr.jfif',

      person: {
        name: 'سید مهدی روحبخش',
        position: 'مدیرعامل',
        image: '/img/hU5FD7IeOFoiE1MNUfaJ5yYGm7oVo3VLJFa7RVpf.png',
      },
      type: 'تیم ایده',
      activityLevel: 'سطح فعالیت',

      categories: ['فعال'],

      number: '3/۴',
      color: '#1b8ac7',
      bgCategory: '#e8f3f9',
      numberValue: '1',
    },
    {
      id: 7,
      title: 'مسجد ها',
      logo: '/img/1K5M9cOhEbxgbCCQAqIJaYtFmEO4G0ZeQDqo70Jd.jfif',

      person: {
        name: ' مصطفی حیدری',
        position: 'مدیرعامل',
        image: '/img/hU5FD7IeOFoiE1MNUfaJ5yYGm7oVo3VLJFa7RVpf.png',
      },
      type: 'تیم ایده',
      activityLevel: 'سطح فعالیت',

      categories: ['خروج موفق'],

      number: '2/۴',
      color: '#0f8b4a',
      bgCategory: '#e7f3ed',
      numberValue: '2',
    },
    {
      id: 8,
      title: 'ضیاء الصالحین',
      logo: '/img/Q8eSkXQoyt8hbu6aFa9O7dLE5JxZSZQPIa7RFO3R.jpg',

      person: {
        name: 'سید احمد رضوی‌نژاد',
        position: 'مدیرعامل',
        image: '/img/yjMSJgIPCMmoubChCsqcncwgDcRGCeV26eOp9kYB.png',
      },
      type: 'تیم ایده',
      activityLevel: 'سطح فعالیت',

      categories: ['فعال'],

      number: '3/5',
      color: '#c41321',
      bgCategory: '#f9e7e8',
      numberValue: '2.5',
    },
    {
      id: 9,
      title: 'رهنمایان سعادت',
      logo: '/img/6O41T9ZyKXv1j5MNuaMm1KmL5e4S1k1AxiSEE4gN.jfif',

      person: {
        name: ' مصطفی حیدری',
        position: 'مدیرعامل',
        image: '/img/Vp1Xueee5dqXWw0HhJaSAtTQkI2gk3uujEB7ca1S.jpg',
      },
      type: 'تیم ایده',
      activityLevel: 'سطح فعالیت',

      categories: ['فعال'],

      number: '2/۴',
      color: '#c41321',
      bgCategory: '#f9e7e8',
      numberValue: '2',
    },
  ];
}
