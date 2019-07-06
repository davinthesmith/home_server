
exports.up = async db => {
  await db.schema.renameTable('temperatures', 'hvac_values');
};

exports.down = async db => {
  await db.schema.renameTable('hvac_values', 'temperatures');
};
