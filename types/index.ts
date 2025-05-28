import { FormikProps } from "formik";
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

export interface invoiceProps {
  id: string;
  paymentDue: string;
  clientName: string;
  price: number;
  status: string;
  key: string;
}

export interface InvoiceStatusProps {
  status?: string;
  isDarkMode: boolean;
}

export interface FilterDropdownProps {
  selectedStatus: string | null;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string | null>>;
}
export interface Item {
  itemName: string;
  qty: string | number;
  price: string | number;
  total: string | number;
}

export interface InvoiceFormValues {
  email: string;
  senderAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientName: string;
  clientAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: string;
  description: string;
  paymentTerms: string;
  items: Item[];
}
export interface ItemsListSectionProps {
  formik: FormikProps<InvoiceFormValues>;
  index: number;
  removeElement?: () => void;
}
export interface BillFromSectionProps {
  formik: FormikProps<InvoiceFormValues>;
}
export interface DateAndDescribtionSectionProps {
  formik: FormikProps<InvoiceFormValues>;
}
export interface BillToSectionProps {
  formik: FormikProps<InvoiceFormValues>;
}
