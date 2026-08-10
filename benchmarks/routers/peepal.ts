import { TrieRouter } from '../../src/router';
import type { RouterInstance } from './interface';

export class PeepalRouter implements RouterInstance {
  private router = new TrieRouter();

  add(method: string, path: string, handler: any) {
    this.router.add(method, path, handler);
  }

  find(method: string, path: string) {
    return this.router.find(method, path);
  }
}
