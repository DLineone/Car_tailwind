export function fetchCar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "BMW X5 30d, 2019",
        img: "car.jpg",
        description: ` Заинтересовал этот автомобиль? Позвоните продавцу, чтобы узнать детали — а мы пришлём вам Отчёт в подарок!
        
          ‼️Цена указана за наличный расчет ‼️
          
          Болee подрoбную информaцию по комплектaции aвтомoбиля и дpугие интepеcующие вoпросы утoчняйте пo телeфону, укaзaнному в объявлении.
          
          Автомобили с пробегом :
          Возможность покупки автомобиля в кредит, более 10 банков.`,
      });
    }, 2000);
  });
}
