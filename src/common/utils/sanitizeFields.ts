// @ts-ignore
export const sanitizeFields = (fields: any, keys: string[]) => {
  if (Array.isArray(fields)) {
    for (let i = 0; i < fields.length; i++) {
      for (let key of keys) {
        delete fields[i][key];
      }
    }
  } else {
    for (let key of keys) {
      delete fields[key];
    }
  }
  return fields;
};
