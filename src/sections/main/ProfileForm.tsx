import { useCallback } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { useForm } from 'react-hook-form';
import { Alert, Button, Stack } from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';

export default function ProfileForm() {
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    about: Yup.string().required('About is required'),
    avatarURL: Yup.string().url('Avatar URL must be a valid URL').nullable(),
  });

  const defaultValues = {
    name: '',
    about: '',
    avatarURL: '',
  };

  type FormValues = {
    name: string;
    about: string;
    avatarURL?: string | null | undefined;
    afterSubmit?: string;
  };

  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(ProfileSchema),
  });

  const {
    reset,
    watch,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('avatarURL', newFile.preview, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data: FormValues) => {
    try {
      // submit data to server
      console.log(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        reset();
        setError('afterSubmit', { type: 'manual', message: error.message });
      } else {
        console.log('An unknown error occurred');
        reset();
        setError('afterSubmit', {
          type: 'manual',
          message: 'An unknown error occurred',
        });
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity='error'>{errors.afterSubmit.message}</Alert>
          )}
          <RHFTextField
            name='name'
            label='Name'
            helperText={'This name is visible to your contacts.'}
          />
          <RHFTextField multiline maxrow={5} name='about' label='About' />
        </Stack>
        <Stack
          direction={'row'}
          spacing={2}
          alignItems={'center'}
          justifyContent={'flex-end'}
        >
          <Button color='primary' size='large' type='submit' variant='outlined'>
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
