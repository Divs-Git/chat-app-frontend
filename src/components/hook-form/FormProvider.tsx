import { FormEvent, ReactNode } from 'react';
import {
  FormProvider as RHFFormProvider,
  UseFormReturn,
} from 'react-hook-form';

interface FormProviderProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: FormProviderProps) {
  return (
    <RHFFormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </RHFFormProvider>
  );
}
