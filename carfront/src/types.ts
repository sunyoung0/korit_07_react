export type CarResponse = {
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
  _links: {
    self: {
      href: string;
    },
    car: {
      href: string;
    },
    owner: {
      href:string;
    }
  }
}

// id는 제외하고 필드명과 타입이 동일함.
// 프론트에서 처음 입력해서 백엔드로 전달하여 id값이 생성되서 db에 저장
// 일종의 백엔드의 dto 느낌
export type Car = {
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
}

export type CarEntity = {
  car: Car;
  url: string;
}