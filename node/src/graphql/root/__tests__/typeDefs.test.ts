import typeDefs from '../typeDefs';

describe('Root typeDefs', () => {
  it('should export GraphQL Type Definitions', () => {
    expect(typeDefs.kind).toBe('Document');
  })
})