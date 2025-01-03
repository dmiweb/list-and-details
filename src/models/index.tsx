export type TUsers = {
  id: number,
  name: string
}

export type TUserInfo = {
  id: number,
  name: string,
  avatar: string,
  details: {
    city: string,
    company: string,
    position: string
  }
}