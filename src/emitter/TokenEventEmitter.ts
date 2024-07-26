import { EventEmitter } from "events";
import { ITokenDeleteService } from "../service/token/delete/ITokenDeleteService";
import { TokenDeleteService } from "../service/token/delete/TokenDeleteService";

export class TokenEventEmitter {
  emitter = new EventEmitter();
  deleteService: ITokenDeleteService = new TokenDeleteService();

  constructor() {
    // Listener che esegue una funzione quando l'evento viene emesso
    this.emitter.on("expire", (param: string) => {
      this.deleteService.delete(param);
    });
  }

  expire(timeout: number, extraParam: string) {
    setTimeout(() => {
      this.emitter.emit("expire", extraParam);
    }, timeout);
  }
}
