const { convertFromRaw } = require("draft-js");

function getDefaultContent() {
  const rawContent = {
    blocks: [
      {
        text:
          'This is an "immutable" entity: Superman. Deleting any ' +
          "characters will delete the entire entity. Adding characters " +
          "will remove the entity from the range.",
        type: "unstyled",
        entityRanges: [{ offset: 31, length: 8, key: "1" }]
      }
    ],
    entityMap: {
      "1": {
        type: "TOKEN",
        mutability: "IMMUTABLE"
      }
    }
  };

  return convertFromRaw(rawContent);
}

module.exports = getDefaultContent;
