
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Ata
 * 
 */
export type Ata = $Result.DefaultSelection<Prisma.$AtaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoReuniao: {
  VIRTUAL: 'VIRTUAL',
  PRESENCIAL: 'PRESENCIAL'
};

export type TipoReuniao = (typeof TipoReuniao)[keyof typeof TipoReuniao]


export const StatusAta: {
  PENDENTE: 'PENDENTE',
  APROVADA: 'APROVADA',
  REJEITADA: 'REJEITADA'
};

export type StatusAta = (typeof StatusAta)[keyof typeof StatusAta]

}

export type TipoReuniao = $Enums.TipoReuniao

export const TipoReuniao: typeof $Enums.TipoReuniao

export type StatusAta = $Enums.StatusAta

export const StatusAta: typeof $Enums.StatusAta

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ata`: Exposes CRUD operations for the **Ata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atas
    * const atas = await prisma.ata.findMany()
    * ```
    */
  get ata(): Prisma.AtaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Ata: 'Ata'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "ata"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Ata: {
        payload: Prisma.$AtaPayload<ExtArgs>
        fields: Prisma.AtaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload>
          }
          findFirst: {
            args: Prisma.AtaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload>
          }
          findMany: {
            args: Prisma.AtaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload>[]
          }
          create: {
            args: Prisma.AtaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload>
          }
          createMany: {
            args: Prisma.AtaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload>[]
          }
          delete: {
            args: Prisma.AtaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload>
          }
          update: {
            args: Prisma.AtaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload>
          }
          deleteMany: {
            args: Prisma.AtaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload>[]
          }
          upsert: {
            args: Prisma.AtaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtaPayload>
          }
          aggregate: {
            args: Prisma.AtaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAta>
          }
          groupBy: {
            args: Prisma.AtaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtaCountArgs<ExtArgs>
            result: $Utils.Optional<AtaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    ata?: AtaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    atasAprovadas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atasAprovadas?: boolean | UsuarioCountOutputTypeCountAtasAprovadasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAtasAprovadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha: string | null
    ativo: boolean | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    senha: string | null
    ativo: boolean | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    senha: number
    ativo: number
    createdAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    ativo?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    ativo?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    ativo?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    nome: string
    senha: string
    ativo: boolean
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    ativo?: boolean
    createdAt?: boolean
    atasAprovadas?: boolean | Usuario$atasAprovadasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    ativo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    ativo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    ativo?: boolean
    createdAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nome" | "senha" | "ativo" | "createdAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atasAprovadas?: boolean | Usuario$atasAprovadasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      atasAprovadas: Prisma.$AtaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      nome: string
      senha: string
      ativo: boolean
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atasAprovadas<T extends Usuario$atasAprovadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$atasAprovadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly ativo: FieldRef<"Usuario", 'Boolean'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.atasAprovadas
   */
  export type Usuario$atasAprovadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    where?: AtaWhereInput
    orderBy?: AtaOrderByWithRelationInput | AtaOrderByWithRelationInput[]
    cursor?: AtaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtaScalarFieldEnum | AtaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Ata
   */

  export type AggregateAta = {
    _count: AtaCountAggregateOutputType | null
    _avg: AtaAvgAggregateOutputType | null
    _sum: AtaSumAggregateOutputType | null
    _min: AtaMinAggregateOutputType | null
    _max: AtaMaxAggregateOutputType | null
  }

  export type AtaAvgAggregateOutputType = {
    duracaoMinutos: number | null
    arquivoAudioTamanho: number | null
  }

  export type AtaSumAggregateOutputType = {
    duracaoMinutos: number | null
    arquivoAudioTamanho: number | null
  }

  export type AtaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    tipo: $Enums.TipoReuniao | null
    dataReuniao: Date | null
    duracaoMinutos: number | null
    arquivoAudioBase64: string | null
    arquivoAudioNome: string | null
    arquivoAudioTipo: string | null
    arquivoAudioTamanho: number | null
    objetivo: string | null
    status: $Enums.StatusAta | null
    aprovadoPorId: string | null
    dataAprovacao: Date | null
    comentarios: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    tipo: $Enums.TipoReuniao | null
    dataReuniao: Date | null
    duracaoMinutos: number | null
    arquivoAudioBase64: string | null
    arquivoAudioNome: string | null
    arquivoAudioTipo: string | null
    arquivoAudioTamanho: number | null
    objetivo: string | null
    status: $Enums.StatusAta | null
    aprovadoPorId: string | null
    dataAprovacao: Date | null
    comentarios: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtaCountAggregateOutputType = {
    id: number
    titulo: number
    tipo: number
    dataReuniao: number
    duracaoMinutos: number
    arquivoAudioBase64: number
    arquivoAudioNome: number
    arquivoAudioTipo: number
    arquivoAudioTamanho: number
    participantes: number
    identificacao: number
    objetivo: number
    topicosDiscutidos: number
    decisoes: number
    acoes: number
    pendencias: number
    proximosPassos: number
    status: number
    aprovadoPorId: number
    dataAprovacao: number
    comentarios: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AtaAvgAggregateInputType = {
    duracaoMinutos?: true
    arquivoAudioTamanho?: true
  }

  export type AtaSumAggregateInputType = {
    duracaoMinutos?: true
    arquivoAudioTamanho?: true
  }

  export type AtaMinAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    dataReuniao?: true
    duracaoMinutos?: true
    arquivoAudioBase64?: true
    arquivoAudioNome?: true
    arquivoAudioTipo?: true
    arquivoAudioTamanho?: true
    objetivo?: true
    status?: true
    aprovadoPorId?: true
    dataAprovacao?: true
    comentarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtaMaxAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    dataReuniao?: true
    duracaoMinutos?: true
    arquivoAudioBase64?: true
    arquivoAudioNome?: true
    arquivoAudioTipo?: true
    arquivoAudioTamanho?: true
    objetivo?: true
    status?: true
    aprovadoPorId?: true
    dataAprovacao?: true
    comentarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtaCountAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    dataReuniao?: true
    duracaoMinutos?: true
    arquivoAudioBase64?: true
    arquivoAudioNome?: true
    arquivoAudioTipo?: true
    arquivoAudioTamanho?: true
    participantes?: true
    identificacao?: true
    objetivo?: true
    topicosDiscutidos?: true
    decisoes?: true
    acoes?: true
    pendencias?: true
    proximosPassos?: true
    status?: true
    aprovadoPorId?: true
    dataAprovacao?: true
    comentarios?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AtaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ata to aggregate.
     */
    where?: AtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atas to fetch.
     */
    orderBy?: AtaOrderByWithRelationInput | AtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atas
    **/
    _count?: true | AtaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtaMaxAggregateInputType
  }

  export type GetAtaAggregateType<T extends AtaAggregateArgs> = {
        [P in keyof T & keyof AggregateAta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAta[P]>
      : GetScalarType<T[P], AggregateAta[P]>
  }




  export type AtaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtaWhereInput
    orderBy?: AtaOrderByWithAggregationInput | AtaOrderByWithAggregationInput[]
    by: AtaScalarFieldEnum[] | AtaScalarFieldEnum
    having?: AtaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtaCountAggregateInputType | true
    _avg?: AtaAvgAggregateInputType
    _sum?: AtaSumAggregateInputType
    _min?: AtaMinAggregateInputType
    _max?: AtaMaxAggregateInputType
  }

  export type AtaGroupByOutputType = {
    id: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date
    duracaoMinutos: number | null
    arquivoAudioBase64: string | null
    arquivoAudioNome: string | null
    arquivoAudioTipo: string | null
    arquivoAudioTamanho: number | null
    participantes: JsonValue | null
    identificacao: JsonValue | null
    objetivo: string | null
    topicosDiscutidos: JsonValue | null
    decisoes: JsonValue | null
    acoes: JsonValue | null
    pendencias: JsonValue | null
    proximosPassos: JsonValue | null
    status: $Enums.StatusAta
    aprovadoPorId: string | null
    dataAprovacao: Date | null
    comentarios: string | null
    createdAt: Date
    updatedAt: Date
    _count: AtaCountAggregateOutputType | null
    _avg: AtaAvgAggregateOutputType | null
    _sum: AtaSumAggregateOutputType | null
    _min: AtaMinAggregateOutputType | null
    _max: AtaMaxAggregateOutputType | null
  }

  type GetAtaGroupByPayload<T extends AtaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtaGroupByOutputType[P]>
            : GetScalarType<T[P], AtaGroupByOutputType[P]>
        }
      >
    >


  export type AtaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dataReuniao?: boolean
    duracaoMinutos?: boolean
    arquivoAudioBase64?: boolean
    arquivoAudioNome?: boolean
    arquivoAudioTipo?: boolean
    arquivoAudioTamanho?: boolean
    participantes?: boolean
    identificacao?: boolean
    objetivo?: boolean
    topicosDiscutidos?: boolean
    decisoes?: boolean
    acoes?: boolean
    pendencias?: boolean
    proximosPassos?: boolean
    status?: boolean
    aprovadoPorId?: boolean
    dataAprovacao?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }, ExtArgs["result"]["ata"]>

  export type AtaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dataReuniao?: boolean
    duracaoMinutos?: boolean
    arquivoAudioBase64?: boolean
    arquivoAudioNome?: boolean
    arquivoAudioTipo?: boolean
    arquivoAudioTamanho?: boolean
    participantes?: boolean
    identificacao?: boolean
    objetivo?: boolean
    topicosDiscutidos?: boolean
    decisoes?: boolean
    acoes?: boolean
    pendencias?: boolean
    proximosPassos?: boolean
    status?: boolean
    aprovadoPorId?: boolean
    dataAprovacao?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }, ExtArgs["result"]["ata"]>

  export type AtaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dataReuniao?: boolean
    duracaoMinutos?: boolean
    arquivoAudioBase64?: boolean
    arquivoAudioNome?: boolean
    arquivoAudioTipo?: boolean
    arquivoAudioTamanho?: boolean
    participantes?: boolean
    identificacao?: boolean
    objetivo?: boolean
    topicosDiscutidos?: boolean
    decisoes?: boolean
    acoes?: boolean
    pendencias?: boolean
    proximosPassos?: boolean
    status?: boolean
    aprovadoPorId?: boolean
    dataAprovacao?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }, ExtArgs["result"]["ata"]>

  export type AtaSelectScalar = {
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dataReuniao?: boolean
    duracaoMinutos?: boolean
    arquivoAudioBase64?: boolean
    arquivoAudioNome?: boolean
    arquivoAudioTipo?: boolean
    arquivoAudioTamanho?: boolean
    participantes?: boolean
    identificacao?: boolean
    objetivo?: boolean
    topicosDiscutidos?: boolean
    decisoes?: boolean
    acoes?: boolean
    pendencias?: boolean
    proximosPassos?: boolean
    status?: boolean
    aprovadoPorId?: boolean
    dataAprovacao?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AtaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "tipo" | "dataReuniao" | "duracaoMinutos" | "arquivoAudioBase64" | "arquivoAudioNome" | "arquivoAudioTipo" | "arquivoAudioTamanho" | "participantes" | "identificacao" | "objetivo" | "topicosDiscutidos" | "decisoes" | "acoes" | "pendencias" | "proximosPassos" | "status" | "aprovadoPorId" | "dataAprovacao" | "comentarios" | "createdAt" | "updatedAt", ExtArgs["result"]["ata"]>
  export type AtaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }
  export type AtaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }
  export type AtaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }

  export type $AtaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ata"
    objects: {
      aprovadoPor: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      tipo: $Enums.TipoReuniao
      dataReuniao: Date
      duracaoMinutos: number | null
      arquivoAudioBase64: string | null
      arquivoAudioNome: string | null
      arquivoAudioTipo: string | null
      arquivoAudioTamanho: number | null
      participantes: Prisma.JsonValue | null
      identificacao: Prisma.JsonValue | null
      objetivo: string | null
      topicosDiscutidos: Prisma.JsonValue | null
      decisoes: Prisma.JsonValue | null
      acoes: Prisma.JsonValue | null
      pendencias: Prisma.JsonValue | null
      proximosPassos: Prisma.JsonValue | null
      status: $Enums.StatusAta
      aprovadoPorId: string | null
      dataAprovacao: Date | null
      comentarios: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ata"]>
    composites: {}
  }

  type AtaGetPayload<S extends boolean | null | undefined | AtaDefaultArgs> = $Result.GetResult<Prisma.$AtaPayload, S>

  type AtaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtaCountAggregateInputType | true
    }

  export interface AtaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ata'], meta: { name: 'Ata' } }
    /**
     * Find zero or one Ata that matches the filter.
     * @param {AtaFindUniqueArgs} args - Arguments to find a Ata
     * @example
     * // Get one Ata
     * const ata = await prisma.ata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtaFindUniqueArgs>(args: SelectSubset<T, AtaFindUniqueArgs<ExtArgs>>): Prisma__AtaClient<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtaFindUniqueOrThrowArgs} args - Arguments to find a Ata
     * @example
     * // Get one Ata
     * const ata = await prisma.ata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtaFindUniqueOrThrowArgs>(args: SelectSubset<T, AtaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtaClient<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtaFindFirstArgs} args - Arguments to find a Ata
     * @example
     * // Get one Ata
     * const ata = await prisma.ata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtaFindFirstArgs>(args?: SelectSubset<T, AtaFindFirstArgs<ExtArgs>>): Prisma__AtaClient<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtaFindFirstOrThrowArgs} args - Arguments to find a Ata
     * @example
     * // Get one Ata
     * const ata = await prisma.ata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtaFindFirstOrThrowArgs>(args?: SelectSubset<T, AtaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtaClient<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atas
     * const atas = await prisma.ata.findMany()
     * 
     * // Get first 10 Atas
     * const atas = await prisma.ata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ataWithIdOnly = await prisma.ata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtaFindManyArgs>(args?: SelectSubset<T, AtaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ata.
     * @param {AtaCreateArgs} args - Arguments to create a Ata.
     * @example
     * // Create one Ata
     * const Ata = await prisma.ata.create({
     *   data: {
     *     // ... data to create a Ata
     *   }
     * })
     * 
     */
    create<T extends AtaCreateArgs>(args: SelectSubset<T, AtaCreateArgs<ExtArgs>>): Prisma__AtaClient<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atas.
     * @param {AtaCreateManyArgs} args - Arguments to create many Atas.
     * @example
     * // Create many Atas
     * const ata = await prisma.ata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtaCreateManyArgs>(args?: SelectSubset<T, AtaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atas and returns the data saved in the database.
     * @param {AtaCreateManyAndReturnArgs} args - Arguments to create many Atas.
     * @example
     * // Create many Atas
     * const ata = await prisma.ata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atas and only return the `id`
     * const ataWithIdOnly = await prisma.ata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtaCreateManyAndReturnArgs>(args?: SelectSubset<T, AtaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ata.
     * @param {AtaDeleteArgs} args - Arguments to delete one Ata.
     * @example
     * // Delete one Ata
     * const Ata = await prisma.ata.delete({
     *   where: {
     *     // ... filter to delete one Ata
     *   }
     * })
     * 
     */
    delete<T extends AtaDeleteArgs>(args: SelectSubset<T, AtaDeleteArgs<ExtArgs>>): Prisma__AtaClient<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ata.
     * @param {AtaUpdateArgs} args - Arguments to update one Ata.
     * @example
     * // Update one Ata
     * const ata = await prisma.ata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtaUpdateArgs>(args: SelectSubset<T, AtaUpdateArgs<ExtArgs>>): Prisma__AtaClient<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atas.
     * @param {AtaDeleteManyArgs} args - Arguments to filter Atas to delete.
     * @example
     * // Delete a few Atas
     * const { count } = await prisma.ata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtaDeleteManyArgs>(args?: SelectSubset<T, AtaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atas
     * const ata = await prisma.ata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtaUpdateManyArgs>(args: SelectSubset<T, AtaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atas and returns the data updated in the database.
     * @param {AtaUpdateManyAndReturnArgs} args - Arguments to update many Atas.
     * @example
     * // Update many Atas
     * const ata = await prisma.ata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atas and only return the `id`
     * const ataWithIdOnly = await prisma.ata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtaUpdateManyAndReturnArgs>(args: SelectSubset<T, AtaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ata.
     * @param {AtaUpsertArgs} args - Arguments to update or create a Ata.
     * @example
     * // Update or create a Ata
     * const ata = await prisma.ata.upsert({
     *   create: {
     *     // ... data to create a Ata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ata we want to update
     *   }
     * })
     */
    upsert<T extends AtaUpsertArgs>(args: SelectSubset<T, AtaUpsertArgs<ExtArgs>>): Prisma__AtaClient<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtaCountArgs} args - Arguments to filter Atas to count.
     * @example
     * // Count the number of Atas
     * const count = await prisma.ata.count({
     *   where: {
     *     // ... the filter for the Atas we want to count
     *   }
     * })
    **/
    count<T extends AtaCountArgs>(
      args?: Subset<T, AtaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtaAggregateArgs>(args: Subset<T, AtaAggregateArgs>): Prisma.PrismaPromise<GetAtaAggregateType<T>>

    /**
     * Group by Ata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtaGroupByArgs['orderBy'] }
        : { orderBy?: AtaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ata model
   */
  readonly fields: AtaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aprovadoPor<T extends Ata$aprovadoPorArgs<ExtArgs> = {}>(args?: Subset<T, Ata$aprovadoPorArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ata model
   */
  interface AtaFieldRefs {
    readonly id: FieldRef<"Ata", 'String'>
    readonly titulo: FieldRef<"Ata", 'String'>
    readonly tipo: FieldRef<"Ata", 'TipoReuniao'>
    readonly dataReuniao: FieldRef<"Ata", 'DateTime'>
    readonly duracaoMinutos: FieldRef<"Ata", 'Int'>
    readonly arquivoAudioBase64: FieldRef<"Ata", 'String'>
    readonly arquivoAudioNome: FieldRef<"Ata", 'String'>
    readonly arquivoAudioTipo: FieldRef<"Ata", 'String'>
    readonly arquivoAudioTamanho: FieldRef<"Ata", 'Int'>
    readonly participantes: FieldRef<"Ata", 'Json'>
    readonly identificacao: FieldRef<"Ata", 'Json'>
    readonly objetivo: FieldRef<"Ata", 'String'>
    readonly topicosDiscutidos: FieldRef<"Ata", 'Json'>
    readonly decisoes: FieldRef<"Ata", 'Json'>
    readonly acoes: FieldRef<"Ata", 'Json'>
    readonly pendencias: FieldRef<"Ata", 'Json'>
    readonly proximosPassos: FieldRef<"Ata", 'Json'>
    readonly status: FieldRef<"Ata", 'StatusAta'>
    readonly aprovadoPorId: FieldRef<"Ata", 'String'>
    readonly dataAprovacao: FieldRef<"Ata", 'DateTime'>
    readonly comentarios: FieldRef<"Ata", 'String'>
    readonly createdAt: FieldRef<"Ata", 'DateTime'>
    readonly updatedAt: FieldRef<"Ata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ata findUnique
   */
  export type AtaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    /**
     * Filter, which Ata to fetch.
     */
    where: AtaWhereUniqueInput
  }

  /**
   * Ata findUniqueOrThrow
   */
  export type AtaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    /**
     * Filter, which Ata to fetch.
     */
    where: AtaWhereUniqueInput
  }

  /**
   * Ata findFirst
   */
  export type AtaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    /**
     * Filter, which Ata to fetch.
     */
    where?: AtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atas to fetch.
     */
    orderBy?: AtaOrderByWithRelationInput | AtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atas.
     */
    cursor?: AtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atas.
     */
    distinct?: AtaScalarFieldEnum | AtaScalarFieldEnum[]
  }

  /**
   * Ata findFirstOrThrow
   */
  export type AtaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    /**
     * Filter, which Ata to fetch.
     */
    where?: AtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atas to fetch.
     */
    orderBy?: AtaOrderByWithRelationInput | AtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atas.
     */
    cursor?: AtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atas.
     */
    distinct?: AtaScalarFieldEnum | AtaScalarFieldEnum[]
  }

  /**
   * Ata findMany
   */
  export type AtaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    /**
     * Filter, which Atas to fetch.
     */
    where?: AtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atas to fetch.
     */
    orderBy?: AtaOrderByWithRelationInput | AtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atas.
     */
    cursor?: AtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atas.
     */
    skip?: number
    distinct?: AtaScalarFieldEnum | AtaScalarFieldEnum[]
  }

  /**
   * Ata create
   */
  export type AtaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ata.
     */
    data: XOR<AtaCreateInput, AtaUncheckedCreateInput>
  }

  /**
   * Ata createMany
   */
  export type AtaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atas.
     */
    data: AtaCreateManyInput | AtaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ata createManyAndReturn
   */
  export type AtaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * The data used to create many Atas.
     */
    data: AtaCreateManyInput | AtaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ata update
   */
  export type AtaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ata.
     */
    data: XOR<AtaUpdateInput, AtaUncheckedUpdateInput>
    /**
     * Choose, which Ata to update.
     */
    where: AtaWhereUniqueInput
  }

  /**
   * Ata updateMany
   */
  export type AtaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atas.
     */
    data: XOR<AtaUpdateManyMutationInput, AtaUncheckedUpdateManyInput>
    /**
     * Filter which Atas to update
     */
    where?: AtaWhereInput
    /**
     * Limit how many Atas to update.
     */
    limit?: number
  }

  /**
   * Ata updateManyAndReturn
   */
  export type AtaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * The data used to update Atas.
     */
    data: XOR<AtaUpdateManyMutationInput, AtaUncheckedUpdateManyInput>
    /**
     * Filter which Atas to update
     */
    where?: AtaWhereInput
    /**
     * Limit how many Atas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ata upsert
   */
  export type AtaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ata to update in case it exists.
     */
    where: AtaWhereUniqueInput
    /**
     * In case the Ata found by the `where` argument doesn't exist, create a new Ata with this data.
     */
    create: XOR<AtaCreateInput, AtaUncheckedCreateInput>
    /**
     * In case the Ata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtaUpdateInput, AtaUncheckedUpdateInput>
  }

  /**
   * Ata delete
   */
  export type AtaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
    /**
     * Filter which Ata to delete.
     */
    where: AtaWhereUniqueInput
  }

  /**
   * Ata deleteMany
   */
  export type AtaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atas to delete
     */
    where?: AtaWhereInput
    /**
     * Limit how many Atas to delete.
     */
    limit?: number
  }

  /**
   * Ata.aprovadoPor
   */
  export type Ata$aprovadoPorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Ata without action
   */
  export type AtaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ata
     */
    select?: AtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ata
     */
    omit?: AtaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nome: 'nome',
    senha: 'senha',
    ativo: 'ativo',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AtaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    tipo: 'tipo',
    dataReuniao: 'dataReuniao',
    duracaoMinutos: 'duracaoMinutos',
    arquivoAudioBase64: 'arquivoAudioBase64',
    arquivoAudioNome: 'arquivoAudioNome',
    arquivoAudioTipo: 'arquivoAudioTipo',
    arquivoAudioTamanho: 'arquivoAudioTamanho',
    participantes: 'participantes',
    identificacao: 'identificacao',
    objetivo: 'objetivo',
    topicosDiscutidos: 'topicosDiscutidos',
    decisoes: 'decisoes',
    acoes: 'acoes',
    pendencias: 'pendencias',
    proximosPassos: 'proximosPassos',
    status: 'status',
    aprovadoPorId: 'aprovadoPorId',
    dataAprovacao: 'dataAprovacao',
    comentarios: 'comentarios',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AtaScalarFieldEnum = (typeof AtaScalarFieldEnum)[keyof typeof AtaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoReuniao'
   */
  export type EnumTipoReuniaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoReuniao'>
    


  /**
   * Reference to a field of type 'TipoReuniao[]'
   */
  export type ListEnumTipoReuniaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoReuniao[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'StatusAta'
   */
  export type EnumStatusAtaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAta'>
    


  /**
   * Reference to a field of type 'StatusAta[]'
   */
  export type ListEnumStatusAtaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAta[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: UuidFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    ativo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    atasAprovadas?: AtaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    atasAprovadas?: AtaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    ativo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    atasAprovadas?: AtaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    ativo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type AtaWhereInput = {
    AND?: AtaWhereInput | AtaWhereInput[]
    OR?: AtaWhereInput[]
    NOT?: AtaWhereInput | AtaWhereInput[]
    id?: UuidFilter<"Ata"> | string
    titulo?: StringFilter<"Ata"> | string
    tipo?: EnumTipoReuniaoFilter<"Ata"> | $Enums.TipoReuniao
    dataReuniao?: DateTimeFilter<"Ata"> | Date | string
    duracaoMinutos?: IntNullableFilter<"Ata"> | number | null
    arquivoAudioBase64?: StringNullableFilter<"Ata"> | string | null
    arquivoAudioNome?: StringNullableFilter<"Ata"> | string | null
    arquivoAudioTipo?: StringNullableFilter<"Ata"> | string | null
    arquivoAudioTamanho?: IntNullableFilter<"Ata"> | number | null
    participantes?: JsonNullableFilter<"Ata">
    identificacao?: JsonNullableFilter<"Ata">
    objetivo?: StringNullableFilter<"Ata"> | string | null
    topicosDiscutidos?: JsonNullableFilter<"Ata">
    decisoes?: JsonNullableFilter<"Ata">
    acoes?: JsonNullableFilter<"Ata">
    pendencias?: JsonNullableFilter<"Ata">
    proximosPassos?: JsonNullableFilter<"Ata">
    status?: EnumStatusAtaFilter<"Ata"> | $Enums.StatusAta
    aprovadoPorId?: UuidNullableFilter<"Ata"> | string | null
    dataAprovacao?: DateTimeNullableFilter<"Ata"> | Date | string | null
    comentarios?: StringNullableFilter<"Ata"> | string | null
    createdAt?: DateTimeFilter<"Ata"> | Date | string
    updatedAt?: DateTimeFilter<"Ata"> | Date | string
    aprovadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type AtaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrderInput | SortOrder
    arquivoAudioBase64?: SortOrderInput | SortOrder
    arquivoAudioNome?: SortOrderInput | SortOrder
    arquivoAudioTipo?: SortOrderInput | SortOrder
    arquivoAudioTamanho?: SortOrderInput | SortOrder
    participantes?: SortOrderInput | SortOrder
    identificacao?: SortOrderInput | SortOrder
    objetivo?: SortOrderInput | SortOrder
    topicosDiscutidos?: SortOrderInput | SortOrder
    decisoes?: SortOrderInput | SortOrder
    acoes?: SortOrderInput | SortOrder
    pendencias?: SortOrderInput | SortOrder
    proximosPassos?: SortOrderInput | SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrderInput | SortOrder
    dataAprovacao?: SortOrderInput | SortOrder
    comentarios?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aprovadoPor?: UsuarioOrderByWithRelationInput
  }

  export type AtaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtaWhereInput | AtaWhereInput[]
    OR?: AtaWhereInput[]
    NOT?: AtaWhereInput | AtaWhereInput[]
    titulo?: StringFilter<"Ata"> | string
    tipo?: EnumTipoReuniaoFilter<"Ata"> | $Enums.TipoReuniao
    dataReuniao?: DateTimeFilter<"Ata"> | Date | string
    duracaoMinutos?: IntNullableFilter<"Ata"> | number | null
    arquivoAudioBase64?: StringNullableFilter<"Ata"> | string | null
    arquivoAudioNome?: StringNullableFilter<"Ata"> | string | null
    arquivoAudioTipo?: StringNullableFilter<"Ata"> | string | null
    arquivoAudioTamanho?: IntNullableFilter<"Ata"> | number | null
    participantes?: JsonNullableFilter<"Ata">
    identificacao?: JsonNullableFilter<"Ata">
    objetivo?: StringNullableFilter<"Ata"> | string | null
    topicosDiscutidos?: JsonNullableFilter<"Ata">
    decisoes?: JsonNullableFilter<"Ata">
    acoes?: JsonNullableFilter<"Ata">
    pendencias?: JsonNullableFilter<"Ata">
    proximosPassos?: JsonNullableFilter<"Ata">
    status?: EnumStatusAtaFilter<"Ata"> | $Enums.StatusAta
    aprovadoPorId?: UuidNullableFilter<"Ata"> | string | null
    dataAprovacao?: DateTimeNullableFilter<"Ata"> | Date | string | null
    comentarios?: StringNullableFilter<"Ata"> | string | null
    createdAt?: DateTimeFilter<"Ata"> | Date | string
    updatedAt?: DateTimeFilter<"Ata"> | Date | string
    aprovadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type AtaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrderInput | SortOrder
    arquivoAudioBase64?: SortOrderInput | SortOrder
    arquivoAudioNome?: SortOrderInput | SortOrder
    arquivoAudioTipo?: SortOrderInput | SortOrder
    arquivoAudioTamanho?: SortOrderInput | SortOrder
    participantes?: SortOrderInput | SortOrder
    identificacao?: SortOrderInput | SortOrder
    objetivo?: SortOrderInput | SortOrder
    topicosDiscutidos?: SortOrderInput | SortOrder
    decisoes?: SortOrderInput | SortOrder
    acoes?: SortOrderInput | SortOrder
    pendencias?: SortOrderInput | SortOrder
    proximosPassos?: SortOrderInput | SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrderInput | SortOrder
    dataAprovacao?: SortOrderInput | SortOrder
    comentarios?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AtaCountOrderByAggregateInput
    _avg?: AtaAvgOrderByAggregateInput
    _max?: AtaMaxOrderByAggregateInput
    _min?: AtaMinOrderByAggregateInput
    _sum?: AtaSumOrderByAggregateInput
  }

  export type AtaScalarWhereWithAggregatesInput = {
    AND?: AtaScalarWhereWithAggregatesInput | AtaScalarWhereWithAggregatesInput[]
    OR?: AtaScalarWhereWithAggregatesInput[]
    NOT?: AtaScalarWhereWithAggregatesInput | AtaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Ata"> | string
    titulo?: StringWithAggregatesFilter<"Ata"> | string
    tipo?: EnumTipoReuniaoWithAggregatesFilter<"Ata"> | $Enums.TipoReuniao
    dataReuniao?: DateTimeWithAggregatesFilter<"Ata"> | Date | string
    duracaoMinutos?: IntNullableWithAggregatesFilter<"Ata"> | number | null
    arquivoAudioBase64?: StringNullableWithAggregatesFilter<"Ata"> | string | null
    arquivoAudioNome?: StringNullableWithAggregatesFilter<"Ata"> | string | null
    arquivoAudioTipo?: StringNullableWithAggregatesFilter<"Ata"> | string | null
    arquivoAudioTamanho?: IntNullableWithAggregatesFilter<"Ata"> | number | null
    participantes?: JsonNullableWithAggregatesFilter<"Ata">
    identificacao?: JsonNullableWithAggregatesFilter<"Ata">
    objetivo?: StringNullableWithAggregatesFilter<"Ata"> | string | null
    topicosDiscutidos?: JsonNullableWithAggregatesFilter<"Ata">
    decisoes?: JsonNullableWithAggregatesFilter<"Ata">
    acoes?: JsonNullableWithAggregatesFilter<"Ata">
    pendencias?: JsonNullableWithAggregatesFilter<"Ata">
    proximosPassos?: JsonNullableWithAggregatesFilter<"Ata">
    status?: EnumStatusAtaWithAggregatesFilter<"Ata"> | $Enums.StatusAta
    aprovadoPorId?: UuidNullableWithAggregatesFilter<"Ata"> | string | null
    dataAprovacao?: DateTimeNullableWithAggregatesFilter<"Ata"> | Date | string | null
    comentarios?: StringNullableWithAggregatesFilter<"Ata"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ata"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ata"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    atasAprovadas?: AtaCreateNestedManyWithoutAprovadoPorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    atasAprovadas?: AtaUncheckedCreateNestedManyWithoutAprovadoPorInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atasAprovadas?: AtaUpdateManyWithoutAprovadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atasAprovadas?: AtaUncheckedUpdateManyWithoutAprovadoPorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaCreateInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    arquivoAudioBase64?: string | null
    arquivoAudioNome?: string | null
    arquivoAudioTipo?: string | null
    arquivoAudioTamanho?: number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.StatusAta
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aprovadoPor?: UsuarioCreateNestedOneWithoutAtasAprovadasInput
  }

  export type AtaUncheckedCreateInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    arquivoAudioBase64?: string | null
    arquivoAudioNome?: string | null
    arquivoAudioTipo?: string | null
    arquivoAudioTamanho?: number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.StatusAta
    aprovadoPorId?: string | null
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    arquivoAudioBase64?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioNome?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTipo?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTamanho?: NullableIntFieldUpdateOperationsInput | number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aprovadoPor?: UsuarioUpdateOneWithoutAtasAprovadasNestedInput
  }

  export type AtaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    arquivoAudioBase64?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioNome?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTipo?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTamanho?: NullableIntFieldUpdateOperationsInput | number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    aprovadoPorId?: NullableStringFieldUpdateOperationsInput | string | null
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaCreateManyInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    arquivoAudioBase64?: string | null
    arquivoAudioNome?: string | null
    arquivoAudioTipo?: string | null
    arquivoAudioTamanho?: number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.StatusAta
    aprovadoPorId?: string | null
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    arquivoAudioBase64?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioNome?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTipo?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTamanho?: NullableIntFieldUpdateOperationsInput | number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    arquivoAudioBase64?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioNome?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTipo?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTamanho?: NullableIntFieldUpdateOperationsInput | number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    aprovadoPorId?: NullableStringFieldUpdateOperationsInput | string | null
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AtaListRelationFilter = {
    every?: AtaWhereInput
    some?: AtaWhereInput
    none?: AtaWhereInput
  }

  export type AtaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTipoReuniaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoReuniao | EnumTipoReuniaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoReuniao[] | ListEnumTipoReuniaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoReuniao[] | ListEnumTipoReuniaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoReuniaoFilter<$PrismaModel> | $Enums.TipoReuniao
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumStatusAtaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAta | EnumStatusAtaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtaFilter<$PrismaModel> | $Enums.StatusAta
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AtaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrder
    arquivoAudioBase64?: SortOrder
    arquivoAudioNome?: SortOrder
    arquivoAudioTipo?: SortOrder
    arquivoAudioTamanho?: SortOrder
    participantes?: SortOrder
    identificacao?: SortOrder
    objetivo?: SortOrder
    topicosDiscutidos?: SortOrder
    decisoes?: SortOrder
    acoes?: SortOrder
    pendencias?: SortOrder
    proximosPassos?: SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrder
    dataAprovacao?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtaAvgOrderByAggregateInput = {
    duracaoMinutos?: SortOrder
    arquivoAudioTamanho?: SortOrder
  }

  export type AtaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrder
    arquivoAudioBase64?: SortOrder
    arquivoAudioNome?: SortOrder
    arquivoAudioTipo?: SortOrder
    arquivoAudioTamanho?: SortOrder
    objetivo?: SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrder
    dataAprovacao?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrder
    arquivoAudioBase64?: SortOrder
    arquivoAudioNome?: SortOrder
    arquivoAudioTipo?: SortOrder
    arquivoAudioTamanho?: SortOrder
    objetivo?: SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrder
    dataAprovacao?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtaSumOrderByAggregateInput = {
    duracaoMinutos?: SortOrder
    arquivoAudioTamanho?: SortOrder
  }

  export type EnumTipoReuniaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoReuniao | EnumTipoReuniaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoReuniao[] | ListEnumTipoReuniaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoReuniao[] | ListEnumTipoReuniaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoReuniaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoReuniao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoReuniaoFilter<$PrismaModel>
    _max?: NestedEnumTipoReuniaoFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumStatusAtaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAta | EnumStatusAtaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtaWithAggregatesFilter<$PrismaModel> | $Enums.StatusAta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtaFilter<$PrismaModel>
    _max?: NestedEnumStatusAtaFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AtaCreateNestedManyWithoutAprovadoPorInput = {
    create?: XOR<AtaCreateWithoutAprovadoPorInput, AtaUncheckedCreateWithoutAprovadoPorInput> | AtaCreateWithoutAprovadoPorInput[] | AtaUncheckedCreateWithoutAprovadoPorInput[]
    connectOrCreate?: AtaCreateOrConnectWithoutAprovadoPorInput | AtaCreateOrConnectWithoutAprovadoPorInput[]
    createMany?: AtaCreateManyAprovadoPorInputEnvelope
    connect?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
  }

  export type AtaUncheckedCreateNestedManyWithoutAprovadoPorInput = {
    create?: XOR<AtaCreateWithoutAprovadoPorInput, AtaUncheckedCreateWithoutAprovadoPorInput> | AtaCreateWithoutAprovadoPorInput[] | AtaUncheckedCreateWithoutAprovadoPorInput[]
    connectOrCreate?: AtaCreateOrConnectWithoutAprovadoPorInput | AtaCreateOrConnectWithoutAprovadoPorInput[]
    createMany?: AtaCreateManyAprovadoPorInputEnvelope
    connect?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AtaUpdateManyWithoutAprovadoPorNestedInput = {
    create?: XOR<AtaCreateWithoutAprovadoPorInput, AtaUncheckedCreateWithoutAprovadoPorInput> | AtaCreateWithoutAprovadoPorInput[] | AtaUncheckedCreateWithoutAprovadoPorInput[]
    connectOrCreate?: AtaCreateOrConnectWithoutAprovadoPorInput | AtaCreateOrConnectWithoutAprovadoPorInput[]
    upsert?: AtaUpsertWithWhereUniqueWithoutAprovadoPorInput | AtaUpsertWithWhereUniqueWithoutAprovadoPorInput[]
    createMany?: AtaCreateManyAprovadoPorInputEnvelope
    set?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
    disconnect?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
    delete?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
    connect?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
    update?: AtaUpdateWithWhereUniqueWithoutAprovadoPorInput | AtaUpdateWithWhereUniqueWithoutAprovadoPorInput[]
    updateMany?: AtaUpdateManyWithWhereWithoutAprovadoPorInput | AtaUpdateManyWithWhereWithoutAprovadoPorInput[]
    deleteMany?: AtaScalarWhereInput | AtaScalarWhereInput[]
  }

  export type AtaUncheckedUpdateManyWithoutAprovadoPorNestedInput = {
    create?: XOR<AtaCreateWithoutAprovadoPorInput, AtaUncheckedCreateWithoutAprovadoPorInput> | AtaCreateWithoutAprovadoPorInput[] | AtaUncheckedCreateWithoutAprovadoPorInput[]
    connectOrCreate?: AtaCreateOrConnectWithoutAprovadoPorInput | AtaCreateOrConnectWithoutAprovadoPorInput[]
    upsert?: AtaUpsertWithWhereUniqueWithoutAprovadoPorInput | AtaUpsertWithWhereUniqueWithoutAprovadoPorInput[]
    createMany?: AtaCreateManyAprovadoPorInputEnvelope
    set?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
    disconnect?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
    delete?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
    connect?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
    update?: AtaUpdateWithWhereUniqueWithoutAprovadoPorInput | AtaUpdateWithWhereUniqueWithoutAprovadoPorInput[]
    updateMany?: AtaUpdateManyWithWhereWithoutAprovadoPorInput | AtaUpdateManyWithWhereWithoutAprovadoPorInput[]
    deleteMany?: AtaScalarWhereInput | AtaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAtasAprovadasInput = {
    create?: XOR<UsuarioCreateWithoutAtasAprovadasInput, UsuarioUncheckedCreateWithoutAtasAprovadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtasAprovadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumTipoReuniaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoReuniao
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusAtaFieldUpdateOperationsInput = {
    set?: $Enums.StatusAta
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneWithoutAtasAprovadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutAtasAprovadasInput, UsuarioUncheckedCreateWithoutAtasAprovadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtasAprovadasInput
    upsert?: UsuarioUpsertWithoutAtasAprovadasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAtasAprovadasInput, UsuarioUpdateWithoutAtasAprovadasInput>, UsuarioUncheckedUpdateWithoutAtasAprovadasInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTipoReuniaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoReuniao | EnumTipoReuniaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoReuniao[] | ListEnumTipoReuniaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoReuniao[] | ListEnumTipoReuniaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoReuniaoFilter<$PrismaModel> | $Enums.TipoReuniao
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatusAtaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAta | EnumStatusAtaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtaFilter<$PrismaModel> | $Enums.StatusAta
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTipoReuniaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoReuniao | EnumTipoReuniaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoReuniao[] | ListEnumTipoReuniaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoReuniao[] | ListEnumTipoReuniaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoReuniaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoReuniao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoReuniaoFilter<$PrismaModel>
    _max?: NestedEnumTipoReuniaoFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStatusAtaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAta | EnumStatusAtaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtaWithAggregatesFilter<$PrismaModel> | $Enums.StatusAta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtaFilter<$PrismaModel>
    _max?: NestedEnumStatusAtaFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AtaCreateWithoutAprovadoPorInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    arquivoAudioBase64?: string | null
    arquivoAudioNome?: string | null
    arquivoAudioTipo?: string | null
    arquivoAudioTamanho?: number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.StatusAta
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtaUncheckedCreateWithoutAprovadoPorInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    arquivoAudioBase64?: string | null
    arquivoAudioNome?: string | null
    arquivoAudioTipo?: string | null
    arquivoAudioTamanho?: number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.StatusAta
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtaCreateOrConnectWithoutAprovadoPorInput = {
    where: AtaWhereUniqueInput
    create: XOR<AtaCreateWithoutAprovadoPorInput, AtaUncheckedCreateWithoutAprovadoPorInput>
  }

  export type AtaCreateManyAprovadoPorInputEnvelope = {
    data: AtaCreateManyAprovadoPorInput | AtaCreateManyAprovadoPorInput[]
    skipDuplicates?: boolean
  }

  export type AtaUpsertWithWhereUniqueWithoutAprovadoPorInput = {
    where: AtaWhereUniqueInput
    update: XOR<AtaUpdateWithoutAprovadoPorInput, AtaUncheckedUpdateWithoutAprovadoPorInput>
    create: XOR<AtaCreateWithoutAprovadoPorInput, AtaUncheckedCreateWithoutAprovadoPorInput>
  }

  export type AtaUpdateWithWhereUniqueWithoutAprovadoPorInput = {
    where: AtaWhereUniqueInput
    data: XOR<AtaUpdateWithoutAprovadoPorInput, AtaUncheckedUpdateWithoutAprovadoPorInput>
  }

  export type AtaUpdateManyWithWhereWithoutAprovadoPorInput = {
    where: AtaScalarWhereInput
    data: XOR<AtaUpdateManyMutationInput, AtaUncheckedUpdateManyWithoutAprovadoPorInput>
  }

  export type AtaScalarWhereInput = {
    AND?: AtaScalarWhereInput | AtaScalarWhereInput[]
    OR?: AtaScalarWhereInput[]
    NOT?: AtaScalarWhereInput | AtaScalarWhereInput[]
    id?: UuidFilter<"Ata"> | string
    titulo?: StringFilter<"Ata"> | string
    tipo?: EnumTipoReuniaoFilter<"Ata"> | $Enums.TipoReuniao
    dataReuniao?: DateTimeFilter<"Ata"> | Date | string
    duracaoMinutos?: IntNullableFilter<"Ata"> | number | null
    arquivoAudioBase64?: StringNullableFilter<"Ata"> | string | null
    arquivoAudioNome?: StringNullableFilter<"Ata"> | string | null
    arquivoAudioTipo?: StringNullableFilter<"Ata"> | string | null
    arquivoAudioTamanho?: IntNullableFilter<"Ata"> | number | null
    participantes?: JsonNullableFilter<"Ata">
    identificacao?: JsonNullableFilter<"Ata">
    objetivo?: StringNullableFilter<"Ata"> | string | null
    topicosDiscutidos?: JsonNullableFilter<"Ata">
    decisoes?: JsonNullableFilter<"Ata">
    acoes?: JsonNullableFilter<"Ata">
    pendencias?: JsonNullableFilter<"Ata">
    proximosPassos?: JsonNullableFilter<"Ata">
    status?: EnumStatusAtaFilter<"Ata"> | $Enums.StatusAta
    aprovadoPorId?: UuidNullableFilter<"Ata"> | string | null
    dataAprovacao?: DateTimeNullableFilter<"Ata"> | Date | string | null
    comentarios?: StringNullableFilter<"Ata"> | string | null
    createdAt?: DateTimeFilter<"Ata"> | Date | string
    updatedAt?: DateTimeFilter<"Ata"> | Date | string
  }

  export type UsuarioCreateWithoutAtasAprovadasInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutAtasAprovadasInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutAtasAprovadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtasAprovadasInput, UsuarioUncheckedCreateWithoutAtasAprovadasInput>
  }

  export type UsuarioUpsertWithoutAtasAprovadasInput = {
    update: XOR<UsuarioUpdateWithoutAtasAprovadasInput, UsuarioUncheckedUpdateWithoutAtasAprovadasInput>
    create: XOR<UsuarioCreateWithoutAtasAprovadasInput, UsuarioUncheckedCreateWithoutAtasAprovadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAtasAprovadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAtasAprovadasInput, UsuarioUncheckedUpdateWithoutAtasAprovadasInput>
  }

  export type UsuarioUpdateWithoutAtasAprovadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutAtasAprovadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaCreateManyAprovadoPorInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    arquivoAudioBase64?: string | null
    arquivoAudioNome?: string | null
    arquivoAudioTipo?: string | null
    arquivoAudioTamanho?: number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.StatusAta
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtaUpdateWithoutAprovadoPorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    arquivoAudioBase64?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioNome?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTipo?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTamanho?: NullableIntFieldUpdateOperationsInput | number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaUncheckedUpdateWithoutAprovadoPorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    arquivoAudioBase64?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioNome?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTipo?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTamanho?: NullableIntFieldUpdateOperationsInput | number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaUncheckedUpdateManyWithoutAprovadoPorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    arquivoAudioBase64?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioNome?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTipo?: NullableStringFieldUpdateOperationsInput | string | null
    arquivoAudioTamanho?: NullableIntFieldUpdateOperationsInput | number | null
    participantes?: NullableJsonNullValueInput | InputJsonValue
    identificacao?: NullableJsonNullValueInput | InputJsonValue
    objetivo?: NullableStringFieldUpdateOperationsInput | string | null
    topicosDiscutidos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    pendencias?: NullableJsonNullValueInput | InputJsonValue
    proximosPassos?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}