import { painting, Country } from "../types/painting";

export const getPaintingsByCountry = (country: Country) => {
  let _pain = paintings.filter(p => p.country === country )
  return _pain;
}

export const paintings:Array<painting> = [
  {
    artistName: 'Марсель Руссо',
    title : 'Охота Амура',
    description: 'Холст, масло (50х80)',
    currency: 'руб',
    price: 14500,
    imgSrc: require('../assets/gallery/HuntingCupid.jpg'),
    country: Country.FRANCE,
  },
  {
    artistName: 'Анри Селин',
    title : 'Дама с собачкой',
    description: 'Акрил, бумага (50х80) ',
    currency: 'руб',
    price: 16500,
    imgSrc: require('../assets/gallery/LadyWithDog.jpg'),
    country: Country.FRANCE,
  },
  {
    artistName: 'Франсуа Дюпон',
    title : 'Процедура',
    description: 'Цветная литография (40х60)',
    currency: 'руб',
    price: 20000,
    imgSrc: require('../assets/gallery/Procedure.jpg'),
    country: Country.FRANCE,
  },
  {
    artistName: 'Луи Детуш',
    title : 'Роза',
    description: 'Бумага, акрил (50х80)',
    currency: 'руб',
    price: 12000,
    imgSrc: require('../assets/gallery/Rose.jpg'),
    country: Country.FRANCE,
  },
  {
    artistName: 'Франсуа Дюпон',
    title : 'Птичья трапеза',
    description: 'Цветная литография (40х60)',
    currency: 'руб',
    price: 22500,
    imgSrc: require('../assets/gallery/BirdsMeal.jpg'),
    country: Country.FRANCE,
  },
  {
    artistName: 'Пьер Моранж',
    title : 'Пейзаж с рыбой',
    description: 'Цветная литография (40х60)',
    currency: 'руб',
    price: 20000,
    imgSrc: require('../assets/gallery/LandscapeWithFish.jpg'),
    country: Country.FRANCE,
  },
  {
    artistName: 'Курт Вернер',
    title : 'Над городом',
    description: 'Цветная литография (40х60)',
    currency: 'руб',
    price: 16000,
    imgSrc: require('../assets/gallery/AboveCity.jpg'),
    country: Country.GERMANY,
  },
  {
    artistName: 'Макс Рихтер',
    title : 'Птенцы',
    description: 'Холст, масло (50х80)',
    currency: 'руб',
    price: 14500,
    imgSrc: require('../assets/gallery/Chicks.jpg'),
    country: Country.GERMANY,
  },
  {
    artistName: 'Мартин Майер',
    title : 'Среди листьев',
    description: 'Цветная литография (40х60)',
    currency: 'руб',
    price: 20000,
    imgSrc: require('../assets/gallery/AmongLeaves.jpg'),
    country: Country.GERMANY,
  },
  {
    artistName: 'Герман Беккер',
    title : 'Яркая птица',
    description: 'Цветная литография (40х60)',
    currency: 'руб',
    price: 13000,
    imgSrc: require('../assets/gallery/BrightBird.jpg'),
    country: Country.GERMANY,
  },
  {
    artistName: 'Вульф Бауэр',
    title : 'Дятлы',
    description: 'Бумага, акрил (50х80)',
    currency: 'руб',
    price: 0,
    imgSrc: require('../assets/gallery/Woodpeckers.jpg'),
    country: Country.GERMANY,
  },
  {
    artistName: 'Вальтер Хартманн',
    title : 'Большие воды',
    description: 'Бумага, акрил (50х80)',
    currency: 'руб',
    price: 23000,
    imgSrc: require('../assets/gallery/BigWaters.jpg'),
    country: Country.GERMANY,
  },
  {
    artistName: 'Пол Смит',
    title : 'Дикий зверь',
    description: 'Акварель, бумага (50х80)',
    currency: 'руб',
    price: 19500,
    imgSrc: require('../assets/gallery/WildAnimal.jpg'),
    country: Country.ENGLAND,
  },
  {
    artistName: 'Джон Уайт',
    title : 'Скалистый берег',
    description: 'Цветная литография (40х60)',
    currency: 'руб',
    price: 17500,
    imgSrc: require('../assets/gallery/RockyCoast.jpg'),
    country: Country.ENGLAND,
  },
  {
    artistName: 'Джим Уотсон',
    title : 'Река и горы',
    description: 'Акварель, бумага (50х80)',
    currency: 'руб',
    price: 20500,
    imgSrc: require('../assets/gallery/RiverAndMountains.jpg'),
    country: Country.ENGLAND,
  },
  {
    artistName: 'Юджин Зиллион',
    title : 'Белый попугай',
    description: 'Цветная литография (40х60)',
    currency: 'руб',
    price: 15500,
    imgSrc: require('../assets/gallery/WhiteParrot.jpg'),
    country: Country.ENGLAND
  },
  {
    artistName: 'Эрик Гиллман',
    title : 'Ночная рыба',
    description: 'Бумага, акрил (50х80)',
    currency: 'руб',
    price: 12500,
    imgSrc: require('../assets/gallery/NightFish.jpg'),
    country: Country.ENGLAND
  },
  {
    artistName: 'Альфред Барр',
    title : 'Рыжий кот',
    description: 'Цветная литография (40х60) ',
    currency: 'руб',
    price: 21000,
    imgSrc: require('../assets/gallery/GingerCat.jpg'),
    country: Country.ENGLAND
  },
]