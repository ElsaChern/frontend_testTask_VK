# Основное задание: Разработка React-приложения

Приложение состоит из нескольких частей:

## Блок с кнопкой и текстовым полем.

По нажатию на кнопку выполнить запрос к
[https://catfact.ninja/fact](https://catfact.ninja/fact). Полученный факт нужно
записать в текстовое поле и установить курсор после первого слова.

## Форма с текстовым полем и кнопкой отправки.

Пользователь вводит своё имя в текстовом поле. По истечении 3-х секунд после
ввода имени или при отправке формы выполняется запрос к
[https://api.agify.io/](https://api.agify.io/) с введенным именем в параметре
name. Ответом будет возраст человека, определенный по имени. Этот ответ нужно
отобразить под текстовым полем.

### Особенности:

- Необходимо предотвращать дублирующие запросы (не отправлять запрос с таким же
  именем).
- Предусмотреть отправку следующего запроса до того, как текущий был обработан -
  прерывать запрос, чей ответ нам уже не нужен (частый кейс при медленном
  интернете).

### Дополнительные задания:

- Использовать при реализации библиотеку VKUI (можно вынести формы в разные
  страницы, используя компоненты View и Panel).
- Реализовать валидацию поля ввода имени (имя может состоять только из букв).
- Развернуть данное приложение в виде мини-приложения ВКонтакте. Для этого
  дополнительно понадобится установить пакет bridge.
- Плюсом будет использование следующих библиотек и технологий, так как они
  активно применяются в проектах команды: Архитектурная методология
  Feature-Sliced Design, TanStack Query для работы с запросами, Typescript,
  React Hook Form + Yup для работы с формами и их валидацией
