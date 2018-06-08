export interface IMaskConfig {
    mask?: (string | RegExp)[] | ((rawValue: string) => string[] | false);
    pipe?: (conformedValue: string) => string;
    guide?: boolean;
  }
