import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  me: User;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createUser: User;
  addAddress: Address;
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationAddAddressArgs = {
  userId: Scalars['ID'];
  address: AddressInput;
  isDefault: Scalars['Boolean'];
};

export type UserInput = {
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  paymentMethod?: Maybe<PaymentMethodInput>;
};

export type PaymentMethodInput = {
  billingAddress: AddressInput;
};

export type AddressInput = {
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  country: Country;
  zip: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<Maybe<Address>>>;
  orders?: Maybe<Array<Maybe<Order>>>;
  wishlists?: Maybe<Array<Maybe<Wishlist>>>;
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
};

export type Wishlist = {
   __typename?: 'Wishlist';
  id: Scalars['ID'];
  name: Scalars['String'];
  products?: Maybe<Array<Maybe<Product>>>;
};

export type PaymentMethod = {
   __typename?: 'PaymentMethod';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: PaymentType;
  billingAddress?: Maybe<Address>;
  /** If this is a default payment method for user */
  default?: Maybe<Scalars['Boolean']>;
};

export type PaymentType = PaymentTypeCard | PaymentTypePayPal;

export type PaymentTypePayPal = {
   __typename?: 'PaymentTypePayPal';
  lastFourDigits: Scalars['String'];
};

export type PaymentTypeCard = {
   __typename?: 'PaymentTypeCard';
  lastFourDigits: Scalars['String'];
  expDate: Scalars['String'];
  type?: Maybe<CardType>;
  network?: Maybe<CardProvider>;
  bank?: Maybe<Bank>;
};

export enum CardType {
  Debit = 'DEBIT',
  Credit = 'CREDIT'
}

export enum CardProvider {
  Visa = 'VISA',
  Mastercard = 'MASTERCARD',
  Amex = 'AMEX',
  Discover = 'DISCOVER'
}

export enum Bank {
  JpmorganChase = 'JPMORGAN_CHASE',
  Amex = 'AMEX',
  Bofa = 'BOFA',
  Discover = 'DISCOVER'
}

export type Address = {
   __typename?: 'Address';
  id: Scalars['ID'];
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  country: Country;
  zip: Scalars['String'];
  /** If this is a default selected address for user */
  default?: Maybe<Scalars['Boolean']>;
};

export enum Country {
  Us = 'US',
  Ca = 'CA',
  Gb = 'GB'
}

export type Order = {
   __typename?: 'Order';
  id?: Maybe<Scalars['ID']>;
  products: Array<Maybe<Product>>;
  shipmentAddress?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  orderedAtMillis?: Maybe<Scalars['Int']>;
  status?: Maybe<OrderStatus>;
};

export enum OrderStatus {
  Paid = 'PAID',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED',
  Cancelled = 'CANCELLED',
  Returned = 'RETURNED'
}

export type Product = {
   __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Mutation: ResolverTypeWrapper<{}>,
  UserInput: UserInput,
  PaymentMethodInput: PaymentMethodInput,
  AddressInput: AddressInput,
  User: ResolverTypeWrapper<User>,
  Wishlist: ResolverTypeWrapper<Wishlist>,
  PaymentMethod: ResolverTypeWrapper<Omit<PaymentMethod, 'type'> & { type: ResolversTypes['PaymentType'] }>,
  PaymentType: ResolversTypes['PaymentTypeCard'] | ResolversTypes['PaymentTypePayPal'],
  PaymentTypePayPal: ResolverTypeWrapper<PaymentTypePayPal>,
  PaymentTypeCard: ResolverTypeWrapper<PaymentTypeCard>,
  CardType: CardType,
  CardProvider: CardProvider,
  Bank: Bank,
  Address: ResolverTypeWrapper<Address>,
  Country: Country,
  Order: ResolverTypeWrapper<Order>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  OrderStatus: OrderStatus,
  Product: ResolverTypeWrapper<Product>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Query: {},
  ID: Scalars['ID'],
  Mutation: {},
  UserInput: UserInput,
  PaymentMethodInput: PaymentMethodInput,
  AddressInput: AddressInput,
  User: User,
  Wishlist: Wishlist,
  PaymentMethod: Omit<PaymentMethod, 'type'> & { type: ResolversParentTypes['PaymentType'] },
  PaymentType: ResolversParentTypes['PaymentTypeCard'] | ResolversParentTypes['PaymentTypePayPal'],
  PaymentTypePayPal: PaymentTypePayPal,
  PaymentTypeCard: PaymentTypeCard,
  CardType: CardType,
  CardProvider: CardProvider,
  Bank: Bank,
  Address: Address,
  Country: Country,
  Order: Order,
  Int: Scalars['Int'],
  OrderStatus: OrderStatus,
  Product: Product,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>,
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'userInput'>>,
  addAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<MutationAddAddressArgs, 'userId' | 'address' | 'isDefault'>>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>,
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>,
  wishlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Wishlist']>>>, ParentType, ContextType>,
  paymentMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentMethod']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type WishlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wishlist'] = ResolversParentTypes['Wishlist']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['PaymentType'], ParentType, ContextType>,
  billingAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>,
  default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PaymentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentType'] = ResolversParentTypes['PaymentType']> = {
  __resolveType: TypeResolveFn<'PaymentTypeCard' | 'PaymentTypePayPal', ParentType, ContextType>
};

export type PaymentTypePayPalResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentTypePayPal'] = ResolversParentTypes['PaymentTypePayPal']> = {
  lastFourDigits?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PaymentTypeCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentTypeCard'] = ResolversParentTypes['PaymentTypeCard']> = {
  lastFourDigits?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['CardType']>, ParentType, ContextType>,
  network?: Resolver<Maybe<ResolversTypes['CardProvider']>, ParentType, ContextType>,
  bank?: Resolver<Maybe<ResolversTypes['Bank']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  addressLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>,
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>,
  shipmentAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>,
  billingAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>,
  orderedAtMillis?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['OrderStatus']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  Wishlist?: WishlistResolvers<ContextType>,
  PaymentMethod?: PaymentMethodResolvers<ContextType>,
  PaymentType?: PaymentTypeResolvers,
  PaymentTypePayPal?: PaymentTypePayPalResolvers<ContextType>,
  PaymentTypeCard?: PaymentTypeCardResolvers<ContextType>,
  Address?: AddressResolvers<ContextType>,
  Order?: OrderResolvers<ContextType>,
  Product?: ProductResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
