export interface EventsResponseInterface {
  count: number,
  next: string,
  previous: string,
  results: EventsInterface
}

export interface EventsInterface {
  id:number,
  name:string,
  description:string,
  project_id:string,
  county_id:string,
  county:string,
  start_date:string,
  end_dat:string,
  created_at:string,
  updated_at:string,
}
export interface createEventInterface {
  name: string,
  description: string,
  project_id: string,
  county_id: string,
  start_date: string,
  end_date: string,
}


