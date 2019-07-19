import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type HvacValue = {
  __typename?: "HvacValue";
  _id: Scalars["String"];
  source: HvacValueSource;
  temperatureValue: Scalars["Float"];
  humidityValue: Scalars["Float"];
  dateTime: Scalars["Float"];
};

export enum HvacValueColumns {
  Id = "_id",
  Source = "source",
  TemperatureValue = "temperatureValue",
  HumidityValue = "humidityValue",
  DateTime = "dateTime"
}

export type HvacValueInput = {
  source: HvacValueSource;
  temperatureValue: Scalars["Float"];
  humidityValue: Scalars["Float"];
  dateTime: Scalars["Float"];
};

export enum HvacValueSource {
  Thermostat = "THERMOSTAT",
  Kitchen = "KITCHEN",
  Living = "LIVING",
  Dining = "DINING",
  Bedroom1 = "BEDROOM1",
  Bedroom2 = "BEDROOM2",
  Bedroom3 = "BEDROOM3",
  Office = "OFFICE",
  Garage = "GARAGE",
  Master = "MASTER"
}

export type Mutation = {
  __typename?: "Mutation";
  addHvacValue?: Maybe<HvacValue>;
};

export type MutationAddHvacValueArgs = {
  input?: Maybe<HvacValueInput>;
};

export type Query = {
  __typename?: "Query";
  hvacValues?: Maybe<Array<HvacValue>>;
};

export type QueryHvacValuesArgs = {
  source?: Maybe<HvacValueSource>;
  startDate?: Maybe<Scalars["Float"]>;
  endDate?: Maybe<Scalars["Float"]>;
  orderBy?: Maybe<Array<HvacValueColumns>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  HvacValueSource: HvacValueSource;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  HvacValueColumns: HvacValueColumns;
  HvacValue: ResolverTypeWrapper<HvacValue>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Mutation: ResolverTypeWrapper<{}>;
  HvacValueInput: HvacValueInput;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  HvacValueSource: HvacValueSource;
  Float: Scalars["Float"];
  HvacValueColumns: HvacValueColumns;
  HvacValue: HvacValue;
  String: Scalars["String"];
  Mutation: {};
  HvacValueInput: HvacValueInput;
  Boolean: Scalars["Boolean"];
};

export type HvacValueResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["HvacValue"]
> = {
  _id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  source?: Resolver<ResolversTypes["HvacValueSource"], ParentType, ContextType>;
  temperatureValue?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  humidityValue?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  dateTime?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Mutation"]
> = {
  addHvacValue?: Resolver<
    Maybe<ResolversTypes["HvacValue"]>,
    ParentType,
    ContextType,
    MutationAddHvacValueArgs
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Query"]
> = {
  hvacValues?: Resolver<
    Maybe<Array<ResolversTypes["HvacValue"]>>,
    ParentType,
    ContextType,
    QueryHvacValuesArgs
  >;
};

export type Resolvers<ContextType = any> = {
  HvacValue?: HvacValueResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;