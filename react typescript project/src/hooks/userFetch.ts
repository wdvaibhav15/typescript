import { useEffect, useState } from "react";


interface FetchState<T> {
    data: T | null;
    leading: boolean;
    error: string | null;
}

export function useFetch<T>(url:string): FetchState<T> {
    const [ state, setState] = useState<FetchState<T>>({
        data: null,
        leading: true,
        error: null
    });

    //useEffect to make fetch request

    return state;
}