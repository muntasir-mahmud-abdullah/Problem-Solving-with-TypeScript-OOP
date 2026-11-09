# Type Narrowing in TypeScript

**Type narrowing** is the process of refining a broad type into a more specific type based on runtime checks. It allows TypeScript to understand which type a variable represents without requiring manual type casting.

## 1. Narrowing with Discriminated Unions

A common technique is using a shared literal property (discriminant) to distinguish between object types.

```ts
type WitcherCharacter = {
  type: "witcher";
  name: string;
  magicPower: boolean;
};

type StarWarsCharacter = {
  type: "star-wars";
  name: string;
  forceSensitive: boolean;
};

type Character = WitcherCharacter | StarWarsCharacter;
```

```ts
function fight(player1: Character, player2: Character) {
  if (player1.type === "witcher" && player2.type === "witcher") {
    fightWitcher(player1, player2);
  } else if (
    player1.type === "star-wars" &&
    player2.type === "star-wars"
  ) {
    fightStarWars(player1, player2);
  } else {
    throw new Error("Can't fight characters from different universes");
  }
}
```

TypeScript automatically narrows both players to the appropriate type based on the `type` property. No type assertion is needed.

## 2. `any` vs `unknown`

- `any`: Allows any operation and assignment without type checking. Less safe.
- `unknown`: Accepts any value, but requires type checking or narrowing before performing operations.

**Prefer `unknown` over `any`** when the data type is not known.

## 3. Type Hierarchy: `any`, `unknown`, and `never`

- `unknown`: Top type; accepts values of all types.
- `any`: Opts out of normal type checking.
- `never`: Bottom type; represents values that cannot occur.

`null` and `undefined` are assignable to `void` under TypeScript's standard type rules, but `void` is not assignable to them.

## 4. Other Type Narrowing Techniques

- **`typeof`**: Checks primitive types.
- **`instanceof`**: Checks class instances.
- **`in` operator**: Checks whether an object contains a property.
- **Equality checks**: Compare values to narrow literal types.
- **Type assertions (`as`)**: Tell TypeScript to treat a value as a specific type. They do not perform runtime validation.

**Key takeaway:** Type narrowing makes TypeScript code safer by refining types through conditions and runtime checks instead of relying on unnecessary type assertions.