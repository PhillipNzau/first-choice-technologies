export interface OrganisationsResponseInterface {
  count: number,
  next: string,
  previous: string,
  results: OrganisationsInterface
}

export interface OrganisationsInterface {
  id:number,
  name:string,
  description:string,
  status:string,
  created_at:string,
  updated_at:string,
}
export interface createOrganisationInterface {
  name: string,
  description: string,
}
