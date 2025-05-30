export const enum RoutesEnum {
  home = "/",
  cart = "/cart",
  product = "/product",
}

export const getProductRoute = (id: string | number) =>
  `${RoutesEnum.product}/${id}`;
