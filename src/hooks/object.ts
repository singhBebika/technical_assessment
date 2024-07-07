export function removeFalsyKeys<T extends object>(obj: T) {
  return (Object.keys(obj) as (keyof T)[]).reduce((acc, curr) => {
    if (obj[curr]) acc[curr] = obj[curr];
    return acc;
  }, {} as T);
}
