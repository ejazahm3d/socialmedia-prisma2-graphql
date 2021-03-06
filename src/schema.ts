import { nexusPrismaPlugin } from 'nexus-prisma'
import { idArg, makeSchema, objectType, stringArg } from 'nexus'

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.posts({
      pagination: false,
    })
  },
})

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.title()
    t.model.content()
    t.model.published()
    t.model.author()
  },
})

const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.content()
    t.model.author()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.post({
      alias: 'post',
    })

    t.crud.comment({ alias: 'comment' })
    t.crud.comments({ alias: 'comments' })
    t.crud.posts()

    t.field('hello', {
      type: 'String',
      args: { name: 'String' },
      resolve: (_parent, { name }, ctx) => {
        return name ? `Hello ${name}` : 'Hello World'
      },
    })

    t.list.field('feed', {
      type: 'Post',
      resolve: (_parent, _args, ctx) => {
        return ctx.photon.posts.findMany({
          where: { published: true },
        })
      },
    })

    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.photon.posts.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } },
            ],
          },
        })
      },
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' })
    t.crud.deleteOnePost()

    t.crud.createOneComment({ alias: 'createComment' })
    t.crud.deleteOneComment({ alias: 'deleteComment' })

    t.field('createDraft', {
      type: 'Post',
      args: {
        title: stringArg({ nullable: false }),
        content: stringArg(),
        authorEmail: stringArg(),
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return ctx.photon.posts.create({
          data: {
            title,
            content,
            published: false,
            author: {
              connect: { email: authorEmail },
            },
          },
        })
      },
    })

    t.field('publish', {
      type: 'Post',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.photon.posts.update({
          where: { id },
          data: { published: true },
        })
      },
    })
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Post, User, Comment],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/photon',
        alias: 'photon',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
