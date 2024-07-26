export interface ITokenFindService {
    isValid(userCode: string, token: string): Promise<void>;
}