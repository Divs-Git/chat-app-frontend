import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import RHFTextField from '../../components/hook-form/RHFTextField';
import { useForm } from 'react-hook-form';
import RHFAutoComplete from '../../components/hook-form/RHFAutoComplete';

interface DialogProps {
  open: boolean;
  handleClose: () => void;
}

const Transition = forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement }
>(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const MEMBERS = [
  'name1',
  'name2',
  'name3',
  'name4',
  'name5',
  'name6',
  'name7',
  'name8',
  'name9',
  'name10',
];
function CreateGroupForm({ handleClose }: DialogProps) {
  const newGroupSchema = Yup.object().shape({
    groupName: Yup.string().required('Group name is required'),
    members: Yup.array().min(2, 'Must have atleast two members').required(),
  });

  const defaultValues = {
    groupName: '',
    members: [],
  };

  type FormValues = {
    groupName: string;
    members: string[];
    afterSubmit?: string;
  };

  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(newGroupSchema),
  });

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;

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
        console.error('Unknown error occured');
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack mt={3} spacing={3}>
        <RHFTextField name='groupName' label='Group Name' />
        <RHFAutoComplete
          name='members'
          label='Members'
          multiple
          freeSolo
          ChipProps={{ size: 'medium' }}
          options={MEMBERS.map((option) => option)}
        />
        <Stack
          spacing={2}
          direction={'row'}
          justifyContent={'flex-end'}
          alignItems={'center'}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' variant='contained'>
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

export default function CreateGroup({ open, handleClose }: DialogProps) {
  return (
    <Dialog
      fullWidth
      maxWidth={'xs'}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
    >
      <DialogTitle>Create New Group</DialogTitle>
      <DialogContent>
        {/* Form */}
        <CreateGroupForm open={open} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
