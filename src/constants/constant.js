const buildCustomQuery = (search) => {
  const fieldName = Object.keys(search)[0];
  const filterName = Object.keys(search[fieldName])[0];
  const fieldValue = search[fieldName][filterName];
  const regex = {};
  const query = {};
  if (fieldName !== 'status') {
    regex.$regex = `.*${fieldValue}.*`;
    query[fieldName] = regex;
    return query;
  }
  query[fieldName] = fieldValue;
  return query;
};

export default buildCustomQuery;
