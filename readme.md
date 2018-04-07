*Пока по-русски*

**Концепт**

Сервис рассылающий данные по всем пользователям без необходимости каких-либо познаний в NodeJS и правки серверной части.

**Установка**

Установка с NodeJS (Ubuntu):

```
git clone https://github.com/vvmspace/ionic && cd ionic && ./install-nodejs-ubuntu.sh && ./install.sh

```

Установка без NodeJS (Ubuntu):

```
git clone https://github.com/vvmspace/ionic && cd ionic && ./install.sh
```

**Запуск**

```
./run.sh
```

**Автозапуск:**

В /etc/rc.local пропишите

```
cd /path_to/ionic && ./run.sh
```

**Использование на front'е**

Клиент ionic.js лежит в public/js

Можно подключить так:

http://host:7070/js/ionic.js


```
    <script src="/js/socket.io-1.2.0.js"></script>
    <script src="/js/ionic.js"></script>
    <script>
    ionic = new Ionic();
    // или Ionic('host:port');
    
    // Обработка событий:  
    ionic.boom('событие', function(){
        // функция, по аналогии с .on
    });
    
    // Отправка информации о событии всем подключенным к серверу клиентам:
    ionic.impulse('событие', {
        da:'ta',
        something:'else'
    });
    
    </script>

```

**Пишите**
https://vk.com/it007