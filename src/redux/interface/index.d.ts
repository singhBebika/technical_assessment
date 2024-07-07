interface SpellObject {
  index: string;
  name: string;
  level: string;
}
export interface Spell {
  count?: number | null;
  results?: SpellObject[];
}

export interface SpellState {
  spells: Spell;
  loading: boolean;
  error: string | null;
}
