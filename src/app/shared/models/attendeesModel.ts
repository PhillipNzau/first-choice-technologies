export interface AttendeesResponseInterface {
  count: number,
  next: string,
  previous: string,
  results: AttendeesInterface
}

export interface AttendeesInterface {
  id:number,
  first_name: string,
  last_name: string,
  get_full_name:string,
  id_number: string,
  email: string,
  gender_id: number,
  gender: string,
  created_at:string,
  updated_at:string,
}
export interface createAttendeeInterface {
  first_name: string,
  last_name: string,
  id_number: string,
  gender_id: number,
  email: string,
}
