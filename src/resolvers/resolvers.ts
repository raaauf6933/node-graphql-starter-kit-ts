// import { Resolvers } from 'src/__generated__/resolvers-types';

import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import { DateScalar, TimeScalar, DateTimeScalar } from 'graphql-date-scalars';

export const resolvers = {
  Upload: GraphQLUpload,
  DateTime: DateTimeScalar,
  Time: TimeScalar,
  Date: DateScalar,
};
