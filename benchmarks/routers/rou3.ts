import { createRouter, addRoute, findRoute } from 'rou3';
import type { RouterInstance } from './interface';

export class Rou3Router implements RouterInstance {
  private router = createRouter();

  add(method: string, path: string, handler: any) {
    addRoute(this.router, method, path, { handler });
  }

  find(method: string, path: string) {
    return findRoute(this.router, method, path);
  }
}
