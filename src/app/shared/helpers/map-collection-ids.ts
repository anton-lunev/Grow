export const mapCollectionIds = arr => arr.map(({payload}) => ({id: payload.doc.id, ...payload.doc.data()}));
