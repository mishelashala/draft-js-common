function getEntityFromContent(contentState, key) {
  let entityRange = null;

  contentState.getBlockMap().map(contentBlock => {
    contentBlock.findEntityRanges(
      character => {
        const entityKey = character.getEntity();

        if (!entityKey) {
          return false;
        }

        return key === entityKey;
      },
      (start, end) => {
        entityRange = { start, end, key };
      }
    );
  });

  return entityRange;
}

module.exports = getEntityFromContent;
