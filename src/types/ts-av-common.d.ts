// src/types/ts-av-common.d.ts
declare module 'ts-av-common' {
    export function generateRandomString(length: number): string;

    export async function read(fileName: string)

    export async function checkFileExists(fileName: string): Promise<boolean>;

    export async function createFile(fileName: string);

    export async function write<T>(fileName: string, items: T[]);
  }