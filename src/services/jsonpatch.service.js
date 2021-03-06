import jsonpatch from 'fast-json-patch';

class JsonPatchService {
  static applyPatch(document, patch) {
    const jsonDocument = JSON.parse(document);
    const documentPatch = JSON.parse(patch);

    return jsonpatch.applyPatch(jsonDocument, documentPatch).newDocument;
  }
}

export default JsonPatchService;
