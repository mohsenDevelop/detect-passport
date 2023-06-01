import { useState } from 'react';
import Stack from '@mui/material/Stack';

import UploadImage from './components/UploadImage';
import { colorPalette } from '@uiKits/colors';

const HomePage = () => {

    const [img, setImg] = useState<File | null>(null);

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
            </Stack>
        </Stack>
    );
};

export default HomePage;