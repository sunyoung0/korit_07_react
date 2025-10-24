export type ItemResponse = {
  product: string;
  amount: string;
  _links: {
    self: {
      "href" : "http://localhost:8080/api/items/1"
    },
    item : {
          "href" : "http://localhost:8080/api/items/1"
        }
  }
}

export type Item = {
  product: string;
  amount: string;
}

export type ItemEntity = {
  item: Item;
  url: string;
}