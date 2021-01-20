import * as PNotify from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

const notifications = {
  onOverflowRespose() {
    PNotify.notice({
      title: 'Список совпадений переполнен',
      text: 'Введите более специфичный запрос',
    });
  },
  onError() {
    PNotify.error({
      title: 'Произошла ошибка запроса',
      text: 'Повторите пожалуйста запрос снова',
    });
  },
};

export default notifications;
