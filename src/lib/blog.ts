export function getStandardBlogType(type: string) {
  if (!type) {
    return '';
  }

  const splited = type.split(' ');
  if (splited.length > 1) {
    return type.split(' ').join('-');
  }

  return type;
}

// - 转化为空格
export function getDbBlogType(type: string | undefined) {
  if (!type) {
    return '';
  }

  const splited = type.split('-');
  if (splited.length > 1) {
    return type.split('-').join(' ');
  }

  return type;
}
