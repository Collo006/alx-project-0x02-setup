import { CardProps } from "@/interfaces"

const Card: React.FC<CardProps> = ({title,content}) =>{
    return(
       <div>
        <p>This {title}</p>
        <p>This {content}</p>
       </div> 
    )
}
export default Card;