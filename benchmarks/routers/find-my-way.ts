import FindMyWay, { type HTTPMethod } from 'find-my-way';
import type { RouterInstance } from './interface';

export class FindMyWayRouter implements RouterInstance {
  private router = FindMyWay({});

  add(method: string, path: string, handler: any) {
    this.router.on(method as HTTPMethod, path, handler);
  }

  find(method: string, path: string) {
    return this.router.find(method as HTTPMethod, path);
  }
}
