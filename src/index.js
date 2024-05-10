import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";



let arPostsData = [
    {id: 1, massage: 'Это крутая социальная сеть!', LikesValue: 10,},
    {id: 2, massage: 'Ярослав говорит "Верни стену!', LikesValue: 4,},
    {id: 3, massage: 'Нужно добавить кнопки лайка ВЫПОЛНИЛ', LikesValue: 10,},
    {id: 4, massage: 'Даже ленивый должен смотереть по 5 уроков в день!', LikesValue: 10,},
    {id: 5, massage: 'Скоро экзамен и защита диплома)', LikesValue: 10,},
]

// Тут расположен блок новостей для профиля пользователя.

let arDialogsData = [
    {id: 1, name: 'Избранное', img: 'https://avatars.mds.yandex.net/i?id=2314863692f89b39bf6e880ba8939085bc03e071-10702804-images-thumbs&n=13'},
    {id: 2, name: 'Жорик', img: 'https://kartinkis.cdnbro.com/posts/032532-kotiki-cherno-belye-6.jpg'},
    {id: 3, name: 'Мусик', img: 'https://sun9-63.userapi.com/impg/vKxabkqz9m895wS1yZFV9UpSrTjcMBeQjTw2Nw/1jCo9_8jnLg.jpg?size=640x640&quality=95&sign=35e712f290a417acb7deb4b949caec7e&type=album'},
]
// Тут расположен блок диалогов пользователя.

let arDialogData = [
    {id: 1, massage: 'Эй классная жопка!', photo: 'https://avatars.mds.yandex.net/i?id=a9a6c4ad519c107a1219974cf7010b0191df20a4-5232207-images-thumbs&n=13' },
    {id: 2, massage: 'И у тебя тоже!',},
    {id: 3, massage: 'Только у меня еще и уйх есть!',},
    {id: 4, massage: 'Лож и провокация)', photo: 'https://cojo.ru/wp-content/uploads/2022/12/manchkin-britanskaia-shinshilla-3.webp',}
]
// Тут расположен диалог с пользователем.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App arPostsData={arPostsData} arDialogsData={arDialogsData} arDialogData={arDialogData} />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
