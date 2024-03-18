export interface User {
  userId: string;
  email: string;
  password: string;
}

export type NewUser = User & Name;

export type UserBasicInfo = {
  userId: string;
  email: string;
  fName: string;
  lName: string;
};

type Name = {
  fName: string;
  lName: string;
};

export type UserProfileData = {
  name: Name;
  email: string;
};
