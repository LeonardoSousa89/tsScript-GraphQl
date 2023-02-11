import path from 'path'
import { mergeResolvers, mergeTypeDefs }  from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const typePath=loadFilesSync(path.join(__dirname, 'modules', '**' ,'*.gql'))
const resolversPath=loadFilesSync(path.join(__dirname, 'modules', '**' ,'fraseResolvers.ts'))

const typeDefs=mergeTypeDefs(typePath)
const resolvers=mergeResolvers(resolversPath)

export default { typeDefs, resolvers  }
