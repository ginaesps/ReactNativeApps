import {useEffect, useState, useRef} from "react";

export const useFetch = url => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({data:null, loading:true});//this hook will store info

    useEffect(() => {
        return () => {
            //called when the component is going to unmount
            isCurrent.current = false;
        };
    }, []);

    useEffect(() => {
        setState(state => ({ data: state.data, loading:true}));
        //setState adjustment was made so that the text would change in a smoother way
        fetch(url)
            .then(x => x.text())
            .then(y => {
                setState({data: y, loading:false})
            });
    }, [url, setState]);

    return state;
};