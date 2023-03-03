module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define("files", {
    name: {
      type: DataTypes.ENUM(
        "transport_nak",
        "invoice",
        "package_list",
        "contract",
        "certificate",
        "extra_doc",
        "product_list",
        "prochie_doc",
        "completed_file",
        "certificate_found",
        "facture_file"
      ),
    },
    url: {
      type: DataTypes.STRING,
    },
    filename: {
      type: DataTypes.STRING,
    },
    check: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  return File;
};
