
exports.up = async db => {
  await db.schema.alterTable('temperatures', table => {
    table.renameColumn('value', 'temperatureValue');
    table.float('humidityValue').defaultTo(-1).notNullable();
  });
};

exports.down = async db => {
  await db.schema.alterTable('temperatures', table => {
    table.renameColumn('temperatureValue', 'value');
    table.dropColumn('humidityValue');
  });
};
