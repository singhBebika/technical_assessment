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
  isLoading: boolean;
  error: string | null;
}

export interface SpellDescription {
  name?: string;
  desc?: string[];
  higher_level?: string[];
  range?: string;
  components?: string[];
  material?: string;
  ritual?: boolean;
  duration?: string;
  concentration?: boolean;
  casting_time?: string;
  level?: number;
  attack_type?: string;
}

export interface SpellDecriptionState {
  singleSpell: SpellDescription;
  isLoading: boolean;
  error: string | null;
}
