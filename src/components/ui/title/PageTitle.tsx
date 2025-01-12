import { titleFont } from "@/config/fonts"

interface Props {
    title: string,
    subtitle?: string,
    className?: string,
}

export const PageTitle = ({title, subtitle, className}: Props) => {

    return (

        <div className={ `${className} mb-10` }>
        
        <h1 className={`${titleFont.className} font-semibold text-4xl py-4`}> 
            {title}
        </h1>
        
        {
            subtitle && (
                <h3 className="text-xl mb-5">
                    {subtitle}
                </h3>
            )
        }



        </div>

    )

}