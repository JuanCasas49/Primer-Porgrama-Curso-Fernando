import {useState} from 'react'
import { AñadirCategoria, GifGrid} from './componentes'

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory =(newCategory)=>{
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return(
        <>
        <h1>GifExpertApp</h1>

        <AñadirCategoria onNewCategory={(value)=>onAddCategory(value)}/>

            {categories.map(category=>(
                <GifGrid 
                key={category} 
                category={category}/>
                )
            )
            }
        </>
    );
}