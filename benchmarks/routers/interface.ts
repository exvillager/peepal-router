export interface RouterInstance {
  add(method: string, path: string, handler: any): void;
  find(method: string, path: string): any;
}
