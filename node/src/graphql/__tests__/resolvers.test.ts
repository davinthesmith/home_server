import resolvers from '../resolvers';

describe('Root resolvers', () => {
  it('should export resolvers', () => {
    expect(typeof resolvers.Query).toBe('object');
    expect(typeof resolvers.Mutation).toBe('object');
  });
});