export type ButtonType =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "gray"
  | "info";

export interface IButton {
  text: string;
  onClick: () => void | ((id: number) => void);
  type?: ButtonType;
  disabled?: boolean;
}
