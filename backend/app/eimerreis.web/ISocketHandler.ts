export interface ISocketHandler  {
  Callback : (data: any) => any
  EventId : string,
  Process : (Data : any) => any
}
