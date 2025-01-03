import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { Button, Stack } from '@mui/material';
import RHFCodes from '../../components/hook-form/RHFCodes';
import { VerifyEmail } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../types/authTypes';

export default function VerifyForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { email } = useSelector((state: RootState) => state.auth);

  const verifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required('Code is Required'),
    code2: Yup.string().required('Code is Required'),
    code3: Yup.string().required('Code is Required'),
    code4: Yup.string().required('Code is Required'),
    code5: Yup.string().required('Code is Required'),
    code6: Yup.string().required('Code is Required'),
  });

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  };

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(verifyCodeSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    try {
      // TODO: Implement verify code logic
      dispatch(
        VerifyEmail({
          email,
          otp: `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {/* Custom OTP input */}

          <RHFCodes
            keyName='code'
            inputs={['code1', 'code2', 'code3', 'code4', 'code5', 'code6']}
          />
          <Button
            fullWidth
            color='inherit'
            size='large'
            type='submit'
            variant='contained'
            sx={{
              bgcolor: 'text.primary',
              color: 'white',
              '&:hover': { bgcolor: 'text.secondary' },
            }}
          >
            Verify
          </Button>
        </Stack>
      </FormProvider>
    </>
  );
}
