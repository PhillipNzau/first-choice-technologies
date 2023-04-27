export interface ProjectsResponseInterface {
  count: number,
  next: string,
  previous: string,
  results: ProjectsInterface
}

export interface ProjectsInterface {
  id:number,
  name:string,
  description:string,
  organization_id:number,
  created_at:string,
  updated_at:string,
}
export interface createProjectInterface {
  name: string,
  organization_id:number,
}
