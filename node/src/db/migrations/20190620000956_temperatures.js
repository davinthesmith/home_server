exports.up = async db => {
  await db.raw('create extension if not exists "uuid-ossp"');
  await db.schema.createTable('temperatures', table => {
    table
      .uuid('_id')
      .defaultTo(db.raw('uuid_generate_v4()'))
      .notNullable()
      .primary();
    table.enu('source', [
      'THERMOSTAT',
      'KITCHEN',
      'LIVING',
      'DINING',
      'BEDROOM1',
      'BEDROOM2',
      'BEDROOM3',
      'OFFICE',
      'GARAGE',
      'MASTER'
    ]).notNullable();
    table.float('value').notNullable();
    table.float('dateTime').notNullable();
  });
};

exports.down = async db => {
  await db.schema.dropTableIfExists('temperatures');
};

exports.configuration = { transaction: true };