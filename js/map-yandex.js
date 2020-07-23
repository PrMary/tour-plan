// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map(
      "map",
      {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [7.890703, 98.294772],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject(
      {
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [7.890703, 98.294772],
        },
      },
      {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: "islands#redIcon",
        // Метку можно перемещать.
        draggable: true,
      }
    );

  myMap.geoObjects.add(myGeoObject);
  myMap.behaviors.disable("scrollZoom");
}