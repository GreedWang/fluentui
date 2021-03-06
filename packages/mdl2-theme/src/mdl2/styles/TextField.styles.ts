import { ITextFieldStyleProps, ITextFieldStyles } from '@fluentui/react/lib/TextField';

export const TextFieldStyles = (props: ITextFieldStyleProps): Partial<ITextFieldStyles> => {
  const { multiline } = props;

  return {
    field: {
      padding: !multiline ? '0 12px' : '6px 8px',
    },
  };
};
