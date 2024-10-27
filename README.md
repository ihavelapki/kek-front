# Online Cinemahall Project


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# KEKAPP

Данное приложение будет выполнять функции виртуального кинозала с личным кабинетом и историей просмотров.
Также планируется добавить возможность оставлять отзывы и оценки просмотренным фильмам.
Если хорошо пойдет, то и возможность онлайн чата или голосового общения во время кинопросмотра.
Предыдущая версия SPA приложения была написана на VUE.js 3, но я решил переписать на react. 
Постараюсь сразу вести бэклог и записывать, что делаю.

## Архитектура приложения:

## Компоненты:

# BACKLOG:

* [1. Первичная настройка.](#init)
    * [1.1 Установить библиотеку react](#install_react)
    * [1.2 Создать проект](#create_project)
    * [1.3 Подключить к Git](#git)
    * [1.4 Создать исходную структуру папок](#fsd)
* [2. Создание первичного роутера](#router)
    * [2.1 Скачать библиотеку](#)
    * [2.2 Создать странички](#)
    * [2.3 Добавить роутер в основной компонент](#)
* [3. Доработка роутера](#)
    * [3.1 Вывести роутер в отдельный элемент](#)
    * [3.2 Добавить редирект с несуществующих страниц](#)
    * [3.3 Добавить перенаправление на страницу с фильмом](#)
* [4. Создать сущность для фильма](#)
    * [4.1 Предварительный шаблон для сущности film](#)
    * [4.2 Предварительный шаблон со стилем для фильма](#)
    * [4.3 Добавить кнопку открыть фильм](#)
    * [4.4 Добавить дату просмотра фильма](#)
* [5. Создать виджет с перечнем фильмов](#)
    * [5.1 Создать черновик сущности в виджетах](#)
    * [5.2 Создать стиль под список ](#)
    * [](#)
    * [](#)
* [6. Добавить на страницу афиши список фильмов](#)
    * [6.1 Добавить сущность 'лист фильмов' на страницу](#)
    * [6.2 Прокинуть предварительный пропс со списком фильмов](#)
    * [6.3 Добавить функцию API с запросом на список фильмов](#)
    * [6.4 Добавить дату просмотра в пропс со списком фильмов](#)
* [7. Создать страницу с фильмом](#)
    * [7.1 Сделать предварительный шаблон страницы с фильмом](#)
    * [7.2 Сделать API с запросом подробной инфы о фильме](#)
    * [7.3 Сделать проверку, если дата совпадает, то переходим на плеер, если нет то инфа о фильме](#)
* [8. Создать страницу с плеером](#)
    * [8.1 Создать страничку под просмотр](#)
    * [](#)
* [9. Создать сущность плеера](#)
    * [9.1 Создать предварительную сущность плеера](#)
    * [9.2 Скачать библиотеку для плеера](#)
* [10. Создать хедер](#)
    * [10.1 Создать черновик хедера](#)
    * [10.2 Добавить модальное окно в юзерблок](#)
* [11. Создать выпадающее меню](#)
    * [11.1 Создать элемент с модальным окном](#)
    * []
* [12. Аутентификация](#)
    * [12.1 создать инпут элемент](#)
    * [12.2 Создать виджет с двумя импутами под email и password](#)
    * [12.3 Создать страницу для аутентификации](#)
    * [12.4 Добавить виджет на страницу логирования](#)
    * [12.5 Добавить в модальное окно юзерблока ссылку на страницу аутентификации](#)
    * [12.6 Добавить ссылку на страницу аутентификации в роутер](#)
    * [12.7](#)
* [13. ](#)
    








# TUTORIAL:

<a id ="init"></a>

## Первичная настройка.

<a id="install_react"></a>

### Установка react

    sudo npm install -g create-react-app

<a id="create_project"></a>

### Создаем проект
    npx create-react-app kekapp

<a id="git"></a>

### Подключаем к Git

- Проверим есть ли настройки на глобальном уровне:
```
git config --list
```

- Если есть, то ок, если нет, делаем:
```
git config --global user.name your-user-git-name

git config --global user.email your-user_git_email
```

- Созадаем на сайте репозиторий (в данном случае github.com)

- Соединяем локальный и удаленный:

```bash
 git remote add origin https://github.com/Pereyro/kekapp.git

git branch -M master

git push -u origin master
```

<a id="fsd"></a>

### Создаем структуру каталогов будущего проекта

Создадим структуру каталогов согласно концепции [FSD](https://feature-sliced.design/)


```
/src:
    --/app
    --/processes
    --/pages
    --/widgets
    --/features
    --/entities
    --/shared
```

## Роутер

- Скачиваем библиотеку 

npm install react-router-dom

- Создаем простые странички в папке pages:

```
    /pages
        --/About
            --index.jsx
        --/Afisha
            --index.jsx
```

Вот по такому шаблону:

```js
import React from 'react';

const Afisha = () => {
    return (
        <h1>THIS IS AFISHA PAGE</h1>
    );
};

export default Afisha;
```

- Добавляем в App.js роутер на эти страницы

```js
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "../pages/About";
import Afisha from "../pages/Afisha";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/> } />
        <Route path="/afisha" element={<Afisha/> } />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
```

1. Сделать форму для SignIn
2. Сделать условие на выпадающую форму в залогиненом состоянии и нет
3. Добавить туда логаут
4. На логин страницу добавить ссылку на signin
5. Сделать обращение к серверу со списком фильмов. Добавить обработчик ошибок, если сервер ничего не вернул.
6.

    
