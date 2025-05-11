export interface StoreState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
}

export interface InputProps {
  type: string;
  className: string;
  value: number | string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export interface InvoiceProps {
  id: string;
}
