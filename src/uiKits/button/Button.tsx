import { styled } from '@mui/material/styles';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';

export interface ButtonProps {
    backgroundColor?: string,
    LabelColor?: string,
    borderColor?: string,
    borderWidth?: string,
}

export const Button = styled(LoadingButton, {
    shouldForwardProp: (prop) =>
        prop !== 'backgroundColor' && prop !== 'LabelColor' && prop !== 'borderColor' && prop !== 'borderWidth',
})<ButtonProps & LoadingButtonProps>(({ backgroundColor, LabelColor, borderColor, borderWidth }) => ({
    backgroundColor,
    color: LabelColor,
    borderColor,
    height: 44,
    borderRadius: 130,
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'inherit',
    boxShadow: 'none',
    borderWidth,
    '&:hover': {
        backgroundColor,
        borderColor,
        boxShadow: 'none',
        borderWidth
    },

}));