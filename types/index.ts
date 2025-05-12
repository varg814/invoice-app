export interface StoreState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export interface InputProps {
  type: string;
  className?: string;
  value?: any;
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  id: string;
}

export interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}
