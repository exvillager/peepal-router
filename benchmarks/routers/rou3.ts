import { createRouter, addRoute, findRoute } from 'rou3';
import type { RouterInstance } from './interface';

export class Rou3Router implements RouterInstance {
  private router = createRouter();

  add(method: string, path: string, handler: any) {
    // rou3 uses "**" (not peepal/find-my-way's trailing "*") for a catch-all.
    const rou3Path = path.endsWith('/*') ? path.slice(0, -1) + '**' : path;
    addRoute(this.router, method, rou3Path, { handler });
  }

  find(method: string, path: string) {
    return findRoute(this.router, method, path);
  }
}
