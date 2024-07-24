export interface IDeleteService {
    delete(key: string): Promise<void>
}