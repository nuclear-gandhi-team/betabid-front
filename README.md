# Команда та організація
Добрий день, Вас вітає команда Nuclear Gandhi. 
У нас є організація ([nuclear-gandhi-team](https://github.com/nuclear-gandhi-team)) для всіх хакатонів, де ми брали участь.
Наша команда зазвичай дещо більша, але на хакатоні від int20h брали участь лише 4 учасники:

1. #### Frontend [(betabid-front)](https://github.com/nuclear-gandhi-team/betabid-front)
    - Дмитро Буяло ([Buiama](https://github.com/Buiama));
    - Даниіл Бутов ([HJyup](https://github.com/HJyup));
2. #### Backend [(betabid-back)](https://github.com/nuclear-gandhi-team/betabid-back)
    - Денис Маланічев ([Denys Malanichev](https://github.com/DenysMalanichev));
    - Божена Дяків ([bozhenkaaa](https://github.com/bozhenkaaa))


# Виконання
Для деяких дій необхідна авторизація користувача. Для цього потрібно зареєструватися в системі за [посиланням](https://betabid-front.vercel.app/auth/register) (пароль має містити хоча б шість символів, з яких хоча б одна велика літера, одна цифра та один спецсимвол). Потім вас автоматично перенаправить на [сторінку логіну](https://betabid-front.vercel.app/auth/login). При успішному логіні за створеними даними перенаправить на [головну сторінку](https://betabid-front.vercel.app/browse). Виконати логін дуже важливо при тестуванні, бо більшість функцій потребують авторизованості користувача, що відбувається за допомогою JWT.
Хотіли звернути Вашу увагу, що у кожного користувача є баланс. Всім за замовчуванням надано 10000 од., тобто більше за цю суму зробити ставку неможливо. При ставці з балансу заморожується відповідна сума, якщо ставку перебито, гроші одразу повертаються.

### Основні функціональні вимоги

1. #### Створення та управління аукціонами
    - Можливість створення аукціону з описом, фотографіями та вказанням стартової ціни;
_[Необхідна авторизація]_ Для створення аукціону з головної сторінки натискаємо на кнопку "[Create lot](https://betabid-front.vercel.app/lots/create)". Тут Ви можете виставити свій лот на торги, вказавши назву лоту, опис, фото, теги, стартову ціну, мінімальний крок ставки, початок та кінець аукціону. Після натискання кнопки "Create", якщо всі поля правильно заповнені, Вас перенаправить на сторінку створеного лоту.

    - Можливість редагування параметрів аукціону;
Ми вирішили, що після створення лоту, редагувати його не має бути можливості, адже це викликає багато спірних ситуацій, наприклад, до кінця аукціону залишився день, власник лоту бачить, що може отримати не так багато, як планував, тому змінює параметри аукціону (підміняє його) та користувач отримує не те, що хотів отримати. 

    - Сторінка для перегляду всіх аукціонів.
_[Авторизація не обов'язкова]_ Всі аукціони виведені на головній сторінці. Щоб перейти на неї, потрібно зліва в навбарі натиснути на першу іконку - Browse або за [посиланням](https://betabid-front.vercel.app/browse)

2. #### Система ставок
    - Механізм, що дозволяє користувачам робити ставки;
_[Необхідна авторизація]_ На сторінці перегляду лоту (https://betabid-front.vercel.app/lots/{id}), наприклад, [лот №37 - Святий Грааль](https://betabid-front.vercel.app/lots/37) необхідно натиснути на кнопку "Bid". Відкриється модальне вікно, де Ви можете поставити свою ставку згідно параметрів аукціону.

    - Дані аукціонів та ставок мають автоматично оновлюватися при перезавантаженні сторінки.
_[Авторизація не обов'язкова]_ Щоб побачити історію ставок, їх аналіз та детальні параметри лоту,  потрібно переключитися з Overview на Actions на [сторінці лоту](https://betabid-front.vercel.app/lots/37). Всі створені аукціони також автоматично додаються на головну.

3. #### Відображення історії ставок та активних учасників аукціонy
    - Показ історії ставок та список активних учасників.
_[Авторизація не обов'язкова]_ Щоб побачити історію ставок, їх аналіз та детальні параметри лоту,  потрібно переключитися з Overview на Actions на [сторінці лоту](https://betabid-front.vercel.app/lots/37).


### Додаткові функціональні вимоги
1. #### Система ставок у реальному часі
    - Використання вебсокетів для миттєвого оновлення інформації про ставки.
_[Авторизація не обов'язкова]_ Не реалізовано, хоча в нас є кешування, що покращує використання сайту та не потрібно провантажувати сторінки та дані кожен раз.
2. #### Сортування і фільтрації
    - Вивести всі активні аукціони, відсортовані за різними критеріями, такими як ціна;
_[Авторизація не обов'язкова]_ На фронтенд частині реалізовані компоненти для фільтрації, на бекенд частині - абсолютно працююча логіка (можна переглянути на [свагері](https://betabid.azurewebsites.net/swagger/index.html)), але, на жаль, ми не встигли поєднати фронтенд та бекенд для фільтрації, тобто впровадити запити через недостаток часу. Проте ця технологія є та все для неї розроблено, що також дуже просимо прийняти до уваги)) Фільтрація планувалася за тегами та статусом, а сортування за ціною, це можна було б застосовувати одночасно.

    - Реалізувати можливість пошуку інших аукціонів та додати фільтри для пошуку.
_[Авторизація не обов'язкова]_ Пошук також реалізований на бекенді та фронтенді, через час також виникли труднощі їх ідеально об'єднати, але пошук на назвою аукціону працює.

3. #### Чат між учасниками аукціонy
    - Вбудований чат для спілкування учасників під час аукціону.
_[Необхідна авторизація]_ Ця фіча повністю розроблена лише на бекенді, що можна також перевірити у свагері. 


### Технічні вимоги
1. #### Наявність GitHub репозиторію із вихідним кодом проєктy
Весь вихідний код проекту завантажений у два репозиторії [betabid-front (фронтенд)](https://github.com/nuclear-gandhi-team/betabid-front) та [betabid-back (бекенд)](https://github.com/nuclear-gandhi-team/betabid-back).

2. #### Розгорнути додаток з використанням хмарного сервісу, наприклад, Heroku, Azure, Digital Ocean тощо. (опціонально)
Ми забезпечили деплой, як фронтенду за допомогою vercel, так і бекенду за допомогою Azure. Тобто є працююча база даних, свагер, бекенд та сайт, які самостійно функціонують.

3. #### Застосування Docker для ізоляції та зручного розгортання додатку (опціонально)
Цього ми зробити не встигли((


### Додаткові фічі від нас
Ми запланували це як повноцінний проект з розширеним функціоналом, але явно не врахували, що в нас лише тиждень, тому все, що ми не встигли зробити через те, що ми намагалися гарно імплементувати свої фічі.

1. #### Авторизація
_[Необхідна авторизація]_ Ми використовували JWT для забезпечення сесій користувача та безпеки. Розроблені сторінки для логіну та реєстрації в системі, ще планували, але не встигли зробити роутинг з усіх сторінок, що потребують авторизацію, на сторінку логіна.

2. #### Збереження аукціонів та свої аукціони
_[Необхідна авторизація]_ Планувалося додати дві окремі сторінки для збережених лотів та відображення аукціонів, які створив користувач. В базі даних є відповідні поля, які зберігають цю інформацію, на бекенді це враховано в ендпоїнтах, на фронті розроблені відповідні сторінки та додано компонент для збереження (зірочка) до перегляду лоту. Проте не встигли зробити запит на бекенд для виведення потрібних лотів

3. #### Налаштування акаунту
_[Необхідна авторизація]_ Розроблена сторінка налаштувань користувацьких даних. Додано форму на оновлення паролю та форму для зміни емейлу або публічного імені, яке б відображалося у історії ставок, щоб не розголошувати логін користувача. Знову ж таки, на бекенді всі ендпоїнти працюють коректно, але не встигли зроботи запити з фронтенду, буквально б ще один день і все було б ідеально(

4. #### Графік ставок
_[Авторизація не обов'язкова]_ Можна переглянути динаміку торгів по певному лоту, щоб краще зрозуміти тенденцію та не переплатити/недоплатити у боротьбі за лот.

5. #### Скелетон
_[Авторизація не обов'язкова]_ Це компонент, що відображається як заглушка при очікуванні відповіді від бекенду. Замість того, щоб бачити надпис "Loading...", користувач вже уявляє якого формату буде сторінка.

6. #### Теги
До кожного аукціону можна додати теги, за якими планувалося проводити сортування. Це допомагає користувачу швидше оцінити категорію лоту.

7. #### Пагінація
_[Авторизація не обов'язкова]_ На головній сторінці додана пагінація результатів, по 10 лотів на сторінку.

8. #### Кешування
_[Авторизація не обов'язкова]_ Щоб результати не потрібно було провантажувати кожен раз, навіть для сторінок, які вже були відвідані, ми використали кешування.

9. #### Безпека застосунку
_[Необхідна авторизація]_ В юзера шифруються всі паролі та інші дані при занесенні в базу даних, тому дані добре захищені. Також на клієнтській стороні використовуються Cookie замість localStorage, адже з кукі майже неможливо дістати дані з сторони користувача.


# Висновки та враження
Хакатон нам дуже сподобався, працювали не покладаючи рук всі дні та всі ночі. Відкрили для себе та попрактикували багато нових технологій. Єдине, що хотілося б настопного разу - більше часу, хоча б днів 10, а краще ще більше)) 
З реалізації, сайт: https://betabid-front.vercel.app/auth/register
Свагер: https://betabid.azurewebsites.net/swagger/index.html
(Більш детально про реалізацію бекенду можна переглянути на їх [README.md](https://github.com/nuclear-gandhi-team/betabid-back/blob/main/README.md), а також там наведена схема бази даних).

<br>

# Запуск фронтенду на localhost
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
