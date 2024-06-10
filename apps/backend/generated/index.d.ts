
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model DailySchedule
 * 
 */
export type DailySchedule = $Result.DefaultSelection<Prisma.$DailySchedulePayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applications
 * const applications = await prisma.application.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs>;

  /**
   * `prisma.dailySchedule`: Exposes CRUD operations for the **DailySchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailySchedules
    * const dailySchedules = await prisma.dailySchedule.findMany()
    * ```
    */
  get dailySchedule(): Prisma.DailyScheduleDelegate<ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Application: 'Application',
    DailySchedule: 'DailySchedule',
    Appointment: 'Appointment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'application' | 'dailySchedule' | 'appointment'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      DailySchedule: {
        payload: Prisma.$DailySchedulePayload<ExtArgs>
        fields: Prisma.DailyScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyScheduleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyScheduleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload>
          }
          findFirst: {
            args: Prisma.DailyScheduleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyScheduleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload>
          }
          findMany: {
            args: Prisma.DailyScheduleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload>[]
          }
          create: {
            args: Prisma.DailyScheduleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload>
          }
          createMany: {
            args: Prisma.DailyScheduleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyScheduleCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload>[]
          }
          delete: {
            args: Prisma.DailyScheduleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload>
          }
          update: {
            args: Prisma.DailyScheduleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload>
          }
          deleteMany: {
            args: Prisma.DailyScheduleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DailyScheduleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DailyScheduleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailySchedulePayload>
          }
          aggregate: {
            args: Prisma.DailyScheduleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDailySchedule>
          }
          groupBy: {
            args: Prisma.DailyScheduleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DailyScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyScheduleCountArgs<ExtArgs>,
            result: $Utils.Optional<DailyScheduleCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>,
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    dailySchedules: number
    appointment: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailySchedules?: boolean | ApplicationCountOutputTypeCountDailySchedulesArgs
    appointment?: boolean | ApplicationCountOutputTypeCountAppointmentArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountDailySchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyScheduleWhereInput
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    name: string | null
    timeSlot: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    timeSlot: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    name: number
    timeSlot: number
    createdBy: number
    createdAt: number
    updatedAt: number
    availableDays: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    name?: true
    timeSlot?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    name?: true
    timeSlot?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    name?: true
    timeSlot?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    availableDays?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    name: string
    timeSlot: string
    createdBy: string
    createdAt: Date
    updatedAt: Date
    availableDays: string[]
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    timeSlot?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availableDays?: boolean
    dailySchedules?: boolean | Application$dailySchedulesArgs<ExtArgs>
    appointment?: boolean | Application$appointmentArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    timeSlot?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availableDays?: boolean
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    name?: boolean
    timeSlot?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availableDays?: boolean
  }

  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailySchedules?: boolean | Application$dailySchedulesArgs<ExtArgs>
    appointment?: boolean | Application$appointmentArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      dailySchedules: Prisma.$DailySchedulePayload<ExtArgs>[]
      appointment: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      timeSlot: string
      createdBy: string
      createdAt: Date
      updatedAt: Date
      availableDays: string[]
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApplicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
    **/
    create<T extends ApplicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ApplicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dailySchedules<T extends Application$dailySchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Application$dailySchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'findMany'> | Null>;

    appointment<T extends Application$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Application$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Application model
   */ 
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly name: FieldRef<"Application", 'String'>
    readonly timeSlot: FieldRef<"Application", 'String'>
    readonly createdBy: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
    readonly availableDays: FieldRef<"Application", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
  }

  /**
   * Application.dailySchedules
   */
  export type Application$dailySchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    where?: DailyScheduleWhereInput
    orderBy?: DailyScheduleOrderByWithRelationInput | DailyScheduleOrderByWithRelationInput[]
    cursor?: DailyScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyScheduleScalarFieldEnum | DailyScheduleScalarFieldEnum[]
  }

  /**
   * Application.appointment
   */
  export type Application$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model DailySchedule
   */

  export type AggregateDailySchedule = {
    _count: DailyScheduleCountAggregateOutputType | null
    _min: DailyScheduleMinAggregateOutputType | null
    _max: DailyScheduleMaxAggregateOutputType | null
  }

  export type DailyScheduleMinAggregateOutputType = {
    id: string | null
    day: string | null
    startTime: string | null
    endTime: string | null
    applicationId: string | null
  }

  export type DailyScheduleMaxAggregateOutputType = {
    id: string | null
    day: string | null
    startTime: string | null
    endTime: string | null
    applicationId: string | null
  }

  export type DailyScheduleCountAggregateOutputType = {
    id: number
    day: number
    startTime: number
    endTime: number
    applicationId: number
    _all: number
  }


  export type DailyScheduleMinAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    endTime?: true
    applicationId?: true
  }

  export type DailyScheduleMaxAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    endTime?: true
    applicationId?: true
  }

  export type DailyScheduleCountAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    endTime?: true
    applicationId?: true
    _all?: true
  }

  export type DailyScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySchedule to aggregate.
     */
    where?: DailyScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySchedules to fetch.
     */
    orderBy?: DailyScheduleOrderByWithRelationInput | DailyScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailySchedules
    **/
    _count?: true | DailyScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyScheduleMaxAggregateInputType
  }

  export type GetDailyScheduleAggregateType<T extends DailyScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateDailySchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailySchedule[P]>
      : GetScalarType<T[P], AggregateDailySchedule[P]>
  }




  export type DailyScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyScheduleWhereInput
    orderBy?: DailyScheduleOrderByWithAggregationInput | DailyScheduleOrderByWithAggregationInput[]
    by: DailyScheduleScalarFieldEnum[] | DailyScheduleScalarFieldEnum
    having?: DailyScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyScheduleCountAggregateInputType | true
    _min?: DailyScheduleMinAggregateInputType
    _max?: DailyScheduleMaxAggregateInputType
  }

  export type DailyScheduleGroupByOutputType = {
    id: string
    day: string
    startTime: string
    endTime: string
    applicationId: string
    _count: DailyScheduleCountAggregateOutputType | null
    _min: DailyScheduleMinAggregateOutputType | null
    _max: DailyScheduleMaxAggregateOutputType | null
  }

  type GetDailyScheduleGroupByPayload<T extends DailyScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], DailyScheduleGroupByOutputType[P]>
        }
      >
    >


  export type DailyScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    applicationId?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySchedule"]>

  export type DailyScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    applicationId?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySchedule"]>

  export type DailyScheduleSelectScalar = {
    id?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    applicationId?: boolean
  }

  export type DailyScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type DailyScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $DailySchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailySchedule"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      day: string
      startTime: string
      endTime: string
      applicationId: string
    }, ExtArgs["result"]["dailySchedule"]>
    composites: {}
  }

  type DailyScheduleGetPayload<S extends boolean | null | undefined | DailyScheduleDefaultArgs> = $Result.GetResult<Prisma.$DailySchedulePayload, S>

  type DailyScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyScheduleCountAggregateInputType | true
    }

  export interface DailyScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailySchedule'], meta: { name: 'DailySchedule' } }
    /**
     * Find zero or one DailySchedule that matches the filter.
     * @param {DailyScheduleFindUniqueArgs} args - Arguments to find a DailySchedule
     * @example
     * // Get one DailySchedule
     * const dailySchedule = await prisma.dailySchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DailyScheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DailyScheduleFindUniqueArgs<ExtArgs>>
    ): Prisma__DailyScheduleClient<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DailySchedule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyScheduleFindUniqueOrThrowArgs} args - Arguments to find a DailySchedule
     * @example
     * // Get one DailySchedule
     * const dailySchedule = await prisma.dailySchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DailyScheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyScheduleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DailyScheduleClient<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DailySchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScheduleFindFirstArgs} args - Arguments to find a DailySchedule
     * @example
     * // Get one DailySchedule
     * const dailySchedule = await prisma.dailySchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DailyScheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyScheduleFindFirstArgs<ExtArgs>>
    ): Prisma__DailyScheduleClient<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DailySchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScheduleFindFirstOrThrowArgs} args - Arguments to find a DailySchedule
     * @example
     * // Get one DailySchedule
     * const dailySchedule = await prisma.dailySchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DailyScheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyScheduleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DailyScheduleClient<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DailySchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailySchedules
     * const dailySchedules = await prisma.dailySchedule.findMany()
     * 
     * // Get first 10 DailySchedules
     * const dailySchedules = await prisma.dailySchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyScheduleWithIdOnly = await prisma.dailySchedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DailyScheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyScheduleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DailySchedule.
     * @param {DailyScheduleCreateArgs} args - Arguments to create a DailySchedule.
     * @example
     * // Create one DailySchedule
     * const DailySchedule = await prisma.dailySchedule.create({
     *   data: {
     *     // ... data to create a DailySchedule
     *   }
     * })
     * 
    **/
    create<T extends DailyScheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyScheduleCreateArgs<ExtArgs>>
    ): Prisma__DailyScheduleClient<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DailySchedules.
     * @param {DailyScheduleCreateManyArgs} args - Arguments to create many DailySchedules.
     * @example
     * // Create many DailySchedules
     * const dailySchedule = await prisma.dailySchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DailyScheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyScheduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailySchedules and returns the data saved in the database.
     * @param {DailyScheduleCreateManyAndReturnArgs} args - Arguments to create many DailySchedules.
     * @example
     * // Create many DailySchedules
     * const dailySchedule = await prisma.dailySchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailySchedules and only return the `id`
     * const dailyScheduleWithIdOnly = await prisma.dailySchedule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends DailyScheduleCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyScheduleCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a DailySchedule.
     * @param {DailyScheduleDeleteArgs} args - Arguments to delete one DailySchedule.
     * @example
     * // Delete one DailySchedule
     * const DailySchedule = await prisma.dailySchedule.delete({
     *   where: {
     *     // ... filter to delete one DailySchedule
     *   }
     * })
     * 
    **/
    delete<T extends DailyScheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DailyScheduleDeleteArgs<ExtArgs>>
    ): Prisma__DailyScheduleClient<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DailySchedule.
     * @param {DailyScheduleUpdateArgs} args - Arguments to update one DailySchedule.
     * @example
     * // Update one DailySchedule
     * const dailySchedule = await prisma.dailySchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DailyScheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyScheduleUpdateArgs<ExtArgs>>
    ): Prisma__DailyScheduleClient<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DailySchedules.
     * @param {DailyScheduleDeleteManyArgs} args - Arguments to filter DailySchedules to delete.
     * @example
     * // Delete a few DailySchedules
     * const { count } = await prisma.dailySchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DailyScheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyScheduleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailySchedules
     * const dailySchedule = await prisma.dailySchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DailyScheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DailyScheduleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailySchedule.
     * @param {DailyScheduleUpsertArgs} args - Arguments to update or create a DailySchedule.
     * @example
     * // Update or create a DailySchedule
     * const dailySchedule = await prisma.dailySchedule.upsert({
     *   create: {
     *     // ... data to create a DailySchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailySchedule we want to update
     *   }
     * })
    **/
    upsert<T extends DailyScheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DailyScheduleUpsertArgs<ExtArgs>>
    ): Prisma__DailyScheduleClient<$Result.GetResult<Prisma.$DailySchedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DailySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScheduleCountArgs} args - Arguments to filter DailySchedules to count.
     * @example
     * // Count the number of DailySchedules
     * const count = await prisma.dailySchedule.count({
     *   where: {
     *     // ... the filter for the DailySchedules we want to count
     *   }
     * })
    **/
    count<T extends DailyScheduleCountArgs>(
      args?: Subset<T, DailyScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyScheduleAggregateArgs>(args: Subset<T, DailyScheduleAggregateArgs>): Prisma.PrismaPromise<GetDailyScheduleAggregateType<T>>

    /**
     * Group by DailySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScheduleGroupByArgs} args - Group by arguments.
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
      T extends DailyScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyScheduleGroupByArgs['orderBy'] }
        : { orderBy?: DailyScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailySchedule model
   */
  readonly fields: DailyScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailySchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DailySchedule model
   */ 
  interface DailyScheduleFieldRefs {
    readonly id: FieldRef<"DailySchedule", 'String'>
    readonly day: FieldRef<"DailySchedule", 'String'>
    readonly startTime: FieldRef<"DailySchedule", 'String'>
    readonly endTime: FieldRef<"DailySchedule", 'String'>
    readonly applicationId: FieldRef<"DailySchedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailySchedule findUnique
   */
  export type DailyScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DailySchedule to fetch.
     */
    where: DailyScheduleWhereUniqueInput
  }

  /**
   * DailySchedule findUniqueOrThrow
   */
  export type DailyScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DailySchedule to fetch.
     */
    where: DailyScheduleWhereUniqueInput
  }

  /**
   * DailySchedule findFirst
   */
  export type DailyScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DailySchedule to fetch.
     */
    where?: DailyScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySchedules to fetch.
     */
    orderBy?: DailyScheduleOrderByWithRelationInput | DailyScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySchedules.
     */
    cursor?: DailyScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySchedules.
     */
    distinct?: DailyScheduleScalarFieldEnum | DailyScheduleScalarFieldEnum[]
  }

  /**
   * DailySchedule findFirstOrThrow
   */
  export type DailyScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DailySchedule to fetch.
     */
    where?: DailyScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySchedules to fetch.
     */
    orderBy?: DailyScheduleOrderByWithRelationInput | DailyScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySchedules.
     */
    cursor?: DailyScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySchedules.
     */
    distinct?: DailyScheduleScalarFieldEnum | DailyScheduleScalarFieldEnum[]
  }

  /**
   * DailySchedule findMany
   */
  export type DailyScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DailySchedules to fetch.
     */
    where?: DailyScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySchedules to fetch.
     */
    orderBy?: DailyScheduleOrderByWithRelationInput | DailyScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailySchedules.
     */
    cursor?: DailyScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySchedules.
     */
    skip?: number
    distinct?: DailyScheduleScalarFieldEnum | DailyScheduleScalarFieldEnum[]
  }

  /**
   * DailySchedule create
   */
  export type DailyScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a DailySchedule.
     */
    data: XOR<DailyScheduleCreateInput, DailyScheduleUncheckedCreateInput>
  }

  /**
   * DailySchedule createMany
   */
  export type DailyScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailySchedules.
     */
    data: DailyScheduleCreateManyInput | DailyScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailySchedule createManyAndReturn
   */
  export type DailyScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailySchedules.
     */
    data: DailyScheduleCreateManyInput | DailyScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailySchedule update
   */
  export type DailyScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a DailySchedule.
     */
    data: XOR<DailyScheduleUpdateInput, DailyScheduleUncheckedUpdateInput>
    /**
     * Choose, which DailySchedule to update.
     */
    where: DailyScheduleWhereUniqueInput
  }

  /**
   * DailySchedule updateMany
   */
  export type DailyScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailySchedules.
     */
    data: XOR<DailyScheduleUpdateManyMutationInput, DailyScheduleUncheckedUpdateManyInput>
    /**
     * Filter which DailySchedules to update
     */
    where?: DailyScheduleWhereInput
  }

  /**
   * DailySchedule upsert
   */
  export type DailyScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the DailySchedule to update in case it exists.
     */
    where: DailyScheduleWhereUniqueInput
    /**
     * In case the DailySchedule found by the `where` argument doesn't exist, create a new DailySchedule with this data.
     */
    create: XOR<DailyScheduleCreateInput, DailyScheduleUncheckedCreateInput>
    /**
     * In case the DailySchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyScheduleUpdateInput, DailyScheduleUncheckedUpdateInput>
  }

  /**
   * DailySchedule delete
   */
  export type DailyScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
    /**
     * Filter which DailySchedule to delete.
     */
    where: DailyScheduleWhereUniqueInput
  }

  /**
   * DailySchedule deleteMany
   */
  export type DailyScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySchedules to delete
     */
    where?: DailyScheduleWhereInput
  }

  /**
   * DailySchedule without action
   */
  export type DailyScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySchedule
     */
    select?: DailyScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    applicationId: string | null
    status: string | null
    statusMessage: string | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    applicationId: string | null
    status: string | null
    statusMessage: string | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    date: number
    startTime: number
    endTime: number
    applicationId: number
    status: number
    statusMessage: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    applicationId?: true
    status?: true
    statusMessage?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    applicationId?: true
    status?: true
    statusMessage?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    applicationId?: true
    status?: true
    statusMessage?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    date: Date
    startTime: string
    endTime: string
    applicationId: string
    status: string
    statusMessage: string | null
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    applicationId?: boolean
    status?: boolean
    statusMessage?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    applicationId?: boolean
    status?: boolean
    statusMessage?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    applicationId?: boolean
    status?: boolean
    statusMessage?: boolean
  }

  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      startTime: string
      endTime: string
      applicationId: string
      status: string
      statusMessage: string | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppointmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppointmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppointmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
    **/
    create<T extends AppointmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AppointmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
    **/
    delete<T extends AppointmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppointmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppointmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppointmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
    **/
    upsert<T extends AppointmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>
    ): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Appointment model
   */ 
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly startTime: FieldRef<"Appointment", 'String'>
    readonly endTime: FieldRef<"Appointment", 'String'>
    readonly applicationId: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'String'>
    readonly statusMessage: FieldRef<"Appointment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
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


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    timeSlot: 'timeSlot',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    availableDays: 'availableDays'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const DailyScheduleScalarFieldEnum: {
    id: 'id',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime',
    applicationId: 'applicationId'
  };

  export type DailyScheduleScalarFieldEnum = (typeof DailyScheduleScalarFieldEnum)[keyof typeof DailyScheduleScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    applicationId: 'applicationId',
    status: 'status',
    statusMessage: 'statusMessage'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    timeSlot?: StringFilter<"Application"> | string
    createdBy?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    availableDays?: StringNullableListFilter<"Application">
    dailySchedules?: DailyScheduleListRelationFilter
    appointment?: AppointmentListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    timeSlot?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availableDays?: SortOrder
    dailySchedules?: DailyScheduleOrderByRelationAggregateInput
    appointment?: AppointmentOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    name?: StringFilter<"Application"> | string
    timeSlot?: StringFilter<"Application"> | string
    createdBy?: StringFilter<"Application"> | string
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    availableDays?: StringNullableListFilter<"Application">
    dailySchedules?: DailyScheduleListRelationFilter
    appointment?: AppointmentListRelationFilter
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    timeSlot?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availableDays?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    name?: StringWithAggregatesFilter<"Application"> | string
    timeSlot?: StringWithAggregatesFilter<"Application"> | string
    createdBy?: StringWithAggregatesFilter<"Application"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    availableDays?: StringNullableListFilter<"Application">
  }

  export type DailyScheduleWhereInput = {
    AND?: DailyScheduleWhereInput | DailyScheduleWhereInput[]
    OR?: DailyScheduleWhereInput[]
    NOT?: DailyScheduleWhereInput | DailyScheduleWhereInput[]
    id?: StringFilter<"DailySchedule"> | string
    day?: StringFilter<"DailySchedule"> | string
    startTime?: StringFilter<"DailySchedule"> | string
    endTime?: StringFilter<"DailySchedule"> | string
    applicationId?: StringFilter<"DailySchedule"> | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
  }

  export type DailyScheduleOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
    application?: ApplicationOrderByWithRelationInput
  }

  export type DailyScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyScheduleWhereInput | DailyScheduleWhereInput[]
    OR?: DailyScheduleWhereInput[]
    NOT?: DailyScheduleWhereInput | DailyScheduleWhereInput[]
    day?: StringFilter<"DailySchedule"> | string
    startTime?: StringFilter<"DailySchedule"> | string
    endTime?: StringFilter<"DailySchedule"> | string
    applicationId?: StringFilter<"DailySchedule"> | string
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
  }, "id">

  export type DailyScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
    _count?: DailyScheduleCountOrderByAggregateInput
    _max?: DailyScheduleMaxOrderByAggregateInput
    _min?: DailyScheduleMinOrderByAggregateInput
  }

  export type DailyScheduleScalarWhereWithAggregatesInput = {
    AND?: DailyScheduleScalarWhereWithAggregatesInput | DailyScheduleScalarWhereWithAggregatesInput[]
    OR?: DailyScheduleScalarWhereWithAggregatesInput[]
    NOT?: DailyScheduleScalarWhereWithAggregatesInput | DailyScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailySchedule"> | string
    day?: StringWithAggregatesFilter<"DailySchedule"> | string
    startTime?: StringWithAggregatesFilter<"DailySchedule"> | string
    endTime?: StringWithAggregatesFilter<"DailySchedule"> | string
    applicationId?: StringWithAggregatesFilter<"DailySchedule"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    applicationId?: StringFilter<"Appointment"> | string
    status?: StringFilter<"Appointment"> | string
    statusMessage?: StringNullableFilter<"Appointment"> | string | null
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    statusMessage?: SortOrderInput | SortOrder
    application?: ApplicationOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    applicationId?: StringFilter<"Appointment"> | string
    status?: StringFilter<"Appointment"> | string
    statusMessage?: StringNullableFilter<"Appointment"> | string | null
    application?: XOR<ApplicationRelationFilter, ApplicationWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    statusMessage?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    startTime?: StringWithAggregatesFilter<"Appointment"> | string
    endTime?: StringWithAggregatesFilter<"Appointment"> | string
    applicationId?: StringWithAggregatesFilter<"Appointment"> | string
    status?: StringWithAggregatesFilter<"Appointment"> | string
    statusMessage?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
  }

  export type ApplicationCreateInput = {
    id?: string
    name: string
    timeSlot: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availableDays?: ApplicationCreateavailableDaysInput | string[]
    dailySchedules?: DailyScheduleCreateNestedManyWithoutApplicationInput
    appointment?: AppointmentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    name: string
    timeSlot: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availableDays?: ApplicationCreateavailableDaysInput | string[]
    dailySchedules?: DailyScheduleUncheckedCreateNestedManyWithoutApplicationInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableDays?: ApplicationUpdateavailableDaysInput | string[]
    dailySchedules?: DailyScheduleUpdateManyWithoutApplicationNestedInput
    appointment?: AppointmentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableDays?: ApplicationUpdateavailableDaysInput | string[]
    dailySchedules?: DailyScheduleUncheckedUpdateManyWithoutApplicationNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    name: string
    timeSlot: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availableDays?: ApplicationCreateavailableDaysInput | string[]
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableDays?: ApplicationUpdateavailableDaysInput | string[]
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableDays?: ApplicationUpdateavailableDaysInput | string[]
  }

  export type DailyScheduleCreateInput = {
    id?: string
    day: string
    startTime: string
    endTime: string
    application: ApplicationCreateNestedOneWithoutDailySchedulesInput
  }

  export type DailyScheduleUncheckedCreateInput = {
    id?: string
    day: string
    startTime: string
    endTime: string
    applicationId: string
  }

  export type DailyScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    application?: ApplicationUpdateOneRequiredWithoutDailySchedulesNestedInput
  }

  export type DailyScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyScheduleCreateManyInput = {
    id?: string
    day: string
    startTime: string
    endTime: string
    applicationId: string
  }

  export type DailyScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DailyScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status: string
    statusMessage?: string | null
    application: ApplicationCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    applicationId: string
    status: string
    statusMessage?: string | null
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    application?: ApplicationUpdateOneRequiredWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    applicationId: string
    status: string
    statusMessage?: string | null
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DailyScheduleListRelationFilter = {
    every?: DailyScheduleWhereInput
    some?: DailyScheduleWhereInput
    none?: DailyScheduleWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type DailyScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timeSlot?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availableDays?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timeSlot?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timeSlot?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ApplicationRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type DailyScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
  }

  export type DailyScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
  }

  export type DailyScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    statusMessage?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    statusMessage?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    statusMessage?: SortOrder
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

  export type ApplicationCreateavailableDaysInput = {
    set: string[]
  }

  export type DailyScheduleCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DailyScheduleCreateWithoutApplicationInput, DailyScheduleUncheckedCreateWithoutApplicationInput> | DailyScheduleCreateWithoutApplicationInput[] | DailyScheduleUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DailyScheduleCreateOrConnectWithoutApplicationInput | DailyScheduleCreateOrConnectWithoutApplicationInput[]
    createMany?: DailyScheduleCreateManyApplicationInputEnvelope
    connect?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutApplicationInput = {
    create?: XOR<AppointmentCreateWithoutApplicationInput, AppointmentUncheckedCreateWithoutApplicationInput> | AppointmentCreateWithoutApplicationInput[] | AppointmentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutApplicationInput | AppointmentCreateOrConnectWithoutApplicationInput[]
    createMany?: AppointmentCreateManyApplicationInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DailyScheduleUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DailyScheduleCreateWithoutApplicationInput, DailyScheduleUncheckedCreateWithoutApplicationInput> | DailyScheduleCreateWithoutApplicationInput[] | DailyScheduleUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DailyScheduleCreateOrConnectWithoutApplicationInput | DailyScheduleCreateOrConnectWithoutApplicationInput[]
    createMany?: DailyScheduleCreateManyApplicationInputEnvelope
    connect?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<AppointmentCreateWithoutApplicationInput, AppointmentUncheckedCreateWithoutApplicationInput> | AppointmentCreateWithoutApplicationInput[] | AppointmentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutApplicationInput | AppointmentCreateOrConnectWithoutApplicationInput[]
    createMany?: AppointmentCreateManyApplicationInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicationUpdateavailableDaysInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DailyScheduleUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DailyScheduleCreateWithoutApplicationInput, DailyScheduleUncheckedCreateWithoutApplicationInput> | DailyScheduleCreateWithoutApplicationInput[] | DailyScheduleUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DailyScheduleCreateOrConnectWithoutApplicationInput | DailyScheduleCreateOrConnectWithoutApplicationInput[]
    upsert?: DailyScheduleUpsertWithWhereUniqueWithoutApplicationInput | DailyScheduleUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DailyScheduleCreateManyApplicationInputEnvelope
    set?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
    disconnect?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
    delete?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
    connect?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
    update?: DailyScheduleUpdateWithWhereUniqueWithoutApplicationInput | DailyScheduleUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DailyScheduleUpdateManyWithWhereWithoutApplicationInput | DailyScheduleUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DailyScheduleScalarWhereInput | DailyScheduleScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<AppointmentCreateWithoutApplicationInput, AppointmentUncheckedCreateWithoutApplicationInput> | AppointmentCreateWithoutApplicationInput[] | AppointmentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutApplicationInput | AppointmentCreateOrConnectWithoutApplicationInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutApplicationInput | AppointmentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: AppointmentCreateManyApplicationInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutApplicationInput | AppointmentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutApplicationInput | AppointmentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DailyScheduleUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DailyScheduleCreateWithoutApplicationInput, DailyScheduleUncheckedCreateWithoutApplicationInput> | DailyScheduleCreateWithoutApplicationInput[] | DailyScheduleUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DailyScheduleCreateOrConnectWithoutApplicationInput | DailyScheduleCreateOrConnectWithoutApplicationInput[]
    upsert?: DailyScheduleUpsertWithWhereUniqueWithoutApplicationInput | DailyScheduleUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DailyScheduleCreateManyApplicationInputEnvelope
    set?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
    disconnect?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
    delete?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
    connect?: DailyScheduleWhereUniqueInput | DailyScheduleWhereUniqueInput[]
    update?: DailyScheduleUpdateWithWhereUniqueWithoutApplicationInput | DailyScheduleUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DailyScheduleUpdateManyWithWhereWithoutApplicationInput | DailyScheduleUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DailyScheduleScalarWhereInput | DailyScheduleScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<AppointmentCreateWithoutApplicationInput, AppointmentUncheckedCreateWithoutApplicationInput> | AppointmentCreateWithoutApplicationInput[] | AppointmentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutApplicationInput | AppointmentCreateOrConnectWithoutApplicationInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutApplicationInput | AppointmentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: AppointmentCreateManyApplicationInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutApplicationInput | AppointmentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutApplicationInput | AppointmentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ApplicationCreateNestedOneWithoutDailySchedulesInput = {
    create?: XOR<ApplicationCreateWithoutDailySchedulesInput, ApplicationUncheckedCreateWithoutDailySchedulesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDailySchedulesInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutDailySchedulesNestedInput = {
    create?: XOR<ApplicationCreateWithoutDailySchedulesInput, ApplicationUncheckedCreateWithoutDailySchedulesInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDailySchedulesInput
    upsert?: ApplicationUpsertWithoutDailySchedulesInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutDailySchedulesInput, ApplicationUpdateWithoutDailySchedulesInput>, ApplicationUncheckedUpdateWithoutDailySchedulesInput>
  }

  export type ApplicationCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ApplicationCreateWithoutAppointmentInput, ApplicationUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAppointmentInput
    connect?: ApplicationWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ApplicationUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<ApplicationCreateWithoutAppointmentInput, ApplicationUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAppointmentInput
    upsert?: ApplicationUpsertWithoutAppointmentInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutAppointmentInput, ApplicationUpdateWithoutAppointmentInput>, ApplicationUncheckedUpdateWithoutAppointmentInput>
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

  export type DailyScheduleCreateWithoutApplicationInput = {
    id?: string
    day: string
    startTime: string
    endTime: string
  }

  export type DailyScheduleUncheckedCreateWithoutApplicationInput = {
    id?: string
    day: string
    startTime: string
    endTime: string
  }

  export type DailyScheduleCreateOrConnectWithoutApplicationInput = {
    where: DailyScheduleWhereUniqueInput
    create: XOR<DailyScheduleCreateWithoutApplicationInput, DailyScheduleUncheckedCreateWithoutApplicationInput>
  }

  export type DailyScheduleCreateManyApplicationInputEnvelope = {
    data: DailyScheduleCreateManyApplicationInput | DailyScheduleCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutApplicationInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status: string
    statusMessage?: string | null
  }

  export type AppointmentUncheckedCreateWithoutApplicationInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status: string
    statusMessage?: string | null
  }

  export type AppointmentCreateOrConnectWithoutApplicationInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutApplicationInput, AppointmentUncheckedCreateWithoutApplicationInput>
  }

  export type AppointmentCreateManyApplicationInputEnvelope = {
    data: AppointmentCreateManyApplicationInput | AppointmentCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type DailyScheduleUpsertWithWhereUniqueWithoutApplicationInput = {
    where: DailyScheduleWhereUniqueInput
    update: XOR<DailyScheduleUpdateWithoutApplicationInput, DailyScheduleUncheckedUpdateWithoutApplicationInput>
    create: XOR<DailyScheduleCreateWithoutApplicationInput, DailyScheduleUncheckedCreateWithoutApplicationInput>
  }

  export type DailyScheduleUpdateWithWhereUniqueWithoutApplicationInput = {
    where: DailyScheduleWhereUniqueInput
    data: XOR<DailyScheduleUpdateWithoutApplicationInput, DailyScheduleUncheckedUpdateWithoutApplicationInput>
  }

  export type DailyScheduleUpdateManyWithWhereWithoutApplicationInput = {
    where: DailyScheduleScalarWhereInput
    data: XOR<DailyScheduleUpdateManyMutationInput, DailyScheduleUncheckedUpdateManyWithoutApplicationInput>
  }

  export type DailyScheduleScalarWhereInput = {
    AND?: DailyScheduleScalarWhereInput | DailyScheduleScalarWhereInput[]
    OR?: DailyScheduleScalarWhereInput[]
    NOT?: DailyScheduleScalarWhereInput | DailyScheduleScalarWhereInput[]
    id?: StringFilter<"DailySchedule"> | string
    day?: StringFilter<"DailySchedule"> | string
    startTime?: StringFilter<"DailySchedule"> | string
    endTime?: StringFilter<"DailySchedule"> | string
    applicationId?: StringFilter<"DailySchedule"> | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutApplicationInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutApplicationInput, AppointmentUncheckedUpdateWithoutApplicationInput>
    create: XOR<AppointmentCreateWithoutApplicationInput, AppointmentUncheckedCreateWithoutApplicationInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutApplicationInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutApplicationInput, AppointmentUncheckedUpdateWithoutApplicationInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutApplicationInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutApplicationInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    applicationId?: StringFilter<"Appointment"> | string
    status?: StringFilter<"Appointment"> | string
    statusMessage?: StringNullableFilter<"Appointment"> | string | null
  }

  export type ApplicationCreateWithoutDailySchedulesInput = {
    id?: string
    name: string
    timeSlot: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availableDays?: ApplicationCreateavailableDaysInput | string[]
    appointment?: AppointmentCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutDailySchedulesInput = {
    id?: string
    name: string
    timeSlot: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availableDays?: ApplicationCreateavailableDaysInput | string[]
    appointment?: AppointmentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutDailySchedulesInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutDailySchedulesInput, ApplicationUncheckedCreateWithoutDailySchedulesInput>
  }

  export type ApplicationUpsertWithoutDailySchedulesInput = {
    update: XOR<ApplicationUpdateWithoutDailySchedulesInput, ApplicationUncheckedUpdateWithoutDailySchedulesInput>
    create: XOR<ApplicationCreateWithoutDailySchedulesInput, ApplicationUncheckedCreateWithoutDailySchedulesInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutDailySchedulesInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutDailySchedulesInput, ApplicationUncheckedUpdateWithoutDailySchedulesInput>
  }

  export type ApplicationUpdateWithoutDailySchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableDays?: ApplicationUpdateavailableDaysInput | string[]
    appointment?: AppointmentUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutDailySchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableDays?: ApplicationUpdateavailableDaysInput | string[]
    appointment?: AppointmentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateWithoutAppointmentInput = {
    id?: string
    name: string
    timeSlot: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availableDays?: ApplicationCreateavailableDaysInput | string[]
    dailySchedules?: DailyScheduleCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutAppointmentInput = {
    id?: string
    name: string
    timeSlot: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availableDays?: ApplicationCreateavailableDaysInput | string[]
    dailySchedules?: DailyScheduleUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutAppointmentInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutAppointmentInput, ApplicationUncheckedCreateWithoutAppointmentInput>
  }

  export type ApplicationUpsertWithoutAppointmentInput = {
    update: XOR<ApplicationUpdateWithoutAppointmentInput, ApplicationUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ApplicationCreateWithoutAppointmentInput, ApplicationUncheckedCreateWithoutAppointmentInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutAppointmentInput, ApplicationUncheckedUpdateWithoutAppointmentInput>
  }

  export type ApplicationUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableDays?: ApplicationUpdateavailableDaysInput | string[]
    dailySchedules?: DailyScheduleUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableDays?: ApplicationUpdateavailableDaysInput | string[]
    dailySchedules?: DailyScheduleUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type DailyScheduleCreateManyApplicationInput = {
    id?: string
    day: string
    startTime: string
    endTime: string
  }

  export type AppointmentCreateManyApplicationInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    status: string
    statusMessage?: string | null
  }

  export type DailyScheduleUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DailyScheduleUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type DailyScheduleUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ApplicationCountOutputTypeDefaultArgs instead
     */
    export type ApplicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationDefaultArgs instead
     */
    export type ApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyScheduleDefaultArgs instead
     */
    export type DailyScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppointmentDefaultArgs instead
     */
    export type AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppointmentDefaultArgs<ExtArgs>

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