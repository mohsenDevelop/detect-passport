import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tesseract from 'tesseract.js';

import { colorPalette } from '@uiKits/colors';
import { Button } from '@uiKits/button/Button';
import UploadImage from './components/UploadImage';

const HomePage = () => {

    const [img, setImg] = useState<File | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const [text, setText] = useState('');

    const handleSubmit = () => {

        Tesseract.recognize(URL.createObjectURL(img as File), 'eng', {
            logger: (m: { progress: number, status: string }) => {
                console.log({ m });
                if (m.status === 'recognizing text') {
                    setProgress(m.progress * 100);
                }
            },
        })
            .catch((err) => {
                console.error(err);
            })
            .then((result: any) => {
                setText(result.data.text);
            });
    };

    return (
        <Stack
            alignItems={'center'}
            pt={'80px'}
        >
            <Stack
                width={620}
                bgcolor={colorPalette.white}
                borderRadius={'20px'}
                p={'37px'}
            >
                <UploadImage
                    img={img}
                    onUploaded={(_file: File) => setImg(_file)}
                    onRemove={() => setImg(null)}
                />

                <Typography
                    fontSize={14}
                    fontWeight={500}
                    pt={'60px'}
                    pb={'10px'}
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1);'}
                >
                    {`Passport Number: ${'14141'}`}
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    py={'16px'}
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1);'}
                >
                    {`Country: ${'14141'}`}
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    py={'16px'}
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1);'}
                >
                    {`Gender: ${'14141'}`}
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    py={'8px'}
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1);'}
                >
                    {`First Name: ${'14141'}`}
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    py={'16px'}
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1);'}
                >
                    {`Last Name: ${'14141'}`}
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    py={'16px'}
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1);'}
                >
                    {`Father Name: ${'14141'}`}
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    py={'16px'}
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1);'}
                >
                    {`BirthDate: ${'14141'}`}
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    py={'16px'}
                    borderBottom={'1px solid rgba(0, 0, 0, 0.1);'}
                >
                    {`Date of issue: ${'14141'}`}
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={500}
                    py={'16px'}
                >
                    {`Date of expire: ${'14141'}`}
                </Typography>

                <Button
                    variant={'contained'}
                    type={'button'}
                    backgroundColor={colorPalette.purple}
                    LabelColor={colorPalette.white}
                    fullWidth={true}
                    onClick={progress > 0 && progress < 100 ? () => { return; } : handleSubmit}
                    sx={{
                        fontSize: 16,
                        fontWeight: 700,
                        mt: '32px'
                    }}
                >
                    {progress > 0 && progress < 100 ? `Convering : ${parseInt(progress.toString())}%` : 'Start To Convert'}
                </Button>

            </Stack>
        </Stack>
    );
};

export default HomePage;