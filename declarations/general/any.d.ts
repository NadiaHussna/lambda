/**
 * Contains all any types and interfaces
 */

declare interface IAny {
  [key: string]: TTrueAny
}

declare type TAny = string | number | Buffer | boolean | void | any | undefined

declare type TBasicArray = string[] | number[] | Buffer[]

declare type TAnyArray = (string | number | Buffer | TBasicArray | IAny)[] | TBasicArray

declare type TTrueAny = TAnyArray | TAny
