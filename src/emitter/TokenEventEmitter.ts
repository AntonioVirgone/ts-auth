import { EventEmitter } from "events";
import { DeleteService } from "../service/delete/DeleteService";
import { IDeleteService } from "../service/delete/IDeleteService";

export class TokenEventEmitter {
  emitter = new EventEmitter();
  deleteService: IDeleteService = new DeleteService();

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
