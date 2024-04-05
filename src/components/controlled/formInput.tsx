import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input, InputProps } from '@/components/ui/input';

type FormInputProps = {
  name: string;
  defaultValue?: string | number;
  label?: string;
  description?: string;
} & InputProps;

export default function FormInput({
  defaultValue = '',
  name = '',
  label = '',
  description = '',
  ...rest
}: FormInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...rest} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
