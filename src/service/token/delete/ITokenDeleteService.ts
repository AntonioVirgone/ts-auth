export interface ITokenDeleteService {
    delete(key: string): Promise<void>
}