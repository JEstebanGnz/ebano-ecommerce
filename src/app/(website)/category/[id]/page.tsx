import { notFound } from "next/navigation"

interface Props {
    params:{
        id: string
    }
}

export default function Page({params}: Props){

    const {id} = params;

    if ( id === 'services'){
        notFound();
    }

    return (
        <div className="ml-2 mx-1"> {id}</div>
    )
}