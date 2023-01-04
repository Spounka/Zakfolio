import project from './types';
import { v4 as uuidv4 } from 'uuid';

export const projects: project[] = [
    {
        id: uuidv4(),
        title: 'fast shipping',
        image: '/projects/fast/com on pic.png',
        presentations: [
            '/projects/fast/logo on picture.png',
            '/projects/fast/blue on white.png',
            '/projects/fast/logo tracing.png',
            '/projects/fast/box mockup.png',
            '/projects/fast/business card mockup.png',
            '/projects/fast/truck mockup.png',
            '/projects/fast/container mockup.png',
            '/projects/fast/font presentation.png',
            '/projects/fast/description poster.png',
        ],
    },
    {
        id: uuidv4(),
        title: 'torch',
        image: '/projects/torch/logo on picture.png',
        presentations: [
            '/projects/torch/logo on white bg.png',
            '/projects/torch/double switched colors.png',
            '/projects/torch/Candle Glass Jar Mockup.png',
            '/projects/torch/three candles.png',
            '/projects/torch/more candles.png',
            '/projects/torch/business card mockup.png',
            '/projects/torch/color palette.png',
            '/projects/torch/font.png',
        ],
    },
    {
        id: uuidv4(),
        title: 'oni',
        image: '/projects/oni/oni.png',
        presentations: [
            '/projects/oni/oni mockup.png'
        ],
    },
    {
        id: uuidv4(),
        title: 'pediatrician',
        image: '/projects/pedia/cabinet 1.png',
        presentations: [
            '/projects/pedia/cabinet 2.png',
            '/projects/pedia/cabinet 3.png',
            '/projects/pedia/cabinet 4.png'
        ],
    },
];
