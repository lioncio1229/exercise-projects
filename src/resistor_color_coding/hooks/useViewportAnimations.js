import { useState } from "react";


export default function useViewportAnimation(initialState='default')
{
    const [view, setView] = useState(initialState);

    const getAnimationClass = () => {
        switch (view) {
            case 'toMain':
                return  'to-main-animation';
            case 'toImg':
                return 'to-img-animation';
            case 'default':
                return '';
        }
    }

    return {view, setView, getAnimationClass};
}