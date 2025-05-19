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
  type?: string;
  className?: string;
  value?: any;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  id?: string;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}
export interface PaymentTermsDropdownProps {
  value?: string;
  onChange?: (value: string) => void;
}
export interface CalendarDemoProps {
  date: Date | undefined;
  onChange: (date: Date | undefined) => void;
}
export interface OnDiscardProps {
  onDiscard: () => void;
  onClose: () => void;
}
