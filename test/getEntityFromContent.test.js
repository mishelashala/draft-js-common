const tap = require("tap");
const { EditorState, convertFromRaw, convertToRaw } = require("draft-js");
const { getEntityFromContent } = require("../src/");
const getDefaultContent = require("./getDefaultContent");

const editorState = EditorState.createWithContent(getDefaultContent());
const contentState = editorState.getCurrentContent();
const entity = getEntityFromContent(contentState, "1");

tap.same(entity, { start: 31, end: 39, key: "1" });

const nullEntity = getEntityFromContent(contentState, "2");
tap.equals(nullEntity, null);
