# Type vs Interface in TypeScript

TypeScript provides two ways to define object structures: `type` aliases and `interface` declarations. Both can describe object shapes, but they have some important differences.

## 1. Basic Syntax

Both can define the same object structure.

```ts
type Superhero = {
  name: string;
  powers: string[];
  isAvenger: boolean;
};

interface Superhero {
  name: string;
  powers: string[];
  isAvenger: boolean;
}
```

## 2. Extending Object Structures

**Type uses intersection (`&`)** to combine existing types with additional properties.

```ts
type Character = {
  name: string;
  level: number;
};

type Wizard = Character & {
  spellbook: string[];
  mana: number;
};
```

**Interface uses `extends`** to inherit properties from another interface.

```ts
interface Character {
  name: string;
  level: number;
}

interface Wizard extends Character {
  spellbook: string[];
  mana: number;
}
```

## 3. Handling Property Conflicts

Interface extension rejects incompatible inherited properties.

```ts
interface Person {
  age: number;
}

// Error: incompatible property type
interface Employee extends Person {
  age: string;
}
```

Type intersections combine conflicting property types instead of overwriting them.

```ts
type Employee = { age: number } & { age: string };
// Result: age becomes never
```

## 4. Declaration Merging

Interfaces support **declaration merging**, allowing multiple declarations with the same name to combine.

```ts
interface Spaceship {
  name: string;
}

interface Spaceship {
  engines: number;
}
```

The resulting interface contains both properties.

Type aliases do not support declaration merging. Redeclaring the same type name causes a duplicate identifier error.

## 5. When to Use Which?

- **Interface:** Object contracts, inheritance, extensible structures, and declaration merging.
- **Type:** Unions, intersections, tuples, primitives, mapped types, and conditional types.

**Key takeaway:** Neither is universally better. Choose based on your requirements and the complexity of your type definitions.