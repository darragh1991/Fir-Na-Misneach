export class Users {
  users?: IUsers[] = [];
  hasError? = false;
  isloading? = false;
}

export interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  category: string;
  address: Address
}

interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: string;
  details: {
    apartment: string;
    floor: string;
  };
}
