
exports.up = async db => {
  await db.schema.alterTable('hvac_values', table => {
    table.bigInteger('dateTime').alter();
  });
};

exports.down = async db => {
  await db.schema.alterTable('hvac_values', table => {
    table.float('dateTime').ALTER();
  });
};
