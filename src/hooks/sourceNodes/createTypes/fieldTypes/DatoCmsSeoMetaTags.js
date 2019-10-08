module.exports = ({ entitiesRepo, actions, schema }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'DatoCmsTextNode',
      extensions: { infer: false },
      fields: {},
      interfaces: [`Node`],
    }),
  ]);
}
