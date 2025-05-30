import { FormikProps } from "formik";
export interface StoreState {
  isDarkMode: boolean;
  toggleTheme: () => void;

  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
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

export interface InvoiceProps {
  id?: string;
  paymentDue?: string;
  clientName?: string;
  total?: number;
  status?: string;
  key?: string;
  description?: string;
  senderAddress?: {
    street?: string
    city?: string;
    postCode?: string;
    country?: string;
  };
  createdAt?: string;
  clientAddress?: {
    street?: string;
    city?: string;
    postCode?: string;
    country?: string;
  };
  clientEmail?: string;
  items?: Item[]
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
  name: string;
  quantity: number;
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

export interface userType {
  id: string;
  name: string;
  email: string;
}
