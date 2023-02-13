import path from 'path'
import { mergeResolvers, mergeTypeDefs }  from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const typeDefsPath=loadFilesSync(path.join( __dirname, 'modules', '**' ,'*.gql'))
import resolversPath from './modules/frases/fraseResolvers'

const typeDefs=mergeTypeDefs(typeDefsPath)
const resolvers=mergeResolvers(resolversPath)

export default { typeDefs, resolvers }

