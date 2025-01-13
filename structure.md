.
├── README.md
├── TODO.md
├── components
│   ├── Auth
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── Dashboard
│   │   ├── DashboardOverview.tsx
│   │   ├── GoalCard.tsx
│   │   └── HabitCard.tsx
│   ├── Journal
│   │   ├── JournalEntry.tsx
│   │   └── JournalList.tsx
│   └── Notifications
│       ├── NotificationItem.tsx
│       └── NotificationList.tsx
├── generate-structure.sh
├── jsvectormap.d.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── pages
│   └── api
│       └── auth.ts
├── postcss.config.js
├── public
│   └── images
│       ├── best-value-banner.png
│       ├── brand
│       │   ├── brand-01.svg
│       │   ├── brand-02.svg
│       │   ├── brand-03.svg
│       │   ├── brand-04.svg
│       │   ├── brand-05.svg
│       │   ├── brand-06.svg
│       │   ├── brand-07.svg
│       │   ├── brand-08.svg
│       │   ├── brand-09.svg
│       │   ├── brand-10.svg
│       │   ├── brand-11.svg
│       │   ├── brand-12.svg
│       │   ├── brand-13.svg
│       │   ├── brand-14.svg
│       │   ├── brand-15.svg
│       │   ├── brand-16.svg
│       │   ├── brand-17.svg
│       │   ├── brand-18.svg
│       │   ├── brand-19.svg
│       │   └── brand-20.svg
│       ├── cards
│       │   ├── cards-01.png
│       │   ├── cards-02.png
│       │   ├── cards-03.png
│       │   ├── cards-04.png
│       │   ├── cards-05.png
│       │   └── cards-06.png
│       ├── carousel
│       │   ├── carousel-01.jpg
│       │   ├── carousel-02.jpg
│       │   └── carousel-03.jpg
│       ├── country
│       │   ├── country-01.svg
│       │   ├── country-02.svg
│       │   ├── country-03.svg
│       │   ├── country-04.svg
│       │   ├── country-05.svg
│       │   └── country-06.svg
│       ├── cover
│       │   ├── cover-01.png
│       │   ├── cover-02.jpg
│       │   ├── cover-03.jpg
│       │   ├── cover-04.jpg
│       │   └── cover-05.jpg
│       ├── favicon.ico
│       ├── grids
│       │   ├── grid-01.svg
│       │   └── grid-02.svg
│       ├── icon
│       │   ├── icon-arrow-down.svg
│       │   ├── icon-calendar.svg
│       │   ├── icon-copy-alt.svg
│       │   ├── icon-moon.svg
│       │   └── icon-sun.svg
│       ├── illustration
│       │   ├── illustration-01.svg
│       │   ├── illustration-02.svg
│       │   ├── illustration-03.svg
│       │   └── illustration-04.svg
│       ├── logo
│       │   ├── logo-dark.svg
│       │   ├── logo-icon.svg
│       │   └── logo.svg
│       ├── product
│       │   ├── product-01.png
│       │   ├── product-02.png
│       │   ├── product-03.png
│       │   ├── product-04.png
│       │   └── product-thumb.png
│       ├── task
│       │   └── task-01.jpg
│       ├── team
│       │   ├── team-01.png
│       │   ├── team-02.png
│       │   ├── team-03.png
│       │   ├── team-04.png
│       │   ├── team-05.png
│       │   ├── team-06.png
│       │   ├── team-07.png
│       │   └── team-08.png
│       ├── todo
│       │   ├── dribble.svg
│       │   ├── linkdin.svg
│       │   └── uideck.svg
│       └── user
│           ├── user-01.png
│           ├── user-02.png
│           ├── user-03.png
│           ├── user-04.png
│           ├── user-05.png
│           ├── user-06.png
│           ├── user-07.png
│           ├── user-08.png
│           ├── user-09.png
│           ├── user-10.png
│           ├── user-11.png
│           ├── user-12.png
│           ├── user-13.png
│           ├── user-14.png
│           ├── user-15.png
│           ├── user-16.png
│           ├── user-17.png
│           ├── user-18.png
│           ├── user-19.png
│           ├── user-20.png
│           ├── user-21.png
│           ├── user-22.png
│           ├── user-23.png
│           ├── user-24.png
│           ├── user-25.png
│           ├── user-26.png
│           ├── user-27.png
│           ├── user-28.png
│           ├── user-29.png
│           └── user-30.png
├── src
│   ├── app
│   │   ├── auth
│   │   │   └── signin
│   │   │       └── page.tsx
│   │   ├── calendar
│   │   │   └── page.tsx
│   │   ├── charts
│   │   │   └── basic-chart
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── forms
│   │   │   ├── form-elements
│   │   │   │   └── page.tsx
│   │   │   └── form-layout
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── pages
│   │   │   └── settings
│   │   │       └── page.tsx
│   │   ├── profile
│   │   │   └── page.tsx
│   │   ├── tables
│   │   │   └── page.tsx
│   │   └── ui-elements
│   │       ├── alerts
│   │       │   └── page.tsx
│   │       └── buttons
│   │           └── page.tsx
│   ├── components
│   │   ├── Alerts
│   │   │   ├── AlertError.tsx
│   │   │   ├── AlertSuccess.tsx
│   │   │   └── AlertWarning.tsx
│   │   ├── Auth
│   │   │   ├── GoogleSigninButton.tsx
│   │   │   ├── Signin
│   │   │   │   └── index.tsx
│   │   │   └── SigninWithPassword.tsx
│   │   ├── Breadcrumbs
│   │   │   └── Breadcrumb.tsx
│   │   ├── Buttons
│   │   │   └── ButtonDefault.tsx
│   │   ├── CalenderBox
│   │   │   └── index.tsx
│   │   ├── Charts
│   │   │   ├── BasicChart.tsx
│   │   │   ├── ChartFive.tsx
│   │   │   ├── ChartOne.tsx
│   │   │   ├── ChartThree.tsx
│   │   │   └── ChartTwo.tsx
│   │   ├── Chat
│   │   │   └── ChatCard.tsx
│   │   ├── CheckMarks
│   │   │   └── CheckMark.tsx
│   │   ├── ClickOutside.tsx
│   │   ├── CloseMarks
│   │   │   └── CloseMark.tsx
│   │   ├── Dashboard
│   │   │   └── E-commerce.tsx
│   │   ├── DataStats
│   │   │   └── DataStatsOne.tsx
│   │   ├── Dropdowns
│   │   │   ├── DropdownDefault.tsx
│   │   │   └── DropdownDefaultTwo.tsx
│   │   ├── FormElements
│   │   │   ├── Checkboxes
│   │   │   │   ├── CheckboxFive.tsx
│   │   │   │   ├── CheckboxFour.tsx
│   │   │   │   ├── CheckboxOne.tsx
│   │   │   │   ├── CheckboxThree.tsx
│   │   │   │   └── CheckboxTwo.tsx
│   │   │   ├── DatePicker
│   │   │   │   ├── DatePickerOne.tsx
│   │   │   │   └── DatePickerTwo.tsx
│   │   │   ├── InputGroup
│   │   │   │   └── index.tsx
│   │   │   ├── MultiSelect.tsx
│   │   │   ├── SelectGroup
│   │   │   │   ├── SelectGroupOne.tsx
│   │   │   │   ├── SelectGroupThree.tsx
│   │   │   │   └── SelectGroupTwo.tsx
│   │   │   ├── Switchers
│   │   │   │   ├── SwitcherFour.tsx
│   │   │   │   ├── SwitcherOne.tsx
│   │   │   │   ├── SwitcherThree.tsx
│   │   │   │   └── SwitcherTwo.tsx
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   ├── DarkModeSwitcher.tsx
│   │   │   ├── DropdownNotification.tsx
│   │   │   ├── DropdownUser.tsx
│   │   │   ├── SearchForm.tsx
│   │   │   └── index.tsx
│   │   ├── Layouts
│   │   │   └── DefaultLaout.tsx
│   │   ├── Maps
│   │   │   └── MapOne.tsx
│   │   ├── ProfileBox
│   │   │   └── index.tsx
│   │   ├── SelectOption
│   │   │   └── DefaultSelectOption.tsx
│   │   ├── SettingBoxes
│   │   │   └── index.tsx
│   │   ├── Sidebar
│   │   │   ├── SidebarDropdown.tsx
│   │   │   ├── SidebarItem.tsx
│   │   │   └── index.tsx
│   │   ├── Star.tsx
│   │   ├── Tables
│   │   │   ├── TableOne.tsx
│   │   │   ├── TableThree.tsx
│   │   │   └── TableTwo.tsx
│   │   └── common
│   │       └── Loader
│   │           └── index.tsx
│   ├── css
│   │   ├── satoshi.css
│   │   └── style.css
│   ├── fonts
│   │   ├── Satoshi-Black.eot
│   │   ├── Satoshi-Black.ttf
│   │   ├── Satoshi-Black.woff
│   │   ├── Satoshi-Black.woff2
│   │   ├── Satoshi-BlackItalic.eot
│   │   ├── Satoshi-BlackItalic.ttf
│   │   ├── Satoshi-BlackItalic.woff
│   │   ├── Satoshi-BlackItalic.woff2
│   │   ├── Satoshi-Bold.eot
│   │   ├── Satoshi-Bold.ttf
│   │   ├── Satoshi-Bold.woff
│   │   ├── Satoshi-Bold.woff2
│   │   ├── Satoshi-BoldItalic.eot
│   │   ├── Satoshi-BoldItalic.ttf
│   │   ├── Satoshi-BoldItalic.woff
│   │   ├── Satoshi-BoldItalic.woff2
│   │   ├── Satoshi-Italic.eot
│   │   ├── Satoshi-Italic.ttf
│   │   ├── Satoshi-Italic.woff
│   │   ├── Satoshi-Italic.woff2
│   │   ├── Satoshi-Light.eot
│   │   ├── Satoshi-Light.ttf
│   │   ├── Satoshi-Light.woff
│   │   ├── Satoshi-Light.woff2
│   │   ├── Satoshi-LightItalic.eot
│   │   ├── Satoshi-LightItalic.ttf
│   │   ├── Satoshi-LightItalic.woff
│   │   ├── Satoshi-LightItalic.woff2
│   │   ├── Satoshi-Medium.eot
│   │   ├── Satoshi-Medium.ttf
│   │   ├── Satoshi-Medium.woff
│   │   ├── Satoshi-Medium.woff2
│   │   ├── Satoshi-MediumItalic.eot
│   │   ├── Satoshi-MediumItalic.ttf
│   │   ├── Satoshi-MediumItalic.woff
│   │   ├── Satoshi-MediumItalic.woff2
│   │   ├── Satoshi-Regular.eot
│   │   ├── Satoshi-Regular.ttf
│   │   ├── Satoshi-Regular.woff
│   │   ├── Satoshi-Regular.woff2
│   │   ├── Satoshi-Variable.eot
│   │   ├── Satoshi-Variable.ttf
│   │   ├── Satoshi-Variable.woff
│   │   ├── Satoshi-Variable.woff2
│   │   ├── Satoshi-VariableItalic.eot
│   │   ├── Satoshi-VariableItalic.ttf
│   │   ├── Satoshi-VariableItalic.woff
│   │   └── Satoshi-VariableItalic.woff2
│   ├── hooks
│   │   ├── useColorMode.tsx
│   │   └── useLocalStorage.tsx
│   ├── js
│   │   └── us-aea-en.js
│   └── types
│       ├── Lead.ts
│       ├── brand.ts
│       ├── cards.ts
│       ├── chat.ts
│       ├── country.ts
│       ├── dataStats.ts
│       ├── faq.ts
│       ├── faqItem.ts
│       ├── package.ts
│       ├── product.ts
│       └── topData.ts
├── structure.md
├── tailwind.config.ts
└── tsconfig.json

76 directories, 259 files
