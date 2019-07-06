
exports.up = async db => {
  await db.schema.alterTable('hvac_values', table => {
    table.bigInteger('dateTime').alter();
    table.unique(['source', 'dateTime']);
  });
};

exports.down = async db => {
  await db.schema.alterTable('hvac_values', table => {
    table.float('dateTime').alter();
    table.dropUnique(['source', 'dateTime']);
  });
};
