export function LogAddition(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Todo hozzáadva:`, args[0]);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}
