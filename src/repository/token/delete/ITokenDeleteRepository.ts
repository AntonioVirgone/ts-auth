export interface ITokenDeleteRepository {
    delete(token: string): Promise<void>
}