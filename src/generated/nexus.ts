/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../context"
import * as photon from "@prisma/photon"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CommentCreateInput: { // input type
    author: NexusGenInputs['UserCreateOneWithoutAuthorInput']; // UserCreateOneWithoutAuthorInput!
    content: string; // String!
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    post: NexusGenInputs['PostCreateOneWithoutPostInput']; // PostCreateOneWithoutPostInput!
    updatedAt?: any | null; // DateTime
  }
  CommentCreateManyWithoutCommentsInput: { // input type
    connect?: NexusGenInputs['CommentWhereUniqueInput'][] | null; // [CommentWhereUniqueInput!]
    create?: NexusGenInputs['CommentCreateWithoutPostInput'][] | null; // [CommentCreateWithoutPostInput!]
  }
  CommentCreateWithoutPostInput: { // input type
    author: NexusGenInputs['UserCreateOneWithoutAuthorInput']; // UserCreateOneWithoutAuthorInput!
    content: string; // String!
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    updatedAt?: any | null; // DateTime
  }
  CommentWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  PostCreateManyWithoutPostsInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
  }
  PostCreateOneWithoutPostInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
    create?: NexusGenInputs['PostCreateWithoutCommentsInput'] | null; // PostCreateWithoutCommentsInput
  }
  PostCreateWithoutAuthorInput: { // input type
    comments?: NexusGenInputs['CommentCreateManyWithoutCommentsInput'] | null; // CommentCreateManyWithoutCommentsInput
    content?: string | null; // String
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    published?: boolean | null; // Boolean
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  PostCreateWithoutCommentsInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutAuthorInput'] | null; // UserCreateOneWithoutAuthorInput
    content?: string | null; // String
    createdAt?: any | null; // DateTime
    id?: string | null; // ID
    published?: boolean | null; // Boolean
    title: string; // String!
    updatedAt?: any | null; // DateTime
  }
  PostWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    comments?: NexusGenInputs['CommentCreateManyWithoutCommentsInput'] | null; // CommentCreateManyWithoutCommentsInput
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutPostsInput'] | null; // PostCreateManyWithoutPostsInput
  }
  UserCreateOneWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutCommentsInput'] | null; // UserCreateWithoutCommentsInput
  }
  UserCreateWithoutCommentsInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutPostsInput'] | null; // PostCreateManyWithoutPostsInput
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Comment: photon.Comment;
  Mutation: {};
  Post: photon.Post;
  Query: {};
  User: photon.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CommentCreateInput: NexusGenInputs['CommentCreateInput'];
  CommentCreateManyWithoutCommentsInput: NexusGenInputs['CommentCreateManyWithoutCommentsInput'];
  CommentCreateWithoutPostInput: NexusGenInputs['CommentCreateWithoutPostInput'];
  CommentWhereUniqueInput: NexusGenInputs['CommentWhereUniqueInput'];
  PostCreateManyWithoutPostsInput: NexusGenInputs['PostCreateManyWithoutPostsInput'];
  PostCreateOneWithoutPostInput: NexusGenInputs['PostCreateOneWithoutPostInput'];
  PostCreateWithoutAuthorInput: NexusGenInputs['PostCreateWithoutAuthorInput'];
  PostCreateWithoutCommentsInput: NexusGenInputs['PostCreateWithoutCommentsInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreateOneWithoutAuthorInput: NexusGenInputs['UserCreateOneWithoutAuthorInput'];
  UserCreateWithoutCommentsInput: NexusGenInputs['UserCreateWithoutCommentsInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Comment: { // field return type
    author: NexusGenRootTypes['User']; // User!
    content: string; // String!
    createdAt: any; // DateTime!
    id: string; // ID!
    updatedAt: any; // DateTime!
  }
  Mutation: { // field return type
    createComment: NexusGenRootTypes['Comment']; // Comment!
    createDraft: NexusGenRootTypes['Post']; // Post!
    deleteComment: NexusGenRootTypes['Comment'] | null; // Comment
    deleteOnePost: NexusGenRootTypes['Post'] | null; // Post
    publish: NexusGenRootTypes['Post'] | null; // Post
    signupUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  Query: { // field return type
    comment: NexusGenRootTypes['Comment'] | null; // Comment
    comments: NexusGenRootTypes['Comment'][]; // [Comment!]!
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    filterPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    hello: string; // String!
    post: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createComment: { // args
      data: NexusGenInputs['CommentCreateInput']; // CommentCreateInput!
    }
    createDraft: { // args
      authorEmail?: string | null; // String
      content?: string | null; // String
      title: string; // String!
    }
    deleteComment: { // args
      where: NexusGenInputs['CommentWhereUniqueInput']; // CommentWhereUniqueInput!
    }
    deleteOnePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    publish: { // args
      id?: string | null; // ID
    }
    signupUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
  Query: {
    comment: { // args
      where: NexusGenInputs['CommentWhereUniqueInput']; // CommentWhereUniqueInput!
    }
    comments: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    filterPosts: { // args
      searchString?: string | null; // String
    }
    hello: { // args
      name?: string | null; // String
    }
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    posts: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Comment" | "Mutation" | "Post" | "Query" | "User";

export type NexusGenInputNames = "CommentCreateInput" | "CommentCreateManyWithoutCommentsInput" | "CommentCreateWithoutPostInput" | "CommentWhereUniqueInput" | "PostCreateManyWithoutPostsInput" | "PostCreateOneWithoutPostInput" | "PostCreateWithoutAuthorInput" | "PostCreateWithoutCommentsInput" | "PostWhereUniqueInput" | "UserCreateInput" | "UserCreateOneWithoutAuthorInput" | "UserCreateWithoutCommentsInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}