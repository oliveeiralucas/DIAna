
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
 * Model Reuniao
 * 
 */
export type Reuniao = $Result.DefaultSelection<Prisma.$ReuniaoPayload>
/**
 * Model Participante
 * 
 */
export type Participante = $Result.DefaultSelection<Prisma.$ParticipantePayload>
/**
 * Model Transcricao
 * 
 */
export type Transcricao = $Result.DefaultSelection<Prisma.$TranscricaoPayload>
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


export const StatusTranscricao: {
  PENDENTE: 'PENDENTE',
  PROCESSANDO: 'PROCESSANDO',
  CONCLUIDA: 'CONCLUIDA',
  ERRO: 'ERRO'
};

export type StatusTranscricao = (typeof StatusTranscricao)[keyof typeof StatusTranscricao]


export const StatusAta: {
  PENDENTE: 'PENDENTE',
  APROVADA: 'APROVADA',
  REJEITADA: 'REJEITADA'
};

export type StatusAta = (typeof StatusAta)[keyof typeof StatusAta]

}

export type TipoReuniao = $Enums.TipoReuniao

export const TipoReuniao: typeof $Enums.TipoReuniao

export type StatusTranscricao = $Enums.StatusTranscricao

export const StatusTranscricao: typeof $Enums.StatusTranscricao

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
   * `prisma.reuniao`: Exposes CRUD operations for the **Reuniao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reuniaos
    * const reuniaos = await prisma.reuniao.findMany()
    * ```
    */
  get reuniao(): Prisma.ReuniaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participante`: Exposes CRUD operations for the **Participante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participantes
    * const participantes = await prisma.participante.findMany()
    * ```
    */
  get participante(): Prisma.ParticipanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transcricao`: Exposes CRUD operations for the **Transcricao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transcricaos
    * const transcricaos = await prisma.transcricao.findMany()
    * ```
    */
  get transcricao(): Prisma.TranscricaoDelegate<ExtArgs, ClientOptions>;

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
    Reuniao: 'Reuniao',
    Participante: 'Participante',
    Transcricao: 'Transcricao',
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
      modelProps: "usuario" | "reuniao" | "participante" | "transcricao" | "ata"
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
      Reuniao: {
        payload: Prisma.$ReuniaoPayload<ExtArgs>
        fields: Prisma.ReuniaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReuniaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReuniaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          findFirst: {
            args: Prisma.ReuniaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReuniaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          findMany: {
            args: Prisma.ReuniaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>[]
          }
          create: {
            args: Prisma.ReuniaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          createMany: {
            args: Prisma.ReuniaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReuniaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>[]
          }
          delete: {
            args: Prisma.ReuniaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          update: {
            args: Prisma.ReuniaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          deleteMany: {
            args: Prisma.ReuniaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReuniaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReuniaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>[]
          }
          upsert: {
            args: Prisma.ReuniaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          aggregate: {
            args: Prisma.ReuniaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReuniao>
          }
          groupBy: {
            args: Prisma.ReuniaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReuniaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReuniaoCountArgs<ExtArgs>
            result: $Utils.Optional<ReuniaoCountAggregateOutputType> | number
          }
        }
      }
      Participante: {
        payload: Prisma.$ParticipantePayload<ExtArgs>
        fields: Prisma.ParticipanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          findFirst: {
            args: Prisma.ParticipanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          findMany: {
            args: Prisma.ParticipanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          create: {
            args: Prisma.ParticipanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          createMany: {
            args: Prisma.ParticipanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          delete: {
            args: Prisma.ParticipanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          update: {
            args: Prisma.ParticipanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          deleteMany: {
            args: Prisma.ParticipanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          upsert: {
            args: Prisma.ParticipanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          aggregate: {
            args: Prisma.ParticipanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipante>
          }
          groupBy: {
            args: Prisma.ParticipanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipanteCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteCountAggregateOutputType> | number
          }
        }
      }
      Transcricao: {
        payload: Prisma.$TranscricaoPayload<ExtArgs>
        fields: Prisma.TranscricaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranscricaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranscricaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload>
          }
          findFirst: {
            args: Prisma.TranscricaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranscricaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload>
          }
          findMany: {
            args: Prisma.TranscricaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload>[]
          }
          create: {
            args: Prisma.TranscricaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload>
          }
          createMany: {
            args: Prisma.TranscricaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranscricaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload>[]
          }
          delete: {
            args: Prisma.TranscricaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload>
          }
          update: {
            args: Prisma.TranscricaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload>
          }
          deleteMany: {
            args: Prisma.TranscricaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranscricaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranscricaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload>[]
          }
          upsert: {
            args: Prisma.TranscricaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscricaoPayload>
          }
          aggregate: {
            args: Prisma.TranscricaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranscricao>
          }
          groupBy: {
            args: Prisma.TranscricaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranscricaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranscricaoCountArgs<ExtArgs>
            result: $Utils.Optional<TranscricaoCountAggregateOutputType> | number
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
    reuniao?: ReuniaoOmit
    participante?: ParticipanteOmit
    transcricao?: TranscricaoOmit
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
    reunioesCriadas: number
    atasAprovadas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reunioesCriadas?: boolean | UsuarioCountOutputTypeCountReunioesCriadasArgs
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
  export type UsuarioCountOutputTypeCountReunioesCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReuniaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAtasAprovadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtaWhereInput
  }


  /**
   * Count Type ReuniaoCountOutputType
   */

  export type ReuniaoCountOutputType = {
    participantes: number
  }

  export type ReuniaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | ReuniaoCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * ReuniaoCountOutputType without action
   */
  export type ReuniaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReuniaoCountOutputType
     */
    select?: ReuniaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReuniaoCountOutputType without action
   */
  export type ReuniaoCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteWhereInput
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
    reunioesCriadas?: boolean | Usuario$reunioesCriadasArgs<ExtArgs>
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
    reunioesCriadas?: boolean | Usuario$reunioesCriadasArgs<ExtArgs>
    atasAprovadas?: boolean | Usuario$atasAprovadasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      reunioesCriadas: Prisma.$ReuniaoPayload<ExtArgs>[]
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
    reunioesCriadas<T extends Usuario$reunioesCriadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reunioesCriadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Usuario.reunioesCriadas
   */
  export type Usuario$reunioesCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    where?: ReuniaoWhereInput
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    cursor?: ReuniaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
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
   * Model Reuniao
   */

  export type AggregateReuniao = {
    _count: ReuniaoCountAggregateOutputType | null
    _avg: ReuniaoAvgAggregateOutputType | null
    _sum: ReuniaoSumAggregateOutputType | null
    _min: ReuniaoMinAggregateOutputType | null
    _max: ReuniaoMaxAggregateOutputType | null
  }

  export type ReuniaoAvgAggregateOutputType = {
    duracaoMinutos: number | null
  }

  export type ReuniaoSumAggregateOutputType = {
    duracaoMinutos: number | null
  }

  export type ReuniaoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    tipo: $Enums.TipoReuniao | null
    dataReuniao: Date | null
    duracaoMinutos: number | null
    linkMeeting: string | null
    criadoPorId: string | null
    createdAt: Date | null
  }

  export type ReuniaoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    tipo: $Enums.TipoReuniao | null
    dataReuniao: Date | null
    duracaoMinutos: number | null
    linkMeeting: string | null
    criadoPorId: string | null
    createdAt: Date | null
  }

  export type ReuniaoCountAggregateOutputType = {
    id: number
    titulo: number
    tipo: number
    dataReuniao: number
    duracaoMinutos: number
    linkMeeting: number
    criadoPorId: number
    createdAt: number
    _all: number
  }


  export type ReuniaoAvgAggregateInputType = {
    duracaoMinutos?: true
  }

  export type ReuniaoSumAggregateInputType = {
    duracaoMinutos?: true
  }

  export type ReuniaoMinAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    dataReuniao?: true
    duracaoMinutos?: true
    linkMeeting?: true
    criadoPorId?: true
    createdAt?: true
  }

  export type ReuniaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    dataReuniao?: true
    duracaoMinutos?: true
    linkMeeting?: true
    criadoPorId?: true
    createdAt?: true
  }

  export type ReuniaoCountAggregateInputType = {
    id?: true
    titulo?: true
    tipo?: true
    dataReuniao?: true
    duracaoMinutos?: true
    linkMeeting?: true
    criadoPorId?: true
    createdAt?: true
    _all?: true
  }

  export type ReuniaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reuniao to aggregate.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reuniaos
    **/
    _count?: true | ReuniaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReuniaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReuniaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReuniaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReuniaoMaxAggregateInputType
  }

  export type GetReuniaoAggregateType<T extends ReuniaoAggregateArgs> = {
        [P in keyof T & keyof AggregateReuniao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReuniao[P]>
      : GetScalarType<T[P], AggregateReuniao[P]>
  }




  export type ReuniaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReuniaoWhereInput
    orderBy?: ReuniaoOrderByWithAggregationInput | ReuniaoOrderByWithAggregationInput[]
    by: ReuniaoScalarFieldEnum[] | ReuniaoScalarFieldEnum
    having?: ReuniaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReuniaoCountAggregateInputType | true
    _avg?: ReuniaoAvgAggregateInputType
    _sum?: ReuniaoSumAggregateInputType
    _min?: ReuniaoMinAggregateInputType
    _max?: ReuniaoMaxAggregateInputType
  }

  export type ReuniaoGroupByOutputType = {
    id: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date
    duracaoMinutos: number | null
    linkMeeting: string | null
    criadoPorId: string | null
    createdAt: Date
    _count: ReuniaoCountAggregateOutputType | null
    _avg: ReuniaoAvgAggregateOutputType | null
    _sum: ReuniaoSumAggregateOutputType | null
    _min: ReuniaoMinAggregateOutputType | null
    _max: ReuniaoMaxAggregateOutputType | null
  }

  type GetReuniaoGroupByPayload<T extends ReuniaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReuniaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReuniaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReuniaoGroupByOutputType[P]>
            : GetScalarType<T[P], ReuniaoGroupByOutputType[P]>
        }
      >
    >


  export type ReuniaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dataReuniao?: boolean
    duracaoMinutos?: boolean
    linkMeeting?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
    criador?: boolean | Reuniao$criadorArgs<ExtArgs>
    participantes?: boolean | Reuniao$participantesArgs<ExtArgs>
    transcricao?: boolean | Reuniao$transcricaoArgs<ExtArgs>
    _count?: boolean | ReuniaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reuniao"]>

  export type ReuniaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dataReuniao?: boolean
    duracaoMinutos?: boolean
    linkMeeting?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
    criador?: boolean | Reuniao$criadorArgs<ExtArgs>
  }, ExtArgs["result"]["reuniao"]>

  export type ReuniaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dataReuniao?: boolean
    duracaoMinutos?: boolean
    linkMeeting?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
    criador?: boolean | Reuniao$criadorArgs<ExtArgs>
  }, ExtArgs["result"]["reuniao"]>

  export type ReuniaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    tipo?: boolean
    dataReuniao?: boolean
    duracaoMinutos?: boolean
    linkMeeting?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
  }

  export type ReuniaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "tipo" | "dataReuniao" | "duracaoMinutos" | "linkMeeting" | "criadoPorId" | "createdAt", ExtArgs["result"]["reuniao"]>
  export type ReuniaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | Reuniao$criadorArgs<ExtArgs>
    participantes?: boolean | Reuniao$participantesArgs<ExtArgs>
    transcricao?: boolean | Reuniao$transcricaoArgs<ExtArgs>
    _count?: boolean | ReuniaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReuniaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | Reuniao$criadorArgs<ExtArgs>
  }
  export type ReuniaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | Reuniao$criadorArgs<ExtArgs>
  }

  export type $ReuniaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reuniao"
    objects: {
      criador: Prisma.$UsuarioPayload<ExtArgs> | null
      participantes: Prisma.$ParticipantePayload<ExtArgs>[]
      transcricao: Prisma.$TranscricaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      tipo: $Enums.TipoReuniao
      dataReuniao: Date
      duracaoMinutos: number | null
      linkMeeting: string | null
      criadoPorId: string | null
      createdAt: Date
    }, ExtArgs["result"]["reuniao"]>
    composites: {}
  }

  type ReuniaoGetPayload<S extends boolean | null | undefined | ReuniaoDefaultArgs> = $Result.GetResult<Prisma.$ReuniaoPayload, S>

  type ReuniaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReuniaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReuniaoCountAggregateInputType | true
    }

  export interface ReuniaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reuniao'], meta: { name: 'Reuniao' } }
    /**
     * Find zero or one Reuniao that matches the filter.
     * @param {ReuniaoFindUniqueArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReuniaoFindUniqueArgs>(args: SelectSubset<T, ReuniaoFindUniqueArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reuniao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReuniaoFindUniqueOrThrowArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReuniaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ReuniaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reuniao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoFindFirstArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReuniaoFindFirstArgs>(args?: SelectSubset<T, ReuniaoFindFirstArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reuniao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoFindFirstOrThrowArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReuniaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ReuniaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reuniaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reuniaos
     * const reuniaos = await prisma.reuniao.findMany()
     * 
     * // Get first 10 Reuniaos
     * const reuniaos = await prisma.reuniao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reuniaoWithIdOnly = await prisma.reuniao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReuniaoFindManyArgs>(args?: SelectSubset<T, ReuniaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reuniao.
     * @param {ReuniaoCreateArgs} args - Arguments to create a Reuniao.
     * @example
     * // Create one Reuniao
     * const Reuniao = await prisma.reuniao.create({
     *   data: {
     *     // ... data to create a Reuniao
     *   }
     * })
     * 
     */
    create<T extends ReuniaoCreateArgs>(args: SelectSubset<T, ReuniaoCreateArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reuniaos.
     * @param {ReuniaoCreateManyArgs} args - Arguments to create many Reuniaos.
     * @example
     * // Create many Reuniaos
     * const reuniao = await prisma.reuniao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReuniaoCreateManyArgs>(args?: SelectSubset<T, ReuniaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reuniaos and returns the data saved in the database.
     * @param {ReuniaoCreateManyAndReturnArgs} args - Arguments to create many Reuniaos.
     * @example
     * // Create many Reuniaos
     * const reuniao = await prisma.reuniao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reuniaos and only return the `id`
     * const reuniaoWithIdOnly = await prisma.reuniao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReuniaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ReuniaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reuniao.
     * @param {ReuniaoDeleteArgs} args - Arguments to delete one Reuniao.
     * @example
     * // Delete one Reuniao
     * const Reuniao = await prisma.reuniao.delete({
     *   where: {
     *     // ... filter to delete one Reuniao
     *   }
     * })
     * 
     */
    delete<T extends ReuniaoDeleteArgs>(args: SelectSubset<T, ReuniaoDeleteArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reuniao.
     * @param {ReuniaoUpdateArgs} args - Arguments to update one Reuniao.
     * @example
     * // Update one Reuniao
     * const reuniao = await prisma.reuniao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReuniaoUpdateArgs>(args: SelectSubset<T, ReuniaoUpdateArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reuniaos.
     * @param {ReuniaoDeleteManyArgs} args - Arguments to filter Reuniaos to delete.
     * @example
     * // Delete a few Reuniaos
     * const { count } = await prisma.reuniao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReuniaoDeleteManyArgs>(args?: SelectSubset<T, ReuniaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reuniaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reuniaos
     * const reuniao = await prisma.reuniao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReuniaoUpdateManyArgs>(args: SelectSubset<T, ReuniaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reuniaos and returns the data updated in the database.
     * @param {ReuniaoUpdateManyAndReturnArgs} args - Arguments to update many Reuniaos.
     * @example
     * // Update many Reuniaos
     * const reuniao = await prisma.reuniao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reuniaos and only return the `id`
     * const reuniaoWithIdOnly = await prisma.reuniao.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReuniaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ReuniaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reuniao.
     * @param {ReuniaoUpsertArgs} args - Arguments to update or create a Reuniao.
     * @example
     * // Update or create a Reuniao
     * const reuniao = await prisma.reuniao.upsert({
     *   create: {
     *     // ... data to create a Reuniao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reuniao we want to update
     *   }
     * })
     */
    upsert<T extends ReuniaoUpsertArgs>(args: SelectSubset<T, ReuniaoUpsertArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reuniaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoCountArgs} args - Arguments to filter Reuniaos to count.
     * @example
     * // Count the number of Reuniaos
     * const count = await prisma.reuniao.count({
     *   where: {
     *     // ... the filter for the Reuniaos we want to count
     *   }
     * })
    **/
    count<T extends ReuniaoCountArgs>(
      args?: Subset<T, ReuniaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReuniaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reuniao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReuniaoAggregateArgs>(args: Subset<T, ReuniaoAggregateArgs>): Prisma.PrismaPromise<GetReuniaoAggregateType<T>>

    /**
     * Group by Reuniao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoGroupByArgs} args - Group by arguments.
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
      T extends ReuniaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReuniaoGroupByArgs['orderBy'] }
        : { orderBy?: ReuniaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReuniaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReuniaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reuniao model
   */
  readonly fields: ReuniaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reuniao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReuniaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criador<T extends Reuniao$criadorArgs<ExtArgs> = {}>(args?: Subset<T, Reuniao$criadorArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participantes<T extends Reuniao$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Reuniao$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transcricao<T extends Reuniao$transcricaoArgs<ExtArgs> = {}>(args?: Subset<T, Reuniao$transcricaoArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reuniao model
   */
  interface ReuniaoFieldRefs {
    readonly id: FieldRef<"Reuniao", 'String'>
    readonly titulo: FieldRef<"Reuniao", 'String'>
    readonly tipo: FieldRef<"Reuniao", 'TipoReuniao'>
    readonly dataReuniao: FieldRef<"Reuniao", 'DateTime'>
    readonly duracaoMinutos: FieldRef<"Reuniao", 'Int'>
    readonly linkMeeting: FieldRef<"Reuniao", 'String'>
    readonly criadoPorId: FieldRef<"Reuniao", 'String'>
    readonly createdAt: FieldRef<"Reuniao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reuniao findUnique
   */
  export type ReuniaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao findUniqueOrThrow
   */
  export type ReuniaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao findFirst
   */
  export type ReuniaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reuniaos.
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reuniaos.
     */
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao findFirstOrThrow
   */
  export type ReuniaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reuniaos.
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reuniaos.
     */
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao findMany
   */
  export type ReuniaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniaos to fetch.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reuniaos.
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao create
   */
  export type ReuniaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Reuniao.
     */
    data: XOR<ReuniaoCreateInput, ReuniaoUncheckedCreateInput>
  }

  /**
   * Reuniao createMany
   */
  export type ReuniaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reuniaos.
     */
    data: ReuniaoCreateManyInput | ReuniaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reuniao createManyAndReturn
   */
  export type ReuniaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * The data used to create many Reuniaos.
     */
    data: ReuniaoCreateManyInput | ReuniaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reuniao update
   */
  export type ReuniaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Reuniao.
     */
    data: XOR<ReuniaoUpdateInput, ReuniaoUncheckedUpdateInput>
    /**
     * Choose, which Reuniao to update.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao updateMany
   */
  export type ReuniaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reuniaos.
     */
    data: XOR<ReuniaoUpdateManyMutationInput, ReuniaoUncheckedUpdateManyInput>
    /**
     * Filter which Reuniaos to update
     */
    where?: ReuniaoWhereInput
    /**
     * Limit how many Reuniaos to update.
     */
    limit?: number
  }

  /**
   * Reuniao updateManyAndReturn
   */
  export type ReuniaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * The data used to update Reuniaos.
     */
    data: XOR<ReuniaoUpdateManyMutationInput, ReuniaoUncheckedUpdateManyInput>
    /**
     * Filter which Reuniaos to update
     */
    where?: ReuniaoWhereInput
    /**
     * Limit how many Reuniaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reuniao upsert
   */
  export type ReuniaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Reuniao to update in case it exists.
     */
    where: ReuniaoWhereUniqueInput
    /**
     * In case the Reuniao found by the `where` argument doesn't exist, create a new Reuniao with this data.
     */
    create: XOR<ReuniaoCreateInput, ReuniaoUncheckedCreateInput>
    /**
     * In case the Reuniao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReuniaoUpdateInput, ReuniaoUncheckedUpdateInput>
  }

  /**
   * Reuniao delete
   */
  export type ReuniaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter which Reuniao to delete.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao deleteMany
   */
  export type ReuniaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reuniaos to delete
     */
    where?: ReuniaoWhereInput
    /**
     * Limit how many Reuniaos to delete.
     */
    limit?: number
  }

  /**
   * Reuniao.criador
   */
  export type Reuniao$criadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Reuniao.participantes
   */
  export type Reuniao$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    where?: ParticipanteWhereInput
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    cursor?: ParticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Reuniao.transcricao
   */
  export type Reuniao$transcricaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    where?: TranscricaoWhereInput
  }

  /**
   * Reuniao without action
   */
  export type ReuniaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
  }


  /**
   * Model Participante
   */

  export type AggregateParticipante = {
    _count: ParticipanteCountAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  export type ParticipanteMinAggregateOutputType = {
    id: string | null
    reuniaoId: string | null
    nome: string | null
    email: string | null
    createdAt: Date | null
  }

  export type ParticipanteMaxAggregateOutputType = {
    id: string | null
    reuniaoId: string | null
    nome: string | null
    email: string | null
    createdAt: Date | null
  }

  export type ParticipanteCountAggregateOutputType = {
    id: number
    reuniaoId: number
    nome: number
    email: number
    createdAt: number
    _all: number
  }


  export type ParticipanteMinAggregateInputType = {
    id?: true
    reuniaoId?: true
    nome?: true
    email?: true
    createdAt?: true
  }

  export type ParticipanteMaxAggregateInputType = {
    id?: true
    reuniaoId?: true
    nome?: true
    email?: true
    createdAt?: true
  }

  export type ParticipanteCountAggregateInputType = {
    id?: true
    reuniaoId?: true
    nome?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type ParticipanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participante to aggregate.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participantes
    **/
    _count?: true | ParticipanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipanteMaxAggregateInputType
  }

  export type GetParticipanteAggregateType<T extends ParticipanteAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipante[P]>
      : GetScalarType<T[P], AggregateParticipante[P]>
  }




  export type ParticipanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteWhereInput
    orderBy?: ParticipanteOrderByWithAggregationInput | ParticipanteOrderByWithAggregationInput[]
    by: ParticipanteScalarFieldEnum[] | ParticipanteScalarFieldEnum
    having?: ParticipanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipanteCountAggregateInputType | true
    _min?: ParticipanteMinAggregateInputType
    _max?: ParticipanteMaxAggregateInputType
  }

  export type ParticipanteGroupByOutputType = {
    id: string
    reuniaoId: string
    nome: string
    email: string | null
    createdAt: Date
    _count: ParticipanteCountAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  type GetParticipanteGroupByPayload<T extends ParticipanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
        }
      >
    >


  export type ParticipanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reuniaoId?: boolean
    nome?: boolean
    email?: boolean
    createdAt?: boolean
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>

  export type ParticipanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reuniaoId?: boolean
    nome?: boolean
    email?: boolean
    createdAt?: boolean
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>

  export type ParticipanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reuniaoId?: boolean
    nome?: boolean
    email?: boolean
    createdAt?: boolean
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>

  export type ParticipanteSelectScalar = {
    id?: boolean
    reuniaoId?: boolean
    nome?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type ParticipanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reuniaoId" | "nome" | "email" | "createdAt", ExtArgs["result"]["participante"]>
  export type ParticipanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }
  export type ParticipanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }
  export type ParticipanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }

  export type $ParticipantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participante"
    objects: {
      reuniao: Prisma.$ReuniaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reuniaoId: string
      nome: string
      email: string | null
      createdAt: Date
    }, ExtArgs["result"]["participante"]>
    composites: {}
  }

  type ParticipanteGetPayload<S extends boolean | null | undefined | ParticipanteDefaultArgs> = $Result.GetResult<Prisma.$ParticipantePayload, S>

  type ParticipanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipanteCountAggregateInputType | true
    }

  export interface ParticipanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participante'], meta: { name: 'Participante' } }
    /**
     * Find zero or one Participante that matches the filter.
     * @param {ParticipanteFindUniqueArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipanteFindUniqueArgs>(args: SelectSubset<T, ParticipanteFindUniqueArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipanteFindUniqueOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindFirstArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipanteFindFirstArgs>(args?: SelectSubset<T, ParticipanteFindFirstArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindFirstOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participantes
     * const participantes = await prisma.participante.findMany()
     * 
     * // Get first 10 Participantes
     * const participantes = await prisma.participante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participanteWithIdOnly = await prisma.participante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipanteFindManyArgs>(args?: SelectSubset<T, ParticipanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participante.
     * @param {ParticipanteCreateArgs} args - Arguments to create a Participante.
     * @example
     * // Create one Participante
     * const Participante = await prisma.participante.create({
     *   data: {
     *     // ... data to create a Participante
     *   }
     * })
     * 
     */
    create<T extends ParticipanteCreateArgs>(args: SelectSubset<T, ParticipanteCreateArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participantes.
     * @param {ParticipanteCreateManyArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participante = await prisma.participante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipanteCreateManyArgs>(args?: SelectSubset<T, ParticipanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participantes and returns the data saved in the database.
     * @param {ParticipanteCreateManyAndReturnArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participante = await prisma.participante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participantes and only return the `id`
     * const participanteWithIdOnly = await prisma.participante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipanteCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participante.
     * @param {ParticipanteDeleteArgs} args - Arguments to delete one Participante.
     * @example
     * // Delete one Participante
     * const Participante = await prisma.participante.delete({
     *   where: {
     *     // ... filter to delete one Participante
     *   }
     * })
     * 
     */
    delete<T extends ParticipanteDeleteArgs>(args: SelectSubset<T, ParticipanteDeleteArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participante.
     * @param {ParticipanteUpdateArgs} args - Arguments to update one Participante.
     * @example
     * // Update one Participante
     * const participante = await prisma.participante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipanteUpdateArgs>(args: SelectSubset<T, ParticipanteUpdateArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participantes.
     * @param {ParticipanteDeleteManyArgs} args - Arguments to filter Participantes to delete.
     * @example
     * // Delete a few Participantes
     * const { count } = await prisma.participante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipanteDeleteManyArgs>(args?: SelectSubset<T, ParticipanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participantes
     * const participante = await prisma.participante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipanteUpdateManyArgs>(args: SelectSubset<T, ParticipanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes and returns the data updated in the database.
     * @param {ParticipanteUpdateManyAndReturnArgs} args - Arguments to update many Participantes.
     * @example
     * // Update many Participantes
     * const participante = await prisma.participante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participantes and only return the `id`
     * const participanteWithIdOnly = await prisma.participante.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipanteUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participante.
     * @param {ParticipanteUpsertArgs} args - Arguments to update or create a Participante.
     * @example
     * // Update or create a Participante
     * const participante = await prisma.participante.upsert({
     *   create: {
     *     // ... data to create a Participante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participante we want to update
     *   }
     * })
     */
    upsert<T extends ParticipanteUpsertArgs>(args: SelectSubset<T, ParticipanteUpsertArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteCountArgs} args - Arguments to filter Participantes to count.
     * @example
     * // Count the number of Participantes
     * const count = await prisma.participante.count({
     *   where: {
     *     // ... the filter for the Participantes we want to count
     *   }
     * })
    **/
    count<T extends ParticipanteCountArgs>(
      args?: Subset<T, ParticipanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipanteAggregateArgs>(args: Subset<T, ParticipanteAggregateArgs>): Prisma.PrismaPromise<GetParticipanteAggregateType<T>>

    /**
     * Group by Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteGroupByArgs} args - Group by arguments.
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
      T extends ParticipanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipanteGroupByArgs['orderBy'] }
        : { orderBy?: ParticipanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participante model
   */
  readonly fields: ParticipanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reuniao<T extends ReuniaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReuniaoDefaultArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Participante model
   */
  interface ParticipanteFieldRefs {
    readonly id: FieldRef<"Participante", 'String'>
    readonly reuniaoId: FieldRef<"Participante", 'String'>
    readonly nome: FieldRef<"Participante", 'String'>
    readonly email: FieldRef<"Participante", 'String'>
    readonly createdAt: FieldRef<"Participante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participante findUnique
   */
  export type ParticipanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante findUniqueOrThrow
   */
  export type ParticipanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante findFirst
   */
  export type ParticipanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante findFirstOrThrow
   */
  export type ParticipanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante findMany
   */
  export type ParticipanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante create
   */
  export type ParticipanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Participante.
     */
    data: XOR<ParticipanteCreateInput, ParticipanteUncheckedCreateInput>
  }

  /**
   * Participante createMany
   */
  export type ParticipanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participantes.
     */
    data: ParticipanteCreateManyInput | ParticipanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participante createManyAndReturn
   */
  export type ParticipanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * The data used to create many Participantes.
     */
    data: ParticipanteCreateManyInput | ParticipanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participante update
   */
  export type ParticipanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Participante.
     */
    data: XOR<ParticipanteUpdateInput, ParticipanteUncheckedUpdateInput>
    /**
     * Choose, which Participante to update.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante updateMany
   */
  export type ParticipanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to update.
     */
    limit?: number
  }

  /**
   * Participante updateManyAndReturn
   */
  export type ParticipanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participante upsert
   */
  export type ParticipanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Participante to update in case it exists.
     */
    where: ParticipanteWhereUniqueInput
    /**
     * In case the Participante found by the `where` argument doesn't exist, create a new Participante with this data.
     */
    create: XOR<ParticipanteCreateInput, ParticipanteUncheckedCreateInput>
    /**
     * In case the Participante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipanteUpdateInput, ParticipanteUncheckedUpdateInput>
  }

  /**
   * Participante delete
   */
  export type ParticipanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter which Participante to delete.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante deleteMany
   */
  export type ParticipanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participantes to delete
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to delete.
     */
    limit?: number
  }

  /**
   * Participante without action
   */
  export type ParticipanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
  }


  /**
   * Model Transcricao
   */

  export type AggregateTranscricao = {
    _count: TranscricaoCountAggregateOutputType | null
    _min: TranscricaoMinAggregateOutputType | null
    _max: TranscricaoMaxAggregateOutputType | null
  }

  export type TranscricaoMinAggregateOutputType = {
    id: string | null
    reuniaoId: string | null
    conteudoTexto: string | null
    status: $Enums.StatusTranscricao | null
    arquivoAudioPath: string | null
    servicoUsado: string | null
    erroMensagem: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranscricaoMaxAggregateOutputType = {
    id: string | null
    reuniaoId: string | null
    conteudoTexto: string | null
    status: $Enums.StatusTranscricao | null
    arquivoAudioPath: string | null
    servicoUsado: string | null
    erroMensagem: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranscricaoCountAggregateOutputType = {
    id: number
    reuniaoId: number
    conteudoTexto: number
    status: number
    arquivoAudioPath: number
    servicoUsado: number
    erroMensagem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TranscricaoMinAggregateInputType = {
    id?: true
    reuniaoId?: true
    conteudoTexto?: true
    status?: true
    arquivoAudioPath?: true
    servicoUsado?: true
    erroMensagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranscricaoMaxAggregateInputType = {
    id?: true
    reuniaoId?: true
    conteudoTexto?: true
    status?: true
    arquivoAudioPath?: true
    servicoUsado?: true
    erroMensagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranscricaoCountAggregateInputType = {
    id?: true
    reuniaoId?: true
    conteudoTexto?: true
    status?: true
    arquivoAudioPath?: true
    servicoUsado?: true
    erroMensagem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TranscricaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transcricao to aggregate.
     */
    where?: TranscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcricaos to fetch.
     */
    orderBy?: TranscricaoOrderByWithRelationInput | TranscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transcricaos
    **/
    _count?: true | TranscricaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranscricaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranscricaoMaxAggregateInputType
  }

  export type GetTranscricaoAggregateType<T extends TranscricaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTranscricao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranscricao[P]>
      : GetScalarType<T[P], AggregateTranscricao[P]>
  }




  export type TranscricaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscricaoWhereInput
    orderBy?: TranscricaoOrderByWithAggregationInput | TranscricaoOrderByWithAggregationInput[]
    by: TranscricaoScalarFieldEnum[] | TranscricaoScalarFieldEnum
    having?: TranscricaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranscricaoCountAggregateInputType | true
    _min?: TranscricaoMinAggregateInputType
    _max?: TranscricaoMaxAggregateInputType
  }

  export type TranscricaoGroupByOutputType = {
    id: string
    reuniaoId: string
    conteudoTexto: string
    status: $Enums.StatusTranscricao
    arquivoAudioPath: string | null
    servicoUsado: string | null
    erroMensagem: string | null
    createdAt: Date
    updatedAt: Date
    _count: TranscricaoCountAggregateOutputType | null
    _min: TranscricaoMinAggregateOutputType | null
    _max: TranscricaoMaxAggregateOutputType | null
  }

  type GetTranscricaoGroupByPayload<T extends TranscricaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranscricaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranscricaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranscricaoGroupByOutputType[P]>
            : GetScalarType<T[P], TranscricaoGroupByOutputType[P]>
        }
      >
    >


  export type TranscricaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reuniaoId?: boolean
    conteudoTexto?: boolean
    status?: boolean
    arquivoAudioPath?: boolean
    servicoUsado?: boolean
    erroMensagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
    ata?: boolean | Transcricao$ataArgs<ExtArgs>
  }, ExtArgs["result"]["transcricao"]>

  export type TranscricaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reuniaoId?: boolean
    conteudoTexto?: boolean
    status?: boolean
    arquivoAudioPath?: boolean
    servicoUsado?: boolean
    erroMensagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcricao"]>

  export type TranscricaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reuniaoId?: boolean
    conteudoTexto?: boolean
    status?: boolean
    arquivoAudioPath?: boolean
    servicoUsado?: boolean
    erroMensagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcricao"]>

  export type TranscricaoSelectScalar = {
    id?: boolean
    reuniaoId?: boolean
    conteudoTexto?: boolean
    status?: boolean
    arquivoAudioPath?: boolean
    servicoUsado?: boolean
    erroMensagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TranscricaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reuniaoId" | "conteudoTexto" | "status" | "arquivoAudioPath" | "servicoUsado" | "erroMensagem" | "createdAt" | "updatedAt", ExtArgs["result"]["transcricao"]>
  export type TranscricaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
    ata?: boolean | Transcricao$ataArgs<ExtArgs>
  }
  export type TranscricaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }
  export type TranscricaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
  }

  export type $TranscricaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transcricao"
    objects: {
      reuniao: Prisma.$ReuniaoPayload<ExtArgs>
      ata: Prisma.$AtaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reuniaoId: string
      conteudoTexto: string
      status: $Enums.StatusTranscricao
      arquivoAudioPath: string | null
      servicoUsado: string | null
      erroMensagem: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transcricao"]>
    composites: {}
  }

  type TranscricaoGetPayload<S extends boolean | null | undefined | TranscricaoDefaultArgs> = $Result.GetResult<Prisma.$TranscricaoPayload, S>

  type TranscricaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranscricaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranscricaoCountAggregateInputType | true
    }

  export interface TranscricaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transcricao'], meta: { name: 'Transcricao' } }
    /**
     * Find zero or one Transcricao that matches the filter.
     * @param {TranscricaoFindUniqueArgs} args - Arguments to find a Transcricao
     * @example
     * // Get one Transcricao
     * const transcricao = await prisma.transcricao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranscricaoFindUniqueArgs>(args: SelectSubset<T, TranscricaoFindUniqueArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transcricao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranscricaoFindUniqueOrThrowArgs} args - Arguments to find a Transcricao
     * @example
     * // Get one Transcricao
     * const transcricao = await prisma.transcricao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranscricaoFindUniqueOrThrowArgs>(args: SelectSubset<T, TranscricaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transcricao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscricaoFindFirstArgs} args - Arguments to find a Transcricao
     * @example
     * // Get one Transcricao
     * const transcricao = await prisma.transcricao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranscricaoFindFirstArgs>(args?: SelectSubset<T, TranscricaoFindFirstArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transcricao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscricaoFindFirstOrThrowArgs} args - Arguments to find a Transcricao
     * @example
     * // Get one Transcricao
     * const transcricao = await prisma.transcricao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranscricaoFindFirstOrThrowArgs>(args?: SelectSubset<T, TranscricaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transcricaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscricaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transcricaos
     * const transcricaos = await prisma.transcricao.findMany()
     * 
     * // Get first 10 Transcricaos
     * const transcricaos = await prisma.transcricao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transcricaoWithIdOnly = await prisma.transcricao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranscricaoFindManyArgs>(args?: SelectSubset<T, TranscricaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transcricao.
     * @param {TranscricaoCreateArgs} args - Arguments to create a Transcricao.
     * @example
     * // Create one Transcricao
     * const Transcricao = await prisma.transcricao.create({
     *   data: {
     *     // ... data to create a Transcricao
     *   }
     * })
     * 
     */
    create<T extends TranscricaoCreateArgs>(args: SelectSubset<T, TranscricaoCreateArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transcricaos.
     * @param {TranscricaoCreateManyArgs} args - Arguments to create many Transcricaos.
     * @example
     * // Create many Transcricaos
     * const transcricao = await prisma.transcricao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranscricaoCreateManyArgs>(args?: SelectSubset<T, TranscricaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transcricaos and returns the data saved in the database.
     * @param {TranscricaoCreateManyAndReturnArgs} args - Arguments to create many Transcricaos.
     * @example
     * // Create many Transcricaos
     * const transcricao = await prisma.transcricao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transcricaos and only return the `id`
     * const transcricaoWithIdOnly = await prisma.transcricao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranscricaoCreateManyAndReturnArgs>(args?: SelectSubset<T, TranscricaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transcricao.
     * @param {TranscricaoDeleteArgs} args - Arguments to delete one Transcricao.
     * @example
     * // Delete one Transcricao
     * const Transcricao = await prisma.transcricao.delete({
     *   where: {
     *     // ... filter to delete one Transcricao
     *   }
     * })
     * 
     */
    delete<T extends TranscricaoDeleteArgs>(args: SelectSubset<T, TranscricaoDeleteArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transcricao.
     * @param {TranscricaoUpdateArgs} args - Arguments to update one Transcricao.
     * @example
     * // Update one Transcricao
     * const transcricao = await prisma.transcricao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranscricaoUpdateArgs>(args: SelectSubset<T, TranscricaoUpdateArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transcricaos.
     * @param {TranscricaoDeleteManyArgs} args - Arguments to filter Transcricaos to delete.
     * @example
     * // Delete a few Transcricaos
     * const { count } = await prisma.transcricao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranscricaoDeleteManyArgs>(args?: SelectSubset<T, TranscricaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transcricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscricaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transcricaos
     * const transcricao = await prisma.transcricao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranscricaoUpdateManyArgs>(args: SelectSubset<T, TranscricaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transcricaos and returns the data updated in the database.
     * @param {TranscricaoUpdateManyAndReturnArgs} args - Arguments to update many Transcricaos.
     * @example
     * // Update many Transcricaos
     * const transcricao = await prisma.transcricao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transcricaos and only return the `id`
     * const transcricaoWithIdOnly = await prisma.transcricao.updateManyAndReturn({
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
    updateManyAndReturn<T extends TranscricaoUpdateManyAndReturnArgs>(args: SelectSubset<T, TranscricaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transcricao.
     * @param {TranscricaoUpsertArgs} args - Arguments to update or create a Transcricao.
     * @example
     * // Update or create a Transcricao
     * const transcricao = await prisma.transcricao.upsert({
     *   create: {
     *     // ... data to create a Transcricao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transcricao we want to update
     *   }
     * })
     */
    upsert<T extends TranscricaoUpsertArgs>(args: SelectSubset<T, TranscricaoUpsertArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transcricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscricaoCountArgs} args - Arguments to filter Transcricaos to count.
     * @example
     * // Count the number of Transcricaos
     * const count = await prisma.transcricao.count({
     *   where: {
     *     // ... the filter for the Transcricaos we want to count
     *   }
     * })
    **/
    count<T extends TranscricaoCountArgs>(
      args?: Subset<T, TranscricaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranscricaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transcricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscricaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranscricaoAggregateArgs>(args: Subset<T, TranscricaoAggregateArgs>): Prisma.PrismaPromise<GetTranscricaoAggregateType<T>>

    /**
     * Group by Transcricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscricaoGroupByArgs} args - Group by arguments.
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
      T extends TranscricaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranscricaoGroupByArgs['orderBy'] }
        : { orderBy?: TranscricaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranscricaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscricaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transcricao model
   */
  readonly fields: TranscricaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transcricao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranscricaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reuniao<T extends ReuniaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReuniaoDefaultArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ata<T extends Transcricao$ataArgs<ExtArgs> = {}>(args?: Subset<T, Transcricao$ataArgs<ExtArgs>>): Prisma__AtaClient<$Result.GetResult<Prisma.$AtaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transcricao model
   */
  interface TranscricaoFieldRefs {
    readonly id: FieldRef<"Transcricao", 'String'>
    readonly reuniaoId: FieldRef<"Transcricao", 'String'>
    readonly conteudoTexto: FieldRef<"Transcricao", 'String'>
    readonly status: FieldRef<"Transcricao", 'StatusTranscricao'>
    readonly arquivoAudioPath: FieldRef<"Transcricao", 'String'>
    readonly servicoUsado: FieldRef<"Transcricao", 'String'>
    readonly erroMensagem: FieldRef<"Transcricao", 'String'>
    readonly createdAt: FieldRef<"Transcricao", 'DateTime'>
    readonly updatedAt: FieldRef<"Transcricao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transcricao findUnique
   */
  export type TranscricaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Transcricao to fetch.
     */
    where: TranscricaoWhereUniqueInput
  }

  /**
   * Transcricao findUniqueOrThrow
   */
  export type TranscricaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Transcricao to fetch.
     */
    where: TranscricaoWhereUniqueInput
  }

  /**
   * Transcricao findFirst
   */
  export type TranscricaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Transcricao to fetch.
     */
    where?: TranscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcricaos to fetch.
     */
    orderBy?: TranscricaoOrderByWithRelationInput | TranscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transcricaos.
     */
    cursor?: TranscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transcricaos.
     */
    distinct?: TranscricaoScalarFieldEnum | TranscricaoScalarFieldEnum[]
  }

  /**
   * Transcricao findFirstOrThrow
   */
  export type TranscricaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Transcricao to fetch.
     */
    where?: TranscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcricaos to fetch.
     */
    orderBy?: TranscricaoOrderByWithRelationInput | TranscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transcricaos.
     */
    cursor?: TranscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transcricaos.
     */
    distinct?: TranscricaoScalarFieldEnum | TranscricaoScalarFieldEnum[]
  }

  /**
   * Transcricao findMany
   */
  export type TranscricaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Transcricaos to fetch.
     */
    where?: TranscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transcricaos to fetch.
     */
    orderBy?: TranscricaoOrderByWithRelationInput | TranscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transcricaos.
     */
    cursor?: TranscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transcricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transcricaos.
     */
    skip?: number
    distinct?: TranscricaoScalarFieldEnum | TranscricaoScalarFieldEnum[]
  }

  /**
   * Transcricao create
   */
  export type TranscricaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Transcricao.
     */
    data: XOR<TranscricaoCreateInput, TranscricaoUncheckedCreateInput>
  }

  /**
   * Transcricao createMany
   */
  export type TranscricaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transcricaos.
     */
    data: TranscricaoCreateManyInput | TranscricaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transcricao createManyAndReturn
   */
  export type TranscricaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * The data used to create many Transcricaos.
     */
    data: TranscricaoCreateManyInput | TranscricaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transcricao update
   */
  export type TranscricaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Transcricao.
     */
    data: XOR<TranscricaoUpdateInput, TranscricaoUncheckedUpdateInput>
    /**
     * Choose, which Transcricao to update.
     */
    where: TranscricaoWhereUniqueInput
  }

  /**
   * Transcricao updateMany
   */
  export type TranscricaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transcricaos.
     */
    data: XOR<TranscricaoUpdateManyMutationInput, TranscricaoUncheckedUpdateManyInput>
    /**
     * Filter which Transcricaos to update
     */
    where?: TranscricaoWhereInput
    /**
     * Limit how many Transcricaos to update.
     */
    limit?: number
  }

  /**
   * Transcricao updateManyAndReturn
   */
  export type TranscricaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * The data used to update Transcricaos.
     */
    data: XOR<TranscricaoUpdateManyMutationInput, TranscricaoUncheckedUpdateManyInput>
    /**
     * Filter which Transcricaos to update
     */
    where?: TranscricaoWhereInput
    /**
     * Limit how many Transcricaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transcricao upsert
   */
  export type TranscricaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Transcricao to update in case it exists.
     */
    where: TranscricaoWhereUniqueInput
    /**
     * In case the Transcricao found by the `where` argument doesn't exist, create a new Transcricao with this data.
     */
    create: XOR<TranscricaoCreateInput, TranscricaoUncheckedCreateInput>
    /**
     * In case the Transcricao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranscricaoUpdateInput, TranscricaoUncheckedUpdateInput>
  }

  /**
   * Transcricao delete
   */
  export type TranscricaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
    /**
     * Filter which Transcricao to delete.
     */
    where: TranscricaoWhereUniqueInput
  }

  /**
   * Transcricao deleteMany
   */
  export type TranscricaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transcricaos to delete
     */
    where?: TranscricaoWhereInput
    /**
     * Limit how many Transcricaos to delete.
     */
    limit?: number
  }

  /**
   * Transcricao.ata
   */
  export type Transcricao$ataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Transcricao without action
   */
  export type TranscricaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transcricao
     */
    select?: TranscricaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transcricao
     */
    omit?: TranscricaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscricaoInclude<ExtArgs> | null
  }


  /**
   * Model Ata
   */

  export type AggregateAta = {
    _count: AtaCountAggregateOutputType | null
    _min: AtaMinAggregateOutputType | null
    _max: AtaMaxAggregateOutputType | null
  }

  export type AtaMinAggregateOutputType = {
    id: string | null
    transcricaoId: string | null
    resumo: string | null
    conteudoCompleto: string | null
    status: $Enums.StatusAta | null
    aprovadoPorId: string | null
    dataAprovacao: Date | null
    comentarios: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtaMaxAggregateOutputType = {
    id: string | null
    transcricaoId: string | null
    resumo: string | null
    conteudoCompleto: string | null
    status: $Enums.StatusAta | null
    aprovadoPorId: string | null
    dataAprovacao: Date | null
    comentarios: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtaCountAggregateOutputType = {
    id: number
    transcricaoId: number
    resumo: number
    topicos: number
    decisoes: number
    acoes: number
    conteudoCompleto: number
    status: number
    aprovadoPorId: number
    dataAprovacao: number
    comentarios: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AtaMinAggregateInputType = {
    id?: true
    transcricaoId?: true
    resumo?: true
    conteudoCompleto?: true
    status?: true
    aprovadoPorId?: true
    dataAprovacao?: true
    comentarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtaMaxAggregateInputType = {
    id?: true
    transcricaoId?: true
    resumo?: true
    conteudoCompleto?: true
    status?: true
    aprovadoPorId?: true
    dataAprovacao?: true
    comentarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtaCountAggregateInputType = {
    id?: true
    transcricaoId?: true
    resumo?: true
    topicos?: true
    decisoes?: true
    acoes?: true
    conteudoCompleto?: true
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
    _min?: AtaMinAggregateInputType
    _max?: AtaMaxAggregateInputType
  }

  export type AtaGroupByOutputType = {
    id: string
    transcricaoId: string
    resumo: string | null
    topicos: JsonValue | null
    decisoes: JsonValue | null
    acoes: JsonValue | null
    conteudoCompleto: string
    status: $Enums.StatusAta
    aprovadoPorId: string | null
    dataAprovacao: Date | null
    comentarios: string | null
    createdAt: Date
    updatedAt: Date
    _count: AtaCountAggregateOutputType | null
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
    transcricaoId?: boolean
    resumo?: boolean
    topicos?: boolean
    decisoes?: boolean
    acoes?: boolean
    conteudoCompleto?: boolean
    status?: boolean
    aprovadoPorId?: boolean
    dataAprovacao?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transcricao?: boolean | TranscricaoDefaultArgs<ExtArgs>
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }, ExtArgs["result"]["ata"]>

  export type AtaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transcricaoId?: boolean
    resumo?: boolean
    topicos?: boolean
    decisoes?: boolean
    acoes?: boolean
    conteudoCompleto?: boolean
    status?: boolean
    aprovadoPorId?: boolean
    dataAprovacao?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transcricao?: boolean | TranscricaoDefaultArgs<ExtArgs>
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }, ExtArgs["result"]["ata"]>

  export type AtaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transcricaoId?: boolean
    resumo?: boolean
    topicos?: boolean
    decisoes?: boolean
    acoes?: boolean
    conteudoCompleto?: boolean
    status?: boolean
    aprovadoPorId?: boolean
    dataAprovacao?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transcricao?: boolean | TranscricaoDefaultArgs<ExtArgs>
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }, ExtArgs["result"]["ata"]>

  export type AtaSelectScalar = {
    id?: boolean
    transcricaoId?: boolean
    resumo?: boolean
    topicos?: boolean
    decisoes?: boolean
    acoes?: boolean
    conteudoCompleto?: boolean
    status?: boolean
    aprovadoPorId?: boolean
    dataAprovacao?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AtaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transcricaoId" | "resumo" | "topicos" | "decisoes" | "acoes" | "conteudoCompleto" | "status" | "aprovadoPorId" | "dataAprovacao" | "comentarios" | "createdAt" | "updatedAt", ExtArgs["result"]["ata"]>
  export type AtaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transcricao?: boolean | TranscricaoDefaultArgs<ExtArgs>
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }
  export type AtaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transcricao?: boolean | TranscricaoDefaultArgs<ExtArgs>
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }
  export type AtaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transcricao?: boolean | TranscricaoDefaultArgs<ExtArgs>
    aprovadoPor?: boolean | Ata$aprovadoPorArgs<ExtArgs>
  }

  export type $AtaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ata"
    objects: {
      transcricao: Prisma.$TranscricaoPayload<ExtArgs>
      aprovadoPor: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transcricaoId: string
      resumo: string | null
      topicos: Prisma.JsonValue | null
      decisoes: Prisma.JsonValue | null
      acoes: Prisma.JsonValue | null
      conteudoCompleto: string
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
    transcricao<T extends TranscricaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TranscricaoDefaultArgs<ExtArgs>>): Prisma__TranscricaoClient<$Result.GetResult<Prisma.$TranscricaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly transcricaoId: FieldRef<"Ata", 'String'>
    readonly resumo: FieldRef<"Ata", 'String'>
    readonly topicos: FieldRef<"Ata", 'Json'>
    readonly decisoes: FieldRef<"Ata", 'Json'>
    readonly acoes: FieldRef<"Ata", 'Json'>
    readonly conteudoCompleto: FieldRef<"Ata", 'String'>
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


  export const ReuniaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    tipo: 'tipo',
    dataReuniao: 'dataReuniao',
    duracaoMinutos: 'duracaoMinutos',
    linkMeeting: 'linkMeeting',
    criadoPorId: 'criadoPorId',
    createdAt: 'createdAt'
  };

  export type ReuniaoScalarFieldEnum = (typeof ReuniaoScalarFieldEnum)[keyof typeof ReuniaoScalarFieldEnum]


  export const ParticipanteScalarFieldEnum: {
    id: 'id',
    reuniaoId: 'reuniaoId',
    nome: 'nome',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type ParticipanteScalarFieldEnum = (typeof ParticipanteScalarFieldEnum)[keyof typeof ParticipanteScalarFieldEnum]


  export const TranscricaoScalarFieldEnum: {
    id: 'id',
    reuniaoId: 'reuniaoId',
    conteudoTexto: 'conteudoTexto',
    status: 'status',
    arquivoAudioPath: 'arquivoAudioPath',
    servicoUsado: 'servicoUsado',
    erroMensagem: 'erroMensagem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TranscricaoScalarFieldEnum = (typeof TranscricaoScalarFieldEnum)[keyof typeof TranscricaoScalarFieldEnum]


  export const AtaScalarFieldEnum: {
    id: 'id',
    transcricaoId: 'transcricaoId',
    resumo: 'resumo',
    topicos: 'topicos',
    decisoes: 'decisoes',
    acoes: 'acoes',
    conteudoCompleto: 'conteudoCompleto',
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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'StatusTranscricao'
   */
  export type EnumStatusTranscricaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTranscricao'>
    


  /**
   * Reference to a field of type 'StatusTranscricao[]'
   */
  export type ListEnumStatusTranscricaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTranscricao[]'>
    


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
    reunioesCriadas?: ReuniaoListRelationFilter
    atasAprovadas?: AtaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    reunioesCriadas?: ReuniaoOrderByRelationAggregateInput
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
    reunioesCriadas?: ReuniaoListRelationFilter
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

  export type ReuniaoWhereInput = {
    AND?: ReuniaoWhereInput | ReuniaoWhereInput[]
    OR?: ReuniaoWhereInput[]
    NOT?: ReuniaoWhereInput | ReuniaoWhereInput[]
    id?: UuidFilter<"Reuniao"> | string
    titulo?: StringFilter<"Reuniao"> | string
    tipo?: EnumTipoReuniaoFilter<"Reuniao"> | $Enums.TipoReuniao
    dataReuniao?: DateTimeFilter<"Reuniao"> | Date | string
    duracaoMinutos?: IntNullableFilter<"Reuniao"> | number | null
    linkMeeting?: StringNullableFilter<"Reuniao"> | string | null
    criadoPorId?: UuidNullableFilter<"Reuniao"> | string | null
    createdAt?: DateTimeFilter<"Reuniao"> | Date | string
    criador?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    participantes?: ParticipanteListRelationFilter
    transcricao?: XOR<TranscricaoNullableScalarRelationFilter, TranscricaoWhereInput> | null
  }

  export type ReuniaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrderInput | SortOrder
    linkMeeting?: SortOrderInput | SortOrder
    criadoPorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    criador?: UsuarioOrderByWithRelationInput
    participantes?: ParticipanteOrderByRelationAggregateInput
    transcricao?: TranscricaoOrderByWithRelationInput
  }

  export type ReuniaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReuniaoWhereInput | ReuniaoWhereInput[]
    OR?: ReuniaoWhereInput[]
    NOT?: ReuniaoWhereInput | ReuniaoWhereInput[]
    titulo?: StringFilter<"Reuniao"> | string
    tipo?: EnumTipoReuniaoFilter<"Reuniao"> | $Enums.TipoReuniao
    dataReuniao?: DateTimeFilter<"Reuniao"> | Date | string
    duracaoMinutos?: IntNullableFilter<"Reuniao"> | number | null
    linkMeeting?: StringNullableFilter<"Reuniao"> | string | null
    criadoPorId?: UuidNullableFilter<"Reuniao"> | string | null
    createdAt?: DateTimeFilter<"Reuniao"> | Date | string
    criador?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    participantes?: ParticipanteListRelationFilter
    transcricao?: XOR<TranscricaoNullableScalarRelationFilter, TranscricaoWhereInput> | null
  }, "id">

  export type ReuniaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrderInput | SortOrder
    linkMeeting?: SortOrderInput | SortOrder
    criadoPorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReuniaoCountOrderByAggregateInput
    _avg?: ReuniaoAvgOrderByAggregateInput
    _max?: ReuniaoMaxOrderByAggregateInput
    _min?: ReuniaoMinOrderByAggregateInput
    _sum?: ReuniaoSumOrderByAggregateInput
  }

  export type ReuniaoScalarWhereWithAggregatesInput = {
    AND?: ReuniaoScalarWhereWithAggregatesInput | ReuniaoScalarWhereWithAggregatesInput[]
    OR?: ReuniaoScalarWhereWithAggregatesInput[]
    NOT?: ReuniaoScalarWhereWithAggregatesInput | ReuniaoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Reuniao"> | string
    titulo?: StringWithAggregatesFilter<"Reuniao"> | string
    tipo?: EnumTipoReuniaoWithAggregatesFilter<"Reuniao"> | $Enums.TipoReuniao
    dataReuniao?: DateTimeWithAggregatesFilter<"Reuniao"> | Date | string
    duracaoMinutos?: IntNullableWithAggregatesFilter<"Reuniao"> | number | null
    linkMeeting?: StringNullableWithAggregatesFilter<"Reuniao"> | string | null
    criadoPorId?: UuidNullableWithAggregatesFilter<"Reuniao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reuniao"> | Date | string
  }

  export type ParticipanteWhereInput = {
    AND?: ParticipanteWhereInput | ParticipanteWhereInput[]
    OR?: ParticipanteWhereInput[]
    NOT?: ParticipanteWhereInput | ParticipanteWhereInput[]
    id?: UuidFilter<"Participante"> | string
    reuniaoId?: UuidFilter<"Participante"> | string
    nome?: StringFilter<"Participante"> | string
    email?: StringNullableFilter<"Participante"> | string | null
    createdAt?: DateTimeFilter<"Participante"> | Date | string
    reuniao?: XOR<ReuniaoScalarRelationFilter, ReuniaoWhereInput>
  }

  export type ParticipanteOrderByWithRelationInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reuniao?: ReuniaoOrderByWithRelationInput
  }

  export type ParticipanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reuniaoId_email?: ParticipanteReuniaoIdEmailCompoundUniqueInput
    AND?: ParticipanteWhereInput | ParticipanteWhereInput[]
    OR?: ParticipanteWhereInput[]
    NOT?: ParticipanteWhereInput | ParticipanteWhereInput[]
    reuniaoId?: UuidFilter<"Participante"> | string
    nome?: StringFilter<"Participante"> | string
    email?: StringNullableFilter<"Participante"> | string | null
    createdAt?: DateTimeFilter<"Participante"> | Date | string
    reuniao?: XOR<ReuniaoScalarRelationFilter, ReuniaoWhereInput>
  }, "id" | "reuniaoId_email">

  export type ParticipanteOrderByWithAggregationInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ParticipanteCountOrderByAggregateInput
    _max?: ParticipanteMaxOrderByAggregateInput
    _min?: ParticipanteMinOrderByAggregateInput
  }

  export type ParticipanteScalarWhereWithAggregatesInput = {
    AND?: ParticipanteScalarWhereWithAggregatesInput | ParticipanteScalarWhereWithAggregatesInput[]
    OR?: ParticipanteScalarWhereWithAggregatesInput[]
    NOT?: ParticipanteScalarWhereWithAggregatesInput | ParticipanteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Participante"> | string
    reuniaoId?: UuidWithAggregatesFilter<"Participante"> | string
    nome?: StringWithAggregatesFilter<"Participante"> | string
    email?: StringNullableWithAggregatesFilter<"Participante"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Participante"> | Date | string
  }

  export type TranscricaoWhereInput = {
    AND?: TranscricaoWhereInput | TranscricaoWhereInput[]
    OR?: TranscricaoWhereInput[]
    NOT?: TranscricaoWhereInput | TranscricaoWhereInput[]
    id?: UuidFilter<"Transcricao"> | string
    reuniaoId?: UuidFilter<"Transcricao"> | string
    conteudoTexto?: StringFilter<"Transcricao"> | string
    status?: EnumStatusTranscricaoFilter<"Transcricao"> | $Enums.StatusTranscricao
    arquivoAudioPath?: StringNullableFilter<"Transcricao"> | string | null
    servicoUsado?: StringNullableFilter<"Transcricao"> | string | null
    erroMensagem?: StringNullableFilter<"Transcricao"> | string | null
    createdAt?: DateTimeFilter<"Transcricao"> | Date | string
    updatedAt?: DateTimeFilter<"Transcricao"> | Date | string
    reuniao?: XOR<ReuniaoScalarRelationFilter, ReuniaoWhereInput>
    ata?: XOR<AtaNullableScalarRelationFilter, AtaWhereInput> | null
  }

  export type TranscricaoOrderByWithRelationInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    conteudoTexto?: SortOrder
    status?: SortOrder
    arquivoAudioPath?: SortOrderInput | SortOrder
    servicoUsado?: SortOrderInput | SortOrder
    erroMensagem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reuniao?: ReuniaoOrderByWithRelationInput
    ata?: AtaOrderByWithRelationInput
  }

  export type TranscricaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reuniaoId?: string
    AND?: TranscricaoWhereInput | TranscricaoWhereInput[]
    OR?: TranscricaoWhereInput[]
    NOT?: TranscricaoWhereInput | TranscricaoWhereInput[]
    conteudoTexto?: StringFilter<"Transcricao"> | string
    status?: EnumStatusTranscricaoFilter<"Transcricao"> | $Enums.StatusTranscricao
    arquivoAudioPath?: StringNullableFilter<"Transcricao"> | string | null
    servicoUsado?: StringNullableFilter<"Transcricao"> | string | null
    erroMensagem?: StringNullableFilter<"Transcricao"> | string | null
    createdAt?: DateTimeFilter<"Transcricao"> | Date | string
    updatedAt?: DateTimeFilter<"Transcricao"> | Date | string
    reuniao?: XOR<ReuniaoScalarRelationFilter, ReuniaoWhereInput>
    ata?: XOR<AtaNullableScalarRelationFilter, AtaWhereInput> | null
  }, "id" | "reuniaoId">

  export type TranscricaoOrderByWithAggregationInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    conteudoTexto?: SortOrder
    status?: SortOrder
    arquivoAudioPath?: SortOrderInput | SortOrder
    servicoUsado?: SortOrderInput | SortOrder
    erroMensagem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TranscricaoCountOrderByAggregateInput
    _max?: TranscricaoMaxOrderByAggregateInput
    _min?: TranscricaoMinOrderByAggregateInput
  }

  export type TranscricaoScalarWhereWithAggregatesInput = {
    AND?: TranscricaoScalarWhereWithAggregatesInput | TranscricaoScalarWhereWithAggregatesInput[]
    OR?: TranscricaoScalarWhereWithAggregatesInput[]
    NOT?: TranscricaoScalarWhereWithAggregatesInput | TranscricaoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Transcricao"> | string
    reuniaoId?: UuidWithAggregatesFilter<"Transcricao"> | string
    conteudoTexto?: StringWithAggregatesFilter<"Transcricao"> | string
    status?: EnumStatusTranscricaoWithAggregatesFilter<"Transcricao"> | $Enums.StatusTranscricao
    arquivoAudioPath?: StringNullableWithAggregatesFilter<"Transcricao"> | string | null
    servicoUsado?: StringNullableWithAggregatesFilter<"Transcricao"> | string | null
    erroMensagem?: StringNullableWithAggregatesFilter<"Transcricao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transcricao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transcricao"> | Date | string
  }

  export type AtaWhereInput = {
    AND?: AtaWhereInput | AtaWhereInput[]
    OR?: AtaWhereInput[]
    NOT?: AtaWhereInput | AtaWhereInput[]
    id?: UuidFilter<"Ata"> | string
    transcricaoId?: UuidFilter<"Ata"> | string
    resumo?: StringNullableFilter<"Ata"> | string | null
    topicos?: JsonNullableFilter<"Ata">
    decisoes?: JsonNullableFilter<"Ata">
    acoes?: JsonNullableFilter<"Ata">
    conteudoCompleto?: StringFilter<"Ata"> | string
    status?: EnumStatusAtaFilter<"Ata"> | $Enums.StatusAta
    aprovadoPorId?: UuidNullableFilter<"Ata"> | string | null
    dataAprovacao?: DateTimeNullableFilter<"Ata"> | Date | string | null
    comentarios?: StringNullableFilter<"Ata"> | string | null
    createdAt?: DateTimeFilter<"Ata"> | Date | string
    updatedAt?: DateTimeFilter<"Ata"> | Date | string
    transcricao?: XOR<TranscricaoScalarRelationFilter, TranscricaoWhereInput>
    aprovadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type AtaOrderByWithRelationInput = {
    id?: SortOrder
    transcricaoId?: SortOrder
    resumo?: SortOrderInput | SortOrder
    topicos?: SortOrderInput | SortOrder
    decisoes?: SortOrderInput | SortOrder
    acoes?: SortOrderInput | SortOrder
    conteudoCompleto?: SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrderInput | SortOrder
    dataAprovacao?: SortOrderInput | SortOrder
    comentarios?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transcricao?: TranscricaoOrderByWithRelationInput
    aprovadoPor?: UsuarioOrderByWithRelationInput
  }

  export type AtaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transcricaoId?: string
    AND?: AtaWhereInput | AtaWhereInput[]
    OR?: AtaWhereInput[]
    NOT?: AtaWhereInput | AtaWhereInput[]
    resumo?: StringNullableFilter<"Ata"> | string | null
    topicos?: JsonNullableFilter<"Ata">
    decisoes?: JsonNullableFilter<"Ata">
    acoes?: JsonNullableFilter<"Ata">
    conteudoCompleto?: StringFilter<"Ata"> | string
    status?: EnumStatusAtaFilter<"Ata"> | $Enums.StatusAta
    aprovadoPorId?: UuidNullableFilter<"Ata"> | string | null
    dataAprovacao?: DateTimeNullableFilter<"Ata"> | Date | string | null
    comentarios?: StringNullableFilter<"Ata"> | string | null
    createdAt?: DateTimeFilter<"Ata"> | Date | string
    updatedAt?: DateTimeFilter<"Ata"> | Date | string
    transcricao?: XOR<TranscricaoScalarRelationFilter, TranscricaoWhereInput>
    aprovadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id" | "transcricaoId">

  export type AtaOrderByWithAggregationInput = {
    id?: SortOrder
    transcricaoId?: SortOrder
    resumo?: SortOrderInput | SortOrder
    topicos?: SortOrderInput | SortOrder
    decisoes?: SortOrderInput | SortOrder
    acoes?: SortOrderInput | SortOrder
    conteudoCompleto?: SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrderInput | SortOrder
    dataAprovacao?: SortOrderInput | SortOrder
    comentarios?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AtaCountOrderByAggregateInput
    _max?: AtaMaxOrderByAggregateInput
    _min?: AtaMinOrderByAggregateInput
  }

  export type AtaScalarWhereWithAggregatesInput = {
    AND?: AtaScalarWhereWithAggregatesInput | AtaScalarWhereWithAggregatesInput[]
    OR?: AtaScalarWhereWithAggregatesInput[]
    NOT?: AtaScalarWhereWithAggregatesInput | AtaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Ata"> | string
    transcricaoId?: UuidWithAggregatesFilter<"Ata"> | string
    resumo?: StringNullableWithAggregatesFilter<"Ata"> | string | null
    topicos?: JsonNullableWithAggregatesFilter<"Ata">
    decisoes?: JsonNullableWithAggregatesFilter<"Ata">
    acoes?: JsonNullableWithAggregatesFilter<"Ata">
    conteudoCompleto?: StringWithAggregatesFilter<"Ata"> | string
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
    reunioesCriadas?: ReuniaoCreateNestedManyWithoutCriadorInput
    atasAprovadas?: AtaCreateNestedManyWithoutAprovadoPorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    reunioesCriadas?: ReuniaoUncheckedCreateNestedManyWithoutCriadorInput
    atasAprovadas?: AtaUncheckedCreateNestedManyWithoutAprovadoPorInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reunioesCriadas?: ReuniaoUpdateManyWithoutCriadorNestedInput
    atasAprovadas?: AtaUpdateManyWithoutAprovadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reunioesCriadas?: ReuniaoUncheckedUpdateManyWithoutCriadorNestedInput
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

  export type ReuniaoCreateInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    createdAt?: Date | string
    criador?: UsuarioCreateNestedOneWithoutReunioesCriadasInput
    participantes?: ParticipanteCreateNestedManyWithoutReuniaoInput
    transcricao?: TranscricaoCreateNestedOneWithoutReuniaoInput
  }

  export type ReuniaoUncheckedCreateInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    criadoPorId?: string | null
    createdAt?: Date | string
    participantes?: ParticipanteUncheckedCreateNestedManyWithoutReuniaoInput
    transcricao?: TranscricaoUncheckedCreateNestedOneWithoutReuniaoInput
  }

  export type ReuniaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criador?: UsuarioUpdateOneWithoutReunioesCriadasNestedInput
    participantes?: ParticipanteUpdateManyWithoutReuniaoNestedInput
    transcricao?: TranscricaoUpdateOneWithoutReuniaoNestedInput
  }

  export type ReuniaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    criadoPorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUncheckedUpdateManyWithoutReuniaoNestedInput
    transcricao?: TranscricaoUncheckedUpdateOneWithoutReuniaoNestedInput
  }

  export type ReuniaoCreateManyInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    criadoPorId?: string | null
    createdAt?: Date | string
  }

  export type ReuniaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    criadoPorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteCreateInput = {
    id?: string
    nome: string
    email?: string | null
    createdAt?: Date | string
    reuniao: ReuniaoCreateNestedOneWithoutParticipantesInput
  }

  export type ParticipanteUncheckedCreateInput = {
    id?: string
    reuniaoId: string
    nome: string
    email?: string | null
    createdAt?: Date | string
  }

  export type ParticipanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reuniao?: ReuniaoUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type ParticipanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reuniaoId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteCreateManyInput = {
    id?: string
    reuniaoId: string
    nome: string
    email?: string | null
    createdAt?: Date | string
  }

  export type ParticipanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reuniaoId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscricaoCreateInput = {
    id?: string
    conteudoTexto: string
    status?: $Enums.StatusTranscricao
    arquivoAudioPath?: string | null
    servicoUsado?: string | null
    erroMensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reuniao: ReuniaoCreateNestedOneWithoutTranscricaoInput
    ata?: AtaCreateNestedOneWithoutTranscricaoInput
  }

  export type TranscricaoUncheckedCreateInput = {
    id?: string
    reuniaoId: string
    conteudoTexto: string
    status?: $Enums.StatusTranscricao
    arquivoAudioPath?: string | null
    servicoUsado?: string | null
    erroMensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ata?: AtaUncheckedCreateNestedOneWithoutTranscricaoInput
  }

  export type TranscricaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudoTexto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTranscricaoFieldUpdateOperationsInput | $Enums.StatusTranscricao
    arquivoAudioPath?: NullableStringFieldUpdateOperationsInput | string | null
    servicoUsado?: NullableStringFieldUpdateOperationsInput | string | null
    erroMensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reuniao?: ReuniaoUpdateOneRequiredWithoutTranscricaoNestedInput
    ata?: AtaUpdateOneWithoutTranscricaoNestedInput
  }

  export type TranscricaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reuniaoId?: StringFieldUpdateOperationsInput | string
    conteudoTexto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTranscricaoFieldUpdateOperationsInput | $Enums.StatusTranscricao
    arquivoAudioPath?: NullableStringFieldUpdateOperationsInput | string | null
    servicoUsado?: NullableStringFieldUpdateOperationsInput | string | null
    erroMensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ata?: AtaUncheckedUpdateOneWithoutTranscricaoNestedInput
  }

  export type TranscricaoCreateManyInput = {
    id?: string
    reuniaoId: string
    conteudoTexto: string
    status?: $Enums.StatusTranscricao
    arquivoAudioPath?: string | null
    servicoUsado?: string | null
    erroMensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranscricaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudoTexto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTranscricaoFieldUpdateOperationsInput | $Enums.StatusTranscricao
    arquivoAudioPath?: NullableStringFieldUpdateOperationsInput | string | null
    servicoUsado?: NullableStringFieldUpdateOperationsInput | string | null
    erroMensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscricaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reuniaoId?: StringFieldUpdateOperationsInput | string
    conteudoTexto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTranscricaoFieldUpdateOperationsInput | $Enums.StatusTranscricao
    arquivoAudioPath?: NullableStringFieldUpdateOperationsInput | string | null
    servicoUsado?: NullableStringFieldUpdateOperationsInput | string | null
    erroMensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaCreateInput = {
    id?: string
    resumo?: string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto: string
    status?: $Enums.StatusAta
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transcricao: TranscricaoCreateNestedOneWithoutAtaInput
    aprovadoPor?: UsuarioCreateNestedOneWithoutAtasAprovadasInput
  }

  export type AtaUncheckedCreateInput = {
    id?: string
    transcricaoId: string
    resumo?: string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto: string
    status?: $Enums.StatusAta
    aprovadoPorId?: string | null
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transcricao?: TranscricaoUpdateOneRequiredWithoutAtaNestedInput
    aprovadoPor?: UsuarioUpdateOneWithoutAtasAprovadasNestedInput
  }

  export type AtaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcricaoId?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    aprovadoPorId?: NullableStringFieldUpdateOperationsInput | string | null
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaCreateManyInput = {
    id?: string
    transcricaoId: string
    resumo?: string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto: string
    status?: $Enums.StatusAta
    aprovadoPorId?: string | null
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcricaoId?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto?: StringFieldUpdateOperationsInput | string
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

  export type ReuniaoListRelationFilter = {
    every?: ReuniaoWhereInput
    some?: ReuniaoWhereInput
    none?: ReuniaoWhereInput
  }

  export type AtaListRelationFilter = {
    every?: AtaWhereInput
    some?: AtaWhereInput
    none?: AtaWhereInput
  }

  export type ReuniaoOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type ParticipanteListRelationFilter = {
    every?: ParticipanteWhereInput
    some?: ParticipanteWhereInput
    none?: ParticipanteWhereInput
  }

  export type TranscricaoNullableScalarRelationFilter = {
    is?: TranscricaoWhereInput | null
    isNot?: TranscricaoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParticipanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReuniaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrder
    linkMeeting?: SortOrder
    criadoPorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReuniaoAvgOrderByAggregateInput = {
    duracaoMinutos?: SortOrder
  }

  export type ReuniaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrder
    linkMeeting?: SortOrder
    criadoPorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReuniaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataReuniao?: SortOrder
    duracaoMinutos?: SortOrder
    linkMeeting?: SortOrder
    criadoPorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReuniaoSumOrderByAggregateInput = {
    duracaoMinutos?: SortOrder
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

  export type ReuniaoScalarRelationFilter = {
    is?: ReuniaoWhereInput
    isNot?: ReuniaoWhereInput
  }

  export type ParticipanteReuniaoIdEmailCompoundUniqueInput = {
    reuniaoId: string
    email: string
  }

  export type ParticipanteCountOrderByAggregateInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipanteMaxOrderByAggregateInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipanteMinOrderByAggregateInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusTranscricaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTranscricao | EnumStatusTranscricaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTranscricao[] | ListEnumStatusTranscricaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTranscricao[] | ListEnumStatusTranscricaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTranscricaoFilter<$PrismaModel> | $Enums.StatusTranscricao
  }

  export type AtaNullableScalarRelationFilter = {
    is?: AtaWhereInput | null
    isNot?: AtaWhereInput | null
  }

  export type TranscricaoCountOrderByAggregateInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    conteudoTexto?: SortOrder
    status?: SortOrder
    arquivoAudioPath?: SortOrder
    servicoUsado?: SortOrder
    erroMensagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranscricaoMaxOrderByAggregateInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    conteudoTexto?: SortOrder
    status?: SortOrder
    arquivoAudioPath?: SortOrder
    servicoUsado?: SortOrder
    erroMensagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranscricaoMinOrderByAggregateInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    conteudoTexto?: SortOrder
    status?: SortOrder
    arquivoAudioPath?: SortOrder
    servicoUsado?: SortOrder
    erroMensagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusTranscricaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTranscricao | EnumStatusTranscricaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTranscricao[] | ListEnumStatusTranscricaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTranscricao[] | ListEnumStatusTranscricaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTranscricaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusTranscricao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTranscricaoFilter<$PrismaModel>
    _max?: NestedEnumStatusTranscricaoFilter<$PrismaModel>
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

  export type TranscricaoScalarRelationFilter = {
    is?: TranscricaoWhereInput
    isNot?: TranscricaoWhereInput
  }

  export type AtaCountOrderByAggregateInput = {
    id?: SortOrder
    transcricaoId?: SortOrder
    resumo?: SortOrder
    topicos?: SortOrder
    decisoes?: SortOrder
    acoes?: SortOrder
    conteudoCompleto?: SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrder
    dataAprovacao?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtaMaxOrderByAggregateInput = {
    id?: SortOrder
    transcricaoId?: SortOrder
    resumo?: SortOrder
    conteudoCompleto?: SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrder
    dataAprovacao?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtaMinOrderByAggregateInput = {
    id?: SortOrder
    transcricaoId?: SortOrder
    resumo?: SortOrder
    conteudoCompleto?: SortOrder
    status?: SortOrder
    aprovadoPorId?: SortOrder
    dataAprovacao?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ReuniaoCreateNestedManyWithoutCriadorInput = {
    create?: XOR<ReuniaoCreateWithoutCriadorInput, ReuniaoUncheckedCreateWithoutCriadorInput> | ReuniaoCreateWithoutCriadorInput[] | ReuniaoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: ReuniaoCreateOrConnectWithoutCriadorInput | ReuniaoCreateOrConnectWithoutCriadorInput[]
    createMany?: ReuniaoCreateManyCriadorInputEnvelope
    connect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
  }

  export type AtaCreateNestedManyWithoutAprovadoPorInput = {
    create?: XOR<AtaCreateWithoutAprovadoPorInput, AtaUncheckedCreateWithoutAprovadoPorInput> | AtaCreateWithoutAprovadoPorInput[] | AtaUncheckedCreateWithoutAprovadoPorInput[]
    connectOrCreate?: AtaCreateOrConnectWithoutAprovadoPorInput | AtaCreateOrConnectWithoutAprovadoPorInput[]
    createMany?: AtaCreateManyAprovadoPorInputEnvelope
    connect?: AtaWhereUniqueInput | AtaWhereUniqueInput[]
  }

  export type ReuniaoUncheckedCreateNestedManyWithoutCriadorInput = {
    create?: XOR<ReuniaoCreateWithoutCriadorInput, ReuniaoUncheckedCreateWithoutCriadorInput> | ReuniaoCreateWithoutCriadorInput[] | ReuniaoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: ReuniaoCreateOrConnectWithoutCriadorInput | ReuniaoCreateOrConnectWithoutCriadorInput[]
    createMany?: ReuniaoCreateManyCriadorInputEnvelope
    connect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
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

  export type ReuniaoUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<ReuniaoCreateWithoutCriadorInput, ReuniaoUncheckedCreateWithoutCriadorInput> | ReuniaoCreateWithoutCriadorInput[] | ReuniaoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: ReuniaoCreateOrConnectWithoutCriadorInput | ReuniaoCreateOrConnectWithoutCriadorInput[]
    upsert?: ReuniaoUpsertWithWhereUniqueWithoutCriadorInput | ReuniaoUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: ReuniaoCreateManyCriadorInputEnvelope
    set?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    disconnect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    delete?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    connect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    update?: ReuniaoUpdateWithWhereUniqueWithoutCriadorInput | ReuniaoUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: ReuniaoUpdateManyWithWhereWithoutCriadorInput | ReuniaoUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: ReuniaoScalarWhereInput | ReuniaoScalarWhereInput[]
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

  export type ReuniaoUncheckedUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<ReuniaoCreateWithoutCriadorInput, ReuniaoUncheckedCreateWithoutCriadorInput> | ReuniaoCreateWithoutCriadorInput[] | ReuniaoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: ReuniaoCreateOrConnectWithoutCriadorInput | ReuniaoCreateOrConnectWithoutCriadorInput[]
    upsert?: ReuniaoUpsertWithWhereUniqueWithoutCriadorInput | ReuniaoUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: ReuniaoCreateManyCriadorInputEnvelope
    set?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    disconnect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    delete?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    connect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    update?: ReuniaoUpdateWithWhereUniqueWithoutCriadorInput | ReuniaoUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: ReuniaoUpdateManyWithWhereWithoutCriadorInput | ReuniaoUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: ReuniaoScalarWhereInput | ReuniaoScalarWhereInput[]
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

  export type UsuarioCreateNestedOneWithoutReunioesCriadasInput = {
    create?: XOR<UsuarioCreateWithoutReunioesCriadasInput, UsuarioUncheckedCreateWithoutReunioesCriadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReunioesCriadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ParticipanteCreateNestedManyWithoutReuniaoInput = {
    create?: XOR<ParticipanteCreateWithoutReuniaoInput, ParticipanteUncheckedCreateWithoutReuniaoInput> | ParticipanteCreateWithoutReuniaoInput[] | ParticipanteUncheckedCreateWithoutReuniaoInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutReuniaoInput | ParticipanteCreateOrConnectWithoutReuniaoInput[]
    createMany?: ParticipanteCreateManyReuniaoInputEnvelope
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
  }

  export type TranscricaoCreateNestedOneWithoutReuniaoInput = {
    create?: XOR<TranscricaoCreateWithoutReuniaoInput, TranscricaoUncheckedCreateWithoutReuniaoInput>
    connectOrCreate?: TranscricaoCreateOrConnectWithoutReuniaoInput
    connect?: TranscricaoWhereUniqueInput
  }

  export type ParticipanteUncheckedCreateNestedManyWithoutReuniaoInput = {
    create?: XOR<ParticipanteCreateWithoutReuniaoInput, ParticipanteUncheckedCreateWithoutReuniaoInput> | ParticipanteCreateWithoutReuniaoInput[] | ParticipanteUncheckedCreateWithoutReuniaoInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutReuniaoInput | ParticipanteCreateOrConnectWithoutReuniaoInput[]
    createMany?: ParticipanteCreateManyReuniaoInputEnvelope
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
  }

  export type TranscricaoUncheckedCreateNestedOneWithoutReuniaoInput = {
    create?: XOR<TranscricaoCreateWithoutReuniaoInput, TranscricaoUncheckedCreateWithoutReuniaoInput>
    connectOrCreate?: TranscricaoCreateOrConnectWithoutReuniaoInput
    connect?: TranscricaoWhereUniqueInput
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

  export type UsuarioUpdateOneWithoutReunioesCriadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReunioesCriadasInput, UsuarioUncheckedCreateWithoutReunioesCriadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReunioesCriadasInput
    upsert?: UsuarioUpsertWithoutReunioesCriadasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReunioesCriadasInput, UsuarioUpdateWithoutReunioesCriadasInput>, UsuarioUncheckedUpdateWithoutReunioesCriadasInput>
  }

  export type ParticipanteUpdateManyWithoutReuniaoNestedInput = {
    create?: XOR<ParticipanteCreateWithoutReuniaoInput, ParticipanteUncheckedCreateWithoutReuniaoInput> | ParticipanteCreateWithoutReuniaoInput[] | ParticipanteUncheckedCreateWithoutReuniaoInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutReuniaoInput | ParticipanteCreateOrConnectWithoutReuniaoInput[]
    upsert?: ParticipanteUpsertWithWhereUniqueWithoutReuniaoInput | ParticipanteUpsertWithWhereUniqueWithoutReuniaoInput[]
    createMany?: ParticipanteCreateManyReuniaoInputEnvelope
    set?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    disconnect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    delete?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    update?: ParticipanteUpdateWithWhereUniqueWithoutReuniaoInput | ParticipanteUpdateWithWhereUniqueWithoutReuniaoInput[]
    updateMany?: ParticipanteUpdateManyWithWhereWithoutReuniaoInput | ParticipanteUpdateManyWithWhereWithoutReuniaoInput[]
    deleteMany?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
  }

  export type TranscricaoUpdateOneWithoutReuniaoNestedInput = {
    create?: XOR<TranscricaoCreateWithoutReuniaoInput, TranscricaoUncheckedCreateWithoutReuniaoInput>
    connectOrCreate?: TranscricaoCreateOrConnectWithoutReuniaoInput
    upsert?: TranscricaoUpsertWithoutReuniaoInput
    disconnect?: TranscricaoWhereInput | boolean
    delete?: TranscricaoWhereInput | boolean
    connect?: TranscricaoWhereUniqueInput
    update?: XOR<XOR<TranscricaoUpdateToOneWithWhereWithoutReuniaoInput, TranscricaoUpdateWithoutReuniaoInput>, TranscricaoUncheckedUpdateWithoutReuniaoInput>
  }

  export type ParticipanteUncheckedUpdateManyWithoutReuniaoNestedInput = {
    create?: XOR<ParticipanteCreateWithoutReuniaoInput, ParticipanteUncheckedCreateWithoutReuniaoInput> | ParticipanteCreateWithoutReuniaoInput[] | ParticipanteUncheckedCreateWithoutReuniaoInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutReuniaoInput | ParticipanteCreateOrConnectWithoutReuniaoInput[]
    upsert?: ParticipanteUpsertWithWhereUniqueWithoutReuniaoInput | ParticipanteUpsertWithWhereUniqueWithoutReuniaoInput[]
    createMany?: ParticipanteCreateManyReuniaoInputEnvelope
    set?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    disconnect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    delete?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    update?: ParticipanteUpdateWithWhereUniqueWithoutReuniaoInput | ParticipanteUpdateWithWhereUniqueWithoutReuniaoInput[]
    updateMany?: ParticipanteUpdateManyWithWhereWithoutReuniaoInput | ParticipanteUpdateManyWithWhereWithoutReuniaoInput[]
    deleteMany?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
  }

  export type TranscricaoUncheckedUpdateOneWithoutReuniaoNestedInput = {
    create?: XOR<TranscricaoCreateWithoutReuniaoInput, TranscricaoUncheckedCreateWithoutReuniaoInput>
    connectOrCreate?: TranscricaoCreateOrConnectWithoutReuniaoInput
    upsert?: TranscricaoUpsertWithoutReuniaoInput
    disconnect?: TranscricaoWhereInput | boolean
    delete?: TranscricaoWhereInput | boolean
    connect?: TranscricaoWhereUniqueInput
    update?: XOR<XOR<TranscricaoUpdateToOneWithWhereWithoutReuniaoInput, TranscricaoUpdateWithoutReuniaoInput>, TranscricaoUncheckedUpdateWithoutReuniaoInput>
  }

  export type ReuniaoCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<ReuniaoCreateWithoutParticipantesInput, ReuniaoUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ReuniaoCreateOrConnectWithoutParticipantesInput
    connect?: ReuniaoWhereUniqueInput
  }

  export type ReuniaoUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<ReuniaoCreateWithoutParticipantesInput, ReuniaoUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: ReuniaoCreateOrConnectWithoutParticipantesInput
    upsert?: ReuniaoUpsertWithoutParticipantesInput
    connect?: ReuniaoWhereUniqueInput
    update?: XOR<XOR<ReuniaoUpdateToOneWithWhereWithoutParticipantesInput, ReuniaoUpdateWithoutParticipantesInput>, ReuniaoUncheckedUpdateWithoutParticipantesInput>
  }

  export type ReuniaoCreateNestedOneWithoutTranscricaoInput = {
    create?: XOR<ReuniaoCreateWithoutTranscricaoInput, ReuniaoUncheckedCreateWithoutTranscricaoInput>
    connectOrCreate?: ReuniaoCreateOrConnectWithoutTranscricaoInput
    connect?: ReuniaoWhereUniqueInput
  }

  export type AtaCreateNestedOneWithoutTranscricaoInput = {
    create?: XOR<AtaCreateWithoutTranscricaoInput, AtaUncheckedCreateWithoutTranscricaoInput>
    connectOrCreate?: AtaCreateOrConnectWithoutTranscricaoInput
    connect?: AtaWhereUniqueInput
  }

  export type AtaUncheckedCreateNestedOneWithoutTranscricaoInput = {
    create?: XOR<AtaCreateWithoutTranscricaoInput, AtaUncheckedCreateWithoutTranscricaoInput>
    connectOrCreate?: AtaCreateOrConnectWithoutTranscricaoInput
    connect?: AtaWhereUniqueInput
  }

  export type EnumStatusTranscricaoFieldUpdateOperationsInput = {
    set?: $Enums.StatusTranscricao
  }

  export type ReuniaoUpdateOneRequiredWithoutTranscricaoNestedInput = {
    create?: XOR<ReuniaoCreateWithoutTranscricaoInput, ReuniaoUncheckedCreateWithoutTranscricaoInput>
    connectOrCreate?: ReuniaoCreateOrConnectWithoutTranscricaoInput
    upsert?: ReuniaoUpsertWithoutTranscricaoInput
    connect?: ReuniaoWhereUniqueInput
    update?: XOR<XOR<ReuniaoUpdateToOneWithWhereWithoutTranscricaoInput, ReuniaoUpdateWithoutTranscricaoInput>, ReuniaoUncheckedUpdateWithoutTranscricaoInput>
  }

  export type AtaUpdateOneWithoutTranscricaoNestedInput = {
    create?: XOR<AtaCreateWithoutTranscricaoInput, AtaUncheckedCreateWithoutTranscricaoInput>
    connectOrCreate?: AtaCreateOrConnectWithoutTranscricaoInput
    upsert?: AtaUpsertWithoutTranscricaoInput
    disconnect?: AtaWhereInput | boolean
    delete?: AtaWhereInput | boolean
    connect?: AtaWhereUniqueInput
    update?: XOR<XOR<AtaUpdateToOneWithWhereWithoutTranscricaoInput, AtaUpdateWithoutTranscricaoInput>, AtaUncheckedUpdateWithoutTranscricaoInput>
  }

  export type AtaUncheckedUpdateOneWithoutTranscricaoNestedInput = {
    create?: XOR<AtaCreateWithoutTranscricaoInput, AtaUncheckedCreateWithoutTranscricaoInput>
    connectOrCreate?: AtaCreateOrConnectWithoutTranscricaoInput
    upsert?: AtaUpsertWithoutTranscricaoInput
    disconnect?: AtaWhereInput | boolean
    delete?: AtaWhereInput | boolean
    connect?: AtaWhereUniqueInput
    update?: XOR<XOR<AtaUpdateToOneWithWhereWithoutTranscricaoInput, AtaUpdateWithoutTranscricaoInput>, AtaUncheckedUpdateWithoutTranscricaoInput>
  }

  export type TranscricaoCreateNestedOneWithoutAtaInput = {
    create?: XOR<TranscricaoCreateWithoutAtaInput, TranscricaoUncheckedCreateWithoutAtaInput>
    connectOrCreate?: TranscricaoCreateOrConnectWithoutAtaInput
    connect?: TranscricaoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAtasAprovadasInput = {
    create?: XOR<UsuarioCreateWithoutAtasAprovadasInput, UsuarioUncheckedCreateWithoutAtasAprovadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtasAprovadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumStatusAtaFieldUpdateOperationsInput = {
    set?: $Enums.StatusAta
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TranscricaoUpdateOneRequiredWithoutAtaNestedInput = {
    create?: XOR<TranscricaoCreateWithoutAtaInput, TranscricaoUncheckedCreateWithoutAtaInput>
    connectOrCreate?: TranscricaoCreateOrConnectWithoutAtaInput
    upsert?: TranscricaoUpsertWithoutAtaInput
    connect?: TranscricaoWhereUniqueInput
    update?: XOR<XOR<TranscricaoUpdateToOneWithWhereWithoutAtaInput, TranscricaoUpdateWithoutAtaInput>, TranscricaoUncheckedUpdateWithoutAtaInput>
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

  export type NestedEnumStatusTranscricaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTranscricao | EnumStatusTranscricaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTranscricao[] | ListEnumStatusTranscricaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTranscricao[] | ListEnumStatusTranscricaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTranscricaoFilter<$PrismaModel> | $Enums.StatusTranscricao
  }

  export type NestedEnumStatusTranscricaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTranscricao | EnumStatusTranscricaoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTranscricao[] | ListEnumStatusTranscricaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTranscricao[] | ListEnumStatusTranscricaoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTranscricaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusTranscricao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTranscricaoFilter<$PrismaModel>
    _max?: NestedEnumStatusTranscricaoFilter<$PrismaModel>
  }

  export type NestedEnumStatusAtaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAta | EnumStatusAtaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAta[] | ListEnumStatusAtaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtaFilter<$PrismaModel> | $Enums.StatusAta
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

  export type ReuniaoCreateWithoutCriadorInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    createdAt?: Date | string
    participantes?: ParticipanteCreateNestedManyWithoutReuniaoInput
    transcricao?: TranscricaoCreateNestedOneWithoutReuniaoInput
  }

  export type ReuniaoUncheckedCreateWithoutCriadorInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    createdAt?: Date | string
    participantes?: ParticipanteUncheckedCreateNestedManyWithoutReuniaoInput
    transcricao?: TranscricaoUncheckedCreateNestedOneWithoutReuniaoInput
  }

  export type ReuniaoCreateOrConnectWithoutCriadorInput = {
    where: ReuniaoWhereUniqueInput
    create: XOR<ReuniaoCreateWithoutCriadorInput, ReuniaoUncheckedCreateWithoutCriadorInput>
  }

  export type ReuniaoCreateManyCriadorInputEnvelope = {
    data: ReuniaoCreateManyCriadorInput | ReuniaoCreateManyCriadorInput[]
    skipDuplicates?: boolean
  }

  export type AtaCreateWithoutAprovadoPorInput = {
    id?: string
    resumo?: string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto: string
    status?: $Enums.StatusAta
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transcricao: TranscricaoCreateNestedOneWithoutAtaInput
  }

  export type AtaUncheckedCreateWithoutAprovadoPorInput = {
    id?: string
    transcricaoId: string
    resumo?: string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto: string
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

  export type ReuniaoUpsertWithWhereUniqueWithoutCriadorInput = {
    where: ReuniaoWhereUniqueInput
    update: XOR<ReuniaoUpdateWithoutCriadorInput, ReuniaoUncheckedUpdateWithoutCriadorInput>
    create: XOR<ReuniaoCreateWithoutCriadorInput, ReuniaoUncheckedCreateWithoutCriadorInput>
  }

  export type ReuniaoUpdateWithWhereUniqueWithoutCriadorInput = {
    where: ReuniaoWhereUniqueInput
    data: XOR<ReuniaoUpdateWithoutCriadorInput, ReuniaoUncheckedUpdateWithoutCriadorInput>
  }

  export type ReuniaoUpdateManyWithWhereWithoutCriadorInput = {
    where: ReuniaoScalarWhereInput
    data: XOR<ReuniaoUpdateManyMutationInput, ReuniaoUncheckedUpdateManyWithoutCriadorInput>
  }

  export type ReuniaoScalarWhereInput = {
    AND?: ReuniaoScalarWhereInput | ReuniaoScalarWhereInput[]
    OR?: ReuniaoScalarWhereInput[]
    NOT?: ReuniaoScalarWhereInput | ReuniaoScalarWhereInput[]
    id?: UuidFilter<"Reuniao"> | string
    titulo?: StringFilter<"Reuniao"> | string
    tipo?: EnumTipoReuniaoFilter<"Reuniao"> | $Enums.TipoReuniao
    dataReuniao?: DateTimeFilter<"Reuniao"> | Date | string
    duracaoMinutos?: IntNullableFilter<"Reuniao"> | number | null
    linkMeeting?: StringNullableFilter<"Reuniao"> | string | null
    criadoPorId?: UuidNullableFilter<"Reuniao"> | string | null
    createdAt?: DateTimeFilter<"Reuniao"> | Date | string
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
    transcricaoId?: UuidFilter<"Ata"> | string
    resumo?: StringNullableFilter<"Ata"> | string | null
    topicos?: JsonNullableFilter<"Ata">
    decisoes?: JsonNullableFilter<"Ata">
    acoes?: JsonNullableFilter<"Ata">
    conteudoCompleto?: StringFilter<"Ata"> | string
    status?: EnumStatusAtaFilter<"Ata"> | $Enums.StatusAta
    aprovadoPorId?: UuidNullableFilter<"Ata"> | string | null
    dataAprovacao?: DateTimeNullableFilter<"Ata"> | Date | string | null
    comentarios?: StringNullableFilter<"Ata"> | string | null
    createdAt?: DateTimeFilter<"Ata"> | Date | string
    updatedAt?: DateTimeFilter<"Ata"> | Date | string
  }

  export type UsuarioCreateWithoutReunioesCriadasInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    atasAprovadas?: AtaCreateNestedManyWithoutAprovadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutReunioesCriadasInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    atasAprovadas?: AtaUncheckedCreateNestedManyWithoutAprovadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutReunioesCriadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReunioesCriadasInput, UsuarioUncheckedCreateWithoutReunioesCriadasInput>
  }

  export type ParticipanteCreateWithoutReuniaoInput = {
    id?: string
    nome: string
    email?: string | null
    createdAt?: Date | string
  }

  export type ParticipanteUncheckedCreateWithoutReuniaoInput = {
    id?: string
    nome: string
    email?: string | null
    createdAt?: Date | string
  }

  export type ParticipanteCreateOrConnectWithoutReuniaoInput = {
    where: ParticipanteWhereUniqueInput
    create: XOR<ParticipanteCreateWithoutReuniaoInput, ParticipanteUncheckedCreateWithoutReuniaoInput>
  }

  export type ParticipanteCreateManyReuniaoInputEnvelope = {
    data: ParticipanteCreateManyReuniaoInput | ParticipanteCreateManyReuniaoInput[]
    skipDuplicates?: boolean
  }

  export type TranscricaoCreateWithoutReuniaoInput = {
    id?: string
    conteudoTexto: string
    status?: $Enums.StatusTranscricao
    arquivoAudioPath?: string | null
    servicoUsado?: string | null
    erroMensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ata?: AtaCreateNestedOneWithoutTranscricaoInput
  }

  export type TranscricaoUncheckedCreateWithoutReuniaoInput = {
    id?: string
    conteudoTexto: string
    status?: $Enums.StatusTranscricao
    arquivoAudioPath?: string | null
    servicoUsado?: string | null
    erroMensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ata?: AtaUncheckedCreateNestedOneWithoutTranscricaoInput
  }

  export type TranscricaoCreateOrConnectWithoutReuniaoInput = {
    where: TranscricaoWhereUniqueInput
    create: XOR<TranscricaoCreateWithoutReuniaoInput, TranscricaoUncheckedCreateWithoutReuniaoInput>
  }

  export type UsuarioUpsertWithoutReunioesCriadasInput = {
    update: XOR<UsuarioUpdateWithoutReunioesCriadasInput, UsuarioUncheckedUpdateWithoutReunioesCriadasInput>
    create: XOR<UsuarioCreateWithoutReunioesCriadasInput, UsuarioUncheckedCreateWithoutReunioesCriadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReunioesCriadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReunioesCriadasInput, UsuarioUncheckedUpdateWithoutReunioesCriadasInput>
  }

  export type UsuarioUpdateWithoutReunioesCriadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atasAprovadas?: AtaUpdateManyWithoutAprovadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReunioesCriadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atasAprovadas?: AtaUncheckedUpdateManyWithoutAprovadoPorNestedInput
  }

  export type ParticipanteUpsertWithWhereUniqueWithoutReuniaoInput = {
    where: ParticipanteWhereUniqueInput
    update: XOR<ParticipanteUpdateWithoutReuniaoInput, ParticipanteUncheckedUpdateWithoutReuniaoInput>
    create: XOR<ParticipanteCreateWithoutReuniaoInput, ParticipanteUncheckedCreateWithoutReuniaoInput>
  }

  export type ParticipanteUpdateWithWhereUniqueWithoutReuniaoInput = {
    where: ParticipanteWhereUniqueInput
    data: XOR<ParticipanteUpdateWithoutReuniaoInput, ParticipanteUncheckedUpdateWithoutReuniaoInput>
  }

  export type ParticipanteUpdateManyWithWhereWithoutReuniaoInput = {
    where: ParticipanteScalarWhereInput
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyWithoutReuniaoInput>
  }

  export type ParticipanteScalarWhereInput = {
    AND?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
    OR?: ParticipanteScalarWhereInput[]
    NOT?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
    id?: UuidFilter<"Participante"> | string
    reuniaoId?: UuidFilter<"Participante"> | string
    nome?: StringFilter<"Participante"> | string
    email?: StringNullableFilter<"Participante"> | string | null
    createdAt?: DateTimeFilter<"Participante"> | Date | string
  }

  export type TranscricaoUpsertWithoutReuniaoInput = {
    update: XOR<TranscricaoUpdateWithoutReuniaoInput, TranscricaoUncheckedUpdateWithoutReuniaoInput>
    create: XOR<TranscricaoCreateWithoutReuniaoInput, TranscricaoUncheckedCreateWithoutReuniaoInput>
    where?: TranscricaoWhereInput
  }

  export type TranscricaoUpdateToOneWithWhereWithoutReuniaoInput = {
    where?: TranscricaoWhereInput
    data: XOR<TranscricaoUpdateWithoutReuniaoInput, TranscricaoUncheckedUpdateWithoutReuniaoInput>
  }

  export type TranscricaoUpdateWithoutReuniaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudoTexto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTranscricaoFieldUpdateOperationsInput | $Enums.StatusTranscricao
    arquivoAudioPath?: NullableStringFieldUpdateOperationsInput | string | null
    servicoUsado?: NullableStringFieldUpdateOperationsInput | string | null
    erroMensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ata?: AtaUpdateOneWithoutTranscricaoNestedInput
  }

  export type TranscricaoUncheckedUpdateWithoutReuniaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudoTexto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTranscricaoFieldUpdateOperationsInput | $Enums.StatusTranscricao
    arquivoAudioPath?: NullableStringFieldUpdateOperationsInput | string | null
    servicoUsado?: NullableStringFieldUpdateOperationsInput | string | null
    erroMensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ata?: AtaUncheckedUpdateOneWithoutTranscricaoNestedInput
  }

  export type ReuniaoCreateWithoutParticipantesInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    createdAt?: Date | string
    criador?: UsuarioCreateNestedOneWithoutReunioesCriadasInput
    transcricao?: TranscricaoCreateNestedOneWithoutReuniaoInput
  }

  export type ReuniaoUncheckedCreateWithoutParticipantesInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    criadoPorId?: string | null
    createdAt?: Date | string
    transcricao?: TranscricaoUncheckedCreateNestedOneWithoutReuniaoInput
  }

  export type ReuniaoCreateOrConnectWithoutParticipantesInput = {
    where: ReuniaoWhereUniqueInput
    create: XOR<ReuniaoCreateWithoutParticipantesInput, ReuniaoUncheckedCreateWithoutParticipantesInput>
  }

  export type ReuniaoUpsertWithoutParticipantesInput = {
    update: XOR<ReuniaoUpdateWithoutParticipantesInput, ReuniaoUncheckedUpdateWithoutParticipantesInput>
    create: XOR<ReuniaoCreateWithoutParticipantesInput, ReuniaoUncheckedCreateWithoutParticipantesInput>
    where?: ReuniaoWhereInput
  }

  export type ReuniaoUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: ReuniaoWhereInput
    data: XOR<ReuniaoUpdateWithoutParticipantesInput, ReuniaoUncheckedUpdateWithoutParticipantesInput>
  }

  export type ReuniaoUpdateWithoutParticipantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criador?: UsuarioUpdateOneWithoutReunioesCriadasNestedInput
    transcricao?: TranscricaoUpdateOneWithoutReuniaoNestedInput
  }

  export type ReuniaoUncheckedUpdateWithoutParticipantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    criadoPorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transcricao?: TranscricaoUncheckedUpdateOneWithoutReuniaoNestedInput
  }

  export type ReuniaoCreateWithoutTranscricaoInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    createdAt?: Date | string
    criador?: UsuarioCreateNestedOneWithoutReunioesCriadasInput
    participantes?: ParticipanteCreateNestedManyWithoutReuniaoInput
  }

  export type ReuniaoUncheckedCreateWithoutTranscricaoInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    criadoPorId?: string | null
    createdAt?: Date | string
    participantes?: ParticipanteUncheckedCreateNestedManyWithoutReuniaoInput
  }

  export type ReuniaoCreateOrConnectWithoutTranscricaoInput = {
    where: ReuniaoWhereUniqueInput
    create: XOR<ReuniaoCreateWithoutTranscricaoInput, ReuniaoUncheckedCreateWithoutTranscricaoInput>
  }

  export type AtaCreateWithoutTranscricaoInput = {
    id?: string
    resumo?: string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto: string
    status?: $Enums.StatusAta
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aprovadoPor?: UsuarioCreateNestedOneWithoutAtasAprovadasInput
  }

  export type AtaUncheckedCreateWithoutTranscricaoInput = {
    id?: string
    resumo?: string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto: string
    status?: $Enums.StatusAta
    aprovadoPorId?: string | null
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtaCreateOrConnectWithoutTranscricaoInput = {
    where: AtaWhereUniqueInput
    create: XOR<AtaCreateWithoutTranscricaoInput, AtaUncheckedCreateWithoutTranscricaoInput>
  }

  export type ReuniaoUpsertWithoutTranscricaoInput = {
    update: XOR<ReuniaoUpdateWithoutTranscricaoInput, ReuniaoUncheckedUpdateWithoutTranscricaoInput>
    create: XOR<ReuniaoCreateWithoutTranscricaoInput, ReuniaoUncheckedCreateWithoutTranscricaoInput>
    where?: ReuniaoWhereInput
  }

  export type ReuniaoUpdateToOneWithWhereWithoutTranscricaoInput = {
    where?: ReuniaoWhereInput
    data: XOR<ReuniaoUpdateWithoutTranscricaoInput, ReuniaoUncheckedUpdateWithoutTranscricaoInput>
  }

  export type ReuniaoUpdateWithoutTranscricaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criador?: UsuarioUpdateOneWithoutReunioesCriadasNestedInput
    participantes?: ParticipanteUpdateManyWithoutReuniaoNestedInput
  }

  export type ReuniaoUncheckedUpdateWithoutTranscricaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    criadoPorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUncheckedUpdateManyWithoutReuniaoNestedInput
  }

  export type AtaUpsertWithoutTranscricaoInput = {
    update: XOR<AtaUpdateWithoutTranscricaoInput, AtaUncheckedUpdateWithoutTranscricaoInput>
    create: XOR<AtaCreateWithoutTranscricaoInput, AtaUncheckedCreateWithoutTranscricaoInput>
    where?: AtaWhereInput
  }

  export type AtaUpdateToOneWithWhereWithoutTranscricaoInput = {
    where?: AtaWhereInput
    data: XOR<AtaUpdateWithoutTranscricaoInput, AtaUncheckedUpdateWithoutTranscricaoInput>
  }

  export type AtaUpdateWithoutTranscricaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aprovadoPor?: UsuarioUpdateOneWithoutAtasAprovadasNestedInput
  }

  export type AtaUncheckedUpdateWithoutTranscricaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    aprovadoPorId?: NullableStringFieldUpdateOperationsInput | string | null
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranscricaoCreateWithoutAtaInput = {
    id?: string
    conteudoTexto: string
    status?: $Enums.StatusTranscricao
    arquivoAudioPath?: string | null
    servicoUsado?: string | null
    erroMensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reuniao: ReuniaoCreateNestedOneWithoutTranscricaoInput
  }

  export type TranscricaoUncheckedCreateWithoutAtaInput = {
    id?: string
    reuniaoId: string
    conteudoTexto: string
    status?: $Enums.StatusTranscricao
    arquivoAudioPath?: string | null
    servicoUsado?: string | null
    erroMensagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranscricaoCreateOrConnectWithoutAtaInput = {
    where: TranscricaoWhereUniqueInput
    create: XOR<TranscricaoCreateWithoutAtaInput, TranscricaoUncheckedCreateWithoutAtaInput>
  }

  export type UsuarioCreateWithoutAtasAprovadasInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    reunioesCriadas?: ReuniaoCreateNestedManyWithoutCriadorInput
  }

  export type UsuarioUncheckedCreateWithoutAtasAprovadasInput = {
    id?: string
    email: string
    nome: string
    senha: string
    ativo?: boolean
    createdAt?: Date | string
    reunioesCriadas?: ReuniaoUncheckedCreateNestedManyWithoutCriadorInput
  }

  export type UsuarioCreateOrConnectWithoutAtasAprovadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtasAprovadasInput, UsuarioUncheckedCreateWithoutAtasAprovadasInput>
  }

  export type TranscricaoUpsertWithoutAtaInput = {
    update: XOR<TranscricaoUpdateWithoutAtaInput, TranscricaoUncheckedUpdateWithoutAtaInput>
    create: XOR<TranscricaoCreateWithoutAtaInput, TranscricaoUncheckedCreateWithoutAtaInput>
    where?: TranscricaoWhereInput
  }

  export type TranscricaoUpdateToOneWithWhereWithoutAtaInput = {
    where?: TranscricaoWhereInput
    data: XOR<TranscricaoUpdateWithoutAtaInput, TranscricaoUncheckedUpdateWithoutAtaInput>
  }

  export type TranscricaoUpdateWithoutAtaInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudoTexto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTranscricaoFieldUpdateOperationsInput | $Enums.StatusTranscricao
    arquivoAudioPath?: NullableStringFieldUpdateOperationsInput | string | null
    servicoUsado?: NullableStringFieldUpdateOperationsInput | string | null
    erroMensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reuniao?: ReuniaoUpdateOneRequiredWithoutTranscricaoNestedInput
  }

  export type TranscricaoUncheckedUpdateWithoutAtaInput = {
    id?: StringFieldUpdateOperationsInput | string
    reuniaoId?: StringFieldUpdateOperationsInput | string
    conteudoTexto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusTranscricaoFieldUpdateOperationsInput | $Enums.StatusTranscricao
    arquivoAudioPath?: NullableStringFieldUpdateOperationsInput | string | null
    servicoUsado?: NullableStringFieldUpdateOperationsInput | string | null
    erroMensagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    reunioesCriadas?: ReuniaoUpdateManyWithoutCriadorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAtasAprovadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reunioesCriadas?: ReuniaoUncheckedUpdateManyWithoutCriadorNestedInput
  }

  export type ReuniaoCreateManyCriadorInput = {
    id?: string
    titulo: string
    tipo: $Enums.TipoReuniao
    dataReuniao: Date | string
    duracaoMinutos?: number | null
    linkMeeting?: string | null
    createdAt?: Date | string
  }

  export type AtaCreateManyAprovadoPorInput = {
    id?: string
    transcricaoId: string
    resumo?: string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto: string
    status?: $Enums.StatusAta
    dataAprovacao?: Date | string | null
    comentarios?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReuniaoUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUpdateManyWithoutReuniaoNestedInput
    transcricao?: TranscricaoUpdateOneWithoutReuniaoNestedInput
  }

  export type ReuniaoUncheckedUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUncheckedUpdateManyWithoutReuniaoNestedInput
    transcricao?: TranscricaoUncheckedUpdateOneWithoutReuniaoNestedInput
  }

  export type ReuniaoUncheckedUpdateManyWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoReuniaoFieldUpdateOperationsInput | $Enums.TipoReuniao
    dataReuniao?: DateTimeFieldUpdateOperationsInput | Date | string
    duracaoMinutos?: NullableIntFieldUpdateOperationsInput | number | null
    linkMeeting?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaUpdateWithoutAprovadoPorInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transcricao?: TranscricaoUpdateOneRequiredWithoutAtaNestedInput
  }

  export type AtaUncheckedUpdateWithoutAprovadoPorInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcricaoId?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtaUncheckedUpdateManyWithoutAprovadoPorInput = {
    id?: StringFieldUpdateOperationsInput | string
    transcricaoId?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    topicos?: NullableJsonNullValueInput | InputJsonValue
    decisoes?: NullableJsonNullValueInput | InputJsonValue
    acoes?: NullableJsonNullValueInput | InputJsonValue
    conteudoCompleto?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusAtaFieldUpdateOperationsInput | $Enums.StatusAta
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteCreateManyReuniaoInput = {
    id?: string
    nome: string
    email?: string | null
    createdAt?: Date | string
  }

  export type ParticipanteUpdateWithoutReuniaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUncheckedUpdateWithoutReuniaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUncheckedUpdateManyWithoutReuniaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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