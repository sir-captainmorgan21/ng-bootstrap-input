export interface IMaskConfig {
    mask?: (string | RegExp)[] | ((rawValue: string) => string[] | false) | boolean;
    pipe?: ((conformedValue: string) => string) | boolean;
    guide?: boolean;
  }
