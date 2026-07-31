  import { Component, signal, computed } from '@angular/core';


  type DataType = {
    img: string;
    btn: string;
    color: string;
    imgiconA: string;
    imgiconB: string;
    description: string;
  };
  @Component({
    selector: 'app-home-pillars',
    imports: [],
    templateUrl: './home-pillars.html',
    styleUrl: './home-pillars.scss',
  })
  export class HomePillars {
    newsdata: DataType[] = [
      {
        img: '/img/fanos-logo-unlable.svg',
        description:
          'در مدرسـه فنـاوری فانـوس آموزش هـای نوآورانـه در موضوعـات متعـددی از جملـه آشـنایی بـا اکوسیسـتم کارآفرینـی و نوآوری هـای فرهنگـی، یادگیـری فرآینـد تبدیـل مفهـوم ایـده بـه خلـق محصــول و خدمــت فرهنگــی، مهارت هــای کاربــردی و تجاری ســازی ایده های فرهنگــی و ... بــه فعـالان و فنـاوران فرهنگـی ارائـه می گـردد.',

        btn: 'ورود به فانوس',
        imgiconA: '/img/fanos-lable.svg',
        imgiconB: '/img/fanoos-s1.svg',
        color: '#1e9b81',
      },
      {
        img: '/img/4sogh-logo-unlabel (1).svg',
        btn: 'ورود به چارسوق',
        description:
          'خانـه خلاق و نـوآوری اشـراق بـه عنـوان مبـادی رسـمی و بـا مجـوز از معاونـت علمـی و فناوری ریاسـت جمهـوری، متقاضیـان دریافـت اعتبارنامـه شـرکت خلاق را از سراسـر کشـور پذیـرش کــرده و می کوشــد بــا رشــد و شــتابدهی موسسات و شرکتهای متقاضی، شــرایطی فراهـم آورد تـا در اسـرع وقـت ایـن شـرکتها اعتبارنامـه شـرکت خلاق را دریافـت نماینـد.\n' +
          '\n',

        imgiconA: '/img/4sogh-logo-label.svg',
        imgiconB: '/img/4sogh-logo-label2.svg',
        color: '#16c1d0',
      },
      {
        img: '/img/3dal-logo-unlabel (1).svg',
        btn: 'ورود به سه دال',
        description:
          'در شــتاب دهنــده ســه دال تیم هــای دارای ایــده نوآورانــه، پذیــرش و بــرای رشــد، میزبانــی و شـتابدهی خواهنـد شـد، خدمـات علمـی، فنـی، و اعتبـاری مـورد نیـاز تیم هـا در اختیـار ایشـان قــرار داده شــده و بــه صــورت روشــمند و دقیــق تیم هــا هدایــت می شــوند تــا بتواننــد در قامـت شـرکت خـلاق و دانـش بنیـان و بـه صـورت رسـمی بـه تولیـد محصـول و ارائـه خدمـات خلاقانـه مبـادرت بورزنـد.',

        imgiconA: '/img/3dal-logo-label.svg',
        imgiconB: '/img/3dal-logo-label2.svg',
        color: '#3b459d',
      },
      {
        img: '/img/karizman-logo-unlabel.svg',
        btn: 'ورود به کاریزنگار',
        description:
          'رویدادهای دوره‌ای که به منظور تمرین و تجربه ایده‌ورزی و تیم‌سازی در موضوعات مختلف تکرار می‌شود و علاقه‌مندان به حوزه فناوری فرهنگی و صنایع نرم و خلاق می‌توانند در آنها شرکت کرده و با تمرین و تکرار فعالیت‌ها نسبت به ایده‌ورزی، تجربه بیشتری به دست بیاورند. اين رويداد، تقاطع مساله‌محوري و ايده‌مداري به شمار مي‌رود و در آن تلاش مي‌شود مساله و چالش‌هاي عرصه فرهنگ لايه‌برداري شده و به استخراج ايده‌هاي استارت‌آپي نزديك شود و از سوي ديگر با آماده‌سازي ذهن علاقه‌مندان و ايده‌ورزان، زمينه اكتشاف ايده‌هاي نوآورانه فراهم مي‌آيد تا بدين صورت ايده‌هاي استحصالي در مدار حل مساله‌ها و چالش‌هاي فرهنگي قرار بگيرند.',

        imgiconA: '/img/karizman-label.svg  ',
        imgiconB: '/img/karizman-logo-label.svg',
        color: '#14afb9',
      },
    ];


    currentIndex = signal(0);
    currentItem = computed(() => this.newsdata[this.currentIndex()]);

    isAnimating = signal(false);

    goNext(): void {

      this.isAnimating.set(true);

      setTimeout(() => {

        this.currentIndex.update((i) => (i + 1) % this.newsdata.length);

        this.isAnimating.set(false);

      }, 1000);
    }

    goPrevious(): void {

      this.isAnimating.set(true);

      setTimeout(() => {

        this.currentIndex.update(
          (i) => (i - 1 + this.newsdata.length) % this.newsdata.length
        );

        this.isAnimating.set(false);

      }, 1000);
    }

    selectItem(index: number): void {
      if (this.currentIndex() === index || this.isAnimating()) return;

      this.isAnimating.set(true);

      setTimeout(() => {
        this.currentIndex.set(index);
        this.isAnimating.set(false);
      }, 1000);
    }

  }


