const API_URL = {
  AUTH: {
    LOGIN: 'auth/login',
    REGISTER: 'auth/signup',
  },
  USER: {
    GETBYUSERNAME: 'user/get-by-username',
    GETBYEMAIL: 'user/get-by-email',
    EDIT: 'user/edit-profile',
  },
  MENUFACTUTUNER: {
    GET: 'manufacturer/list',
  },
  LAPTOP: {
    DETAIL: (id: any) => `laptop/detail/${id}`,
    LIST_FILTER: ({
      category,
      manufacturer,
      ram,
      vga,
      cpu,
      hardDrive,
      key,
      limit,
      page,
    }: listLap) =>
      `laptop/filter?category=${category ? category : ''}&manufacturer=${
        manufacturer ? manufacturer : ''
      }&ram=${ram ? ram : ''?.toString()}&vga=${vga ? vga : ''}&cpu=${
        cpu ? cpu : ''
      }&hard-drive=${hardDrive ? hardDrive : ''}&key=${key ? key : ''}&limit=${
        limit ? limit : ''
      }&page=${page ? page : ''}`,
    GETPARAMS: 'laptop/filter',
    SAME: 'laptop/same',
  },
  SHIPMENT: {
    GET: 'shipment/list',
    GETDETAIL: (id: any) => `shipment/detail/${id}`,
  },
  CART: {
    ADD: 'cart/add',
    PUT: 'cart/edit',
    DELETE: 'cart/delete',
    DELETEALL: 'cart/delete-all',
    GET: 'cart/current',
  },
  ORDER: {
    POST: 'order/insert',
    GETUSERNAME: (sort: any) => `order/get-by-username?sort=${sort}`,
    GETDETAIL: (id: any) => `order/detail/${id}`,
    PUT: 'order/update-status',
  },
  COMMENT: {
    GET: 'comment/list',
    POST: 'comment/insert',
  },
  STATISTIC: {
    GET_LAPTOP_WITH_TOTAL_SOLD: "statistic/laptop-with-total-sold",
  }
};

export default API_URL;

type listLap = {
  category?: any;
  manufacturer?: any;
  ram?: any[];
  vga?: any;
  cpu?: any;
  hardDrive?: any;
  key?: any;
  limit?: any;
  page?: any;
};
