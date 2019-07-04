import { router, getHandlerByRootTopic } from '..';

jest.mock('../routes', () => ({
  routes: [
    {
      topic: 'test',
      handler: jest.fn()
    },
  ]
}));

describe('MQTT:Router:index', () => {
  it('should find handler by root topic', () => {
    const thing = getHandlerByRootTopic('test');
    expect(thing).toBeDefined();
  });

  it('should route', () => {});
});